"use client";
import { motion } from "framer-motion";
import {
  BarChart3,
  Inbox,
  ListTree,
  MailCheck,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import React from "react";

const capabilities = [
  {
    icon: <Inbox className="w-5 h-5" />,
    title: "Connect your sending accounts",
    body: "Use Google Workspace, Microsoft 365, Zoho, or custom SMTP/IMAP accounts. Manage connected senders and configure sending preferences from your LeadSnipper workspace.",
  },
  {
    icon: <MailCheck className="w-5 h-5" />,
    title: "Verify before you send",
    body: "Import your leads from CSV and use the Reoon email verification integration in your pre-send workflow. Identify risky addresses before they become part of an active campaign.",
  },
  {
    icon: <ListTree className="w-5 h-5" />,
    title: "Build multi-step campaigns",
    body: "Create sequences with follow-ups, delays, conditions, personalization fields, and A/B variants. Organize your outreach and control when subsequent messages should be sent.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Monitor sending health",
    body: "Review sender authentication checks, bounce and complaint signals, and campaign health information. Sending safeguards can automatically pause a campaign when configured risk thresholds are reached. Sending stays paused until you acknowledge it.",
  },
  {
    icon: <SlidersHorizontal className="w-5 h-5" />,
    title: "Manage sending across mailboxes",
    body: "Configure mailbox-level daily limits and sending delays. Use sender rotation and ESP Matching options where appropriate to manage how eligible mailboxes are assigned to campaign sends.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Measure what happened",
    body: "Review campaign analytics, compare sequence performance, and export PDF reports on supported plans. Use the results to make better decisions about your next campaign.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="platform" className="py-24 relative section-warm border-t border-[#c2c6d6]/20 scroll-mt-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center mb-6">
            Product capabilities
          </span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Built for the work{" "}
            <span className="font-display italic text-[#0058be]">
              behind outbound.
            </span>
          </h2>
          <p className="text-body-md text-[#727785] mt-4 max-w-2xl mx-auto">
            Everything you need to manage the core cold-email workflow, from connecting inboxes to reviewing campaign results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 h-full"
            >
              <span className="w-10 h-10 rounded-xl bg-[#0058be]/10 text-[#0058be] flex items-center justify-center">
                {item.icon}
              </span>
              <h3 className="font-heading font-bold text-[16px] text-[#131b2e] mt-4">
                {item.title}
              </h3>
              <p className="text-sm text-[#424754] leading-relaxed mt-2">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
