# Company

## Mission
Build a practical autonomous company that can create revenue-generating work, coordinate execution through files, and improve over time without requiring a traditional backend application.

## Operating Model
- Each role lives in its own folder.
- Each role folder contains `AGENTS.md`, `inbox/`, `outbox/`, `reports/`, and `memory/`.
- PM2 cron jobs launch Codex from each role folder.
- Agents inspect local and shared files, make decisions within scope, and write outputs back to the filesystem.
- Shared folders act as company infrastructure and the source of truth for strategy, pipeline, policies, and reusable templates.

## Phase 1 Roles
- `board/chair`
- `board/strategy-member`
- `executive/ceo`
- `departments/sales/manager`
- `departments/sales/outbound-1`
- `departments/marketing/manager`
- `departments/marketing/content`
- `departments/operations/manager`
- `departments/research/market-intel`
- `departments/finance/manager`

## Role Activation
Phase 1 folders and PM2 jobs are pre-created. The board chair and CEO should still behave as if they are staffing the company:

- activate dormant roles by issuing written priorities
- create hiring or expansion tasks for missing roles
- avoid inventing people or outputs that do not exist on disk

## Token Efficiency
Agents should not read the whole repo on every run.

Default read order:
1. local `AGENTS.md`
2. shared strategy and policy indexes
3. own `memory/current-focus.md`
4. newest files in `inbox/`, `outbox/`, and `reports/`
5. only the specific downstream or upstream folders needed for the current decision

Use file discovery before file reading:
- `rg --files`
- `find . -maxdepth 2 -type f | sort`
- `ls -t`

Prefer:
- current state files
- indexes
- latest dated reports

Avoid:
- rereading large historical archives
- loading every file in every department
- rewriting old reports

## Git Discipline
- Agents may commit and push their own work.
- Commit messages must use the prefix format `[agent-name]: summary`.
- Agents should commit only their intended changes and avoid unrelated churn from other roles.
- If the branch has moved and push is not clean, agents should report the issue and stop instead of force-pushing.

## Telegram Reporting
Every agent has access to a Telegram notification tool at `scripts/send-telegram.sh`.

### When to report

1. **After reading** — Once you have read your key files (AGENTS.md, current-focus, inbox, latest reports), send a concise Telegram message listing:
   - Your role name
   - The files you read and why
   - Your current focus or priority based on what you read

2. **After execution** — When your run is complete, send a final Telegram message summarizing:
   - Actions taken (files created, decisions made, delegations sent)
   - Blockers or escalations
   - What the next run should pick up

### How to call it
```bash
bash scripts/send-telegram.sh "Your message here"
```

### Rules
- Keep messages short — bullet points, not essays.
- If the tool fails (missing token, network error), continue your work. Notifications are best-effort.
- Do not send messages mid-run for every small action. Two messages per run: one after reading, one after execution.
