import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const sharedProblems = [
  {
    label: "One bad actor on the shared pool",
    result: "Your domain gets flagged",
  },
  {
    label: "Platform has an outage",
    result: "Your campaigns stop — and you can't fix it",
  },
  {
    label: "You don't control IP reputation",
    result: "Deliverability is a black box",
  },
  {
    label: "You're renting your outbound",
    result: "Switch tools = start reputation from zero",
  },
];

export default function WhyBYOSES() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Why Shared Infrastructure Destroys Your Deliverability
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            Every major cold email tool puts you on shared sending pools.
            Here&apos;s what that actually means for your domain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#fef2f2] text-[#ef4444] text-xs font-bold px-3 py-1 rounded-full mb-4">
              THE PROBLEM
            </div>
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6">
              With Shared Tools (Instantly, Smartlead, etc.)
            </h3>
            <div className="space-y-4">
              {sharedProblems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white border-2 border-[#fef2f2] rounded-xl"
                >
                  <p className="text-[#1e293b] font-medium text-sm">
                    {item.label}
                  </p>
                  <p className="text-[#ef4444] text-sm mt-1 flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                    {item.result}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Fix */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#f0fdf4] text-[#22c55e] text-xs font-bold px-3 py-1 rounded-full mb-4">
              THE FIX
            </div>
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6">
              With LeadSnipper (BYO AWS SES)
            </h3>
            <div className="p-6 bg-gradient-to-br from-[#3b82f6]/5 to-[#22c55e]/5 border-2 border-[#3b82f6]/20 rounded-2xl">
              <ul className="space-y-4">
                {[
                  "Your SES, your IPs, your reputation — nobody else touches it",
                  "Bad actors on other accounts? Not your problem",
                  "Full visibility into bounce rates, complaints, and quotas",
                  "Switch tools anytime — your SES reputation stays with you",
                  "AWS SES costs ₹0.84 per 1,000 emails — you keep the savings",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#1e293b] text-sm"
                  >
                    <span className="text-[#22c55e] font-bold mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
                <p className="text-[#475569] text-sm mb-4">
                  Don&apos;t want to manage AWS? Choose{" "}
                  <span className="font-semibold text-[#1e293b]">
                    Managed Mode
                  </span>{" "}
                  — we handle the infrastructure. BYO is there when you&apos;re
                  ready for full control.
                </p>
                <Link
                  href="https://app.leadsnipper.com/signup?product=leadsnipper"
                  className="inline-flex items-center gap-2 text-[#3b82f6] font-semibold text-sm hover:text-[#2563eb] transition"
                >
                  Try it free — own your infrastructure from day one
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
