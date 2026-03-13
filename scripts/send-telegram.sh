#!/usr/bin/env bash
# Send a message to a Telegram bot chat.
#
# Usage:
#   send-telegram.sh <message>
#   echo "multi-line body" | send-telegram.sh -
#
# Requires env vars:
#   TELEGRAM_BOT_TOKEN   – Bot API token from @BotFather
#   TELEGRAM_CHAT_ID     – Target chat/group ID
#
# Exit codes:
#   0  success
#   1  missing config or bad args
#   2  Telegram API error
set -euo pipefail

if [[ -z "${TELEGRAM_BOT_TOKEN:-}" || -z "${TELEGRAM_CHAT_ID:-}" ]]; then
  echo "error: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be set" >&2
  exit 1
fi

if [[ $# -lt 1 ]]; then
  echo "usage: send-telegram.sh <message | ->" >&2
  exit 1
fi

if [[ "$1" == "-" ]]; then
  MSG="$(cat)"
else
  MSG="$*"
fi

if [[ -z "$MSG" ]]; then
  echo "error: empty message, nothing to send" >&2
  exit 1
fi

# Truncate to Telegram's 4096 char limit for text messages
if [[ ${#MSG} -gt 4096 ]]; then
  MSG="${MSG:0:4080}

[truncated]"
fi

API_URL="https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage"

RESPONSE=$(curl -sf -X POST "$API_URL" \
  -d chat_id="$TELEGRAM_CHAT_ID" \
  -d parse_mode="Markdown" \
  --data-urlencode text="$MSG" 2>&1) || {
  echo "error: Telegram API call failed" >&2
  echo "$RESPONSE" >&2
  exit 2
}

# Verify the API returned ok=true
if ! echo "$RESPONSE" | grep -q '"ok":true'; then
  echo "error: Telegram API returned failure" >&2
  echo "$RESPONSE" >&2
  exit 2
fi
