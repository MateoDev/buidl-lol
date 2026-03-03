"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const agents = [
    {
      name: "Organizer",
      emoji: "📋",
      description: "Manages events, timelines, announcements, and participant communications",
      capabilities: ["Create hackathons", "Announcements", "Scheduling", "FAQ handling"],
      borderColor: "border-blue-500/40",
      bgColor: "bg-blue-500/10",
      dotColor: "bg-blue-500",
    },
    {
      name: "Team Former",
      emoji: "🤝",
      description: "Intelligently matches solo participants into balanced, high-performing teams",
      capabilities: ["Skill matching", "Timezone alignment", "Interest pairing"],
      borderColor: "border-purple-500/40",
      bgColor: "bg-purple-500/10",
      dotColor: "bg-purple-500",
    },
    {
      name: "Mentor",
      emoji: "🧑‍🏫",
      description: "24/7 technical guidance, resource suggestions, and expert escalation",
      capabilities: ["Answer questions", "Resources", "Debug help"],
      borderColor: "border-green-500/40",
      bgColor: "bg-green-500/10",
      dotColor: "bg-green-500",
    },
    {
      name: "Submission",
      emoji: "📥",
      description: "Handles project intake, validates requirements, and confirms submissions",
      capabilities: ["Accept submissions", "Validation", "Reminders"],
      borderColor: "border-amber-500/40",
      bgColor: "bg-amber-500/10",
      dotColor: "bg-amber-500",
    },
    {
      name: "Judge",
      emoji: "⚖️",
      description: "Coordinates fair scoring, manages judges, and calculates final results",
      capabilities: ["Assign judges", "Scoring", "Results"],
      borderColor: "border-red-500/40",
      bgColor: "bg-red-500/10",
      dotColor: "bg-red-500",
    },
  ];

  const steps = [
    { num: "01", title: "Clone the Recipe", desc: "Fork the repo and configure your agents" },
    { num: "02", title: "Connect Channels", desc: "Discord, Slack, Telegram — wherever your community lives" },
    { num: "03", title: "Launch", desc: "Agents handle teams, mentoring, submissions, judging" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
            <span className="text-xl">🏗️</span>
            <span>buidl.lol</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#agents" className="text-sm text-zinc-400 hover:text-white transition">
              Agents
            </a>
            <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition">
              How It Works
            </a>
            <a href="#dashboard" className="text-sm text-zinc-400 hover:text-white transition">
              Dashboard
            </a>
            <a
              href="https://github.com/evmsystems-ai/buidl-lol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700 transition glow"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#agents" className="text-sm text-zinc-400" onClick={() => setMobileMenuOpen(false)}>
                Agents
              </a>
              <a href="#how-it-works" className="text-sm text-zinc-400" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </a>
              <a href="#dashboard" className="text-sm text-zinc-400" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </a>
              <a
                href="https://github.com/evmsystems-ai/buidl-lol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8 lg:py-32">
        <div className="badge badge-accent mx-auto mb-6">
          Open Source • Agent-Native • Community Driven
        </div>
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Run Hackathons with{" "}
          <span className="gradient-text">AI Agents</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl">
          The complete open-source platform for AI-powered hackathons. 
          Deploy agents that handle team formation, mentorship, 
          submissions, and judging.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/evmsystems-ai/buidl-lol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-8 font-semibold text-white hover:bg-blue-700 transition glow sm:w-auto"
          >
            🚀 Clone the Recipe
          </a>
          <a
            href="https://github.com/evmsystems-ai/buidl-lol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-zinc-700 px-8 font-medium text-white hover:border-zinc-500 hover:bg-zinc-900 transition sm:w-auto"
          >
            ⭐ Star on GitHub
          </a>
        </div>
        <p className="mt-6 text-sm text-zinc-500">
          Free forever • No vendor lock-in • Deploy anywhere
        </p>
      </header>

      {/* Agent Fleet */}
      <section id="agents" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">Your Agent Fleet</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Five specialized AI agents work together to run your hackathon.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className={`rounded-xl border p-5 transition card-hover ${agent.borderColor} ${agent.bgColor}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{agent.emoji}</span>
                <div>
                  <h3 className="font-semibold text-white">{agent.name} Agent</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`h-2 w-2 rounded-full ${agent.dotColor} status-glow`}></span>
                    <span className="text-xs text-zinc-500">Online</span>
                  </div>
                </div>
              </div>
              <p className="mb-4 text-sm text-zinc-400">{agent.description}</p>
              <div className="flex flex-wrap gap-2">
                {agent.capabilities.map((cap) => (
                  <span key={cap} className="badge text-xs">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Build your own card */}
          <div className="rounded-xl border border-dashed border-zinc-700 p-5 flex flex-col items-center justify-center text-center bg-zinc-900/50">
            <span className="text-3xl mb-3">🔧</span>
            <h3 className="font-semibold text-white mb-2">Build Your Own</h3>
            <p className="text-sm text-zinc-400 mb-4">Add custom agents for your needs</p>
            <a
              href="https://github.com/evmsystems-ai/buidl-lol/tree/main/agents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              View Agent Specs →
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">Launch in 3 Steps</h2>
            <p className="mt-4 text-zinc-400">From zero to running hackathon in under an hour</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-4xl font-bold text-blue-500/30 mb-3 md:text-5xl">
                  {step.num}
                </div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/evmsystems-ai/buidl-lol#quick-start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:border-zinc-500 hover:bg-zinc-800 transition"
            >
              📖 Read the Quick Start Guide
            </a>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">Powerful Dashboard</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Monitor participants, teams, submissions, and agent activity in real-time
          </p>
        </div>

        {/* Dashboard Mock */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="mx-auto max-w-xs rounded bg-zinc-800 px-3 py-1.5 text-center text-xs text-zinc-500">
                buidl.lol/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-4 md:p-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-4 md:gap-4">
              {[
                { label: "Participants", value: "156", icon: "👥", change: "+12 today" },
                { label: "Teams", value: "42", icon: "🤝", change: "3 forming" },
                { label: "Submissions", value: "28", icon: "📥", change: "14 pending" },
                { label: "Agents", value: "5/5", icon: "🤖", change: "All running" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-3 md:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg md:text-xl">{stat.icon}</span>
                    <span className="text-[10px] text-green-400 md:text-xs">{stat.change}</span>
                  </div>
                  <div className="text-xl font-bold text-white md:text-2xl">{stat.value}</div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Two column layout */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* Activity feed */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-sm text-white">
                  <span>📊</span> Live Activity
                </h4>
                <div className="space-y-3 text-xs md:text-sm">
                  {[
                    { time: "2m", event: "Mentor Agent answered in #help", color: "text-green-400" },
                    { time: "5m", event: "Team 'Web3 Wizards' formed", color: "text-purple-400" },
                    { time: "8m", event: "New submission: 'DeFi Dashboard'", color: "text-amber-400" },
                    { time: "12m", event: "Organizer sent reminder", color: "text-blue-400" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-zinc-600 w-8 shrink-0">{item.time}</span>
                      <span className={item.color}>•</span>
                      <span className="text-zinc-400">{item.event}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agent status */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-sm text-white">
                  <span>🤖</span> Agent Status
                </h4>
                <div className="space-y-3">
                  {[
                    { name: "Organizer", status: "Active", action: "Monitoring" },
                    { name: "Team Former", status: "Active", action: "3 matches" },
                    { name: "Mentor", status: "Active", action: "47 answered" },
                    { name: "Submission", status: "Active", action: "Validating 2" },
                    { name: "Judge", status: "Standby", action: "Awaiting" },
                  ].map((agent) => (
                    <div key={agent.name} className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${agent.status === "Active" ? "bg-green-500" : "bg-zinc-600"}`}></span>
                        <span className="text-white">{agent.name}</span>
                      </div>
                      <span className="text-zinc-500">{agent.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/dashboard" className="text-sm text-blue-400 hover:underline">
            Explore the Full Dashboard →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>🔧</span> For Organizers
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "One-click setup", desc: "Deploy a full hackathon stack in minutes" },
                  { title: "Automated comms", desc: "Announcements, reminders, and updates" },
                  { title: "Smart team matching", desc: "AI pairs participants by skills" },
                  { title: "Fair judging", desc: "Anti-collusion, blind scoring, transparency" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>
                      <strong className="text-white">{item.title}</strong>
                      <span className="text-zinc-400"> — {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>🚀</span> For Participants
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "24/7 AI mentor", desc: "Get help anytime, on any topic" },
                  { title: "Find teammates", desc: "Smart matching with compatible builders" },
                  { title: "Easy submissions", desc: "Simple process with validation" },
                  { title: "Real-time updates", desc: "Never miss a deadline" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>
                      <strong className="text-white">{item.title}</strong>
                      <span className="text-zinc-400"> — {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-4 md:text-3xl">Ready to buidl?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Clone the recipe, configure your agents, and launch your hackathon today.
            It's free, open-source, and yours forever.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/evmsystems-ai/buidl-lol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-8 font-semibold text-white hover:bg-blue-700 transition glow sm:w-auto"
            >
              🚀 Clone the Recipe
            </a>
            <a
              href="https://discord.gg/buidl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-zinc-700 px-8 font-medium text-white hover:border-zinc-500 hover:bg-zinc-900 transition sm:w-auto"
            >
              💬 Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="mx-auto max-w-7xl px-4 pb-16 text-center sm:px-6 lg:px-8">
        <p className="text-zinc-500 text-sm mb-4">
          Want hosted hackathons? Join the waitlist for buidl.lol Cloud
        </p>
        <form
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We'll be in touch.");
            setEmail("");
          }}
        >
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="rounded-lg bg-zinc-800 border border-zinc-700 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700 transition"
          >
            Notify Me
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-lg font-semibold text-white">
              <span>🏗️</span>
              <span>buidl.lol</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
              <a href="https://github.com/evmsystems-ai/buidl-lol" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GitHub
              </a>
              <a href="https://github.com/evmsystems-ai/buidl-lol/tree/main/agents" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Docs
              </a>
              <a href="https://discord.gg/buidl" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Discord
              </a>
              <a href="https://twitter.com/buidl_lol" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Twitter
              </a>
            </div>
            <p className="text-xs text-zinc-500">
              Built with 🤖 by{" "}
              <a href="https://evmsystems.ai" className="hover:text-white">
                EVM Systems
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
