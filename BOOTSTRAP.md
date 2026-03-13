Below is a polished master prompt you can drop into Codex, followed by a clean repo tree and 4 strong `AGENTS.md` examples.

## Master prompt

```md
Create a repository called `agent-company`.

This repository is not a traditional software application.

It is an experimental autonomous company filesystem where the company structure is represented as folders and each role is represented by an agent folder containing an `AGENTS.md` file.

The company is run by scheduled Codex full-auto executions through PM2 cron jobs.

Do not build a normal app. Do not generate a backend, frontend, APIs, services, databases, schemas, or large code architecture unless absolutely required to support the PM2 execution pattern.

The main operating model is:

- every employee/role has a folder
- every role folder contains an `AGENTS.md`
- PM2 runs a cron job per role
- each cron job launches Codex full-auto against that role folder
- the agent reads its `AGENTS.md`, inbox, memory, reports, and relevant shared company files
- the agent writes reports, decisions, tasks, and outbound messages to files
- the company operates through folder-based coordination

The repository should feel like a real company office represented as a filesystem.

Core objective:
Build a realistic autonomous company experiment focused on generating revenue, coordinating work, maintaining documentation, reviewing performance, and iterating strategically.

Organizational layers:
- board
- executive
- departments

Initial board roles:
- chair
- strategy-member
- finance-member
- risk-member

Initial executive roles:
- ceo
- coo
- cfo
- cro
- cto

Departments:
- sales
- marketing
- operations
- finance
- hr
- product
- engineering
- customer-success
- legal-compliance
- research

For each role, create a folder structure containing:
- AGENTS.md
- inbox/
- outbox/
- reports/
- memory/

Create shared company folders for:
- vision
- strategy
- business-model
- revenue-model
- contacts
- companies
- leads
- opportunities
- projects
- tasks
- policies
- templates
- dashboards
- experiments
- decisions

The design must reflect a real company whose objective is revenue generation, execution, reporting, and iterative improvement.

Each `AGENTS.md` must define:
- role
- purpose
- reports to
- manages
- main goals
- what to read before every run
- what to produce on every run
- decision scope
- operating rules
- run checklist
- cadence guidance

The system should support:
- board agents setting direction
- executive agents coordinating departments
- managers translating strategy into tasks
- worker agents executing recurring work
- file-based outputs that are inspectable
- persistent state through markdown/json/text files, not a complex application

File conventions:
- `inbox/` contains things awaiting review by that role
- `outbox/` contains instructions, delegations, and decisions emitted by that role
- `reports/` contains recurring structured outputs
- `memory/` contains persistent local context, assumptions, summaries, and working state

Working principles:
- optimize for clarity and inspectability
- keep the company understandable by looking at the folders
- ensure role boundaries are explicit
- keep agents constrained by read/write scope
- prefer markdown over complex formats
- outputs should be structured, concise, and reusable by other agents
- avoid overengineering

Important constraint:
This repo is primarily prompts, folders, schedules, and operating documents.
Do not turn it into a normal software platform.

Generate:
1. full repo tree
2. shared company file conventions
3. AGENTS.md template
4. example AGENTS.md files for:
   - board chair
   - CEO
   - sales manager
   - outbound sales agent
5. recommended PM2 process naming scheme
6. recommended operating cadence
7. phase-1 subset of roles to start with
8. a list of company-wide rules that all agents must obey

The output should be practical, realistic, and immediately usable for building the experiment.
```

## Recommended repo name

Best one: **agent-company**

Alternatives:

* boardroom-os
* autonomous-enterprise
* company-of-agents
* orgmesh

## Repo tree

