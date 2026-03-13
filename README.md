# agent-company

`agent-company` is a filesystem-based autonomous company experiment.

The company is represented as folders. Each role has an `AGENTS.md`, local `inbox/`, `outbox/`, `reports/`, and `memory/` directories, plus a PM2 cron entry that launches Codex from that role's folder.

This repository is intentionally not a normal application. The core system is:

- role prompts
- shared operating documents
- file-based coordination
- PM2 schedules
- lightweight runner scripts

## Start here

- [What the company is](./COMPANY.md)
- [How roles are expected to operate](./shared/policies/operating-rules.md)
- [How the scheduled runtime is wired](./pm2/ecosystem.config.cjs)
- [How to bootstrap a copy](./BOOTSTRAP.md)

## Public repo surfaces

- [Contributing guide](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)

If you are evaluating whether this framework is useful for your team, start with [COMPANY.md](./COMPANY.md). If you want to adapt or extend it, read [CONTRIBUTING.md](./CONTRIBUTING.md) next.
