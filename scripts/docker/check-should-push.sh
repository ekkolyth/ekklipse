#!/usr/bin/env bash
set -euo pipefail

# Compares our locally-built image with the remote image.
# Outputs should_push=true if we need to push (image changed or remote doesn't exist).
# Outputs should_push=false if the images are identical.
#
# Usage: Pass COMPARE_TAG (e.g. "latest" or "dev") as env var.
# Our built image must already be loaded and tagged as ekkolyth/ekklipse:$COMPARE_TAG.
# We re-tag to avoid overwriting when we pull the remote.

COMPARE_TAG="${COMPARE_TAG:?COMPARE_TAG required}"
IMAGE="ekkolyth/ekklipse"

# Log in for pull/push
echo "$DOCKERHUB_TOKEN" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin

# Tag our built image so we don't lose it when pulling remote
docker tag "${IMAGE}:${COMPARE_TAG}" "${IMAGE}:compare-local"

# Pull remote (may fail if image doesn't exist yet)
if ! docker pull "${IMAGE}:${COMPARE_TAG}" 2>/dev/null; then
  echo "Remote image not found, will push"
  echo "should_push=true" >> "$GITHUB_OUTPUT"
  exit 0
fi

# Compare image content (config digest)
OUR_ID=$(docker image inspect "${IMAGE}:compare-local" --format '{{.Id}}')
REMOTE_ID=$(docker image inspect "${IMAGE}:${COMPARE_TAG}" --format '{{.Id}}')

if [ "$OUR_ID" = "$REMOTE_ID" ]; then
  echo "Image unchanged, skipping push"
  echo "should_push=false" >> "$GITHUB_OUTPUT"
else
  echo "Image changed, will push"
  echo "should_push=true" >> "$GITHUB_OUTPUT"
fi
