#!/usr/bin/env bash
# Smoke tests for docker scripts. Not discovered by miso (_ prefix).
# Run from project root: bash scripts/docker/_smoke.sh
set -euo pipefail

IMAGE="${DOCKER_IMAGE:-ekkolyth/ekklipse}"
TAG="${DOCKER_TAG:-dev}"

echo "=== Smoke: miso docker/build (from project root) ==="
miso docker/build
if ! docker image inspect "${IMAGE}:${TAG}" >/dev/null 2>&1; then
  echo "FAIL: Image ${IMAGE}:${TAG} not found after build" >&2
  exit 1
fi
echo "OK: Image exists"

echo ""
echo "=== Smoke: miso docker/deploy without CONVEX_SELF_HOSTED_ADMIN_KEY (expect exit 1) ==="
unset CONVEX_SELF_HOSTED_ADMIN_KEY
exitcode=0
err=$(miso docker/deploy 2>&1) || exitcode=$?
if [ "$exitcode" -eq 0 ]; then
  echo "FAIL: Expected exit 1 when key is unset" >&2
  exit 1
fi
if [[ "$err" != *"CONVEX_SELF_HOSTED_ADMIN_KEY"* ]] && [[ "$err" != *"miso docker/setup"* ]]; then
  echo "FAIL: Expected error message to mention CONVEX_SELF_HOSTED_ADMIN_KEY or miso docker/setup" >&2
  echo "Got: $err" >&2
  exit 1
fi
echo "OK: deploy without key exits 1 with expected error"

echo ""
echo "=== Smoke tests passed ==="
