"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Building2, MailCheck, SearchCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const outcomes = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "A company you can trust",
    text: "Identity checked before the research starts, so lookalikes do not pollute your list.",
  },
  {
    icon: <SearchCheck className="h-5 w-5" />,
    title: "The person who owns it",
    text: "Org-first research finds the relevant decision-maker, not a generic title match.",
  },
  {
    icon: <MailCheck className="h-5 w-5" />,
    title: "A reason to press send",
    text: "Verified contact details, timely evidence, and an opener grounded in a real signal.",
  },
];

export default function LeadHubPreview() {
  return (
    <section id="leadhub" className="scroll-mt-28 border-t border-[#c2c6d6]/20 bg-white py-24">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="section-tag">LeadHub</span>
              <span className="badge-beta text-[10px]">Beta</span>
            </div>
            <h2 className="mt-6 font-heading text-headline-lg font-bold text-[#131b2e]">
              Better research makes every send{" "}
              <span className="font-display italic text-[#0058be]">worth opening.</span>
            </h2>
            <p className="mt-5 max-w-xl text-body-md leading-relaxed text-[#424754]">
              LeadHub is the research workspace for outbound teams that refuse to guess. Give it a company and a mission; it returns the right person, the evidence, and the reason to start a conversation now.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link href="/leadhub" className="btn-primary">
                Explore LeadHub <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-[#727785]">Only pay when the mission is met.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-[#0058be]/20 bg-[#f2f3ff]/75 p-5 shadow-[0_20px_60px_rgba(0,88,190,0.10)] sm:p-7"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2170e4]/10 blur-2xl" />
            <div className="relative flex items-center justify-between border-b border-[#0058be]/10 pb-4">
              <div className="flex items-center gap-2 text-[#131b2e]">
                <Sparkles className="h-4 w-4 text-[#0058be]" />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em]">Research output</span>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-[#10b981]/15 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#047857]">
                <BadgeCheck className="h-3.5 w-3.5" /> Enriched
              </span>
            </div>
            <div className="relative mt-5 rounded-2xl border border-white bg-white/90 p-5 shadow-sm">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#727785]">Approved lead</p>
              <div className="mt-3 flex items-start justify-between gap-4">
                <div>
                  <p className="font-heading text-lg font-bold text-[#131b2e]">The right owner</p>
                  <p className="mt-1 text-sm text-[#727785]">Role, work email, and why they matter</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0058be]/10 text-[#0058be]">
                  <SearchCheck className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-[#0058be]/10 bg-[#f7f9ff] p-3.5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#0058be]">Why now</p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#424754]">A dated signal, source link, and a useful angle for the first line.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <motion.article
              key={outcome.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#c2c6d6]/30 bg-white p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0058be]/[0.07] text-[#0058be]">{outcome.icon}</span>
              <h3 className="mt-4 font-heading font-bold text-[#131b2e]">{outcome.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#727785]">{outcome.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
