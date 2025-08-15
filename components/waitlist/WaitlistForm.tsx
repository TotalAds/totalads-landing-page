"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setMessage("Please enter a valid email");
      return;
    }
    setLoading(true);
    setStatus("idle");
    setMessage("");
    try {
      // Probe the endpoint and check response
      const payload = { email, source: "hero" };
      const { data } = await axios.post<{ ok: boolean; error?: string }>(
        "/api/waitlist",
        payload
      );
      if (data?.ok) {
        setStatus("success");
        setMessage("You're on the list! We'll notify you before launch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err: unknown) {
      setStatus("error");
      if (axios.isAxiosError(err)) {
        // Narrowed axios error type
        const apiMsg = (err.response?.data as unknown as { error?: string })
          ?.error;
        setMessage(apiMsg || "Something went wrong. Please try again.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={onSubmit} className="flex w-full gap-2">
        <input
          type="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
          aria-label="Email address"
        />
        <Button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>

      <div className="sr-only" role="status" aria-live="polite">
        {status === "success"
          ? "Waitlist join success"
          : status === "error"
          ? "Waitlist join failed"
          : ""}
      </div>

      {message && (
        <motion.div
          className={`mt-3 p-1 rounded-lg backdrop-blur-sm  ${
            status === "error" ? "text-red-300 " : "text-green-300 "
          }`}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-medium">{message}</p>
        </motion.div>
      )}
    </div>
  );
}
