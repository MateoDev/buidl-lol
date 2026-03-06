"use client";

import { useState } from "react";
import Link from "next/link";

interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  status: "online" | "standby" | "offline";
  color: string;
  dotColor: string;
  borderColor: string;
  capabilities: string[];
  repo: string;
  docs: string;
}

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const agents: Agent[] = [
    {
      id: "architect",
      name: "Architect",
      role: "Challenge Design",
      description: "Ingests sponsor SDK docs and market context to generate optimized hackathon challenges, bounties, and track definitions.",
      status: "online",
      color: "orange",
      dotColor: "bg-orange-500",
      borderColor: "border-orange-500/30 hover:border-orange-500/50",
      capabilities: [
        "Generate challenges from SDK docs",
        "A/B variant testing for bounties",
        "Relevance scoring (>0.7 threshold)",
        "Multi-platform publishing (Bountycaster, Jokerace)",
      ],
      repo: "https://github.com/evmsystems-ai/buidl-lol/tree/main/agents/architect",
      docs: "/docs/agents/architect",
    },
    {
      id: "evaluator",
      name: "Evaluator",
      role: "Multi-Pass Judging",
      description: "Scores submissions with 4-pass evaluation: automated analysis, criteria scoring, adversarial review, and cross-submission comparison.",
      status: "online",
      color: "purple",
      dotColor: "bg-purple-500",
      borderColor: "border-purple-500/30 hover:border-purple-500/50",
      capabilities: [
        "Code quality & test coverage analysis",
        "AI-generated content detection",
        "Plagiarism & bounty farming detection",
        "Weighted criteria scoring",
      ],
      repo: "https://github.com/evmsystems-ai/buidl-lol/tree/main/agents/evaluator",
      docs: "/docs/agents/evaluator",
    },
    {
      id: "treasurer",
      name: "Treasurer",
      role: "Payment Execution",
      description: "Executes bounty payments with 2-of-3 multi-sig authorization. Supports on-chain USDC and fiat rails.",
      status: "standby",
      color: "emerald",
      dotColor: "bg-emerald-500",
      borderColor: "border-emerald-500/30 hover:border-emerald-500/50",
      capabilities: [
        "2-of-3 multi-sig authorization",
        "On-chain USDC payments",
        "Fiat rails (Moonpay integration)",
        "Team split distributions",
      ],
      repo: "https://github.com/evmsystems-ai/buidl-lol/tree/main/agents/treasurer",
      docs: "/docs/agents/treasurer",
    },
    {
      id: "guide",
      name: "Guide",
      role: "24/7 Mentoring",
      description: "Provides round-the-clock technical support. Trained on partner SDK docs, hackathon rules, and judging criteria.",
      status: "online",
      color: "cyan",
      dotColor: "bg-cyan-500",
      borderColor: "border-cyan-500/30 hover:border-cyan-500/50",
      capabilities: [
        "Technical Q&A from partner docs",
        "Debug assistance",
        "Resource suggestions",
        "Office hours scheduling",
      ],
      repo: "https://github.com/evmsystems-ai/buidl-lol/tree/main/agents/guide",
      docs: "/docs/agents/guide",
    },
    {
      id: "herald",
      name: "Herald",
      role: "Marketing & Comms",
      description: "Manages pre-event marketing, ongoing engagement, and post-event content. Produces case studies and wrap-up reports.",
      status: "online",
      color: "pink",
      dotColor: "bg-pink-500",
      borderColor: "border-pink-500/30 hover:border-pink-500/50",
      capabilities: [
        "Multi-channel campaigns (X, Farcaster, Discord)",
        "Email sequences",
        "Post-event case studies",
        "Real-time engagement updates",
      ],
      repo: "https://github.com/evmsystems-ai/buidl-lol/tree/main/agents/herald",
      docs: "/docs/agents/herald",
    },
    {
      id: "matchmaker",
      name: "Matchmaker",
      role: "Team Formation",
      description: "Matches solo participants into teams based on complementary skills, interests, and timezone compatibility.",
      status: "online",
      color: "amber",
      dotColor: "bg-amber-500",
      borderColor: "border-amber-500/30 hover:border-amber-500/50",
      capabilities: [
        "Skill-based team matching",
        "Timezone optimization",
        "Interest alignment",
        "Team-to-bounty recommendations",
      ],
      repo: "https://github.com/evmsystems-ai/buidl-lol/tree/main/agents/matchmaker",
      docs: "/docs/agents/matchmaker",
    },
  ];

  const statusConfig = {
    online: { label: "Online", color: "text-green-400", dot: "bg-green-500" },
    standby: { label: "Standby", color: "text-amber-400", dot: "bg-amber-500" },
    offline: { label: "Offline", color: "text-zinc-500", dot: "bg-zinc-500" },
  };

  return (
    <div className="min-h-screen bg-[#09090b]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 glass">
        <div className="container-wide flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🏗️</span>
            <span className="font-semibold text-white">buidl.lol</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/hub" className="text-sm text-zinc-400 hover:text-white transition">Hub</Link>
            <Link href="/dashboard" className="text-sm text-zinc-400 hover:text-white transition">Dashboard</Link>
            <span className="text-sm text-orange-400">Agents</span>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Agent Fleet</h1>
            <p className="text-zinc-400 max-w-2xl">
              Six specialized agents with clear separation of concerns. 
              Deploy individually via GitHub or as a coordinated ensemble via XO.
            </p>
          </div>

          {/* Agents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className={`p-6 rounded-xl border text-left transition card-hover bg-zinc-900/30 ${agent.borderColor}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${statusConfig[agent.status].dot} ${agent.status === 'online' ? 'status-online' : ''}`}></span>
                    <span className={`text-xs ${statusConfig[agent.status].color}`}>
                      {statusConfig[agent.status].label}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-orange-400 mb-2">{agent.role}</div>
                <p className="text-sm text-zinc-400 mb-4 line-clamp-2">{agent.description}</p>
                <div className="flex flex-wrap gap-2">
                  {agent.capabilities.slice(0, 2).map((cap) => (
                    <span key={cap} className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-400">
                      {cap}
                    </span>
                  ))}
                  {agent.capabilities.length > 2 && (
                    <span className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-500">
                      +{agent.capabilities.length - 2} more
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Deploy Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <h3 className="text-lg font-semibold text-white mb-2">🛠️ Self-Host</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Clone the agent repos and deploy on your own infrastructure. 
                Full control, open source.
              </p>
              <a
                href="https://github.com/evmsystems-ai/buidl-lol/tree/main/agents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-orange-400 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
            <div className="p-6 rounded-xl border border-orange-500/20 bg-orange-500/5">
              <h3 className="text-lg font-semibold text-white mb-2">☁️ Managed via XO</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Let XO handle deployment, scaling, and coordination. 
                Focus on your hackathon, not infrastructure.
              </p>
              <a
                href="mailto:matt@evmsystems.ai"
                className="inline-flex items-center gap-2 text-sm text-orange-400 hover:underline"
              >
                Contact for XO access →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Agent Detail Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-auto rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900">
              <div>
                <h2 className="text-xl font-semibold text-white">{selectedAgent.name}</h2>
                <div className="text-sm text-orange-400">{selectedAgent.role}</div>
              </div>
              <button
                onClick={() => setSelectedAgent(null)}
                className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-2">Description</h3>
                <p className="text-white">{selectedAgent.description}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-2">Capabilities</h3>
                <ul className="space-y-2">
                  {selectedAgent.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span className="text-green-400 mt-0.5">✓</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-2">Status</h3>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${statusConfig[selectedAgent.status].dot}`}></span>
                  <span className={statusConfig[selectedAgent.status].color}>
                    {statusConfig[selectedAgent.status].label}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <a
                  href={selectedAgent.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn btn-secondary h-10 text-sm"
                >
                  View Source
                </a>
                <Link href="/hub" className="flex-1 btn btn-primary h-10 text-sm glow-orange">
                  Deploy via Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
