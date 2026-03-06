"use client";

import { useState } from "react";
import Link from "next/link";

interface Hackathon {
  id: string;
  name: string;
  status: "draft" | "live" | "completed";
  participants: number;
  teams: number;
  submissions: number;
  bountyPool: string;
  startDate: string;
  endDate: string;
}

interface AgentStatus {
  name: string;
  status: "online" | "standby" | "offline";
  lastAction: string;
  actions24h: number;
}

export default function DashboardPage() {
  const [hackathons] = useState<Hackathon[]>([
    {
      id: "1",
      name: "Base Buildathon 2026",
      status: "live",
      participants: 234,
      teams: 58,
      submissions: 42,
      bountyPool: "$25,000",
      startDate: "Mar 1",
      endDate: "Mar 7",
    },
    {
      id: "2",
      name: "AI Agents Track",
      status: "live",
      participants: 156,
      teams: 42,
      submissions: 28,
      bountyPool: "$15,000",
      startDate: "Feb 28",
      endDate: "Ongoing",
    },
    {
      id: "3",
      name: "DeFi Innovation",
      status: "draft",
      participants: 0,
      teams: 0,
      submissions: 0,
      bountyPool: "$50,000",
      startDate: "Mar 15",
      endDate: "Mar 17",
    },
  ]);

  const [agentStatus] = useState<AgentStatus[]>([
    { name: "Architect", status: "online", lastAction: "Generated 3 challenges", actions24h: 12 },
    { name: "Evaluator", status: "online", lastAction: "Scored 15 submissions", actions24h: 47 },
    { name: "Treasurer", status: "standby", lastAction: "Awaiting winner confirmation", actions24h: 0 },
    { name: "Guide", status: "online", lastAction: "Answered 23 questions", actions24h: 89 },
    { name: "Herald", status: "online", lastAction: "Posted update to X", actions24h: 8 },
    { name: "Matchmaker", status: "online", lastAction: "Formed 5 teams", actions24h: 14 },
  ]);

  const statusColors = {
    draft: "text-zinc-400 bg-zinc-500/10 border-zinc-500/30",
    live: "text-green-400 bg-green-500/10 border-green-500/30",
    completed: "text-zinc-500 bg-zinc-500/10 border-zinc-500/30",
  };

  const agentStatusColors = {
    online: { dot: "bg-green-500 status-online", text: "text-green-400" },
    standby: { dot: "bg-amber-500", text: "text-amber-400" },
    offline: { dot: "bg-zinc-500", text: "text-zinc-500" },
  };

  const totalParticipants = hackathons.reduce((sum, h) => sum + h.participants, 0);
  const totalSubmissions = hackathons.reduce((sum, h) => sum + h.submissions, 0);
  const liveHackathons = hackathons.filter((h) => h.status === "live").length;
  const totalAgentActions = agentStatus.reduce((sum, a) => sum + a.actions24h, 0);

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
            <span className="text-sm text-orange-400">Dashboard</span>
            <Link href="/agents" className="text-sm text-zinc-400 hover:text-white transition">Agents</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="container-wide">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-zinc-400 mt-1">Monitor your hackathons and agents</p>
            </div>
            <Link href="/hub" className="btn btn-primary h-10 px-6 text-sm glow-orange w-fit">
              + New Hackathon
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Live Hackathons", value: liveHackathons, icon: "🚀" },
              { label: "Participants", value: totalParticipants.toLocaleString(), icon: "👥" },
              { label: "Submissions", value: totalSubmissions, icon: "📥" },
              { label: "Agent Actions (24h)", value: totalAgentActions, icon: "🤖" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hackathons */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-4">Hackathons</h2>
            <div className="space-y-3">
              {hackathons.map((h) => (
                <div
                  key={h.id}
                  className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-white">{h.name}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${statusColors[h.status]}`}>
                            {h.status}
                          </span>
                        </div>
                        <div className="text-sm text-zinc-500">
                          {h.startDate} → {h.endDate} • {h.bountyPool}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-lg font-semibold text-white">{h.participants}</div>
                          <div className="text-xs text-zinc-500">Participants</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-white">{h.teams}</div>
                          <div className="text-xs text-zinc-500">Teams</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-white">{h.submissions}</div>
                          <div className="text-xs text-zinc-500">Submissions</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="btn btn-secondary h-9 px-4 text-sm">View</button>
                        <button className="btn btn-primary h-9 px-4 text-sm">Manage</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agent Status */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Agent Status</h2>
              <Link href="/agents" className="text-sm text-orange-400 hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {agentStatus.map((agent) => (
                <div
                  key={agent.name}
                  className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{agent.name}</span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${agentStatusColors[agent.status].dot}`}></span>
                      <span className={`text-xs ${agentStatusColors[agent.status].text}`}>
                        {agent.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-zinc-500 mb-1">{agent.lastAction}</div>
                  <div className="text-xs text-zinc-600">{agent.actions24h} actions today</div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <div className="space-y-4">
                {[
                  { time: "2m ago", event: "Guide answered question in Base Buildathon", agent: "Guide", color: "text-cyan-400" },
                  { time: "5m ago", event: "New team 'DeFi Wizards' formed (4 members)", agent: "Matchmaker", color: "text-amber-400" },
                  { time: "12m ago", event: "Submission validated: 'Cross-Chain Bridge'", agent: "Evaluator", color: "text-purple-400" },
                  { time: "18m ago", event: "Challenge 'NFT Marketplace' published", agent: "Architect", color: "text-orange-400" },
                  { time: "25m ago", event: "Reminder sent to 45 participants", agent: "Herald", color: "text-pink-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-zinc-600 w-16 shrink-0">{item.time}</span>
                    <span className={`${item.color}`}>•</span>
                    <span className="text-zinc-400 flex-1">{item.event}</span>
                    <span className="text-zinc-600">{item.agent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
