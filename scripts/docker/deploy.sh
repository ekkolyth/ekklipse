#!/usr/bin/env bash
set -euo pipefail

if [ -z "${CONVEX_SELF_HOSTED_ADMIN_KEY:-}" ]; then
  echo "Error: CONVEX_SELF_HOSTED_ADMIN_KEY not set. Generate one with: miso docker/setup" >&2
  exit 1
fi

echo "Deploying Convex functions to Docker backend..."
CONVEX_SELF_HOSTED_URL=http://localhost:3210 CONVEX_SELF_HOSTED_ADMIN_KEY="$CONVEX_SELF_HOSTED_ADMIN_KEY" npx convex deploy --prod
