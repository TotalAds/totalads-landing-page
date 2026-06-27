"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import React from "react";

const beforeItems = [
  "Multiple tools stitched together",
  "Separate warmup tool",
  "Separate verification tool",
  "Separate sending tool",
  "Separate analytics dashboard",
  "Manual blacklist checking",
  "Spreadsheets to track campaigns",
];

const afterItems = [
  "One unified dashboard",
  "Smart sequences",
  "Reputation monitoring",
  "Auto CAP management",
  "Reply detection",
  "Real-time analytics",
  "Domain health in one view",
];

export default function PainSection() {
  return (
    <section className="py-24 relative overflow-hidden section-blue border-t border-[#c2c6d6]/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center mb-6">Why Cold Email Fails</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            The before-and-after of{" "}
            <span className="font-display italic text-[#0058be]">running outbound.</span>
          </h2>
        </motion.div>

        {/* Before / After comparison */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-[#ba1a1a]/15 p-8 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #ba1a1a 0 1px, transparent 1px 12px)",
              }}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-medium text-[#ba1a1a] uppercase tracking-wider">
                  Before LeadSnipper
                </span>
                <span className="text-xs font-mono text-[#727785]">
                  The old stack
                </span>
              </div>
              <ul className="space-y-3.5">
                {beforeItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-[#424754]"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-[#ba1a1a]/10 flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-[#ba1a1a] stroke-[3]" />
                    </span>
                    <span className="line-through decoration-[#ba1a1a]/40 decoration-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border-2 border-[#0058be]/20 p-8 relative overflow-hidden bg-gradient-to-br from-[#0058be]/[0.03] to-transparent"
          >
            <div className="absolute top-4 right-4">
              <span className="badge-live text-[10px]">LEADSNIPPER</span>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-medium text-[#0058be] uppercase tracking-wider">
                  With LeadSnipper
                </span>
                <span className="text-xs font-mono text-[#727785]">
                  One platform
                </span>
              </div>
              <ul className="space-y-3.5">
                {afterItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-[#131b2e] font-medium"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-[#0058be]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#0058be] stroke-[3]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-[#727785] mt-12 max-w-xl mx-auto"
        >
          One platform replaces your warmup tool, verification tool, sending tool,
          analytics dashboard, and the spreadsheet holding it all together.
        </motion.p>
      </div>
    </section>
  );
}
