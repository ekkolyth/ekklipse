#!/usr/bin/env bash
set -euo pipefail

if [ ! -f "docker/Dockerfile" ]; then
  echo "Error: Must run from project root directory" >&2
  exit 1
fi

echo "Building Image (frontend + backend)..."
docker build --platform linux/amd64 \
  --build-arg APP_URL="${APP_URL:-http://localhost}" \
  --build-arg API_PORT="${API_PORT:-3210}" \
  -f docker/Dockerfile \
  -t "${DOCKER_IMAGE:-ekkolyth/ekklipse}:${DOCKER_TAG:-dev}" .
