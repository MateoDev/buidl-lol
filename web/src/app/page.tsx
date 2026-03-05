"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const agents = [
    {
      name: "Architect",
      role: "Challenge Design",
      desc: "Generates hackathon challenges from sponsor SDK docs",
      color: "orange",
      status: "online",
    },
    {
      name: "Evaluator", 
      role: "Multi-Pass Judging",
      desc: "Scores submissions with anti-gaming protection",
      color: "purple",
      status: "online",
    },
    {
      name: "Treasurer",
      role: "Payment Execution",
      desc: "Multi-sig bounty distribution on-chain",
      color: "emerald",
      status: "online",
    },
    {
      name: "Guide",
      role: "24/7 Mentoring",
      desc: "Technical support trained on partner docs",
      color: "cyan",
      status: "online",
    },
    {
      name: "Herald",
      role: "Marketing & Comms",
      desc: "Pre-event campaigns to post-event case studies",
      color: "pink",
      status: "online",
    },
    {
      name: "Matchmaker",
      role: "Team Formation",
      desc: "AI-powered skill-based team matching",
      color: "amber",
      status: "online",
    },
  ];

  const colorClasses: Record<string, string> = {
    orange: "border-orange-500/30 bg-orange-500/5 hover:border-orange-500/50",
    purple: "border-purple-500/30 bg-purple-500/5 hover:border-purple-500/50",
    emerald: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50",
    cyan: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/50",
    pink: "border-pink-500/30 bg-pink-500/5 hover:border-pink-500/50",
    amber: "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50",
  };

  const dotClasses: Record<string, string> = {
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    emerald: "bg-emerald-500",
    cyan: "bg-cyan-500",
    pink: "bg-pink-500",
    amber: "bg-amber-500",
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

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition">How It Works</a>
            <a href="#agents" className="text-sm text-zinc-400 hover:text-white transition">Agents</a>
            <a href="#hub" className="text-sm text-zinc-400 hover:text-white transition">Hub</a>
            <a href="https://github.com/evmsystems-ai/buidl-lol" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition">GitHub</a>
            <Link href="/hub" className="btn btn-primary h-9 px-4 text-sm glow-orange">
              Launch Hub
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-900 p-4">
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-sm text-zinc-400" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#agents" className="text-sm text-zinc-400" onClick={() => setMobileMenuOpen(false)}>Agents</a>
              <a href="#hub" className="text-sm text-zinc-400" onClick={() => setMobileMenuOpen(false)}>Hub</a>
              <Link href="/hub" className="btn btn-primary h-10 text-sm">Launch Hub</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-grid">
        <div className="container-narrow text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-sm text-orange-400">
            <span className="w-2 h-2 rounded-full bg-orange-500 status-processing"></span>
            24/7 Autonomous
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hackathons That{" "}
            <span className="gradient-text">Never Sleep</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Six AI agents run your hackathon end-to-end: challenge design, 
            mentoring, judging, and prize distribution. Zero ops overhead.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/hub" className="btn btn-primary h-12 px-8 text-base glow-orange w-full sm:w-auto">
              Launch Your Hackathon
            </Link>
            <a
              href="https://github.com/evmsystems-ai/buidl-lol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary h-12 px-8 text-base w-full sm:w-auto"
            >
              Deploy Agents →
            </a>
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            Open source • Self-host or managed via XO
          </p>
        </div>

        {/* Floating stats */}
        <div className="container-wide mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "700+", label: "Hackathons inspiration" },
              { value: "6", label: "Autonomous agents" },
              { value: "24/7", label: "Always running" },
              { value: "$0", label: "Ops overhead" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg border border-zinc-800 bg-zinc-900/50">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32 border-t border-zinc-800">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Traditional vs <span className="gradient-text">buidl.lol</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              We replace 3 months of planning, $65K in costs, and 5+ staff with 
              autonomous agents that run hackathons 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">😓</span>
                <h3 className="text-lg font-semibold text-zinc-400">Traditional Hackathon</h3>
              </div>
              <ul className="space-y-4 text-sm">
                {[
                  "3 month planning cycle",
                  "$30K-$65K operational cost",
                  "5+ dedicated staff required",
                  "Judge fatigue on 30+ projects",
                  "Episodic — insights decay post-event",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-400">
                    <span className="text-red-400 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* buidl.lol */}
            <div className="p-6 rounded-xl border border-orange-500/30 bg-orange-500/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🚀</span>
                <h3 className="text-lg font-semibold text-orange-400">buidl.lol</h3>
              </div>
              <ul className="space-y-4 text-sm">
                {[
                  "Launch in minutes via Hub",
                  "Near-zero marginal ops cost",
                  "6 AI agents that never sleep",
                  "Multi-pass judging with anti-gaming",
                  "Continuous mode — always-on bounties",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-300">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agents */}
      <section id="agents" className="py-20 md:py-32 border-t border-zinc-800 bg-zinc-900/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Agent Fleet
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Six specialized agents with clear separation of concerns. 
              Deploy individually or as a coordinated ensemble.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className={`p-5 rounded-xl border transition card-hover ${colorClasses[agent.color]}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{agent.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${dotClasses[agent.color]} status-online`}></span>
                    <span className="text-xs text-zinc-500">Online</span>
                  </div>
                </div>
                <div className="text-sm text-zinc-400 mb-2">{agent.role}</div>
                <p className="text-sm text-zinc-500">{agent.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/evmsystems-ai/buidl-lol/tree/main/agents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-orange-400 hover:underline"
            >
              View Agent Specifications →
            </a>
          </div>
        </div>
      </section>

      {/* Hub Preview */}
      <section id="hub" className="py-20 md:py-32 border-t border-zinc-800">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="gradient-text-cyan">Hub</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              ChatGPT-style interface for hackathon organization. 
              Configure, launch, and monitor — all in one place.
            </p>
          </div>

          {/* Hub Mock */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/80">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="text-xs text-zinc-500 text-center">hub.buidl.lol</div>
              </div>
            </div>

            {/* Hub UI */}
            <div className="flex h-[500px]">
              {/* Sidebar */}
              <div className="w-64 border-r border-zinc-800 p-4 hidden md:block">
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800 text-sm text-white mb-4">
                  <span>+</span> New Hackathon
                </button>
                <div className="space-y-1">
                  {["ETH Denver 2026", "Base Buildathon", "AI Agents Track"].map((name) => (
                    <div key={name} className="px-3 py-2 rounded-lg text-sm text-zinc-400 hover:bg-zinc-800 cursor-pointer truncate">
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main chat area */}
              <div className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 p-6 space-y-6 overflow-auto">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-br-md bg-orange-500 text-white text-sm">
                      Create a 48-hour hackathon for the Base ecosystem with 3 tracks
                    </div>
                  </div>

                  {/* Assistant message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xs">
                      🏗️
                    </div>
                    <div className="max-w-[80%]">
                      <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-zinc-800 text-sm text-zinc-200">
                        <p className="mb-3">I'll set up your Base hackathon with 3 tracks. Here's the configuration:</p>
                        <div className="p-3 rounded-lg bg-zinc-900 text-xs font-mono space-y-1">
                          <div><span className="text-cyan-400">Theme:</span> Base Ecosystem</div>
                          <div><span className="text-cyan-400">Duration:</span> 48 hours</div>
                          <div><span className="text-cyan-400">Tracks:</span></div>
                          <div className="pl-4">• DeFi Innovation</div>
                          <div className="pl-4">• Consumer Apps</div>
                          <div className="pl-4">• Infrastructure</div>
                        </div>
                        <p className="mt-3 text-zinc-400">Want me to generate bounties for each track?</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t border-zinc-800">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700">
                    <input
                      type="text"
                      placeholder="Configure your hackathon..."
                      className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
                      disabled
                    />
                    <button className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/hub" className="btn btn-primary h-12 px-8 text-base glow-orange">
              Try the Hub
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t border-zinc-800 bg-grid">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gradient-text">buidl</span>?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10">
            Launch a hackathon in minutes. Self-host the agents from GitHub, 
            or let XO manage your infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/hub" className="btn btn-primary h-12 px-8 text-base glow-orange w-full sm:w-auto">
              Launch via Hub
            </Link>
            <a
              href="https://github.com/evmsystems-ai/buidl-lol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary h-12 px-8 text-base w-full sm:w-auto"
            >
              Clone from GitHub
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            Need managed hosting?{" "}
            <a href="mailto:matt@evmsystems.ai" className="text-orange-400 hover:underline">
              Contact us about XO
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span>🏗️</span>
            <span className="font-semibold">buidl.lol</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="https://github.com/evmsystems-ai/buidl-lol" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href="#agents" className="hover:text-white">Docs</a>
            <a href="https://discord.gg/buidl" target="_blank" rel="noopener noreferrer" className="hover:text-white">Discord</a>
            <a href="https://twitter.com/buidl_lol" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
          </div>
          <p className="text-xs text-zinc-500">
            Built by <a href="https://evmsystems.ai" className="hover:text-white">EVM Systems</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
