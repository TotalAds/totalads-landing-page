"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { leadhubFaqs } from "@/lib/leadhubFaqs";
import {
  LEADHUB_SIGNUP_URL,
  LEADSNIPPER_HOME_URL,
} from "@/lib/launchLinks";

const missions = [
  "Hiring managers for sustainability roles at Indian manufacturers",
  "Founders of agencies actively hiring SDRs",
  "Head of engineering where Kubernetes roles are open",
];

const statuses = [
  {
    mark: "Enriched",
    tone: "text-[#047857] bg-[#ecfdf5] border-[#10b981]/30",
    body: "mission met. Credit used.",
  },
  {
    mark: "Target not found",
    tone: "text-[#0058be] bg-[#f2f3ff] border-[#0058be]/20",
    body: "we looked hard, nobody matched. Free.",
  },
  {
    mark: "Mission incomplete",
    tone: "text-[#92400e] bg-[#fff7ed] border-[#b75b00]/25",
    body: "here's exactly what's missing. Free.",
  },
];

const featureGroups = [
  {
    title: "Research",
    items: [
      "Company identity lock (2+ agreeing signals)",
      "Org-first person finding",
      "Function-aware hiring authority (for example, Head of Sustainability, not recruiter)",
      "Custom research questions with sources and confidence",
      "Research trace on every lead",
    ],
  },
  {
    title: "Hiring intelligence",
    items: [
      "Direct careers-page and job-board reads",
      "Keka first for Indian companies, plus Greenhouse, Lever, Ashby, Workable",
      "Freshness window (14 to 180 days) and live-link requirement",
      "Keyword-matched vs general hiring, stored separately",
    ],
  },
  {
    title: "Contacts",
    items: [
      "Ranked primary and alternative emails",
      "Verification via Reoon or Bounceverify",
      "Domain ownership check, so a valid inbox at the wrong company is flagged",
      "Up to 16 email pattern attempts for qualified people",
    ],
  },
  {
    title: "Intelligence",
    items: [
      "ICP and intent scores with breakdown",
      "Why-now, buying signals, pain points",
      "Recommended angle and opener",
      "Objection hints for the rep",
    ],
  },
  {
    title: "Workflow",
    items: [
      "Bulk enrich from lead lists, CSV, and Lead Search",
      "Signup enrichment (beta)",
      "Outreach Engine writes emails after an Enriched run",
      "Send approved leads to LeadSnipper",
      "Bring your own API keys during beta",
    ],
  },
];

const audiences = [
  ["Founders", "replace an hour of stalking with one credit."],
  ["SDRs and AEs", "walk into your call block with a why-now already written."],
  ["Agencies", "one research standard across every client list."],
  ["Growth and RevOps", "consistent scores on every list you import."],
  ["Product teams", "enrich signups and personalize the first email."],
];

const handoffSteps = [
  ["01", "Approve", "Review the person, email, evidence, score, and angle in one lead card."],
  ["02", "Prioritize", "Focus your team on the high-fit leads with a timely, useful reason to reach out."],
  ["03", "Activate", "Use the approved lead and opener in your outreach workflow, including LeadSnipper."],
];

