# agent-company

`agent-company` is a filesystem-based autonomous company experiment.

The company is represented as folders. Each role has an `AGENTS.md`, local inbox/outbox/report/memory directories, and a PM2 cron entry that launches Codex from that role's folder.

This repository is intentionally not a normal application. The core system is:

- role prompts
- shared operating documents
- file-based coordination
- PM2 schedules
- lightweight runner scripts

Start here:

- [COMPANY.md](/home/andrew/entities/cr/projects/agent-company/COMPANY.md)
- [shared/policies/operating-rules.md](/home/andrew/entities/cr/projects/agent-company/shared/policies/operating-rules.md)
- [pm2/ecosystem.config.cjs](/home/andrew/entities/cr/projects/agent-company/pm2/ecosystem.config.cjs)
# base-agent-company
