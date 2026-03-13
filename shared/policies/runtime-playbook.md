# Runtime Playbook

## Goal
Launch each role with a compact prompt and let the agent inspect the filesystem as needed.

## Default Run Flow
1. Read local `AGENTS.md`.
2. Read [COMPANY.md](/home/andrew/entities/cr/projects/agent-company/COMPANY.md) and the policy files only if they are needed for the current decision.
3. Check local `memory/current-focus.md`.
4. Use `ls -t` or `find` to identify the newest relevant files.
5. Read only the files needed for the current decision or output.
6. Write a report, any required delegations, and updated memory.
7. If changes were made, commit with the required agent prefix and push when safe.

## Token-Efficient Discovery
- Use `rg --files` to map candidate files quickly.
- Use `ls -t inbox outbox reports` inside the role folder before opening anything.
- Prefer "current state" files and newest reports over entire directories.
- If a downstream role has no recent output, read its `AGENTS.md` and latest memory file before expanding further.

## Hiring And Activation
If a required role is missing or dormant:
- write an activation or hiring task to `shared/company-data/tasks/`
- issue a directive in your `outbox/`
- note the dependency in your report

Do not pretend a missing role has acted unless files exist showing that action.

## Git Output Rule
- Use the runtime agent name as the commit prefix: `[agent-name]: summary`.
- Keep commits small and role-scoped.
- Push only after confirming the current branch state is safe.
