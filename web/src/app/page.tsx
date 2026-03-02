"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const agents = [
    {
      name: "Organizer",
      emoji: "📋",
      description: "Manages events, timelines, and announcements",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Team Former",
      emoji: "🤝",
      description: "Matches participants into balanced teams",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Mentor",
      emoji: "🧑‍🏫",
      description: "Provides technical guidance and resources",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Submission",
      emoji: "📥",
      description: "Handles project submissions and validation",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Judge",
      emoji: "⚖️",
      description: "Coordinates scoring and results",
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
      {/* Hero */}
      <header className="container mx-auto px-6 py-24 text-center">
        <div className="mb-6 text-6xl">🏗️</div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          buidl.lol
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          The Agent Hackathon Platform — Open-source infrastructure for running
          AI-powered hackathons
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/MateoDev/buidl-lol"
            target="_blank"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            ⭐ Star on GitHub
          </a>
          <a
            href="#agents"
            className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition"
          >
            View Agents →
          </a>
        </div>
      </header>

      {/* Agents Grid */}
      <section id="agents" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Your Hackathon Agents
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition group"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition`}
              >
                {agent.emoji}
              </div>
              <h3 className="text-xl font-semibold mb-2">{agent.name} Agent</h3>
              <p className="text-gray-400">{agent.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">🔧 For Organizers</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• One-click hackathon setup</li>
              <li>• Automated announcements & reminders</li>
              <li>• Team formation matching</li>
              <li>• Submission management</li>
              <li>• Judging coordination</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">🚀 For Participants</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• AI mentor on-demand</li>
              <li>• Smart team matching</li>
              <li>• Easy project submission</li>
              <li>• Real-time updates</li>
              <li>• Fair, transparent judging</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to buidl?</h2>
        <p className="text-gray-400 mb-8">
          Join the waitlist for early access
        </p>
        <form
          className="flex gap-3 max-w-md mx-auto"
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
            className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Join Waitlist
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p>
          Built with 🤖 by{" "}
          <a
            href="https://evmcapital.com"
            className="text-gray-400 hover:text-white"
          >
            EVM Systems
          </a>
        </p>
      </footer>
    </div>
  );
}
