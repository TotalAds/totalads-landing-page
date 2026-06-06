"use client";
import { motion } from "framer-motion";
import { Building2, Flame, Inbox, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const layers = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Your AWS SES Account",
    desc: "Infrastructure you own. IPs that build YOUR reputation over time.",
    color: "#0058be",
    href: "/cold-email-infrastructure",
    keywords: "BYO AWS SES, cold email infrastructure",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Domain Health Engine",
    desc: "SPF, DKIM, DMARC validated in real-time. Alerts before something breaks.",
    color: "#2170e4",
    href: "/email-deliverability",
    keywords: "email deliverability tool, domain health monitoring",
  },
  {
    icon: <Flame className="w-5 h-5" />,
    title: "Smart Warmup System",
    desc: "AI-driven daily pacing that mirrors real human sending patterns.",
    color: "#8b5cf6",
    href: "/email-warmup",
    keywords: "email warmup tool, sender reputation warmup",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Reoon Email Verification",
    desc: "Catch-all detection, disposable domain flagging. No more bounce disasters.",
    color: "#10b981",
    href: "/cold-email-software",
    keywords: "email verification, list cleaning",
  },
  {
    icon: <Inbox className="w-5 h-5" />,
    title: "Campaign Engine",
    desc: "Sequences, A/B tests, reply tracking — all from one clean dashboard.",
    color: "#b75b00",
    href: "/cold-email-software",
    keywords: "cold email campaigns, automated outreach",
  },
];

export default function DeliverabilityStack() {
  return (
    <section className="py-24 relative section-mesh border-t border-[#c2c6d6]/20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center mb-6">The Stack</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Five layers between you
            <br />
            <span className="font-display italic text-[#0058be]">and the inbox.</span>
          </h2>
          <p className="text-body-md text-[#727785] mt-4 max-w-lg mx-auto">
            Every layer is designed to protect your deliverability from the
            bottom up.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={layer.href}
                className="group block glass-card glass-card-hover rounded-2xl border-l-4 flex items-start gap-5 p-5 transition-all hover:-translate-y-1"
                style={{ borderLeftColor: layer.color }}
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ color: layer.color, background: `${layer.color}12` }}
                >
                  {layer.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading font-bold text-[15px] text-[#131b2e] mb-1 group-hover:text-[#0058be] transition-colors">
                    {layer.title}
                  </h4>
                  <p className="text-sm text-[#727785] leading-relaxed mb-2">
                    {layer.desc}
                  </p>
                  <span className="text-[10px] font-mono text-[#727785] bg-[#f2f3ff] px-2 py-0.5 rounded">
                    {layer.keywords}
                  </span>
                </div>
                <span
                  className="font-mono text-xs ml-auto mt-1 shrink-0 px-2 py-1 rounded-md"
                  style={{
                    color: layer.color,
                    background: `${layer.color}10`,
                  }}
                >
                  L{i + 1}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
