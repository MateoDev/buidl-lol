"use client";

import { FormEvent, useState } from "react";

interface MessageInputProps {
  onSubmit: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function MessageInput({ onSubmit, disabled = false, placeholder = "Type a message..." }: MessageInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || disabled) return;
    onSubmit(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-zinc-800 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 focus-within:border-zinc-600 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!input.trim() || disabled}
            className="w-8 h-8 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            aria-label="Send message"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
