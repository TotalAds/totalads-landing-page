"use client";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Mail,
  PauseCircle,
  RefreshCw,
  Server,
  Shuffle,
  Sliders,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const inboxTypes = [
  {
    name: "Google Workspace",
    subtitle: "Gmail",
    color: "#0058be",
    bg: "#0058be",
    description:
      "Connect any Gmail / Google Workspace inbox via OAuth in one click. No passwords stored.",
    steps: ["OAuth 2.0 — one click", "SPF & DKIM auto-verified", "Sending inside 5 min"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
  {
    name: "Microsoft 365",
    subtitle: "Outlook",
    color: "#0078d4",
    bg: "#0078d4",
    description:
      "Connect Outlook / Microsoft 365 accounts via OAuth. Works with both personal and business tenants.",
    steps: ["OAuth 2.0 — one click", "Exchange Online supported", "Sending inside 5 min"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <rect x="1" y="1" width="10" height="10" rx="1" fill="#F25022" />
        <rect x="13" y="1" width="10" height="10" rx="1" fill="#7FBA00" />
        <rect x="1" y="13" width="10" height="10" rx="1" fill="#00A4EF" />
        <rect x="13" y="13" width="10" height="10" rx="1" fill="#FFB900" />
      </svg>
    ),
  },
  {
    name: "Custom SMTP / IMAP",
    subtitle: "Any provider",
    color: "#10b981",
    bg: "#10b981",
    description:
      "Already on Zoho, Fastmail, GoDaddy, or a custom mail server? Connect via SMTP + IMAP credentials.",
    steps: ["Paste host + credentials", "TLS auto-detected", "Sending inside 10 min"],
    icon: <Server className="w-6 h-6" />,
  },
];

const guardrails = [
  {
    icon: <RefreshCw className="w-5 h-5" />,
    color: "#8b5cf6",
    title: "Sequencing",
    body: "Build multi-step follow-up campaigns. Each email in the sequence fires only if the prospect hasn't replied — automatic stop on reply, zero manual work.",
  },
  {
    icon: <Shuffle className="w-5 h-5" />,
    color: "#0058be",
    title: "Spintax Personalization",
    body: 'Randomize subject lines and copy with {Hey|Hello|Hi} {firstName} syntax. Every recipient gets a unique variant — defeating duplicate-template spam filters.',
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    color: "#ba1a1a",
    title: "Bounce Rate Analysis & Auto-Pause",
    body: "Hard bounce detected? LeadSnipper instantly pauses the campaign and alerts you. No more burning your sending domain while you sleep.",
  },
  {
    icon: <Sliders className="w-5 h-5" />,
    color: "#b75b00",
    title: "Granular Daily Caps",
    body: "Set per-mailbox and per-domain daily send limits. Spread volume safely across all connected inboxes with intelligent rotation — no single inbox over-sends.",
  },
];

export default function InboxIntegrationsSection() {
  return (
    <section
      id="inbox-integrations"
      className="py-24 relative section-warm border-t border-[#c2c6d6]/20 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center mb-6">
            <Mail className="w-3.5 h-3.5" />
            Inbox Integrations
          </span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Use the inboxes{" "}
            <span className="font-display italic text-[#0058be]">
              you already own.
            </span>
          </h2>
          <p className="text-body-md text-[#727785] mt-4 max-w-2xl mx-auto">
            Connect your Google Workspace, Microsoft 365, or any custom SMTP account. OAuth
            takes 60 seconds — you&apos;re sending real cold emails in{" "}
            <strong className="text-[#131b2e]">5–10 minutes</strong>, from inboxes your
            prospects already trust.
          </p>
        </motion.div>

        {/* Inbox Type Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {inboxTypes.map((inbox, i) => (
            <motion.div
              key={inbox.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 flex flex-col gap-4"
            >
              {/* Icon row */}
              <div className="flex items-center gap-3">
                <span
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ color: inbox.color, background: `${inbox.bg}12` }}
                >
                  {inbox.icon}
                </span>
                <div>
                  <p className="font-heading font-bold text-[15px] text-[#131b2e]">
                    {inbox.name}
                  </p>
                  <p className="text-xs text-[#727785]">{inbox.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#424754] leading-relaxed">{inbox.description}</p>

              {/* Steps */}
              <ul className="space-y-1.5 mt-auto">
                {inbox.steps.map((step) => (
                  <li key={step} className="flex items-center gap-2 text-xs text-[#131b2e]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: inbox.color }} />
                    {step}
                  </li>
                ))}
              </ul>

              {/* Time badge */}
              <div
                className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full w-fit"
                style={{ color: inbox.color, background: `${inbox.bg}10` }}
              >
                <Clock className="w-3 h-3" />
                Start sending in minutes
              </div>
            </motion.div>
          ))}
        </div>

        {/* Campaign Guardrails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-tag justify-center mb-6">
            <PauseCircle className="w-3.5 h-3.5" />
            Campaign Guardrails
          </span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Every connected inbox is{" "}
            <span className="font-display italic text-[#10b981]">automatically protected.</span>
          </h2>
          <p className="text-body-md text-[#727785] mt-4 max-w-2xl mx-auto">
            These four guardrails run behind every campaign — keeping your sender reputation intact
            and your sequences running safely at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {guardrails.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 flex gap-4"
            >
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{ color: g.color, background: `${g.color}12` }}
              >
                {g.icon}
              </span>
              <div>
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-1.5">
                  {g.title}
                </h3>
                <p className="text-sm text-[#424754] leading-relaxed">{g.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.leadsnipper.com/signup"
              className="btn-primary rounded-full text-sm"
            >
              Connect your inbox — free →
            </Link>
            <Link href="/contact" className="btn-ghost rounded-full text-sm">
              Need help connecting?
            </Link>
          </div>
          <p className="text-xs text-[#727785] mt-4">
            No credit card required · Google, Microsoft & SMTP supported
          </p>
        </motion.div>
      </div>
    </section>
  );
}
