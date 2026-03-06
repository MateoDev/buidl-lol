"use client";

import Link from "next/link";

export default function OrganizerPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900">
            <span className="text-xl">🏗️</span>
            <span>buidl.lol</span>
          </Link>
          <Link href="/builder" className="text-sm text-zinc-600 hover:text-zinc-900 transition">
            I'm a Builder →
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-100 text-sm text-zinc-600">
              For Organizers
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Launch innovation programs<br />without the overhead
            </h1>
            <p className="text-lg text-zinc-500 max-w-xl mx-auto">
              Run hackathons, bounty programs, and challenges with AI agent operators. 
              Self-host or use our managed white-label service.
            </p>
          </div>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Self-host */}
            <div className="p-6 rounded-xl border border-zinc-200">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-2xl mb-4">
                🛠️
              </div>
              <h3 className="text-xl font-semibold mb-2">Self-Host</h3>
              <p className="text-sm text-zinc-500 mb-4">
                Clone the repo and deploy on your own infrastructure. Full control, MIT licensed, no vendor lock-in.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                {[
                  "Full platform + 4 agent operators",
                  "Deploy anywhere (Vercel, Railway, AWS)",
                  "Customize UI and agents",
                  "Community support on GitHub",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-zinc-600">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://github.com/evmsystems-ai/buidl-lol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full h-10 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition"
              >
                View on GitHub
              </a>
            </div>

            {/* Managed */}
            <div className="p-6 rounded-xl border-2 border-zinc-900">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-2xl mb-4">
                ☁️
              </div>
              <h3 className="text-xl font-semibold mb-2">Managed White-Label</h3>
              <p className="text-sm text-zinc-500 mb-4">
                We deploy and manage the platform for you. Custom branding, dedicated support, enterprise SLAs.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                {[
                  "Fully managed infrastructure",
                  "Custom domain + branding",
                  "Dedicated account manager",
                  "Enterprise SLAs + support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-zinc-600">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:matt@evmsystems.ai?subject=buidl.lol Managed Hosting"
                className="inline-flex items-center justify-center w-full h-10 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Use cases */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-center">Built for</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { emoji: "🏛️", label: "Protocols" },
                { emoji: "🏢", label: "Enterprises" },
                { emoji: "🎓", label: "Universities" },
                { emoji: "🌐", label: "Communities" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-xl bg-zinc-50">
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <div className="text-sm text-zinc-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick deploy */}
          <div className="bg-zinc-900 text-white rounded-xl p-6">
            <h3 className="font-semibold mb-2">Quick Deploy</h3>
            <p className="text-sm text-zinc-400 mb-4">Get running in under 5 minutes:</p>
            <div className="bg-zinc-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <div className="text-zinc-400"># Clone and deploy</div>
              <div>git clone https://github.com/evmsystems-ai/buidl-lol.git</div>
              <div>cd buidl-lol</div>
              <div>npm install && npm run deploy</div>
            </div>
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
