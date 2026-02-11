#!/usr/bin/env bash
set -euo pipefail

echo "Setting up Convex backend..."
cd docker && docker-compose up -d
echo "Waiting for backend to be ready..."
sleep 5
echo "Generating admin key..."
docker-compose exec -T app bash -c 'cd /convex && ./generate_admin_key.sh' > /tmp/convex_admin_key.txt 2>&1 || true
echo "Admin key generated. Check /tmp/convex_admin_key.txt"
echo "Add it to .env.local as CONVEX_SELF_HOSTED_ADMIN_KEY"
echo ""
echo "Then deploy functions with:"
echo "  miso docker/deploy"
echo "  (or: CONVEX_SELF_HOSTED_URL=http://localhost:3210 CONVEX_SELF_HOSTED_ADMIN_KEY=<key> npx convex deploy --prod)"
