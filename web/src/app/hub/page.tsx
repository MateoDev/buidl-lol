"use client";

import { useState, useCallback } from "react";
import { Sidebar, Header, HackathonItem } from "@/components/layout";
import { MessageList, MessageInput, ChatMessage } from "@/components/chat";

// Mock data - replace with API calls
const MOCK_HACKATHONS: HackathonItem[] = [
  { id: "1", name: "ETH Denver 2026", status: "live" },
  { id: "2", name: "Base Buildathon", status: "draft" },
  { id: "3", name: "AI Agents Track", status: "completed" },
];

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content: `Hey! I'm your hackathon co-pilot. Tell me about the hackathon you want to create, and I'll help you configure everything — challenges, bounties, judging criteria, timeline, and more.

Try: "Create a 48-hour DeFi hackathon with $10K in prizes"`,
  timestamp: new Date(),
};

// Simple response generator - replace with actual AI
function generateResponse(query: string): string {
  const q = query.toLowerCase();
  
  if (q.includes("defi") || q.includes("finance")) {
    return `Great choice! I'll set up a DeFi-focused hackathon.

**Theme:** DeFi Innovation
**Suggested Tracks:**
• Lending & Borrowing Protocols
• DEX & Trading Infrastructure  
• Yield Optimization

**Bounty Allocation:**
• Track prizes: $3K each ($9K total)
• Grand prize: $1K
• Total: $10K

Would you like me to generate detailed challenge descriptions?`;
  }
  
  if (q.includes("agent") || q.includes("ai")) {
    return `AI Agents hackathon — love it!

**Theme:** Autonomous Agent Builders
**Suggested Tracks:**
• Tool-Using Agents (MCP integration)
• Multi-Agent Coordination
• Agent UX & Interfaces

Should I draft the challenge statements?`;
  }

  return `I can help you with:

• **Create a hackathon** — Set up theme, tracks, bounties
• **Configure agents** — Customize the agent fleet
• **Add sponsors** — Import SDK docs and generate challenges
• **Set judging criteria** — Define rubrics with scoring
• **Launch & monitor** — Go live and track submissions

What would you like to do?`;
}

export default function HubPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedHackathon, setSelectedHackathon] = useState<string>();
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewHackathon = useCallback(() => {
    setSelectedHackathon(undefined);
    setMessages([WELCOME_MESSAGE]);
  }, []);

  const handleSelectHackathon = useCallback((id: string) => {
    setSelectedHackathon(id);
    // Load hackathon-specific messages
  }, []);

  const handleSendMessage = useCallback((content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateResponse(content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const currentHackathon = MOCK_HACKATHONS.find((h) => h.id === selectedHackathon);

  return (
    <div className="flex h-screen bg-[#09090b]">
      {/* Sidebar */}
      {sidebarOpen && (
        <Sidebar
          hackathons={MOCK_HACKATHONS}
          selectedId={selectedHackathon}
          onSelect={handleSelectHackathon}
          onNewHackathon={handleNewHackathon}
        />
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        <Header
          title={currentHackathon?.name || "New Hackathon"}
          status={currentHackathon?.status || "draft"}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <MessageList messages={messages} isLoading={isLoading} />
        
        <MessageInput
          onSubmit={handleSendMessage}
          disabled={isLoading}
          placeholder="Describe your hackathon..."
        />
      </main>
    </div>
  );
}
