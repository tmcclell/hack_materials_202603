# [📋 Open the Interactive Agenda](https://tmcclell.github.io/hack_materials_202603/)

# GitHub Copilot Hackathon — Day 2

## Overview

A comprehensive preparation repository for a full-day GitHub Copilot hackathon.

- **Day 2** of a multi-day engagement focused on hands-on Copilot skills
- **Narrative arc:** Basics → Intermediate → Advanced → Hands-On Hacking

---

## Day 2 Schedule

| Time | Block | Duration |
|------|-------|----------|
| 9:00 – 9:25 | 🟢 **Basics** (+ Premium Requests) | 25 min |
| 9:25 – 9:55 | 🟡 VS Code Power Workflows + Lab 2 | 30 min |
| 9:55 – 10:10 | 🟡 GitHub CLI (demo only) | 15 min |
| 10:10 – 10:20 | ☕ Break | 10 min |
| 10:20 – 10:55 | 🟡 Agent Mode + Lab 3 | 35 min |
| 10:55 – 11:10 | 🔴 Plan Mode | 15 min |
| 11:10 – 11:40 | 🔴 Agent/Skills + Copilot Instructions + Lab 4 | 30 min |
| 11:40 – 12:05 | 🔴 Autonomous Copilot & Agent Teams | 25 min |
| 12:05 – 12:15 | 🔴 Governance | 10 min |
| 12:15 – 12:20 | 🔴 What's Next: Copilot SDK & OpenClaw | 5 min |
| 12:20 – 12:25 | Wrap-Up & Afternoon Framing | 5 min |
| 12:25 – 12:30 | Buffer | 5 min |
| 1:00 – 5:00 | 🛠️ Afternoon Hacking + Show & Tell | 4 hrs |

---

## Morning Sessions at a Glance

### 🟢 Session 1: Copilot Fundamentals (9:00–9:25, 25 min)

- **How Copilot Works Inside VS Code** — Inline completions, Chat panel, Agent Mode — the three interaction modes
- **Premium Requests & Model Selection** — Plan allocations, model multipliers, Auto = 10% discount
- **Live Demo — Copilot Chat** — Slash commands, @workspace, multi-turn conversations
- **Lab 1 — Quick Start** — Verify Copilot, complete a function, use Chat to explain code

### 🟡 Session 2: VS Code, GitHub CLI & Agent Mode (9:25–10:55, ~90 min)

- **Prompt Engineering + Chat Deep Dive** — Zero-shot/few-shot, #file scoping, slash commands
- **Lab 2 — IDE Workflow Sprint** — Comment-driven prompting, refactor, /tests, /doc
- **GitHub CLI with Copilot** — `gh copilot suggest`, `gh copilot explain`, PR workflows (demo only)
- ☕ Break (10:10–10:20)
- **Agent Mode in VS Code** — Multi-file edits, terminal execution, self-correction
- **Lab 3 — Let the Agent Drive** — Scaffold a module, agent writes tests, observe decision-making

### 🔴 Session 3: Plan Mode, Skills, Autonomous Copilot & Governance (10:55–12:25, ~90 min)

- **Plan Mode** — "Trust but verify" — agent proposes steps, you approve before execution
- **Copilot Instructions & Prompt Files** — `.github/copilot-instructions.md` + reusable prompts
- **Skills & MCP** — Model Context Protocol, extending Copilot with custom tools
- **Lab 4 — Configure & Extend** — Create instructions, prompt files, observe behavior changes
- **Autonomous Copilot & Agent Teams** — Autopilot, Copilot coding agent, Squad pattern
- **Governance & Guardrails** — Model governance, audit, compliance
- **What's Next: Copilot SDK & OpenClaw** — Build your own Copilot
- Wrap-Up & Afternoon Framing

---

## Afternoon: Hands-On Hacking (1:00–5:00)

| Time | Activity |
|------|----------|
| 1:00 | Hack Kickoff — use-case themes, team formation, fallback track |
| 1:20 | Hacking Sprint 1 |
| 3:00 | Mid-Hack Check-In |
| 3:15 | Hacking Sprint 2 |
| 4:15 | 🎤 Show & Tell (~5 min per team) |
| 4:50 | Closing — next steps, office hours, champion team, feedback |

---

## Repo Structure

