# buidl.lol UX Design Specification
## Chat-First Hackathon Platform Interface

**Date:** March 3, 2026  
**Status:** Design Phase  
**Author:** Papi

---

## Design Philosophy

**Chat-first, action-oriented.** The primary interaction is conversational — participants and admins talk to hackathon agents to get things done. Secondary views provide structured information.

### Inspiration
- **OpenClaw Control UI** — Left sidebar navigation, chat as primary surface
- **Discord** — Server/channel structure, threaded conversations
- **Linear** — Clean, minimal, keyboard-first interactions
- **Vercel Dashboard** — Modern dark theme, clear hierarchy

---

## Information Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        buidl.lol                                 │
├────────────┬────────────────────────────────────────────────────┤
│            │                                                     │
│   SIDEBAR  │                    MAIN CONTENT                     │
│            │                                                     │
│  ┌──────┐  │  ┌─────────────────────────────────────────────┐  │
│  │ Chat │  │  │                                              │  │
│  │  💬  │  │  │              CHAT INTERFACE                  │  │
│  └──────┘  │  │                                              │  │
│            │  │  ┌────────────────────────────────────────┐  │  │
│  ┌──────┐  │  │  │  Agent: How can I help you today?     │  │  │
│  │Rules │  │  │  └────────────────────────────────────────┘  │  │
│  │  📋  │  │  │                                              │  │
│  └──────┘  │  │  ┌────────────────────────────────────────┐  │  │
│            │  │  │  You: I want to join a team            │  │  │
│  ┌──────┐  │  │  └────────────────────────────────────────┘  │  │
│  │Teams │  │  │                                              │  │
│  │  👥  │  │  │                                              │  │
│  └──────┘  │  │  ┌────────────────────────────────────────┐  │  │
│            │  │  │                                        │  │  │
│  ┌──────┐  │  │  │  [ Type your message... ]        ⏎    │  │  │
│  │Submit│  │  │  └────────────────────────────────────────┘  │  │
│  │  📦  │  │  └─────────────────────────────────────────────┘  │
│  └──────┘  │                                                     │
│            │                                                     │
│  ┌──────┐  │                                                     │
│  │Agent │  │                                                     │
│  │Portal│  │                                                     │
│  │  🤖  │  │                                                     │
│  └──────┘  │                                                     │
│            │                                                     │
│  ──────────│                                                     │
│  [Admin]   │                                                     │
│  ┌──────┐  │                                                     │
│  │Manage│  │                                                     │
│  │  ⚙️  │  │                                                     │
│  └──────┘  │                                                     │
│            │                                                     │
└────────────┴────────────────────────────────────────────────────┘
```

---

## User Types

### 1. Participant (Hackathon Developer)
**Goals:** Join hackathon, find team, build project, submit, get feedback

**Navigation:**
- 💬 **Chat** (primary) — Talk to hackathon agents
- 📋 **Rules & Details** — Hackathon info, timeline, prizes
- 👥 **Teams** — Browse teams, find teammates
- 📦 **Submit** — Project submission form
- 🤖 **Agent Portal** — API/MCP docs for agent participants

### 2. Admin (Hackathon Manager)
**Goals:** Set up hackathon, manage participants, oversee judging

**Navigation (additional):**
- ⚙️ **Manage** — Hackathon settings, timeline, rules
- 📊 **Analytics** — Participation stats, submission metrics
- ⚖️ **Judging** — Review submissions, assign judges
- 📢 **Announcements** — Broadcast to participants

---

## Views

### 1. Chat View (Primary)

```
┌─────────────────────────────────────────────────────────────────┐
│  💬 Chat with Hackathon AI                              [···]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ 🤖 Hackathon Agent                              10:30 AM   │ │
│  │                                                             │ │
│  │ Welcome to ETHGlobal SF 2026! 🎉                           │ │
│  │                                                             │ │
│  │ I'm here to help you throughout the hackathon. You can:    │ │
│  │ • Find teammates with complementary skills                  │ │
│  │ • Get technical guidance and resources                      │ │
│  │ • Submit your project                                       │ │
│  │ • Ask questions about rules and prizes                      │ │
│  │                                                             │ │
│  │ What would you like to do?                                  │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Quick Actions:                                              │ │
│  │ [Find Teammates] [View Schedule] [Submit Project]           │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ 👤 You                                          10:32 AM   │ │
│  │                                                             │ │
│  │ I'm looking for a frontend developer for my AI agent       │ │
│  │ project. We're building a tool for...                       │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Message the hackathon agent...                         ⏎  │ │
│  └────────────────────────────────────────────────────────────┘ │
│  [📎 Attach] [🎤 Voice] [📷 Screenshot]                         │
└─────────────────────────────────────────────────────────────────┘
```

**Features:**
- Real-time streaming responses
- Quick action buttons (contextual)
- Rich cards for team invites, submissions, etc.
- Message history with search
- Voice input support

### 2. Rules & Details View

```
┌─────────────────────────────────────────────────────────────────┐
│  📋 ETHGlobal SF 2026                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  📅 TIMELINE                                             │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  Mar 15  │ Registration Opens          ✅ Complete       │   │
│  │  Mar 20  │ Hacking Begins              🟢 Active         │   │
│  │  Mar 22  │ Submissions Due             ⏳ In 2 days       │   │
│  │  Mar 23  │ Judging & Winners                              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🏆 PRIZES                                               │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  1st Place    │ $10,000 + Accelerator Spot              │   │
│  │  2nd Place    │ $5,000                                   │   │
│  │  3rd Place    │ $2,500                                   │   │
│  │  Best AI      │ $2,500 + GPU Credits                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  📜 RULES                                                │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  • Team size: 1-5 members                                │   │
│  │  • All code must be written during the hackathon         │   │
│  │  • Open source libraries and APIs are allowed            │   │
│  │  • AI assistance is allowed and encouraged               │   │
│  │  • Projects must include a working demo                  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🧑‍⚖️ JUDGING CRITERIA                                    │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  Innovation        │ 25% │ ████████░░                    │   │
│  │  Technical         │ 25% │ ████████░░                    │   │
│  │  Impact            │ 20% │ ██████░░░░                    │   │
│  │  Presentation      │ 15% │ █████░░░░░                    │   │
│  │  Completion        │ 15% │ █████░░░░░                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 3. Teams View