export default function LeadHubDetails() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="py-24 border-t border-[#c2c6d6]/20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#131b2e] max-w-2xl">
            Tell it what you&apos;re hunting. It goes and gets it.
          </h2>
          <p className="mt-5 max-w-2xl text-[#424754] leading-relaxed">
            Write a mission in plain language. Choose who counts as the right person. Add up to 20 custom questions. LeadHub plans the research, skips what it doesn&apos;t need, and tells you honestly if it missed.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {missions.map((mission) => (
              <span
                key={mission}
                className="rounded-full border border-[#0058be]/20 bg-[#f2f3ff] px-4 py-2 text-sm text-[#131b2e]"
              >
                {mission}
              </span>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 md:grid-cols-3">
            {statuses.map((status) => (
              <li key={status.mark} className={`rounded-2xl border px-4 py-4 ${status.tone}`}>
                <p className="font-heading font-bold">{status.mark}</p>
                <p className="mt-1 text-sm">{status.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="features" className="py-24 section-blue border-t border-[#c2c6d6]/20 scroll-mt-28">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <span className="section-tag">Features</span>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {featureGroups.map((group) => (
              <article key={group.title} className="glass-card rounded-2xl border border-[#c2c6d6]/30 p-6 bg-white">
                <h3 className="font-heading font-bold text-lg text-[#131b2e]">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[#424754] leading-relaxed pl-4 border-l border-[#0058be]/25">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-3 rounded-2xl border border-[#0058be]/20 bg-[#f2f3ff]/70 p-5 md:grid-cols-2 md:gap-6">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0058be]">Current beta</p>
              <p className="mt-2 font-heading font-bold text-[#131b2e]">Use your own API keys.</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#424754]">Connect the LLM, Apify, and email-verification providers your mission needs.</p>
            </div>
            <div className="border-t border-[#0058be]/15 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0058be]">Coming soon</p>
              <p className="mt-2 font-heading font-bold text-[#131b2e]">Pre-configured APIs and a more automated setup.</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#424754]">We&apos;re building the simplest, most automated way to run LeadHub without managing provider keys yourself.</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#727785]">
            Coming soon: browser extension · public API
          </p>
        </div>
      </section>

      <section className="py-24 border-t border-[#c2c6d6]/20 bg-[#faf8ff]">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#131b2e]">
            Research that is ready to use.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#424754]">
            LeadHub does not hand you a mystery record. It gives your team the context needed to decide who is worth contacting and what to say first.
          </p>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {handoffSteps.map(([number, title, body]) => (
              <article key={title} className="rounded-2xl border border-[#c2c6d6]/30 bg-white p-5">
                <span className="font-mono text-xs text-[#0058be]">{number}</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-[#131b2e]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#727785]">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-3xl leading-relaxed text-[#424754]">
            When you use LeadSnipper, approved leads and evidence-led openers are ready to become campaigns without losing the research that made them relevant.
          </p>
          <a href={LEADSNIPPER_HOME_URL} className="inline-flex mt-6 font-heading font-semibold text-[#0058be] hover:underline">
            Explore LeadSnipper →
          </a>
        </div>
      </section>

      <section className="py-20 bg-[#faf8ff] border-t border-[#c2c6d6]/20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6">
          <h2 className="font-heading font-bold text-3xl text-[#131b2e]">Who it&apos;s for</h2>
          <ul className="mt-8 space-y-3">
            {audiences.map(([who, what]) => (
              <li key={who} className="text-[#424754]">
                <strong className="font-heading text-[#131b2e]">{who}:</strong> {what}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[#727785]">
            Not for: bulk email dumps with no personalization.
          </p>
        </div>
      </section>

      <section id="pricing" className="py-24 border-t border-[#c2c6d6]/20 scroll-mt-28">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#131b2e]">
            Current beta: bring your own API keys.
          </h2>
          <p className="mt-5 text-[#424754] leading-relaxed">
            LeadHub currently requires your own LLM, Apify, and verification API keys. You control provider costs, with no per-lookup markup. Enrichment credits are used only on Enriched runs.
          </p>
          <p className="mt-3 rounded-xl bg-[#f2f3ff] px-4 py-3 text-sm leading-relaxed text-[#424754]">
            <strong className="font-heading text-[#131b2e]">Coming soon:</strong> pre-configured APIs and a managed, automated setup for teams that do not want to connect or maintain their own keys.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#c2c6d6]/40">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-[#f2f3ff]">
                <tr>
                  <th className="px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-[#727785] font-medium">Plan</th>
                  <th className="px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-[#727785] font-medium">Price</th>
                  <th className="px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-[#727785] font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#c2c6d6]/30">
                  <td className="px-5 py-4">Plan 1</td>
                  <td className="px-5 py-4">TBA</td>
                  <td className="px-5 py-4 text-[#727785]">—</td>
                </tr>
                <tr className="border-t border-[#c2c6d6]/30">
                  <td className="px-5 py-4">Plan 2</td>
                  <td className="px-5 py-4">TBA</td>
                  <td className="px-5 py-4 text-[#727785]">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[#727785]">
            A company-only agent needs no Apify, Reoon, or LLM key.
          </p>
        </div>
      </section>

      <section id="faq" className="py-24 section-warm border-t border-[#c2c6d6]/20 scroll-mt-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <span className="section-tag">FAQ</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#131b2e] mt-6">
            Before you run it.
          </h2>
          <div className="mt-8 space-y-3">
            {leadhubFaqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`glass-card rounded-2xl overflow-hidden border ${
                  openIndex === index ? "border-[#0058be]/20" : "border-[#c2c6d6]/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="font-heading font-semibold text-[#131b2e] pr-4">{faq.question}</span>
                  <span className="text-[#0058be]">{openIndex === index ? "–" : "+"}</span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-[#424754] leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 text-center">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-[#131b2e] tracking-tight">
            Stop emailing strangers.
          </h2>
          <p className="mt-4 text-lg text-[#424754]">
            Start with 10 leads. See the evidence yourself.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={LEADHUB_SIGNUP_URL} className="btn-primary btn-hero">
              Start free beta
            </a>
            <Link href="/contact" className="btn-ghost btn-hero">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#c2c6d6]/30 bg-[#faf8ff] py-10">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="font-heading font-bold text-[#131b2e]">
            LeadHub <span className="font-medium text-[#727785]">by LeadSnipper</span>
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-[#727785]">
            <a href={LEADSNIPPER_HOME_URL} className="hover:text-[#0058be]">LeadSnipper</a>
            <Link href="/contact" className="hover:text-[#0058be]">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-[#0058be]">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-[#0058be]">Terms</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
