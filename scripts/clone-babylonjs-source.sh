#!/usr/bin/env bash
# Clone the BabylonJS source monorepo at the version matching this MCP package.
#
# The BabylonJS version is derived from THIS package's version
# (e.g. "9.13.0-mcp.1" -> "9.13.0"), since babylonjs-docs-mcp does not declare
# @babylonjs/core as a dependency.
set -euo pipefail

REPO_URL="https://github.com/BabylonJS/Babylon.js.git"
TARGET_DIR="babylonjs-source"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CLONE_PATH="$PROJECT_ROOT/$TARGET_DIR"

VERSION=$(node -e "
  const pkg = require('$PROJECT_ROOT/package.json');
  // \"9.13.0-mcp.1\" -> \"9.13.0\"
  const v = (pkg.version || '').split('-')[0];
  if (!v) { console.error('No version found in package.json'); process.exit(1); }
  console.log(v);
")

echo "BabylonJS version: $VERSION"

if [ -d "$CLONE_PATH" ]; then
  echo "Directory $TARGET_DIR already exists. Fetching and checking out tag $VERSION..."
  git -C "$CLONE_PATH" fetch --tags
else
  echo "Cloning BabylonJS repository..."
  git clone --no-tags "$REPO_URL" "$CLONE_PATH"
  git -C "$CLONE_PATH" fetch --tags
fi

TAG="refs/tags/$VERSION"
if ! git -C "$CLONE_PATH" tag -l "$VERSION" | grep -q "$VERSION"; then
  echo "Tag $VERSION not found. Available tags:"
  git -C "$CLONE_PATH" tag -l | tail -20
  exit 1
fi

git -C "$CLONE_PATH" checkout "$VERSION"
echo "Checked out BabylonJS source at tag $VERSION in $TARGET_DIR/"
