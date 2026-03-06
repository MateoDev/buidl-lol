"use client";

import { memo } from "react";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface MessageProps {
  message: ChatMessage;
}

export const Message = memo(function Message({ message }: MessageProps) {
  const isUser = message.role === "user";
  
  return (
    <div className={`flex ${isUser ? "justify-end" : "gap-3"}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm flex-shrink-0">
          🏗️
        </div>
      )}
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap ${
          isUser
            ? "bg-orange-500 text-white rounded-br-md"
            : "bg-zinc-800 text-zinc-200 rounded-bl-md"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
});
