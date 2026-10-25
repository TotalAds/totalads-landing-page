"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const operations = [
  {
    title: "Mailbox controls",
    body: "Configure sending limits and pacing for connected inboxes.",
  },
  {
    title: "Campaign safeguards",
    body: "Monitor sending signals and pause campaigns when risk thresholds are reached. A pause stays in place until you acknowledge it.",
  },
  {
    title: "Campaign analytics",
    body: "Review engagement, campaign results, and sequence performance.",
  },
  {
    title: "Team workflows",
    body: "Use supported workspace and permission features to organize access.",
  },
  {
    title: "Client reporting",
    body: "Export PDF campaign reports on eligible plans.",
  },
  {
    title: "Advanced workflows",
    body: "Access capabilities such as Google Sheets sync, developer APIs, and webhooks on supported plans.",
  },
];

export default function AgencyOperationsSection() {
  return (
    <section className="py-24 section-mesh border-t border-[#c2c6d6]/20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="section-tag mb-6">Agency operations</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Manage more outbound work{" "}
            <span className="font-display italic text-[#0058be]">without losing visibility.</span>
          </h2>
          <p className="text-body-md text-[#424754] mt-4 leading-relaxed">
            As your agency grows, the operational work grows with it.
          </p>
          <p className="text-body-md text-[#727785] mt-3 leading-relaxed">
            LeadSnipper gives your team tools to manage sending accounts, campaigns, and performance from one platform.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {operations.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-[#c2c6d6]/20 p-5 bg-white/80"
            >
              <h3 className="font-heading font-bold text-[15px] text-[#131b2e]">
                {item.title}
              </h3>
              <p className="text-sm text-[#424754] leading-relaxed mt-2">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="text-sm text-[#727785] mt-10 max-w-2xl">
          Manage the campaign workflow with more visibility as your client workload grows.
        </p>
        <div className="mt-6">
          <Link href="#platform" className="btn-primary rounded-full text-sm">
            Explore LeadSnipper
          </Link>
        </div>
      </div>
    </section>
  );
}
