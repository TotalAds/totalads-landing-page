"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import React from "react";

import { LEADHUB_SIGNUP_URL } from "@/lib/launchLinks";

const problems = [
  {
    problem: "Wrong company",
    happens: "Lookalike names, wrong website, poisoned outreach",
  },
  {
    problem: "Wrong person",
    happens: "The CEO gets the hiring pitch. The recruiter gets the engineering one.",
  },
  {
    problem: "Generic opener",
    happens: "“I came across your website…”",
  },
  {
    problem: "Guessed data",
    happens: "Tools fill blanks and charge you anyway",
  },
];

const steps = [
  {
    n: "01",
    title: "Lock the company.",
    body: "Two independent signals must agree before we trust any data. Lookalike companies get rejected, not merged.",
  },
  {
    n: "02",
    title: "Find the real owner.",
    body: "We read how the company is organized first. A 5-person agency with no HR function? You get the owners, with the reasoning shown. A 5,000-person firm? You get the Head of Talent, not the founder.",
  },
  {
    n: "03",
    title: "Find the reason to write.",
    body: "Live open roles, funding, launches, and pain points, with dates and links. Not “they have a website.”",
  },
];

const exampleRows = [
  { field: "Company lock", result: "Website + LinkedIn agree", mark: "yes" as const },
  { field: "Look-alike rejected", result: "Palm Insurance Agency of Florida", mark: "no" as const },
  { field: "Org model", result: "5 people, 3 owners, no HR title, actively hiring", mark: "note" as const },
  { field: "Person", result: "Owner, as hiring authority", mark: "note" as const },
  { field: "Why", result: "No dedicated HR function exists, so ownership sits with the founders.", mark: "note" as const },
];

const outcomes = [
  "The right person, with a job title you can trust",
  "A verified work email (only valid or role addresses are kept)",
  "Why now, with dated triggers",
  "Real open roles, with live links",
  "3 to 5 pain points worth mentioning",
  "ICP score, intent score, hot/warm/cold priority",
  "A 2-to-3-line opener that references one real signal",
  "The research trail behind all of it",
];

const contrast = [
  ["Fill every field", "Leave it empty if unproven"],
  ["Charge per lookup", "Charge only when the mission is met"],
  ["Hide the logic", "Show the research trace"],
  ["One title search", "Org-first reasoning: who really owns this?"],
  ["Any job counts as “hiring”", "Hiring must match your function, with a live link"],
  ["Email host = verified", "Ownership and deliverability checked separately"],
];

