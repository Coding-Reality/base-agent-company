# Contributing

Thanks for contributing to `base-agent-company`.

This repository is a framework for running a company as folders, prompts, policies, and role-local artifacts. Changes are easiest to review when they stay small and preserve the file-based operating model.

## Before you change anything

1. Read [README.md](./README.md) for the public entry point.
2. Read [COMPANY.md](./COMPANY.md) for the repo structure.
3. Read [shared/policies/operating-rules.md](./shared/policies/operating-rules.md) and [shared/policies/file-conventions.md](./shared/policies/file-conventions.md).

## Contribution guidelines

- Keep edits narrow and explain the reason for the change.
- Prefer updates that improve clarity, reliability, and operating cadence.
- Preserve datetime-stamped report and task history instead of overwriting it.
- Avoid introducing heavyweight process or tooling unless the repository already depends on it.
- Keep public documentation safe for external readers; do not commit local filesystem links.

## Pull request expectations

- Describe the problem being solved.
- Summarize the user-visible or operator-visible change.
- Note any follow-up work that is intentionally out of scope.
- Include example paths or commands when documentation changes would otherwise be ambiguous.

## Repo shape

Important top-level areas:

- `board/`: board-level roles
- `departments/`: operating roles
- `executive/`: CEO and executive coordination
- `shared/`: policies, dashboards, templates, and company data
- `scripts/`: bootstrap and runtime helper scripts
- `pm2/`: scheduler configuration

## Reporting bugs or proposing improvements

- Open an issue with the current behavior, expected behavior, and affected files.
- If the change affects role coordination, include which role folders and shared docs are involved.
- If the change is a process proposal, prefer the minimum viable process that resolves the failure mode.
