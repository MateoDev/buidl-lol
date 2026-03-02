"use client";

import { useState } from "react";

interface Hackathon {
  id: string;
  name: string;
  status: "draft" | "active" | "ended";
  participants: number;
  teams: number;
  submissions: number;
  startDate: string;
  endDate: string;
}

export default function Dashboard() {
  const [hackathons] = useState<Hackathon[]>([
    {
      id: "1",
      name: "AI Agents Hackathon",
      status: "active",
      participants: 156,
      teams: 42,
      submissions: 28,
      startDate: "2026-03-01",
      endDate: "2026-03-07",
    },
    {
      id: "2",
      name: "Web3 Builder Weekend",
      status: "draft",
      participants: 0,
      teams: 0,
      submissions: 0,
      startDate: "2026-03-15",
      endDate: "2026-03-17",
    },
  ]);

  const statusColors = {
    draft: "bg-gray-500",
    active: "bg-green-500",
    ended: "bg-gray-400",
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            🏗️ buidl.lol
          </a>
          <nav className="flex items-center gap-6">
            <a href="/dashboard" className="text-purple-400">
              Dashboard
            </a>
            <a href="/agents" className="text-gray-400 hover:text-white">
              Agents
            </a>
            <button className="px-4 py-2 bg-purple-600 rounded-lg text-sm font-medium hover:bg-purple-500">
              New Hackathon
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Hackathons</h1>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Participants", value: "156", icon: "👥" },
            { label: "Active Teams", value: "42", icon: "🤝" },
            { label: "Submissions", value: "28", icon: "📥" },
            { label: "Agents Running", value: "5", icon: "🤖" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-gray-900 border border-gray-800"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hackathons List */}
        <div className="space-y-4">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold">{hackathon.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[hackathon.status]}`}
                  >
                    {hackathon.status}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-white">
                  ⚙️ Settings
                </button>
              </div>
              <div className="grid md:grid-cols-5 gap-4 text-sm">
                <div>
                  <div className="text-gray-400">Dates</div>
                  <div>
                    {hackathon.startDate} → {hackathon.endDate}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Participants</div>
                  <div className="font-medium">{hackathon.participants}</div>
                </div>
                <div>
                  <div className="text-gray-400">Teams</div>
                  <div className="font-medium">{hackathon.teams}</div>
                </div>
                <div>
                  <div className="text-gray-400">Submissions</div>
                  <div className="font-medium">{hackathon.submissions}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 bg-gray-800 rounded-lg hover:bg-gray-700 text-sm">
                    View
                  </button>
                  <button className="px-3 py-1 bg-purple-600 rounded-lg hover:bg-purple-500 text-sm">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agent Status */}
        <h2 className="text-2xl font-bold mt-12 mb-6">Agent Status</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { name: "Organizer", status: "running", lastAction: "Sent reminder" },
            { name: "Team Former", status: "idle", lastAction: "Matched 3 teams" },
            { name: "Mentor", status: "running", lastAction: "Answered 12 questions" },
            { name: "Submission", status: "running", lastAction: "Validated 2 projects" },
            { name: "Judge", status: "idle", lastAction: "Waiting for deadline" },
          ].map((agent) => (
            <div
              key={agent.name}
              className="p-4 rounded-xl bg-gray-900 border border-gray-800"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{agent.name}</span>
                <span
                  className={`w-2 h-2 rounded-full ${agent.status === "running" ? "bg-green-500" : "bg-gray-500"}`}
                />
              </div>
              <div className="text-xs text-gray-400">{agent.lastAction}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