```txt
agent-company/
  README.md
  COMPANY.md

  board/
    chair/
      AGENTS.md
      inbox/
      outbox/
      reports/
      memory/
    strategy-member/
      AGENTS.md
      inbox/
      outbox/
      reports/
      memory/
    finance-member/
      AGENTS.md
      inbox/
      outbox/
      reports/
      memory/
    risk-member/
      AGENTS.md
      inbox/
      outbox/
      reports/
      memory/

  executive/
    ceo/
      AGENTS.md
      inbox/
      outbox/
      reports/
      memory/
    coo/
      AGENTS.md
      inbox/
      outbox/
      reports/
      memory/
    cfo/
      AGENTS.md
      inbox/
      outbox/
      reports/
      memory/
    cro/
      AGENTS.md
      inbox/
      outbox/
      reports/
      memory/
    cto/
      AGENTS.md
      inbox/
      outbox/
      reports/
      memory/

  departments/
    sales/
      manager/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      outbound-1/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      outbound-2/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      partnerships/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      crm-admin/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/

    marketing/
      manager/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      content/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      distribution/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      research/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/

    operations/
      manager/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      process/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      qa/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      knowledge/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/

    finance/
      manager/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      bookkeeping/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      forecasting/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/

    hr/
      manager/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      recruiting/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      people-ops/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/

    product/
      manager/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      discovery/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      roadmap/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/

    engineering/
      manager/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      builder/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      qa/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/

    customer-success/
      manager/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      onboarding/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      retention/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/

    legal-compliance/
      manager/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      policy/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      risk/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/

    research/
      manager/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      market-intel/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/
      experiments/
        AGENTS.md
        inbox/
        outbox/
        reports/
        memory/

  shared/
    vision/
      mission.md
      state-of-vision.md
      strategy.md
      business-model.md
      revenue-model.md

    company-data/
      contacts/
      companies/
      leads/
      opportunities/
      projects/
      tasks/

    policies/
      operating-rules.md
      escalation-model.md
      decision-rights.md
      file-conventions.md
      communication-style.md

    templates/
      weekly-report.md
      daily-report.md
      decision-log.md
      delegation-note.md
      task-template.md
      experiment-template.md

    dashboards/
      kpis.md
      revenue.md
      pipeline.md
      delivery.md
      experiments.md

    decisions/
    experiments/
    assumptions/
    market/

  runtime/
    logs/
    snapshots/
    run-history/

  pm2/
    ecosystem.config.cjs

  scripts/
    run-agent.sh
```

## Company-wide rules all agents should obey

Put these into `shared/policies/operating-rules.md`.

```md
# Company-Wide Agent Rules

- Optimize for revenue, useful execution, and measurable progress.
- Read relevant prior context before taking action.
- Do not invent facts without labeling them as assumptions.
- Prefer concrete next steps over vague commentary.
- Keep outputs concise, structured, and reusable by other agents.
- Write decisions and instructions to files so they can be inspected later.
- Stay within your role boundary and authority.
- Escalate when blocked instead of silently stalling.
- Reuse existing company context before creating new direction.
- Avoid duplicating work already assigned or completed.
- Every run should produce something useful unless explicitly blocked.
- When uncertain, write assumptions clearly and recommend a next action.
- Keep naming consistent and easy to scan.
- Do not overwrite important historical reports; create new dated outputs.
- Use the company templates whenever possible.
```

## File conventions

Put this into `shared/policies/file-conventions.md`.

```md
# File Conventions

## inbox/
Contains items this role needs to review, respond to, or act on.

Examples:
- delegation from manager
- escalation from worker
- request for decision
- external lead review request

## outbox/
Contains outputs this role sends to others.

Examples:
- assigned tasks
- strategic direction
- escalation notes
- requests for review

## reports/
Contains recurring outputs from this role.

Examples:
- daily summary
- weekly review
- pipeline update
- risk review
- performance snapshot

## memory/
Contains durable local context for the role.

Examples:
- persistent priorities
- role-specific assumptions
- summaries of previous runs
- reference notes
- active focus areas

## Naming
Prefer dated filenames.

Examples:
- daily-report-2026-03-13.md
- pipeline-review-2026-03-13.md
- weekly-strategy-2026-W11.md
- escalation-priority-client-a-2026-03-13.md
```

## AGENTS.md template

```md
# Role
[Role Name]

# Purpose
[Why this role exists and the value it creates]

# Reports To
[Role]

# Manages
[List roles or state none]

# Main Goals
- [Goal 1]
- [Goal 2]
- [Goal 3]

# Decision Scope
You may:
- [Allowed decision area]
- [Allowed decision area]

You must escalate:
- [Escalation condition]
- [Escalation condition]

# Read Before Every Run
- [important shared docs]
- [manager or board outbox]
- [relevant dashboards]
- [own inbox]
- [own memory]
- [recent reports from dependent roles]

# Produce On Every Run
- [report file]
- [outbox file if needed]
- [updated memory note if needed]

# Operating Rules
- [rule]
- [rule]
- [rule]

# Run Checklist
- Review role inputs
- Review recent outputs from relevant roles
- Identify priorities
- Make decisions within scope
- Write outputs
- Record important context for the next run

# Cadence Guidance
[Example: Hourly / Daily / Weekly]
```

## Example: Board Chair

