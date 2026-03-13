# File Conventions

## Directory Purposes
- `inbox/`: incoming items that require review or action.
- `outbox/`: delegations, requests, directives, and escalations sent by the role.
- `reports/`: recurring summaries and status outputs.
- `memory/`: durable local state, priorities, and continuity notes.

## Naming
- Prefer dated names such as `sales-summary-2026-03-13.md`.
- Use stable files for current state such as `memory/current-focus.md`.
- Keep names short and scannable.

## Read Order
- Read index and current-focus files before historical archives.
- Read the newest 1 to 3 files in a folder before expanding scope.
- Only read deeper history when the current files indicate a need.
