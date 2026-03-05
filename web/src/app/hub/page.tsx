"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface Hackathon {
  id: string;
  name: string;
  status: "draft" | "live" | "completed";
  createdAt: Date;
}

export default function HubPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hey! I'm your hackathon co-pilot. Tell me about the hackathon you want to create, and I'll help you configure everything — challenges, bounties, judging criteria, timeline, and more.\n\nTry: \"Create a 48-hour DeFi hackathon with $10K in prizes\"",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const hackathons: Hackathon[] = [
    { id: "1", name: "ETH Denver 2026", status: "live", createdAt: new Date() },
    { id: "2", name: "Base Buildathon", status: "draft", createdAt: new Date() },
    { id: "3", name: "AI Agents Track", status: "completed", createdAt: new Date() },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("defi") || q.includes("finance")) {
      return `Great choice! I'll set up a DeFi-focused hackathon. Here's a draft configuration:

**Theme:** DeFi Innovation
**Suggested Tracks:**
• Lending & Borrowing Protocols
• DEX & Trading Infrastructure  
• Yield Optimization

**Bounty Allocation:**
• Track prizes: $3K each ($9K total)
• Grand prize: $1K
• Total: $10K

Would you like me to:
1. Generate detailed challenge descriptions for each track?
2. Set up the judging rubric?
3. Configure the timeline?`;
    }
    
    if (q.includes("agent") || q.includes("ai")) {
      return `AI Agents hackathon — love it! Here's what I'm thinking:

**Theme:** Autonomous Agent Builders
**Suggested Tracks:**
• Tool-Using Agents (MCP integration)
• Multi-Agent Coordination
• Agent UX & Interfaces

**Recommended Stack:**
• Openclaw for agent coordination
• Gaia for inference
• XO for orchestration

Should I draft the challenge statements? I can also suggest relevant sponsors from our network.`;
    }

    if (q.includes("sponsor") || q.includes("partner")) {
      return `To add sponsors, I'll need:

1. **Sponsor name & tier** (Sentient $20K / Expert $10K / In-Kind)
2. **SDK/API documentation URL** — I'll use this to generate relevant challenges
3. **Primary objective** (developer marketing / hiring / protocol adoption)
4. **Bounty budget** they're contributing

Once you provide these, The Architect agent will generate optimized challenges based on their docs.`;
    }

    if (q.includes("launch") || q.includes("go live")) {
      return `Before we go live, let me run the pre-launch checklist:

✓ Hackathon theme configured
✓ Tracks and bounties set
✓ Judging rubric defined
○ Timeline — needs confirmation
○ Sponsor approvals — 2 pending

**Agent Status:**
🟢 Architect — Ready
🟢 Guide — Ready (loaded 3 partner docs)
🟢 Evaluator — Ready
🟢 Herald — Ready (draft marketing queued)
🟡 Treasurer — Awaiting multisig setup

Confirm the timeline and I'll activate all agents.`;
    }

    return `I can help you with:

• **Create a hackathon** — Set up theme, tracks, bounties, and timeline
• **Configure agents** — Customize Architect, Evaluator, Guide, Herald, Matchmaker, Treasurer
• **Add sponsors** — Import SDK docs and generate challenges
• **Set judging criteria** — Define rubrics with weighted scoring
• **Launch & monitor** — Go live and track submissions in real-time

What would you like to do?`;
  };

  const statusColors: Record<string, string> = {
    draft: "text-zinc-400",
    live: "text-green-400",
    completed: "text-zinc-500",
  };

  return (
    <div className="flex h-screen bg-[#09090b]">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-0"} border-r border-zinc-800 bg-zinc-900/50 flex flex-col transition-all duration-200 overflow-hidden`}>
        {/* Logo */}
        <div className="p-4 border-b border-zinc-800">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🏗️</span>
            <span className="font-semibold text-white">buidl.lol</span>
          </Link>
        </div>

        {/* New hackathon button */}
        <div className="p-3">
          <button className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm text-white transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Hackathon
          </button>
        </div>

        {/* Hackathon list */}
        <div className="flex-1 overflow-auto p-2">
          <div className="text-xs text-zinc-500 px-2 py-2">Recent</div>
          {hackathons.map((h) => (
            <button
              key={h.id}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition text-left"
            >
              <span className="truncate">{h.name}</span>
              <span className={`text-xs ${statusColors[h.status]}`}>{h.status}</span>
            </button>
          ))}
        </div>

        {/* User */}
        <div className="p-4 border-t border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500"></div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-white truncate">organizer.eth</div>
              <div className="text-xs text-zinc-500">Sponsor Tier</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="flex items-center gap-4 px-4 py-3 border-b border-zinc-800">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1">
            <h1 className="text-sm font-medium text-white">New Hackathon</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full bg-zinc-800 text-xs text-zinc-400">Draft</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "gap-3"}`}>
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm flex-shrink-0">
                    🏗️
                  </div>
                )}
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-orange-500 text-white rounded-br-md"
                      : "bg-zinc-800 text-zinc-200 rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm flex-shrink-0">
                  🏗️
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-zinc-800">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-zinc-800 p-4">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 focus-within:border-zinc-600">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your hackathon..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-zinc-500 text-center mt-3">
              buidl.lol uses AI agents to orchestrate your hackathon. <a href="#" className="text-orange-400 hover:underline">Learn more</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
