#!/bin/sh
set -e

echo "Waiting for Convex backend to be ready..."
until wget --quiet --tries=1 --spider http://backend:3210/version 2>/dev/null; do
  sleep 1
done

echo "Backend is ready. Generating admin key..."
# Use docker exec to run generate_admin_key.sh in the backend container
ADMIN_KEY=$(docker exec ekklipse-convex-backend ./generate_admin_key.sh 2>/dev/null | tail -1 | tr -d '\r\n')

if [ -z "$ADMIN_KEY" ]; then
  echo "Failed to generate admin key. Trying alternative method..."
  exit 1
fi

echo "Admin key generated: ${ADMIN_KEY:0:20}..."

echo "Deploying Convex functions..."
# Convex deploy must be run from project root, not from convex directory
cd /app
CONVEX_SELF_HOSTED_URL=http://backend:3210 CONVEX_SELF_HOSTED_ADMIN_KEY="$ADMIN_KEY" npx convex deploy --yes

echo "Convex functions deployed successfully!"
