"use client";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Building2,
  Calendar,
  CircleStop,
  Code2,
  FileDown,
  Flame,
  Inbox,
  KeyRound,
  Mail,
  Pause,
  PieChart,
  RefreshCw,
  ShieldCheck,
  Shuffle,
  Smile,
  Tag,
  Users,
  Wand2,
  Webhook,
} from "lucide-react";
import React from "react";

const groups = [
  {
    title: "Connect",
    items: [
      { icon: <Users className="w-4 h-4" />, label: "Unlimited mailboxes" },
      { icon: <Mail className="w-4 h-4" />, label: "Google Workspace" },
      { icon: <Mail className="w-4 h-4" />, label: "Microsoft 365" },
      { icon: <Inbox className="w-4 h-4" />, label: "SMTP" },
      { icon: <Inbox className="w-4 h-4" />, label: "IMAP" },
      { icon: <Shuffle className="w-4 h-4" />, label: "Inbox rotation" },
    ],
    color: "#0058be",
  },
  {
    title: "Send",
    items: [
      { icon: <Wand2 className="w-4 h-4" />, label: "AI personalization" },
      { icon: <Shuffle className="w-4 h-4" />, label: "Spintax" },
      { icon: <Calendar className="w-4 h-4" />, label: "Sequences" },
      { icon: <Tag className="w-4 h-4" />, label: "Reply categorization" },
      { icon: <Smile className="w-4 h-4" />, label: "Reply sentiment detection" },
      { icon: <CircleStop className="w-4 h-4" />, label: "Auto-stop on reply" },
      { icon: <Bot className="w-4 h-4" />, label: "AI email writer" },
    ],
    color: "#8b5cf6",
  },
  {
    title: "Protect",
    items: [
      { icon: <PieChart className="w-4 h-4" />, label: "CAP management" },
      { icon: <Pause className="w-4 h-4" />, label: "Auto pause" },
      { icon: <RefreshCw className="w-4 h-4" />, label: "Bounce monitoring" },
      { icon: <ShieldCheck className="w-4 h-4" />, label: "Domain health" },
      { icon: <Flame className="w-4 h-4" />, label: "Warmup" },
    ],
    color: "#10b981",
  },
  {
    title: "Measure",
    items: [
      { icon: <Building2 className="w-4 h-4" />, label: "Team workspaces" },
      { icon: <KeyRound className="w-4 h-4" />, label: "Admin / Editor / Viewer roles" },
      { icon: <BarChart3 className="w-4 h-4" />, label: "Analytics" },
      { icon: <FileDown className="w-4 h-4" />, label: "CSV export" },
      { icon: <Code2 className="w-4 h-4" />, label: "API", comingSoon: true },
      { icon: <Webhook className="w-4 h-4" />, label: "Webhooks", comingSoon: true },
    ],
    color: "#b75b00",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 relative section-warm border-t border-[#c2c6d6]/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center mb-6">
            Built for deliverability-first outbound
          </span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Cold email features that{" "}
            <span className="font-display italic text-[#0058be]">
              actually ship.
            </span>
          </h2>
          <p className="text-body-md text-[#727785] mt-4 max-w-xl mx-auto">
            Every feature you need to run deliverability-first outbound — without
            stitching together five tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 h-full"
            >
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-1 h-5 rounded-full"
                  style={{ background: group.color }}
                />
                <h3 className="font-heading font-bold text-[13px] text-[#131b2e] uppercase tracking-wider">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm text-[#131b2e]"
                  >
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        color: group.color,
                        background: `${group.color}10`,
                      }}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                    {item.comingSoon && (
                      <span className="ml-2 text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-[#c2c6d6]/30 text-[#475569]">
                        Coming Soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
