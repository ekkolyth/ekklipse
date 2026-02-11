#!/usr/bin/env bash
set -euo pipefail

# Pushes our built image (tagged as compare-local) to all tags in TAG_LIST.
# Called only when should_push is true.

TAG_LIST="${TAG_LIST:?TAG_LIST required}"
IMAGE="ekkolyth/ekklipse"

echo "$DOCKERHUB_TOKEN" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin

echo "$TAG_LIST" | while read -r tag; do
  [ -z "$tag" ] && continue
  docker tag "${IMAGE}:compare-local" "$tag"
  docker push "$tag"
  echo "Pushed $tag"
done
