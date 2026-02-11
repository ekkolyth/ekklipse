#!/usr/bin/env bash
set -euo pipefail
echo "$DOCKERHUB_TOKEN" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin
docker pull ekkolyth/ekklipse:latest 2>/dev/null || true
EXISTING=$(docker inspect --format '{{ index .Config.Labels "org.opencontainers.image.version" }}' ekkolyth/ekklipse:latest 2>/dev/null || echo "")
if [ "$EXISTING" = "$VERSION" ]; then
  echo "skip_build=true" >> "$GITHUB_OUTPUT"
else
  echo "skip_build=false" >> "$GITHUB_OUTPUT"
fi
