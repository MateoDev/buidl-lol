"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

export interface HackathonItem {
  id: string;
  name: string;
  status: "draft" | "live" | "completed";
}

interface SidebarProps {
  hackathons: HackathonItem[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  onNewHackathon?: () => void;
}

const statusStyles = {
  draft: "text-zinc-400",
  live: "text-green-400",
  completed: "text-zinc-500",
};

export function Sidebar({ hackathons, selectedId, onSelect, onNewHackathon }: SidebarProps) {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-900/50 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <span className="text-xl">🏗️</span>
          <span className="font-semibold">buidl.lol</span>
        </Link>
      </div>

      {/* New hackathon button */}
      <div className="p-3">
        <Button
          variant="secondary"
          className="w-full justify-start gap-2"
          onClick={onNewHackathon}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Hackathon
        </Button>
      </div>

      {/* Hackathon list */}
      <nav className="flex-1 overflow-auto p-2">
        <div className="text-xs text-zinc-500 px-2 py-2 font-medium">Recent</div>
        <ul className="space-y-1">
          {hackathons.map((h) => (
            <li key={h.id}>
              <button
                onClick={() => onSelect?.(h.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                  selectedId === h.id
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-300"
                }`}
              >
                <span className="truncate">{h.name}</span>
                <span className={`text-xs ${statusStyles[h.status]}`}>{h.status}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500" />
          <div className="flex-1 min-w-0">
            <div className="text-sm text-white truncate">organizer.eth</div>
            <div className="text-xs text-zinc-500">Sponsor Tier</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
