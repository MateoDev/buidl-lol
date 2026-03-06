"use client";

import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  status?: "draft" | "live" | "completed";
  onToggleSidebar?: () => void;
  actions?: ReactNode;
}

const statusColors = {
  draft: "bg-zinc-800 text-zinc-400",
  live: "bg-green-500/20 text-green-400",
  completed: "bg-zinc-800 text-zinc-500",
};

export function Header({ title, status, onToggleSidebar, actions }: HeaderProps) {
  return (
    <header className="flex items-center gap-4 px-4 py-3 border-b border-zinc-800">
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 transition-colors"
        aria-label="Toggle sidebar"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <div className="flex-1">
        <h1 className="text-sm font-medium text-white">{title}</h1>
      </div>
      
      {status && (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      )}
      
      {actions}
    </header>
  );
}
