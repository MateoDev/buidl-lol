# buidl.lol — Product Specification Summary

## Vision
A world where any protocol, company, or community can launch a hackathon in minutes, run it 24/7 with AI agents managing operations, and surface the best builders and ideas with zero operational burden.

## Core Value Proposition
Traditional hackathons: 3 months planning, $30K-$65K cost, 5+ staff
buidl.lol: Minutes to configure, near-zero marginal cost, 6 AI agents that never sleep

## The Six Agents

| Agent | Role | Evolution From |
|-------|------|----------------|
| **Architect** | Challenge design, bounty creation | Hal (Autonomous Hackathon) |
| **Evaluator** | Multi-pass judging, anti-gaming | Vital-AI-iK |
| **Treasurer** | Payment execution, multi-sig | Jamie D-AI-Mon |
| **Guide** | 24/7 technical mentoring | New |
| **Herald** | Marketing & comms | New |
| **Matchmaker** | Team formation | New |

## Platform Layers

1. **Agent Layer** - 6 autonomous agents on Openclaw
2. **Protocol Layer** - XO (coordination), Gaia (inference), on-chain settlement
3. **Platform Layer** - Web app, API gateway, CLI, Sponsor dashboard
4. **Data Layer** - Submissions, Evaluation pipeline, Analytics, Rep graph

## Two Modes

- **Sprint Mode** - Traditional time-boxed hackathons (24-120 hours)
- **Continuous Mode** - Always-on bounty marketplace

## Frontend Architecture

### Website (Marketing)
- Explains 24/7 hackathon concept
- Screenshots of Hub + Agents
- CTA: Deploy from GitHub or via XO

### Hub (Web App)
- ChatGPT-style interface
- Hackathon organization happens here
- Clean, minimal, modal-driven
- Sponsor dashboard embedded

### Agents (Independent)
- Segregated from website/web app
- Each agent is its own deployable app
- GitHub repos for self-hosting
- XO managed hosting option
