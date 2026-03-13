#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cat <<EOF
Bootstrap complete for:
$ROOT

Next steps:
1. Ensure the \`codex\` CLI is installed and authenticated.
2. Start PM2 with:
   pm2 start $ROOT/pm2/ecosystem.config.cjs
3. Inspect logs with:
   pm2 logs board-chair
EOF
