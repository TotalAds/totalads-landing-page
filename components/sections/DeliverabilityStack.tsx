"use client";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  Pause,
  Play,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const triggers = [
  {
    icon: <Activity className="w-5 h-5" />,
    signal: "Bounce rate increases",
    response: "Sending limits automatically reduce",
    arrow: <ArrowDown className="w-4 h-4" />,
    color: "#b75b00",
    responseColor: "text-[#b75b00]",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    signal: "Reputation becomes risky",
    response: "Campaigns pause automatically",
    arrow: <Pause className="w-4 h-4" />,
    color: "#ba1a1a",
    responseColor: "text-[#ba1a1a]",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    signal: "Inbox health recovers",
    response: "Campaigns resume automatically",
    arrow: <Play className="w-4 h-4" />,
    color: "#10b981",
    responseColor: "text-[#10b981]",
  },
];

export default function DeliverabilityStack() {
  return (
    <section className="py-24 relative section-mesh border-t border-[#c2c6d6]/20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center mb-6">
            Intelligent Deliverability Protection
          </span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Your campaigns{" "}
            <span className="font-display italic text-[#0058be]">protect themselves.</span>
          </h2>
          <p className="text-body-md text-[#727785] mt-4 max-w-2xl mx-auto">
            LeadSnipper constantly monitors every mailbox. When something starts
            slipping, the platform acts before domains burn — no manual
            intervention, no overnight disasters.
          </p>
        </motion.div>

        {/* Triggers */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {triggers.map((trigger, i) => (
            <motion.div
              key={trigger.signal}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl border-l-4 p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
              style={{ borderLeftColor: trigger.color }}
            >
              {/* Signal */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ color: trigger.color, background: `${trigger.color}12` }}
                >
                  {trigger.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-[#727785] uppercase tracking-widest mb-1">
                    If
                  </p>
                  <p className="font-heading font-bold text-[15px] text-[#131b2e]">
                    {trigger.signal}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div
                className={`shrink-0 flex items-center gap-2 ${trigger.responseColor}`}
              >
                <span className="hidden md:block w-10 h-px bg-current opacity-30" />
                <span className="w-8 h-8 rounded-full bg-current/10 flex items-center justify-center">
                  {trigger.arrow}
                </span>
                <span className="hidden md:block w-10 h-px bg-current opacity-30" />
                <span className="md:hidden">
                  <ArrowDown className="w-4 h-4" />
                </span>
              </div>

              {/* Response */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-[#727785] uppercase tracking-widest mb-1">
                  Then
                </p>
                <p
                  className={`font-heading font-bold text-[15px] ${trigger.responseColor}`}
                >
                  {trigger.response}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing value-prop row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#131b2e] mb-10"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            No manual intervention
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            No burned domains
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            No overnight disasters
          </span>
        </motion.div>

        {/* Inline simulation — live dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card rounded-2xl border border-[#c2c6d6]/20 overflow-hidden"
        >
          <div className="h-9 border-b border-[#c2c6d6]/20 flex items-center px-4 gap-2 bg-[#faf8ff]">
            <div className="w-3 h-3 rounded-full bg-[#ba1a1a]/30" />
            <div className="w-3 h-3 rounded-full bg-[#b75b00]/30" />
            <div className="w-3 h-3 rounded-full bg-[#10b981]/30" />
            <span className="ml-3 text-[10px] font-mono text-[#727785]">
              leadsnipper.com / inbox-health
            </span>
          </div>
          <div className="p-6 grid md:grid-cols-3 gap-4">
            {/* Reputation */}
            <div className="rounded-xl border border-[#c2c6d6]/20 p-4 bg-white">
              <p className="text-[10px] font-mono text-[#727785] uppercase tracking-widest mb-2">
                Reputation
              </p>
              <div className="flex items-end justify-between">
                <p className="font-heading font-bold text-2xl text-[#131b2e]">94</p>
                <span className="flex items-center gap-1 text-[10px] font-mono text-[#10b981]">
                  <ArrowUp className="w-3 h-3" /> healthy
                </span>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-[#f2f3ff] overflow-hidden">
                <div className="h-full w-[94%] bg-[#10b981]" />
              </div>
            </div>
            {/* Bounce */}
            <div className="rounded-xl border border-[#c2c6d6]/20 p-4 bg-white">
              <p className="text-[10px] font-mono text-[#727785] uppercase tracking-widest mb-2">
                Bounce Rate
              </p>
              <div className="flex items-end justify-between">
                <p className="font-heading font-bold text-2xl text-[#131b2e]">0.4%</p>
                <span className="flex items-center gap-1 text-[10px] font-mono text-[#10b981]">
                  <ArrowDown className="w-3 h-3" /> safe
                </span>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-[#f2f3ff] overflow-hidden">
                <div className="h-full w-[4%] bg-[#10b981]" />
              </div>
            </div>
            {/* Auto Action */}
            <div className="rounded-xl border border-[#0058be]/20 p-4 bg-[#0058be]/[0.04]">
              <p className="text-[10px] font-mono text-[#0058be] uppercase tracking-widest mb-2">
                Auto Action
              </p>
              <p className="font-heading font-bold text-[15px] text-[#131b2e]">
                Campaigns running
              </p>
              <p className="text-xs text-[#727785] mt-1">
                Monitoring 28 mailboxes
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/email-deliverability"
            className="btn-primary rounded-full text-sm"
          >
            Explore Deliverability →
          </Link>
          <Link href="/pricing" className="btn-ghost rounded-full text-sm">
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
