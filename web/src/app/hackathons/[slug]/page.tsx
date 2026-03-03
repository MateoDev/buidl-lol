"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { useAccount } from "wagmi";

export default function HackathonDetailPage() {
  const params = useParams();
  const { address, isConnected } = useAccount();
  const [hackathon, setHackathon] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState(false);

  useEffect(() => {
    // Mock data - will fetch from API
    setHackathon({
      id: "1",
      slug: params.slug,
      name: "AI Agents Hackathon",
      description: "Build the next generation of autonomous AI agents.",
      longDescription: `
## About This Hackathon

Join us for a week-long hackathon focused on building autonomous AI agents. 
Whether you're building trading bots, research assistants, or creative agents, 
this is your chance to push the boundaries of what's possible.

## Tracks

- **Productivity Agents** - Tools that help humans work smarter
- **Creative Agents** - AI that creates art, music, or content
- **DeFi Agents** - Autonomous trading and financial agents
- **Open Track** - Surprise us!

## Rules

1. All code must be written during the hackathon
2. Teams of 1-4 people
3. Must use at least one AI model (OpenAI, Anthropic, etc.)
4. Projects must be open source
      `,
      status: "ACTIVE",
      hackathonStart: "2026-03-15T00:00:00Z",
      hackathonEnd: "2026-03-22T00:00:00Z",
      registrationStart: "2026-03-01T00:00:00Z",
      registrationEnd: "2026-03-14T00:00:00Z",
      prizePool: "$50,000",
      prizes: [
        { place: 1, amount: "$20,000", description: "Grand Prize" },
        { place: 2, amount: "$10,000", description: "Runner Up" },
        { place: 3, amount: "$5,000", description: "Third Place" },
      ],
      _count: { participants: 234, teams: 67, submissions: 0 },
      organizer: { ensName: "vitalik.eth", avatar: null },
      tracks: [
        { id: "1", name: "Productivity Agents", prize: "$5,000" },
        { id: "2", name: "Creative Agents", prize: "$5,000" },
        { id: "3", name: "DeFi Agents", prize: "$5,000" },
      ],
      agentConfigs: [
        { agentType: "ORGANIZER", enabled: true },
        { agentType: "TEAM_FORMER", enabled: true },
        { agentType: "MENTOR", enabled: true },
        { agentType: "SUBMISSION", enabled: true },
        { agentType: "JUDGE", enabled: false },
      ],
    });
    setLoading(false);
  }, [params.slug]);

  const handleRegister = async () => {
    if (!isConnected) return;
    setRegistering(true);
    // TODO: Call API
    await new Promise((r) => setTimeout(r, 1000));
    alert("Registered successfully!");
    setRegistering(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center text-gray-400">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero Banner */}
      <div className="h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
        <div className="container mx-auto px-6 h-full flex items-end pb-8 relative">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500">
                Live Now
              </span>
              <span className="text-green-400 font-semibold">
                {hackathon.prizePool} in prizes
              </span>
            </div>
            <h1 className="text-5xl font-bold">{hackathon.name}</h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-gray-400 mb-4">{hackathon.description}</p>
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">
                  {hackathon.longDescription}
                </pre>
              </div>
            </div>

            {/* Tracks */}
            <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4">Tracks</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {hackathon.tracks.map((track: any) => (
                  <div
                    key={track.id}
                    className="p-4 rounded-xl bg-gray-800/50 border border-gray-700"
                  >
                    <h3 className="font-medium mb-1">{track.name}</h3>
                    <p className="text-green-400 text-sm">{track.prize}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prizes */}
            <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4">Prizes</h2>
              <div className="space-y-3">
                {hackathon.prizes.map((prize: any) => (
                  <div
                    key={prize.place}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-800/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {prize.place === 1 ? "🥇" : prize.place === 2 ? "🥈" : "🥉"}
                      </span>
                      <span className="font-medium">{prize.description}</span>
                    </div>
                    <span className="text-green-400 font-semibold">
                      {prize.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Register Card */}
            <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6 sticky top-24">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Participants</span>
                  <span className="font-medium">{hackathon._count.participants}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Teams</span>
                  <span className="font-medium">{hackathon._count.teams}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Starts</span>
                  <span className="font-medium">
                    {new Date(hackathon.hackathonStart).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Ends</span>
                  <span className="font-medium">
                    {new Date(hackathon.hackathonEnd).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {isConnected ? (
                <button
                  onClick={handleRegister}
                  disabled={registering}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition disabled:opacity-50"
                >
                  {registering ? "Registering..." : "Register Now"}
                </button>
              ) : (
                <p className="text-center text-gray-400 text-sm">
                  Connect wallet to register
                </p>
              )}

              <div className="mt-4 flex gap-2">
                <Link
                  href={`/hackathons/${params.slug}/teams`}
                  className="flex-1 py-2 text-center bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition"
                >
                  View Teams
                </Link>
                <Link
                  href={`/hackathons/${params.slug}/submissions`}
                  className="flex-1 py-2 text-center bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition"
                >
                  Submissions
                </Link>
              </div>
            </div>

            {/* Active Agents */}
            <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                🤖 Active Agents
              </h3>
              <div className="space-y-2">
                {hackathon.agentConfigs.map((agent: any) => (
                  <div
                    key={agent.agentType}
                    className="flex items-center justify-between text-sm"
                  >
                    <span>{agent.agentType.replace("_", " ")}</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        agent.enabled ? "bg-green-500" : "bg-gray-500"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Organizer */}
            <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6">
              <h3 className="font-semibold mb-4">Organizer</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  👤
                </div>
                <span className="font-medium">{hackathon.organizer.ensName}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
