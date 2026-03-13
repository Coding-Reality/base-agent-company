# Git Workflow

- If you create or modify files during a run, check `git status --short` before committing.
- Commit only the files you intentionally changed for your role or shared company state.
- Use commit messages in this exact form: `[agent-name]: concise summary`.
- Replace `agent-name` with your runtime agent name, such as `board-chair` or `dept-sales-manager`.
- Push your commit to `origin` after a successful commit when the branch is in a safe state.
- Do not force-push.
- If push fails because the remote moved or there are conflicts, stop, record the issue in your report or outbox, and leave the resolution for a later run.
- Do not rewrite or squash other agents' history.