```
├── hack-artifacts/                         # Interactive content linked from agenda
│   ├── presentations/                     # 3 visual presentation pages
│   │   ├── copilot-in-vscode.html        # How Copilot works in VS Code
│   │   ├── premium-requests.html         # Premium requests, multipliers, Auto discount
│   │   └── skills-and-mcp.html           # Skills & Model Context Protocol
│   │
│   ├── demos/                             # 7 demo guide pages + demo project
│   │   ├── demo-app/                     # 🎮 Emoji Battle Arena (TypeScript/Express)
│   │   ├── 01-copilot-chat.html          # Demo: Copilot Chat features
│   │   ├── 02-prompt-engineering.html    # Demo: Prompt engineering techniques
│   │   ├── 03-terminal-and-cli.html      # Demo: Terminal + GitHub CLI
│   │   ├── 04-agent-mode.html            # Demo: Agent Mode
│   │   ├── 05-plan-mode.html             # Demo: Plan Mode
│   │   ├── 06-copilot-instructions.html  # Demo: Instructions & prompt files
│   │   └── 07-autonomous-copilot.html    # Demo: Autopilot + coding agent + Squad
│   │
│   ├── hands-on/                          # 5 lab instruction pages
│   │   ├── lab1-quick-start.html         # Lab 1: Verify, complete, explain
│   │   ├── lab2-ide-workflow-sprint.html  # Lab 2: Comment-driven, refactor, /tests, /doc
│   │   ├── lab3-agent-drive.html         # Lab 3: Scaffold module, agent tests
│   │   ├── lab4-configure-extend.html    # Lab 4: Instructions, prompt files
│   │   └── hacking-guide.html            # Afternoon hacking format + fallback tracks
│   │
│   └── discussions/                       # 7 discussion/briefing pages
│       ├── governance.html                # Model governance, audit, compliance
│       ├── copilot-sdk.html               # Copilot SDK + OpenClaw
│       ├── squad.html                     # Squad — AI agent teams
│       ├── afternoon-briefing.html        # Afternoon framing
│       ├── hack-kickoff.html              # Use-case themes, team formation
│       ├── show-and-tell.html             # Demo format, expectations
│       └── closing.html                   # Next steps, feedback
│
└── README.md                               # This file
```

---

## Demo Solution: Emoji Battle Arena 🎮

A TypeScript/Express game API where emoji fighters battle each other — fun, visual, and rich enough to demonstrate every Copilot capability.

### Quick Start

```bash
cd hack-artifacts/demos/demo-app
npm install
npm run dev
# Open http://localhost:3000
```

### Intentional Demo Anchors

The demo app includes intentional bugs and stubs for live demonstrations:

| File | What | Demo |
|------|------|------|
| `battleService.ts` | Operator precedence bug in damage calc | `/fix` demo |
| `rateLimit.ts` | Clears entire map instead of expired entries | `/fix` demo |
| `validators.ts` | Function signatures with empty bodies | Inline completion |
| `leaderboardService.ts` | Stub with interfaces, no implementation | Agent Mode |
| `leaderboard.test.ts` | Empty test file with .todo() stubs | `/tests` demo |
| `.github/copilot-instructions.md` | Project coding standards | Copilot Instructions demo |
| `.github/prompts/add-fighter.md` | Reusable prompt template | Prompt Files demo |

### Which Demo Uses What

| Demo Topic | Files Used |
|------------|-----------|
| Copilot Chat | @workspace queries against README.md, /explain on routes |
| Prompt Engineering | #file refs to battleService.ts, comment anchors in validators |
| /fix | battleService.ts bug, rateLimit.ts bug |
| /tests | leaderboard.test.ts |
| Agent Mode | leaderboardService.ts (build full implementation) |
| Plan Mode | "Add fighter evolution/leveling system" |
| Instructions | .github/copilot-instructions.md |
| Prompt Files | .github/prompts/add-fighter.md |
| Autonomous | "Add tournament bracket system end-to-end" |

---

## Prerequisites

Before arriving at the hackathon, ensure:

- [ ] GitHub Copilot license active and working
- [ ] VS Code installed with **GitHub Copilot** and **Copilot Chat** extensions (latest)
- [ ] GitHub CLI installed with Copilot extension: `gh extension install github/gh-copilot`
- [ ] Node.js 18+ installed (for demo app)
- [ ] Access to a test/sandbox repository for hands-on labs
- [ ] Familiarity with basic Git workflows (clone, branch, commit, PR)

---

## Key References

| Resource | Link |
|----------|------|
| Squad — AI Agent Teams | [github.com/bradygaster/squad](https://github.com/bradygaster/squad) |
| Copilot SDK | `@github/copilot-sdk` (technical preview) |
| OpenClaw Video | [Build Your Own OpenClaw Bot like with GitHub Copilot](https://youtu.be/PEtM45hG-5A) |
| GitHub Docs: Premium Requests | [docs.github.com](https://docs.github.com/en/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests) |

---
