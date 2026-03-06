"use client";

import Link from "next/link";

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900">
            <span className="text-xl">🏗️</span>
            <span>buidl.lol</span>
          </Link>
          <Link href="/organizer" className="text-sm text-zinc-600 hover:text-zinc-900 transition">
            I'm an Organizer →
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-100 text-sm text-zinc-600">
              For Builders
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Find opportunities,<br />build, get paid
            </h1>
            <p className="text-lg text-zinc-500 max-w-xl mx-auto">
              Discover hackathons, bounty programs, and innovation challenges. 
              Get matched with teams, receive 24/7 support, and earn rewards.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6 mb-12">
            {[
              {
                step: "1",
                title: "Clone the repo",
                description: "Get started with the buidl.lol platform locally or browse live instances.",
                code: "git clone https://github.com/evmsystems-ai/buidl-lol.git",
              },
              {
                step: "2",
                title: "Browse active programs",
                description: "Find hackathons, bounties, and challenges that match your skills and interests.",
              },
              {
                step: "3",
                title: "Build and submit",
                description: "Work solo or get matched with a team. The Guide agent provides 24/7 technical support.",
              },
              {
                step: "4",
                title: "Get evaluated and paid",
                description: "AI-powered judging ensures fair evaluation. Automatic payouts via the Treasurer agent.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-6 rounded-xl border border-zinc-200">
                <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-500 mb-3">{item.description}</p>
                  {item.code && (
                    <div className="bg-zinc-900 text-zinc-300 rounded-lg px-4 py-3 text-sm font-mono overflow-x-auto">
                      {item.code}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://github.com/evmsystems-ai/buidl-lol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition"
            >
              Get Started on GitHub
            </a>
            <p className="mt-4 text-sm text-zinc-400">
              Or find a <a href="#" className="text-zinc-600 hover:text-zinc-900 underline">live instance</a> to join
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900">
            ← Back to home
          </Link>
          <a 
            href="https://github.com/evmsystems-ai/buidl-lol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-900"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
