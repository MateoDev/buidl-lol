"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

interface Hackathon {
  id: string;
  slug: string;
  name: string;
  description: string;
  bannerUrl?: string;
  status: string;
  hackathonStart: string;
  hackathonEnd: string;
  prizePool?: string;
  _count: {
    participants: number;
    teams: number;
    submissions: number;
  };
  organizer: {
    displayName?: string;
    ensName?: string;
    avatar?: string;
  };
}

export default function HackathonsPage() {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    // Mock data for now - will fetch from API
    setHackathons([
      {
        id: "1",
        slug: "ai-agents-hackathon",
        name: "AI Agents Hackathon",
        description: "Build the next generation of autonomous AI agents. $50K in prizes.",
        status: "ACTIVE",
        hackathonStart: "2026-03-15T00:00:00Z",
        hackathonEnd: "2026-03-22T00:00:00Z",
        prizePool: "$50,000",
        _count: { participants: 234, teams: 67, submissions: 0 },
        organizer: { ensName: "vitalik.eth" },
      },
      {
        id: "2",
        slug: "defi-builder-weekend",
        name: "DeFi Builder Weekend",
        description: "48-hour sprint to build DeFi primitives on Base.",
        status: "REGISTRATION_OPEN",
        hackathonStart: "2026-03-28T00:00:00Z",
        hackathonEnd: "2026-03-30T00:00:00Z",
        prizePool: "$25,000",
        _count: { participants: 89, teams: 0, submissions: 0 },
        organizer: { ensName: "base.eth" },
      },
      {
        id: "3",
        slug: "onchain-gaming-jam",
        name: "Onchain Gaming Jam",
        description: "Create fully onchain games. No backend servers allowed.",
        status: "REGISTRATION_OPEN",
        hackathonStart: "2026-04-05T00:00:00Z",
        hackathonEnd: "2026-04-12T00:00:00Z",
        prizePool: "$30,000",
        _count: { participants: 156, teams: 28, submissions: 0 },
        organizer: { displayName: "Lattice" },
      },
    ]);
    setLoading(false);
  }, []);

  const statusColors: Record<string, string> = {
    DRAFT: "bg-gray-500",
    REGISTRATION_OPEN: "bg-green-500",
    REGISTRATION_CLOSED: "bg-yellow-500",
    ACTIVE: "bg-blue-500",
    SUBMISSIONS_OPEN: "bg-purple-500",
    JUDGING: "bg-orange-500",
    COMPLETED: "bg-gray-400",
  };

  const statusLabels: Record<string, string> = {
    DRAFT: "Draft",
    REGISTRATION_OPEN: "Registration Open",
    REGISTRATION_CLOSED: "Registration Closed",
    ACTIVE: "Live Now",
    SUBMISSIONS_OPEN: "Submissions Open",
    JUDGING: "Judging",
    COMPLETED: "Completed",
  };

  const filteredHackathons = hackathons.filter((h) => {
    if (filter === "all") return true;
    if (filter === "live") return h.status === "ACTIVE";
    if (filter === "upcoming") return h.status === "REGISTRATION_OPEN";
    if (filter === "past") return h.status === "COMPLETED";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      <main className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Hackathons</h1>
            <p className="text-gray-400">
              Discover and join AI-powered hackathons
            </p>
          </div>
          <Link
            href="/hackathons/create"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-medium transition"
          >
            + Create Hackathon
          </Link>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-8">
          {["all", "live", "upcoming", "past"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === f
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Hackathon Grid */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHackathons.map((hackathon) => (
              <Link
                key={hackathon.id}
                href={`/hackathons/${hackathon.slug}`}
                className="group rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500/50 transition overflow-hidden"
              >
                {/* Banner */}
                <div className="h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative">
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[hackathon.status]}`}
                    >
                      {statusLabels[hackathon.status]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
                    {hackathon.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {hackathon.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>👥 {hackathon._count.participants}</span>
                    <span>🤝 {hackathon._count.teams} teams</span>
                    {hackathon.prizePool && (
                      <span className="text-green-400">
                        💰 {hackathon.prizePool}
                      </span>
                    )}
                  </div>

                  {/* Organizer */}
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>by</span>
                    <span className="font-medium text-white">
                      {hackathon.organizer.ensName ||
                        hackathon.organizer.displayName}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredHackathons.length === 0 && !loading && (
          <div className="text-center py-20 text-gray-400">
            No hackathons found
          </div>
        )}
      </main>
    </div>
  );
}
