"use client";

import { motion } from "framer-motion";
import { Mail, Send, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const steps = [
  {
    number: 1,
    icon: Mail,
    iconColor: "#0058be",
    title: "Connect your inboxes",
    body: "Connect a supported sending account and review its authentication and sender health.",
  },
  {
    number: 2,
    icon: Users,
    iconColor: "#10b981",
    title: "Import and verify your leads",
    body: "Upload a CSV, organize your contacts, and complete the required verification steps for your campaign.",
  },
  {
    number: 3,
    icon: Send,
    iconColor: "#b75b00",
    title: "Build your sequence",
    body: "Write your initial email, add follow-ups, set delays, and configure campaign schedules and sending controls.",
  },
  {
    number: 4,
    icon: ShieldCheck,
    iconColor: "#0058be",
    title: "Monitor and improve",
    body: "Track campaign performance, review bounce and complaint signals, and use the available safeguards when sending risks arise.",
  },
];

export default function SimplicitySection() {
  return (
    <section className="py-24 section-mesh border-t border-[#c2c6d6]/20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="section-tag justify-center mb-6">A simpler outbound workflow</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            From lead list to{" "}
            <span className="font-display italic text-[#0058be]">campaign reporting.</span>
          </h2>
        </motion.div>

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

        <div className="mt-12 flex flex-col items-center justify-center gap-3">
          <Link
            href="https://app.leadsnipper.com/signup?product=leadsnipper"
            className="btn-primary rounded-full text-sm"
          >
            Start Your 14-Day Trial
          </Link>
          <p className="text-sm text-[#727785] text-center">
            You can start with the sending accounts you already use.
          </p>
        </div>
      </div>
    </section>
  );
}
