"use client";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import React from "react";

export default function CampaignHealthScore() {
  return (
    <section className="py-24 section-mesh border-t border-[#c2c6d6]/20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="section-tag justify-center mb-6">
            Campaign Health Score
          </span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Your campaigns stay{" "}
            <span className="font-display italic text-[#0058be]">
              healthy. Automatically.
            </span>
          </h2>
          <p className="text-body-md text-[#727785] max-w-2xl mx-auto mt-4">
            Every campaign gets a live deliverability score. LeadSnipper watches
            the signals, raises the limit when you&apos;re safe, and pulls you
            back before domains burn.
          </p>
        </motion.div>

        {/* Hero score card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mt-10 rounded-2xl glass-card border border-[#c2c6d6]/20 bg-white/80 backdrop-blur p-8 text-center"
        >
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#727785]">
            Campaign Health
          </p>
          <p className="font-heading font-bold text-7xl text-[#10b981] mt-2">
            95<span className="text-2xl text-[#727785] font-mono">/100</span>
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-[#f59e0b]"
                fill="currentColor"
              />
            ))}
          </div>
          <p className="text-sm font-medium text-[#10b981] mt-2">Excellent</p>
          <p className="text-xs text-[#727785] mt-1">
            Last 7 days · 4 campaigns monitored
          </p>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-10 grid md:grid-cols-3 gap-4"
        >
          {/* Spam Risk */}
          <div className="rounded-2xl glass-card border border-[#c2c6d6]/20 p-5 bg-white">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#727785]">
              Spam Risk
            </p>
            <p className="font-heading font-bold text-2xl text-[#131b2e] mt-1">
              Low
            </p>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[#10b981] text-[11px] font-mono mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> Low
            </span>
            <div className="mt-4 h-1.5 rounded-full bg-[#f2f3ff] overflow-hidden">
              <div className="h-full w-[18%] bg-[#10b981]" />
            </div>
          </div>

          {/* Bounce Risk */}
          <div className="rounded-2xl glass-card border border-[#c2c6d6]/20 p-5 bg-white">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#727785]">
              Bounce Risk
            </p>
            <p className="font-heading font-bold text-2xl text-[#131b2e] mt-1">
              Safe
            </p>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[#10b981] text-[11px] font-mono mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> Safe
            </span>
            <div className="mt-4 h-1.5 rounded-full bg-[#f2f3ff] overflow-hidden">
              <div className="h-full w-[4%] bg-[#10b981]" />
            </div>
          </div>

          {/* Recommended Daily Limit */}
          <div className="rounded-2xl glass-card border border-[#c2c6d6]/20 p-5 bg-white">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#727785]">
              Daily Limit
            </p>
            <p className="font-heading font-bold text-2xl text-[#131b2e] mt-1">
              120
            </p>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0058be]/10 text-[#0058be] text-[11px] font-mono mt-2">
              <span>↑</span> emails / day
            </span>
            <p className="text-[10px] text-[#727785] mt-2">
              Up from 90 yesterday
            </p>
          </div>
        </motion.div>

        {/* Next Recommendation card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-8 rounded-2xl glass-card border border-[#0058be]/30 bg-[#0058be]/[0.04] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#0058be]">
                Next Recommendation
              </p>
              <Sparkles className="w-4 h-4 text-[#0058be]" />
            </div>
            <p className="font-heading font-bold text-lg text-[#131b2e] mt-2">
              Increase daily volume to 150 emails
            </p>
            <p className="text-sm text-[#475569] mt-1">
              Your sender reputation has held steady for 7 days. Safe to scale
              — we&apos;ll dial back automatically if signals shift.
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 bg-[#0058be] text-white text-xs font-semibold rounded-full px-4 py-2"
          >
            Apply
          </button>
        </motion.div>
      </div>
    </section>
  );
}
