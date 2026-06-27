"use client";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Cloud,
  Headphones,
  LifeBuoy,
  Lock,
  Mail,
  RefreshCw,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const supportServices = [
  {
    icon: <Mail className="w-5 h-5" />,
    color: "#0058be",
    title: "Google Workspace Setup",
    desc: "We create and configure your Google Workspace accounts from scratch — domain verification, MX records, SPF/DKIM/DMARC, and mailbox provisioning. You get clean inboxes ready to connect in LeadSnipper, no technical headaches.",
    tags: ["Account creation", "DNS records", "Ready-to-send"],
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    color: "#10b981",
    title: "Inbox Connection Troubleshooting",
    desc: "OAuth failing? SMTP authentication errors? Our team jumps in and resolves connection issues directly — whether it's a Google Workspace permission scope, an IMAP port conflict, or a Cloudflare DNS misconfiguration.",
    tags: ["OAuth debugging", "SMTP/IMAP fixes", "DNS resolution"],
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#8b5cf6",
    title: "Microsoft Account Block Support",
    desc: "Microsoft 365 blocks and Outlook sending restrictions are notoriously opaque. We handle the appeal, remediation, and re-connection — so your outbound doesn't stay down for days while you wait on Microsoft support.",
    tags: ["Account appeal", "Block removal", "Re-connection"],
  },
];

const sesFeatures = [
  {
    icon: <Server className="w-4 h-4" />,
    label: "We provision your AWS SES",
  },
  {
    icon: <Lock className="w-4 h-4" />,
    label: "Domain authentication handled",
  },
  {
    icon: <BadgeCheck className="w-4 h-4" />,
    label: "Sending limit increase managed",
  },
  {
    icon: <Cloud className="w-4 h-4" />,
    label: "Dedicated IP configuration",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    label: "High-volume throughput — up to 500K/mo",
  },
  {
    icon: <Headphones className="w-4 h-4" />,
    label: "Ongoing deliverability management",
  },
];

export default function ManagedServicesSection() {
  return (
    <section
      id="managed-services"
      className="py-24 relative section-blue border-t border-[#c2c6d6]/20 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">

        {/* ── Add-on Support Services ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-tag justify-center mb-6">
            <LifeBuoy className="w-3.5 h-3.5" />
            Hands-On Workspace Support
          </span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Don&apos;t get stuck on setup.{" "}
            <span className="font-display italic text-[#0058be]">We fix it.</span>
          </h2>
          <p className="text-body-md text-[#727785] mt-4 max-w-2xl mx-auto">
            From creating brand-new Google Workspace accounts to unblocking frozen Microsoft 365
            inboxes, our team handles the painful technical groundwork so you can focus on
            running campaigns — not fighting your email provider.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-24">
          {supportServices.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 flex flex-col gap-4"
            >
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ color: svc.color, background: `${svc.color}12` }}
              >
                {svc.icon}
              </span>
              <h3 className="font-heading font-bold text-[16px] text-[#131b2e]">{svc.title}</h3>
              <p className="text-sm text-[#424754] leading-relaxed flex-1">{svc.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full"
                    style={{ color: svc.color, background: `${svc.color}10` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Premium Managed AWS SES ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-3xl border-2 border-[#0058be]/20 p-8 md:p-12 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0058be]/[0.05] via-transparent to-[#8b5cf6]/[0.03] pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            {/* Left — copy */}
            <div>
              <span className="section-tag mb-6">
                <Server className="w-3.5 h-3.5" />
                Premium Managed Service
              </span>
              <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mt-6">
                Let us run your{" "}
                <span className="font-display italic text-[#0058be]">
                  AWS SES infrastructure.
                </span>
              </h2>
              <p className="text-body-md text-[#424754] mt-4 leading-relaxed">
                Don&apos;t want to touch AWS? Our premium managed service connects your sending
                domains to our enterprise-grade AWS SES setup — dedicated IPs, sending limit
                increases handled, bounce management configured, and ongoing deliverability
                monitoring included. You keep the brand; we own the infrastructure.
              </p>
              <p className="text-sm text-[#727785] mt-3 leading-relaxed">
                Ideal for agencies and high-volume teams sending{" "}
                <strong className="text-[#131b2e]">100,000 – 500,000+ emails/month</strong> who
                want enterprise deliverability without an in-house DevOps team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="https://cal.com/heyrehan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary rounded-full text-sm"
                >
                  Book a managed SES call →
                </a>
                <Link href="/contact" className="btn-ghost rounded-full text-sm">
                  Get a quote
                </Link>
              </div>
            </div>

            {/* Right — features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sesFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur rounded-xl border border-[#c2c6d6]/20 px-4 py-3"
                >
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[#0058be] bg-[#0058be]/10">
                    {f.icon}
                  </span>
                  <span className="text-sm font-medium text-[#131b2e]">{f.label}</span>
                </div>
              ))}
              {/* Pricing hint */}
              <div className="sm:col-span-2 flex items-center gap-2 mt-1 px-1">
                <BadgeCheck className="w-4 h-4 text-[#10b981] shrink-0" />
                <p className="text-xs text-[#727785]">
                  Flat monthly retainer · No per-email markup · You own the domains &amp; data
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
