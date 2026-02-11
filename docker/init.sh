#!/bin/bash
set -e

# Create data directories
export DATA_DIR=/convex/data
export TMPDIR=${TMPDIR:-"$DATA_DIR/tmp"}
export STORAGE_DIR=${STORAGE_DIR:-"$DATA_DIR/storage"}
export SQLITE_DB=${SQLITE_DB:-"$DATA_DIR/db.sqlite3"}
mkdir -p "$TMPDIR" "$STORAGE_DIR"

# Read or generate credentials (this sets INSTANCE_SECRET and INSTANCE_NAME)
cd /convex
. ./read_credentials.sh
cd /app

# Generate admin key
echo "Generating admin key..."
cd /convex
ADMIN_KEY=$(./generate_admin_key.sh 2>/dev/null | tail -1 | tr -d '\r\n')
cd /app
export CONVEX_SELF_HOSTED_ADMIN_KEY="$ADMIN_KEY"
export CONVEX_SELF_HOSTED_URL=http://localhost:3210

echo "Starting Convex backend..."
# Start Convex backend in background
cd /convex
./convex-local-backend \
  --instance-name "$INSTANCE_NAME" \
  --instance-secret "$INSTANCE_SECRET" \
  --port 3210 \
  --site-proxy-port 3211 \
  --convex-origin "http://127.0.0.1:3210" \
  --convex-site "http://127.0.0.1:3211" \
  --beacon-tag "self-hosted-docker" \
  --local-storage "$STORAGE_DIR" \
  "$SQLITE_DB" \
  > /tmp/convex.log 2>&1 &
cd /app
CONVEX_PID=$!

echo "Waiting for Convex backend to be ready..."

TIMEOUT=60
ELAPSED=0
while [ $ELAPSED -lt $TIMEOUT ]; do
  if curl -sf http://localhost:3210/version > /dev/null 2>&1; then
    echo "Backend is ready!"
    break
  fi
  sleep 1
  ELAPSED=$((ELAPSED + 1))
done

if [ $ELAPSED -ge $TIMEOUT ]; then
  echo "ERROR: Convex backend failed to start within $TIMEOUT seconds"
  echo "Backend logs:"
  cat /tmp/convex.log || true
  exit 1
fi

echo "Deploying Convex functions..."

cd /app
CONVEX_SELF_HOSTED_URL=http://localhost:3210 CONVEX_SELF_HOSTED_ADMIN_KEY="$ADMIN_KEY" npx convex deploy --yes || true

echo "Writing runtime config..."
# Derive API URL from user-facing env: default = host:port; custom APP_URL = path-based /api
APP_URL="${APP_URL:-http://localhost}"
APP_URL_NORMALIZED="${APP_URL%/}"
if [ "$APP_URL_NORMALIZED" = "http://localhost" ] || [ "$APP_URL_NORMALIZED" = "http://127.0.0.1" ]; then
  CONVEX_URL="${APP_URL_NORMALIZED}:${API_PORT:-3210}"
else
  CONVEX_URL="${APP_URL_NORMALIZED}/api"
fi
echo "{\"convexUrl\": \"$CONVEX_URL\"}" > dist/config.json
# Inject into convex-config.js so the URL is available before any app code runs (works with any image)
CONVEX_URL_ESCAPED=$(printf '%s' "$CONVEX_URL" | sed 's/\\/\\\\/g; s/"/\\"/g')
echo "window.__CONVEX_URL__=\"$CONVEX_URL_ESCAPED\";" > dist/convex-config.js
# Cache-bust so the browser never uses a cached empty convex-config.js
sed -i "s|__CONVEX_CONFIG_QUERY__|?v=$(date +%s)|g" dist/index.html

echo "---"
echo "Web UI:  ${APP_URL_NORMALIZED}:${WEBUI_PORT:-3000}"
echo "API:     $CONVEX_URL"
echo "---"

echo "Starting frontend server..."
# Start frontend server
# Keep Convex backend running in background
exec serve -s dist -l 3000
