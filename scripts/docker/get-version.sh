#!/usr/bin/env bash
set -euo pipefail
echo "version=$(jq -r .version package.json)" >> "$GITHUB_OUTPUT"
