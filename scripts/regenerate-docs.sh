#!/usr/bin/env bash
# End-to-end wrapper: clone sources + generate docs/ snapshot.
#
# Runs in order:
#   1. scripts/clone-babylonjs-source.sh   (Babylon.js monorepo at tag)
#   2. scripts/clone-babylonjs-docs.sh     (Documentation repo)
#   3. scripts/generate-docs-for-mcp.sh    (TypeDoc + copy -> docs/)
#   4. npm run lint && npm run smoke       (validate the result)
#
# Intermediate repos (babylonjs-source/, babylonjs-docs/) are kept so you can
# re-run step 3 without re-cloning. Remove them manually when you're done:
#   rm -rf babylonjs-source babylonjs-docs
#
# Usage:
#   bash scripts/regenerate-docs.sh           # full pipeline + validation
#   bash scripts/regenerate-docs.sh --no-lint # skip lint/smoke (faster)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

RUN_LINT=1
if [ "${1:-}" = "--no-lint" ]; then
    RUN_LINT=0
fi

echo "### Step 1/3: Clone BabylonJS source"
bash "$SCRIPT_DIR/clone-babylonjs-source.sh"

echo ""
echo "### Step 2/3: Clone BabylonJS documentation"
bash "$SCRIPT_DIR/clone-babylonjs-docs.sh"

echo ""
echo "### Step 3/3: Generate docs/ snapshot"
bash "$SCRIPT_DIR/generate-docs-for-mcp.sh"

if [ "$RUN_LINT" = "1" ]; then
    echo ""
    echo "### Validating (lint + smoke)..."
    cd "$PROJECT_ROOT"
    npm run lint
    npm run smoke
    echo ""
    echo "### All checks passed. Review 'git status docs/' and commit."
else
    echo ""
    echo "### Skipped lint/smoke (--no-lint)."
fi