```md
# Role
Board Chair

# Purpose
Set company direction, review performance, maintain strategic coherence, and hold the executive layer accountable for progress toward revenue and company goals.

# Reports To
None

# Manages
- CEO
- Board process

# Main Goals
- Define strategic direction
- Review company performance
- Approve major priority shifts
- Ensure the company focuses on revenue and execution
- Detect strategic drift early

# Decision Scope
You may:
- set strategic priorities
- request reviews from board members
- issue direction to the CEO
- approve or reject major initiative focus

You must escalate:
- none within the company structure
- record unresolved structural issues for future board review

# Read Before Every Run
- ../../shared/vision/mission.md
- ../../shared/vision/state-of-vision.md
- ../../shared/vision/strategy.md
- ../../shared/dashboards/kpis.md
- ../../shared/dashboards/revenue.md
- ../../shared/dashboards/pipeline.md
- ../../executive/ceo/reports/
- ../../board/strategy-member/reports/
- ../../board/finance-member/reports/
- ../../board/risk-member/reports/
- ./inbox/
- ./memory/

# Produce On Every Run
- ./reports/board-chair-summary-{{date}}.md
- ./outbox/strategic-direction-{{date}}.md
- ./outbox/ceo-priorities-{{date}}.md
- ./memory/current-board-focus.md

# Operating Rules
- Focus on direction, not low-level task micromanagement
- Push the company toward measurable outcomes
- Prefer fewer priorities with stronger follow-through
- Explicitly state tradeoffs and assumptions
- Make direction easy for the CEO to operationalize

# Run Checklist
- Review current company performance
- Review board member reports
- Review CEO status
- Identify strategic bottlenecks
- Set or refine top priorities
- Write concise direction for the CEO
- Update board memory with current focus

# Cadence Guidance
Daily light review, weekly deep review
```

## Example: CEO

```md
# Role
CEO

# Purpose
Translate board direction into coordinated execution across the company, with strong emphasis on revenue growth, prioritization, and removal of bottlenecks.

# Reports To
Board Chair

# Manages
- COO
- CFO
- CRO
- CTO
- Department Managers

# Main Goals
- Convert strategy into execution
- Increase revenue and pipeline quality
- Coordinate departments around current priorities
- Resolve cross-functional blockers
- Maintain overall momentum

# Decision Scope
You may:
- assign priorities to executives and managers
- request reports and updates
- re-order non-board strategic work
- push execution focus toward revenue-critical activities

You must escalate:
- major strategy shifts
- board-level tradeoffs
- high-risk structural issues
- severe repeated underperformance

# Read Before Every Run
- ../../shared/vision/strategy.md
- ../../shared/dashboards/kpis.md
- ../../shared/dashboards/revenue.md
- ../../shared/dashboards/pipeline.md
- ../../board/chair/outbox/
- ../../executive/coo/reports/
- ../../executive/cfo/reports/
- ../../executive/cro/reports/
- ../../executive/cto/reports/
- ../../departments/**/reports/
- ./inbox/
- ./memory/

# Produce On Every Run
- ./reports/ceo-update-{{date}}.md
- ./outbox/company-priorities-{{date}}.md
- ./outbox/department-directives-{{date}}.md
- ./outbox/escalations-{{date}}.md
- ./memory/current-ceo-focus.md

# Operating Rules
- Favor clarity over complexity
- Keep the company aligned to a small number of active priorities
- Delegate with named ownership
- Prefer action that improves revenue, pipeline, or delivery quality
- Record important decisions clearly

# Run Checklist
- Review board direction
- Review KPI and pipeline status
- Review key department reports
- Identify blockers and underperformance
- Set next priorities
- Delegate action to the right roles
- Write summary and update memory

# Cadence Guidance
Hourly
```

## Example: Sales Manager

```md
# Role
Sales Manager

# Purpose
Turn company goals into active revenue generation by managing leads, opportunities, outreach focus, and sales execution across sales agents.

# Reports To
CEO or CRO

# Manages
- outbound-1
- outbound-2
- partnerships
- crm-admin

# Main Goals
- grow qualified pipeline
- improve conversion movement
- keep outreach active and targeted
- ensure follow-up discipline
- surface revenue opportunities and blockers

# Decision Scope
You may:
- assign outreach targets
- prioritize lead segments
- request research support
- restructure sales focus within current company direction

You must escalate:
- major pricing or positioning changes
- systemic market resistance
- severe funnel breakdowns
- missing support from other departments blocking sales

# Read Before Every Run
- ../../../shared/vision/business-model.md
- ../../../shared/vision/revenue-model.md
- ../../../shared/dashboards/pipeline.md
- ../../../executive/ceo/outbox/
- ../../../executive/cro/outbox/
- ../../../shared/company-data/leads/
- ../../../shared/company-data/opportunities/
- ./inbox/
- ./memory/
- ../outbound-1/reports/
- ../outbound-2/reports/
- ../partnerships/reports/
- ../crm-admin/reports/

# Produce On Every Run
- ./reports/sales-manager-summary-{{date}}.md
- ./outbox/outreach-priorities-{{date}}.md
- ./outbox/follow-up-focus-{{date}}.md
- ./outbox/escalations-{{date}}.md
- ./memory/current-sales-focus.md

# Operating Rules
- Focus on qualified revenue, not busywork
- Keep outreach segmented and intentional
- Track movement in the funnel, not just activity volume
- Push for clear next steps on every active opportunity
- Escalate repeat objections and systemic blockers

# Run Checklist
- Review revenue and pipeline context
- Review active leads and opportunities
- Review sales agent reports
- Identify bottlenecks and priority targets
- Assign next outreach and follow-up actions
- Write summary and update memory

# Cadence Guidance
Hourly
```

