#!/usr/bin/env bash
set -euo pipefail
if [ "$GITHUB_REF" = "refs/heads/dev" ]; then
  echo "tag_list<<EOF" >> "$GITHUB_OUTPUT"
  echo "ekkolyth/ekklipse:dev" >> "$GITHUB_OUTPUT"
  echo "EOF" >> "$GITHUB_OUTPUT"
else
  echo "tag_list<<EOF" >> "$GITHUB_OUTPUT"
  echo "ekkolyth/ekklipse:latest" >> "$GITHUB_OUTPUT"
  echo "ekkolyth/ekklipse:${VERSION}" >> "$GITHUB_OUTPUT"
  echo "EOF" >> "$GITHUB_OUTPUT"
fi