```
┌─────────────────────────────────────────────────────────────────┐
│  👥 Teams                                    [+ Create Team]    │
├─────────────────────────────────────────────────────────────────┤
│  [Looking for Team] [Browse All] [My Team]                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🚀 AgentForge                           [Join Request]  │   │
│  │  Building AI agents that build AI agents                 │   │
│  │                                                          │   │
│  │  👤 3/5 members  │  🔧 Need: Frontend, DevOps           │   │
│  │  🏷️ AI, Agents, Automation                              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  ⛓️ ChainBrain                           [Join Request]  │   │
│  │  Cross-chain AI oracle network                           │   │
│  │                                                          │   │
│  │  👤 2/4 members  │  🔧 Need: Smart Contracts, Backend   │   │
│  │  🏷️ DeFi, Oracles, Cross-chain                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🤖 Looking for teammates?                               │   │
│  │                                                          │   │
│  │  Tell our Team Formation Agent about your skills and     │   │
│  │  project ideas, and we'll help you find the perfect      │   │
│  │  teammates!                                               │   │
│  │                                                          │   │
│  │  [Talk to Agent →]                                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4. Agent Portal View

```
┌─────────────────────────────────────────────────────────────────┐
│  🤖 Agent Portal                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Participating as an AI agent? Here's how to integrate.        │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🔌 MCP Server                                           │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  Connect your agent to buidl.lol via MCP:               │   │
│  │                                                          │   │
│  │  ```json                                                 │   │
│  │  {                                                       │   │
│  │    "mcpServers": {                                       │   │
│  │      "buidl": {                                          │   │
│  │        "url": "https://api.buidl.lol/mcp",              │   │
│  │        "apiKey": "your-api-key"                          │   │
│  │      }                                                   │   │
│  │    }                                                     │   │
│  │  }                                                       │   │
│  │  ```                                                     │   │
│  │                                                          │   │
│  │  [Copy Config] [Get API Key]                             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  📚 Available Tools                                      │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  • hackathon.info — Get hackathon details               │   │
│  │  • team.join — Request to join a team                    │   │
│  │  • team.create — Create a new team                       │   │
│  │  • submission.create — Submit your project               │   │
│  │  • mentor.ask — Get technical guidance                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  📖 API Reference                                        │   │
│  │  [View Full Docs →]                                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 5. Admin: Manage View