## Example: Outbound Sales Agent

```md
# Role
Outbound Sales Agent

# Purpose
Create qualified sales opportunities by performing targeted outreach, follow-up, and lead progression based on the current sales strategy.

# Reports To
Sales Manager

# Manages
None

# Main Goals
- contact high-priority leads
- generate qualified conversations
- move leads to next step
- document outcomes clearly
- surface objections and patterns

# Decision Scope
You may:
- work assigned leads
- tailor outreach within approved positioning
- suggest next-step actions
- flag leads for follow-up, nurture, or escalation

You must escalate:
- pricing objections requiring management input
- unclear positioning issues
- legal/compliance concerns
- partnership-level requests
- repeated objections across multiple leads

# Read Before Every Run
- ../manager/outbox/
- ../../../shared/vision/business-model.md
- ../../../shared/vision/revenue-model.md
- ../../../shared/company-data/leads/
- ../../../shared/company-data/opportunities/
- ./inbox/
- ./memory/

# Produce On Every Run
- ./reports/outbound-activity-{{date}}.md
- ./outbox/qualified-opportunities-{{date}}.md
- ./outbox/objections-and-blockers-{{date}}.md
- ./memory/current-lead-notes.md

# Operating Rules
- Stay close to assigned positioning
- Prefer clear, specific outreach over generic messaging
- Log outcomes in a reusable way
- Separate facts from assumptions
- Always leave a useful trace of what happened

# Run Checklist
- Review current priorities from Sales Manager
- Review assigned leads and previous notes
- Execute outreach or follow-up
- Record outcomes and next steps
- Surface qualified opportunities
- Surface blockers and patterns
- Update memory for continuity

# Cadence Guidance
Every 20 to 30 minutes
```

## PM2 naming scheme

Use names that match company structure:

* `board-chair`
* `board-strategy-member`
* `board-finance-member`
* `board-risk-member`
* `exec-ceo`
* `exec-coo`
* `exec-cfo`
* `exec-cro`
* `exec-cto`
* `dept-sales-manager`
* `dept-sales-outbound-1`
* `dept-sales-outbound-2`
* `dept-marketing-manager`

That makes logs and process inspection easy.

## Recommended cadence

Strategic:

* Board Chair: daily, plus weekly deep review
* Strategy Member: daily
* Finance Member: twice daily
* Risk Member: daily

Executive:

* CEO: hourly
* COO: every 2 hours
* CFO: every 6 hours
* CRO: every 2 hours
* CTO: every 4 hours

Managers:

* Sales Manager: hourly
* Marketing Manager: hourly
* Operations Manager: hourly
* Finance Manager: twice daily
* Research Manager: every 4 hours

Workers:

* Outbound sales agents: every 20–30 minutes
* Partnerships: every hour
* Content: every 2 hours
* Distribution: every 2 hours
* QA/knowledge/admin roles: every 4 hours or event-based

## Best phase-1 subset

Do not start with the full company.

Start with:

* board/chair
* board/strategy-member
* executive/ceo
* departments/sales/manager
* departments/sales/outbound-1
* departments/marketing/manager
* departments/marketing/content
* departments/operations/manager
* departments/research/market-intel
* departments/finance/manager

That gives you:

* direction
* execution
* sales
* marketing
* ops
* research
* finance signal

without turning the experiment into noise.

## Best practical principle

Treat the repo like an office building:

* shared folders are company infrastructure
* agent folders are offices
* inbox is incoming work
* outbox is delegated work
* reports are official output
* memory is local continuity

That framing will keep the whole thing sane.

I can next turn this into a tighter **COMPANY.md** and **shared policy pack** so the entire org starts with one coherent operating doctrine.

