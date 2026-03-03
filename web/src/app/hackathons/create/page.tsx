"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { useAccount } from "wagmi";

export default function CreateHackathonPage() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    registrationStart: "",
    registrationEnd: "",
    hackathonStart: "",
    hackathonEnd: "",
    maxParticipants: "",
    maxTeamSize: "4",
    prizePool: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "name" && !formData.slug
        ? { slug: value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") }
        : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;

    setLoading(true);
    try {
      const res = await fetch("/api/hackathons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          organizerId: address, // TODO: Get real user ID
          maxParticipants: formData.maxParticipants ? parseInt(formData.maxParticipants) : null,
          maxTeamSize: parseInt(formData.maxTeamSize),
        }),
      });

      if (res.ok) {
        const hackathon = await res.json();
        router.push(`/hackathons/${hackathon.slug}`);
      } else {
        const error = await res.json();
        alert(error.error || "Failed to create hackathon");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to create hackathon");
    } finally {
      setLoading(false);
    }
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Connect Wallet</h1>
          <p className="text-gray-400">
            Please connect your wallet to create a hackathon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      <main className="container mx-auto px-6 py-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Create Hackathon</h1>
        <p className="text-gray-400 mb-8">
          Set up your AI-powered hackathon in minutes
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Basic Information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Hackathon Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                placeholder="AI Agents Hackathon"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                URL Slug *
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">buidl.lol/hackathons/</span>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                  placeholder="ai-agents-hackathon"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none resize-none"
                placeholder="Build the next generation of autonomous AI agents..."
              />
            </div>
          </div>

          {/* Dates */}
          <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Schedule</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Registration Opens *
                </label>
                <input
                  type="datetime-local"
                  name="registrationStart"
                  value={formData.registrationStart}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Registration Closes *
                </label>
                <input
                  type="datetime-local"
                  name="registrationEnd"
                  value={formData.registrationEnd}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Hackathon Starts *
                </label>
                <input
                  type="datetime-local"
                  name="hackathonStart"
                  value={formData.hackathonStart}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Hackathon Ends *
                </label>
                <input
                  type="datetime-local"
                  name="hackathonEnd"
                  value={formData.hackathonEnd}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Settings</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Max Participants
                </label>
                <input
                  type="number"
                  name="maxParticipants"
                  value={formData.maxParticipants}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                  placeholder="Unlimited"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Max Team Size
                </label>
                <input
                  type="number"
                  name="maxTeamSize"
                  value={formData.maxTeamSize}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Prize Pool
              </label>
              <input
                type="text"
                name="prizePool"
                value={formData.prizePool}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                placeholder="$50,000"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Hackathon"}
          </button>
        </form>
      </main>
    </div>
  );
}
