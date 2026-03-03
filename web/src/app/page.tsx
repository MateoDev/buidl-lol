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
      color: "bg-blue-500/20 border-blue-500/40",
      dotColor: "bg-blue-500",
    },
    {
      name: "Team Former",
      emoji: "🤝",
      description: "Intelligently matches solo participants into balanced, high-performing teams",
      capabilities: ["Skill matching", "Timezone alignment", "Interest pairing"],
      color: "bg-purple-500/20 border-purple-500/40",
      dotColor: "bg-purple-500",
    },
    {
      name: "Mentor",
      emoji: "🧑‍🏫",
      description: "24/7 technical guidance, resource suggestions, and expert escalation",
      capabilities: ["Answer questions", "Resources", "Debug help"],
      color: "bg-green-500/20 border-green-500/40",
      dotColor: "bg-green-500",
    },
    {
      name: "Submission",
      emoji: "📥",
      description: "Handles project intake, validates requirements, and confirms submissions",
      capabilities: ["Accept submissions", "Validation", "Reminders"],
      color: "bg-amber-500/20 border-amber-500/40",
      dotColor: "bg-amber-500",
    },
    {
      name: "Judge",
      emoji: "⚖️",
      description: "Coordinates fair scoring, manages judges, and calculates final results",
      capabilities: ["Assign judges", "Scoring", "Results"],
      color: "bg-red-500/20 border-red-500/40",
      dotColor: "bg-red-500",
    },
  ];

  const steps = [
    { num: "01", title: "Clone the Recipe", desc: "Fork the repo and configure your agents" },
    { num: "02", title: "Connect Channels", desc: "Discord, Slack, Telegram — wherever your community lives" },
    { num: "03", title: "Launch", desc: "Agents handle teams, mentoring, submissions, judging" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-[var(--border-muted)] bg-[var(--bg-primary)]/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-xl">🏗️</span>
            <span>buidl.lol</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#agents" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">
              Agents
            </a>
            <a href="#how-it-works" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">
              How It Works
            </a>
            <a href="#dashboard" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">
              Dashboard
            </a>
            <a
              href="https://github.com/evmsystems-ai/buidl-lol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[var(--accent-primary)] px-4 text-sm font-medium text-white hover:bg-[var(--accent-hover)] transition glow"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-default)] md:hidden"
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
          <div className="border-t border-[var(--border-muted)] bg-[var(--bg-primary)] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#agents" className="text-sm text-[var(--text-secondary)]" onClick={() => setMobileMenuOpen(false)}>
                Agents
              </a>
              <a href="#how-it-works" className="text-sm text-[var(--text-secondary)]" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </a>
              <a href="#dashboard" className="text-sm text-[var(--text-secondary)]" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </a>
              <a
                href="https://github.com/evmsystems-ai/buidl-lol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--accent-primary)] text-sm font-medium text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="container py-16 text-center md:py-24 lg:py-32">
        <div className="badge badge-accent mx-auto mb-6">
          Open Source • Agent-Native • Community Driven
        </div>
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Run Hackathons with{" "}
          <span className="gradient-text">AI Agents</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg md:text-xl">
          The complete open-source platform for AI-powered hackathons. 
          Deploy agents that handle team formation, mentorship, 
          submissions, and judging.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/evmsystems-ai/buidl-lol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[var(--accent-primary)] px-8 font-semibold text-white hover:bg-[var(--accent-hover)] transition glow sm:w-auto"
          >
            🚀 Clone the Recipe
          </a>
          <a
            href="https://github.com/evmsystems-ai/buidl-lol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[var(--border-default)] px-8 font-medium hover:border-[var(--border-emphasis)] hover:bg-[var(--bg-hover)] transition sm:w-auto"
          >
            ⭐ Star on GitHub
          </a>
        </div>
        <p className="mt-6 text-sm text-[var(--text-muted)]">
          Free forever • No vendor lock-in • Deploy anywhere
        </p>
      </header>

      {/* Agent Fleet */}
      <section id="agents" className="container py-16 md:py-24">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Your Agent Fleet</h2>
          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Five specialized AI agents work together to run your hackathon.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className={`rounded-xl border p-5 transition card-hover ${agent.color}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{agent.emoji}</span>
                <div>
                  <h3 className="font-semibold">{agent.name} Agent</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`status-dot active ${agent.dotColor}`}></span>
                    <span className="text-xs text-[var(--text-muted)]">Online</span>
                  </div>
                </div>
              </div>
              <p className="mb-4 text-sm text-[var(--text-secondary)]">{agent.description}</p>
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
          <div className="rounded-xl border border-dashed border-[var(--border-default)] p-5 flex flex-col items-center justify-center text-center bg-[var(--bg-surface)]/50">
            <span className="text-3xl mb-3">🔧</span>
            <h3 className="font-semibold mb-2">Build Your Own</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">Add custom agents for your needs</p>
            <a
              href="https://github.com/evmsystems-ai/buidl-lol/tree/main/agents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--accent-primary)] hover:underline"
            >
              View Agent Specs →
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-y border-[var(--border-muted)] bg-[var(--bg-secondary)]">
        <div className="container py-16 md:py-24">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Launch in 3 Steps</h2>
            <p className="mt-4 text-[var(--text-secondary)]">From zero to running hackathon in under an hour</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <div key={step.num} className="text-center">
                <div className="text-4xl font-bold text-[var(--accent-primary)]/30 mb-3 md:text-5xl">
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/evmsystems-ai/buidl-lol#quick-start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-default)] px-5 py-3 text-sm font-medium hover:border-[var(--border-emphasis)] hover:bg-[var(--bg-hover)] transition"
            >
              📖 Read the Quick Start Guide
            </a>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="container py-16 md:py-24">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Powerful Dashboard</h2>
          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Monitor participants, teams, submissions, and agent activity in real-time
          </p>
        </div>

        {/* Dashboard Mock */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-[var(--border-muted)] bg-[var(--bg-elevated)] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="mx-auto max-w-xs rounded bg-[var(--bg-primary)] px-3 py-1.5 text-center text-xs text-[var(--text-muted)]">
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
                <div key={stat.label} className="rounded-lg border border-[var(--border-muted)] bg-[var(--bg-elevated)] p-3 md:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg md:text-xl">{stat.icon}</span>
                    <span className="text-[10px] text-green-400 md:text-xs">{stat.change}</span>
                  </div>
                  <div className="text-xl font-bold md:text-2xl">{stat.value}</div>
                  <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Two column layout */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* Activity feed */}
              <div className="rounded-lg border border-[var(--border-muted)] bg-[var(--bg-elevated)] p-4">
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-sm">
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
                      <span className="text-[var(--text-muted)] w-8 shrink-0">{item.time}</span>
                      <span className={item.color}>•</span>
                      <span className="text-[var(--text-secondary)]">{item.event}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agent status */}
              <div className="rounded-lg border border-[var(--border-muted)] bg-[var(--bg-elevated)] p-4">
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-sm">
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
                        <span className={`h-2 w-2 rounded-full ${agent.status === "Active" ? "bg-green-500" : "bg-[var(--text-muted)]"}`}></span>
                        <span>{agent.name}</span>
                      </div>
                      <span className="text-[var(--text-muted)]">{agent.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/dashboard" className="text-sm text-[var(--accent-primary)] hover:underline">
            Explore the Full Dashboard →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-[var(--border-muted)] bg-[var(--bg-secondary)]">
        <div className="container py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
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
                      <strong className="text-[var(--text-primary)]">{item.title}</strong>
                      <span className="text-[var(--text-secondary)]"> — {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
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
                      <strong className="text-[var(--text-primary)]">{item.title}</strong>
                      <span className="text-[var(--text-secondary)]"> — {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center rounded-2xl border border-[var(--accent-primary)]/20 bg-[var(--accent-subtle)] p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl">Ready to buidl?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
            Clone the recipe, configure your agents, and launch your hackathon today.
            It's free, open-source, and yours forever.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/evmsystems-ai/buidl-lol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[var(--accent-primary)] px-8 font-semibold text-white hover:bg-[var(--accent-hover)] transition glow sm:w-auto"
            >
              🚀 Clone the Recipe
            </a>
            <a
              href="https://discord.gg/buidl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[var(--border-default)] px-8 font-medium hover:border-[var(--border-emphasis)] hover:bg-[var(--bg-hover)] transition sm:w-auto"
            >
              💬 Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="container pb-16 text-center">
        <p className="text-[var(--text-muted)] text-sm mb-4">
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
            className="flex-1 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 text-sm placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
            required
          />
          <button
            type="submit"
            className="rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] px-6 py-3 text-sm font-medium hover:bg-[var(--bg-hover)] transition"
          >
            Notify Me
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-muted)]">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span>🏗️</span>
              <span>buidl.lol</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--text-secondary)]">
              <a href="https://github.com/evmsystems-ai/buidl-lol" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">
                GitHub
              </a>
              <a href="https://github.com/evmsystems-ai/buidl-lol/tree/main/agents" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">
                Docs
              </a>
              <a href="https://discord.gg/buidl" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">
                Discord
              </a>
              <a href="https://twitter.com/buidl_lol" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">
                Twitter
              </a>
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              Built with 🤖 by{" "}
              <a href="https://evmsystems.ai" className="hover:text-[var(--text-primary)]">
                EVM Systems
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