```
┌─────────────────────────────────────────────────────────────────┐
│  ⚙️ Manage Hackathon                                            │
├─────────────────────────────────────────────────────────────────┤
│  [Settings] [Timeline] [Prizes] [Rules] [Agents]                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  HACKATHON SETTINGS                                      │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │                                                          │   │
│  │  Name: [ETHGlobal SF 2026                          ]    │   │
│  │                                                          │   │
│  │  Description:                                            │   │
│  │  [Build the future of decentralized AI at...      ]    │   │
│  │                                                          │   │
│  │  Theme: [AI Agents & Autonomous Systems           ]    │   │
│  │                                                          │   │
│  │  ┌─────────────────────┐  ┌─────────────────────┐       │   │
│  │  │ Start Date          │  │ End Date            │       │   │
│  │  │ [Mar 20, 2026    ]  │  │ [Mar 22, 2026    ]  │       │   │
│  │  └─────────────────────┘  └─────────────────────┘       │   │
│  │                                                          │   │
│  │  Team Size: [1] - [5] members                           │   │
│  │                                                          │   │
│  │  [Save Changes]                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🤖 AGENT CONFIGURATION                                  │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │                                                          │   │
│  │  [✓] Organizer Agent — Event management                 │   │
│  │  [✓] Mentor Agent — Technical guidance                   │   │
│  │  [✓] Team Formation Agent — Matchmaking                  │   │
│  │  [✓] Judge Agent — Submission evaluation                 │   │
│  │                                                          │   │
│  │  Gaia Knowledge Base: [ETHGlobal-SF-2026-KB      ▼]    │   │
│  │                                                          │   │
│  │  [Configure Agents →]                                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Mobile Design

### Responsive Breakpoints
- **Desktop:** > 1024px — Full sidebar + content
- **Tablet:** 768px - 1024px — Collapsible sidebar
- **Mobile:** < 768px — Bottom nav + full-screen views

### Mobile Layout

```
┌─────────────────────────┐
│  🏗️ ETHGlobal SF       │
├─────────────────────────┤
│                         │
│  ┌───────────────────┐  │
│  │ 🤖 Agent          │  │
│  │ Welcome! What     │  │
│  │ would you like    │  │
│  │ to do today?      │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ Quick Actions:    │  │
│  │ [Find Team]       │  │
│  │ [View Rules]      │  │
│  │ [Submit]          │  │
│  └───────────────────┘  │
│                         │
│                         │
│  ┌───────────────────┐  │
│  │ Type message...   │  │
│  └───────────────────┘  │
│                         │
├─────────────────────────┤
│ 💬    📋    👥    📦   │
│ Chat  Info  Teams Sub  │
└─────────────────────────┘
```

---

## Component Library

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **State:** Zustand
- **Real-time:** WebSocket (native)

### Key Components

```typescript
// Sidebar navigation
<Sidebar>
  <SidebarItem icon={MessageSquare} label="Chat" active />
  <SidebarItem icon={FileText} label="Rules" />
  <SidebarItem icon={Users} label="Teams" />
  <SidebarItem icon={Package} label="Submit" />
  <SidebarItem icon={Bot} label="Agent Portal" />
  <SidebarDivider />
  {isAdmin && (
    <SidebarItem icon={Settings} label="Manage" />
  )}
</Sidebar>

// Chat message
<ChatMessage
  role="assistant" | "user"
  content={string}
  timestamp={Date}
  actions={QuickAction[]}
/>

// Quick action buttons
<QuickActions>
  <QuickAction label="Find Team" onClick={...} />
  <QuickAction label="View Rules" onClick={...} />
</QuickActions>

// Team card
<TeamCard
  name={string}
  description={string}
  members={Member[]}
  needs={string[]}
  tags={string[]}
  onJoinRequest={...}
/>
```

---

## Color Palette

### Dark Theme (Default)
```css
--background: #0a0a0f;
--surface: #12121a;
--surface-hover: #1a1a24;
--border: #2a2a3a;
--text-primary: #ffffff;
--text-secondary: #a0a0b0;
--accent: #6366f1;  /* Indigo */
--accent-hover: #818cf8;
--success: #22c55e;
--warning: #f59e0b;
--error: #ef4444;
```

### Light Theme
```css
--background: #ffffff;
--surface: #f8f8fa;
--surface-hover: #f0f0f4;
--border: #e0e0e8;
--text-primary: #0a0a0f;
--text-secondary: #606070;
--accent: #4f46e5;
--accent-hover: #6366f1;
```

---

## Implementation Priority

### Phase 1: Core (Week 1)
1. Sidebar navigation
2. Chat interface (basic)
3. Rules & Details view
4. Responsive layout

### Phase 2: Features (Week 2)
1. Teams view
2. Submission flow
3. Agent Portal
4. Quick actions

### Phase 3: Admin (Week 3)
1. Admin dashboard
2. Hackathon settings
3. Agent configuration
4. Analytics

### Phase 4: Polish (Week 4)
1. Animations
2. Mobile optimization
3. Keyboard shortcuts
4. Accessibility

---

## Gaia Integration

### Hackathon Knowledge Base
Each hackathon gets a dedicated Gaia node trained on:
- Hackathon rules and details
- FAQ responses
- Past hackathon data (if available)
- Sponsor information
- Technical resources

### Agent Context Handoff
```typescript
interface HackathonContext {
  id: string;
  name: string;
  description: string;
  timeline: TimelineEvent[];
  rules: Rule[];
  prizes: Prize[];
  judgingCriteria: Criterion[];
  sponsors: Sponsor[];
  resources: Resource[];
  faq: FAQ[];
}

// Pass to Gaia node for RAG
await gaiaNode.ingest(hackathonContext);
```

### MCP Integration
```json
{
  "mcpServers": {
    "buidl-hackathon": {
      "command": "npx",
      "args": ["-y", "@buidl/mcp-server"],
      "env": {
        "HACKATHON_ID": "ethglobal-sf-2026",
        "GAIA_NODE_URL": "https://gaia.buidl.lol/ethglobal-sf"
      }
    }
  }
}
```

---

*Next steps: Create Figma mockups, then implement Phase 1*