export default function LeadHubStory() {
  return (
    <>
      <section className="hero-bg dot-grid pt-32 md:pt-40 pb-20">
        <div className="max-w-[860px] mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="badge-hero">BETA · Research-first outbound</span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-8">
              <span className="block text-4xl md:text-6xl leading-[1.05] tracking-tight">
                Know who to email.
              </span>
              <span className="block font-display italic text-[#0058be] text-4xl md:text-6xl mt-2">
                And exactly why now.
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#424754] mt-6 max-w-2xl mx-auto leading-relaxed">
              LeadHub researches every company, finds the person who actually owns the problem, verifies the email, and hands you the reason to write. Charged only when it finds what you asked for.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a href={LEADHUB_SIGNUP_URL} className="btn-primary btn-hero">
                Start free beta
              </a>
              <a href="#examples" className="btn-ghost btn-hero">
                See a real example ↓
              </a>
            </div>
            <p className="mt-8 font-mono text-xs tracking-wide uppercase text-[#727785]">
              Evidence-first · Never invents facts · No charge on a miss
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-[#c2c6d6]/20 bg-white">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#131b2e] text-center">
            Outbound fails before you hit send.
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-[#c2c6d6]/40">
            <table className="w-full min-w-[560px] text-left">
              <thead className="bg-[#f2f3ff]">
                <tr>
                  <th className="px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-[#727785] font-medium">Problem</th>
                  <th className="px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-[#727785] font-medium">What actually happens</th>
                </tr>
              </thead>
              <tbody>
                {problems.map((row) => (
                  <tr key={row.problem} className="border-t border-[#c2c6d6]/30">
                    <td className="px-5 py-4 font-heading font-semibold text-[#131b2e] align-top whitespace-nowrap">{row.problem}</td>
                    <td className="px-5 py-4 text-[#424754]">{row.happens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center font-heading font-semibold text-lg text-[#131b2e] mt-8">
            You don&apos;t need more leads. You need the right ones, with a reason.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="py-24 section-blue border-t border-[#c2c6d6]/20 scroll-mt-28">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <span className="section-tag">How it works</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#131b2e] mt-6 max-w-xl">
            What LeadHub does.
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n} className="glass-card rounded-2xl border border-[#c2c6d6]/30 p-6">
                <span className="font-mono text-xs text-[#0058be]">{step.n}</span>
                <h3 className="font-heading font-bold text-xl text-[#131b2e] mt-3">{step.title}</h3>
                <p className="text-sm text-[#424754] leading-relaxed mt-3">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="examples" className="py-24 bg-[#faf8ff] border-t border-[#c2c6d6]/20 scroll-mt-28">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6">
          <span className="section-tag">Show, don&apos;t claim</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#131b2e] mt-6">
            A real example.
          </h2>

          <article className="mt-10 rounded-3xl bg-[#131b2e] text-white p-6 md:p-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9eb6e0]">Example run</span>
              <span className="rounded-full bg-[#10b981] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#052e1c]">
                Enriched
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 border-b border-white/10 pb-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#9eb6e0]">Input</p>
                <p className="mt-1 font-heading text-lg">Palm Insurance LLC · palminsurance.com</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#9eb6e0]">Agent</p>
                <p className="mt-1 font-heading text-lg">Hiring authority</p>
              </div>
            </div>
            <dl className="mt-2 divide-y divide-white/10">
              {exampleRows.map((row) => (
                <div key={row.field} className="grid grid-cols-1 sm:grid-cols-[180px_1fr_auto] gap-2 py-4 items-start">
                  <dt className="font-mono text-xs uppercase tracking-wider text-[#9eb6e0]">{row.field}</dt>
                  <dd className="text-sm text-white/90">{row.result}</dd>
                  <span className="sm:justify-self-end" aria-hidden>
                    {row.mark === "yes" && <Check className="w-4 h-4 text-[#34d399]" />}
                    {row.mark === "no" && <X className="w-4 h-4 text-[#fb7185]" />}
                  </span>
                </div>
              ))}
            </dl>
          </article>
          <p className="mt-5 text-sm text-[#424754]">
            Every pick comes with its reasoning. You can audit any lead in one look.
          </p>

          <article className="mt-8 rounded-3xl border border-[#c2c6d6]/50 bg-white p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#b75b00]">
              The miss we&apos;re proud of
            </p>
            <p className="mt-4 text-[#424754] leading-relaxed max-w-2xl">
              Agent looks for a <strong className="text-[#131b2e]">Head of Sustainability</strong>. The company has none.
            </p>
            <p className="mt-4 font-heading font-semibold text-[#131b2e]">
              Status: Target not found. No charge. No CEO stuffed in to look busy.
            </p>
          </article>
        </div>
      </section>

      <section className="py-24 border-t border-[#c2c6d6]/20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#131b2e]">
            Every enriched lead arrives sales-ready.
          </h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-[#c2c6d6]/30 bg-white px-4 py-3 text-sm text-[#424754]">
                <Check className="w-4 h-4 text-[#0058be] mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-[#131b2e] text-white">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Built to be right, not just full.
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="text-[#9eb6e0] font-mono text-[11px] uppercase tracking-widest">
                  <th className="px-5 py-3 font-medium">Most tools</th>
                  <th className="px-5 py-3 font-medium text-white">LeadHub</th>
                </tr>
              </thead>
              <tbody>
                {contrast.map(([theirs, ours]) => (
                  <tr key={theirs} className="border-t border-white/10">
                    <td className="px-5 py-4 text-white/55">{theirs}</td>
                    <td className="px-5 py-4 font-medium">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 font-display italic text-2xl text-[#9ec0ff]">
            A missing name costs you nothing. A wrong name costs you the reply.
          </p>
        </div>
      </section>
    </>
  );
}
