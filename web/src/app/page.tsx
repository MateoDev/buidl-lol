"use client";

import Link from "next/link";

export default function Home() {
  const agents = [
    {
      name: "Organizer",
      description: "Manages hackathon lifecycle, timelines, announcements, and participant communications.",
      icon: "📋",
    },
    {
      name: "Judge", 
      description: "Multi-pass evaluation with anti-gaming detection. Scores submissions fairly at scale.",
      icon: "⚖️",
    },
    {
      name: "Bounty Distribution",
      description: "Secure multi-sig payments. On-chain USDC or fiat rails. Automatic winner payouts.",
      icon: "💰",
    },
    {
      name: "Dev Rel Support",
      description: "24/7 technical mentoring trained on your SDK docs. Answers questions, debugs issues.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900">
            <span className="text-xl">🏗️</span>
            <span>buidl.lol</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-zinc-600 hover:text-zinc-900 transition">How it works</a>
            <a href="#agents" className="text-sm text-zinc-600 hover:text-zinc-900 transition">Agent Operators</a>
            <a href="https://github.com/evmsystems-ai/buidl-lol" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-zinc-900 transition">GitHub</a>
          </div>
          <a 
            href="https://github.com/evmsystems-ai/buidl-lol" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition"
          >
            Star on GitHub →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-100 text-sm text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Open Source
          </div>
          
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            The coordination layer for<br />
            <span className="text-zinc-400">innovation programs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10">
            Run hackathons, bounty programs, and innovation challenges with AI agent operators. 
            Self-host or let us manage it for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/builder"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition"
            >
              Get Started as Builder
            </Link>
            <Link 
              href="/organizer"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 bg-white text-zinc-900 font-medium rounded-lg border border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition"
            >
              Get Started as Organizer
            </Link>
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden shadow-2xl shadow-zinc-200/50">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 border-b border-zinc-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="w-64 mx-auto bg-white rounded px-3 py-1 text-xs text-zinc-400 text-center border border-zinc-200">
                  hub.buidl.lol
                </div>
              </div>
            </div>
            
            {/* Interface mock */}
            <div className="flex h-[400px] md:h-[500px]">
              {/* Sidebar */}
              <div className="w-56 border-r border-zinc-200 bg-white p-4 hidden md:block">
                <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900 text-white text-sm rounded-lg mb-4">
                  <span>+</span> New Program
                </div>
                <div className="space-y-1 text-sm">
                  <div className="px-3 py-2 rounded-lg bg-zinc-100 text-zinc-900">ETH Denver 2026</div>
                  <div className="px-3 py-2 rounded-lg text-zinc-500 hover:bg-zinc-50">Base Buildathon</div>
                  <div className="px-3 py-2 rounded-lg text-zinc-500 hover:bg-zinc-50">Ongoing Bounties</div>
                </div>
              </div>
              
              {/* Main area */}
              <div className="flex-1 flex flex-col bg-white">
                <div className="flex-1 p-6 overflow-auto">
                  <div className="max-w-xl mx-auto space-y-6">
                    {/* Assistant message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white text-sm flex-shrink-0">🏗️</div>
                      <div className="flex-1">
                        <div className="bg-zinc-100 rounded-2xl rounded-tl-md px-4 py-3 text-sm text-zinc-700">
                          <p className="mb-3">I've drafted your hackathon configuration:</p>
                          <div className="bg-white rounded-lg border border-zinc-200 p-3 text-xs space-y-1">
                            <div><span className="text-zinc-400">Theme:</span> DeFi Innovation</div>
                            <div><span className="text-zinc-400">Duration:</span> 48 hours</div>
                            <div><span className="text-zinc-400">Prize Pool:</span> $25,000 USDC</div>
                            <div><span className="text-zinc-400">Tracks:</span> 3 (Lending, DEX, Yield)</div>
                          </div>
                          <p className="mt-3 text-zinc-500">Should I generate the challenge descriptions and judging criteria?</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-zinc-900 text-white rounded-2xl rounded-tr-md px-4 py-3 text-sm max-w-[80%]">
                        Yes, generate challenges for each track with $5K bounties
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Input */}
                <div className="p-4 border-t border-zinc-200">
                  <div className="flex items-center gap-3 px-4 py-3 bg-zinc-100 rounded-xl">
                    <input 
                      type="text" 
                      placeholder="Describe your innovation program..." 
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
                      disabled
                    />
                    <button className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-32 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">How it works</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Deploy the platform and agents, configure your program, and let AI handle operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Deploy",
                description: "Clone the repo and deploy with one command. Self-host on your infrastructure or use our managed service.",
              },
              {
                step: "02", 
                title: "Configure",
                description: "Set up your hackathon, bounty program, or innovation challenge through the conversational interface.",
              },
              {
                step: "03",
                title: "Run",
                description: "AI agent operators handle participant support, judging, and prize distribution. You focus on community.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-semibold text-zinc-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Operators */}
      <section id="agents" className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Agent Operators</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Four specialized AI agents work together to run your innovation program around the clock.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <div key={agent.name} className="p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-2xl flex-shrink-0">
                    {agent.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{agent.name}</h3>
                    <p className="text-sm text-zinc-500">{agent.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OSS Section */}
      <section className="py-20 md:py-32 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Open source, your way</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
            buidl.lol is fully open source. Self-host the entire platform and agents on your infrastructure, 
            or work with us for a managed white-label deployment — like Discourse, but for innovation programs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="https://github.com/evmsystems-ai/buidl-lol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition"
            >
              View on GitHub
            </a>
            <a 
              href="mailto:matt@evmsystems.ai"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 bg-zinc-800 text-white font-medium rounded-lg border border-zinc-700 hover:bg-zinc-700 transition"
            >
              Contact for Managed Hosting
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
            <div>
              <div className="text-2xl font-semibold">MIT</div>
              <div className="text-sm text-zinc-500">License</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">100%</div>
              <div className="text-sm text-zinc-500">Open Source</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">4</div>
              <div className="text-sm text-zinc-500">Agent Operators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to coordinate innovation?</h2>
          <p className="text-zinc-500 max-w-xl mx-auto mb-10">
            Whether you're a builder looking for opportunities or an organizer launching a program, 
            buidl.lol has you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/builder"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition"
            >
              Get Started as Builder
            </Link>
            <Link 
              href="/organizer"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 bg-white text-zinc-900 font-medium rounded-lg border border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition"
            >
              Get Started as Organizer
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <span>🏗️</span>
            <span>buidl.lol</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="https://github.com/evmsystems-ai/buidl-lol" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">GitHub</a>
            <a href="https://twitter.com/buidl_lol" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">Twitter</a>
            <a href="mailto:matt@evmsystems.ai" className="hover:text-zinc-900">Contact</a>
          </div>
          <div className="text-sm text-zinc-400">
            Built by <a href="https://evmsystems.ai" className="hover:text-zinc-900">EVM Systems</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
