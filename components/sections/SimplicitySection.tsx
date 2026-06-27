"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Mail, Send, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const steps = [
  {
    number: 1,
    icon: Mail,
    iconColor: "#0058be",
    title: "Connect your mailbox",
    body: "Link Google Workspace, Microsoft 365, or any SMTP. OAuth in one click.",
  },
  {
    number: 2,
    icon: ShieldCheck,
    iconColor: "#10b981",
    title: "Verify your domain",
    body: "Auto SPF, DKIM, and DMARC records — copy-paste, done. Live DNS checks until you pass.",
  },
  {
    number: 3,
    icon: Users,
    iconColor: "#b75b00",
    title: "Import your leads",
    body: "Upload a CSV, sync from CRM, or pull from Clay. Auto-clean and dedupe as you go.",
  },
  {
    number: 4,
    icon: Send,
    iconColor: "#10b981",
    title: "Launch your sequence",
    body: "Pick a cadence, set send windows, and go. LeadSnipper paces sends to protect reputation.",
  },
];

export default function SimplicitySection() {
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
          <span className="section-tag justify-center mb-6">From Zero to Sending</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            From zero to sending in{" "}
            <span className="font-display italic text-[#0058be]">minutes — not weeks.</span>
          </h2>
          <p className="text-body-md text-[#727785] max-w-2xl mx-auto mt-4">
            No DNS gymnastics. No deliverability detective work. Connect a mailbox, verify your
            domain, import your leads, and hit send. That&apos;s it.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl border border-[#c2c6d6]/20 p-6 bg-white/80 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#0058be]/10 text-[#0058be] flex items-center justify-center font-heading font-bold">
                    {step.number}
                  </span>
                  <Icon className="w-6 h-6" style={{ color: step.iconColor }} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#131b2e] mt-4">
                  {step.title}
                </h3>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed">{step.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing reassurance line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card border border-[#10b981]/30 bg-[#10b981]/[0.06]">
            <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
            <p className="text-sm font-medium text-[#131b2e]">
              No DNS expertise required. No deliverability experience required.
            </p>
          </div>
        </motion.div>

        {/* CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://app.leadsnipper.com/signup"
            className="btn-primary rounded-full text-sm"
          >
            Start Free 14-Day Trial →
          </Link>
          <Link href="/pricing" className="btn-ghost rounded-full text-sm">
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
