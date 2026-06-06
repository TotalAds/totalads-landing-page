"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Logo from "@/asset/leadsnipper_rec.svg";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [nlEmail, setNlEmail] = useState("");

  const footerLinks = {
    Products: [
      { label: "LeadSnipper", href: "/products/leadsnipper" },
      { label: "SocialSnipper", href: "/products/socialsnipper" },
      { label: "Pricing", href: "/pricing" },
      { label: "Cost Calculator", href: "/savings-calculator" },
    ],
    "Cold Email": [
      { label: "Cold Email Software", href: "/cold-email-software" },
      { label: "Email Warmup Tool", href: "/email-warmup" },
      { label: "Email Deliverability", href: "/email-deliverability" },
      { label: "BYO AWS SES", href: "/cold-email-infrastructure" },
      { label: "AI Email Generator", href: "/ai-cold-email-generator" },
    ],
    "Compare": [
      { label: "vs Instantly", href: "/vs/instantly" },
      { label: "vs Smartlead", href: "/vs/smartlead" },
      { label: "vs Apollo", href: "/vs/apollo" },
      { label: "vs Lemlist", href: "/vs/lemlist" },
      { label: "vs Mailshake", href: "/vs/mailshake" },
    ],
    Resources: [
      { label: "Blog", href: "/blog" },
      { label: "SaaS Cold Email", href: "/cold-email-for/saas" },
      { label: "Agency Cold Email", href: "/cold-email-for/agencies" },
      { label: "Cost Calculator", href: "/savings-calculator" },
      { label: "Contact", href: "/contact" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "mailto:rehan@leadsnipper.com" },
    ],
  };

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Data Use Policy", href: "/legal/data-use" },
  ];

  return (
    <footer className="border-t border-[#c2c6d6]/30 bg-[#faf8ff] ">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 pt-10">
        {/* Newsletter Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-[#0058be]/15 bg-[#0058be]/[0.04] px-8 py-6 -mt-px my-12"
        >
          <div>
            <h4 className="font-heading font-semibold text-[17px] text-[#131b2e]">
              Get the outbound playbook.
            </h4>
            <p className="text-sm text-[#727785] mt-1">
              Deliverability guides + AI outbound insights. Every other week.
            </p>
          </div>
          <form
            className="flex w-full md:w-auto gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setNlEmail("");
            }}
          >
            <input
              type="email"
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 md:w-64 rounded-lg border border-[#c2c6d6]/50 bg-white px-4 py-2.5 text-sm text-[#131b2e] placeholder:text-[#c2c6d6] outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition"
            />
            <button
              type="submit"
              className="btn-primary text-sm py-2.5 px-5 rounded-lg whitespace-nowrap"
            >
              Subscribe →
            </button>
          </form>
        </motion.div>

        {/* Footer Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12"
        >
          {/* Brand Column (spans 2) */}
          <div className="col-span-2 pr-8">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0058be] to-[#2170e4] rounded-lg flex items-center justify-center overflow-hidden">
                <Image src={Logo} alt="LeadSnipper Logo" className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-[15px] text-[#131b2e]">
                Lead<span className="text-[#0058be]">Snipper</span>
              </span>
            </Link>
            <p className="text-sm text-[#727785] leading-relaxed max-w-[220px] mb-6">
              We build and operate AI-powered outbound systems.
            </p>
            <div className="flex gap-3">
              {/* Social media links with SEO best practices:
                  - target="_blank" opens in new tab (good UX for external links)
                  - rel="noopener noreferrer me" provides security + SEO signals
                  - "me" attribute helps establish entity relationships for search engines
                  - aria-label for accessibility */}
              <a
                href="https://www.linkedin.com/company/leadsnipper/"
                target="_blank"
                rel="noopener noreferrer me"
                className="w-9 h-9 rounded-lg border border-[#c2c6d6]/30 flex items-center justify-center text-[#727785] hover:text-[#0058be] hover:border-[#0058be]/30 hover:bg-[#0058be]/[0.04] transition-all"
                aria-label="Follow LeadSnipper on LinkedIn"
              >
                <IconBrandLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/leadsnipper_"
                target="_blank"
                rel="noopener noreferrer me"
                className="w-9 h-9 rounded-lg border border-[#c2c6d6]/30 flex items-center justify-center text-[#727785] hover:text-[#0058be] hover:border-[#0058be]/30 hover:bg-[#0058be]/[0.04] transition-all"
                aria-label="Follow LeadSnipper on X (Twitter)"
              >
                <IconBrandX className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Leadsnipper/61590183337984/"
                target="_blank"
                rel="noopener noreferrer me"
                className="w-9 h-9 rounded-lg border border-[#c2c6d6]/30 flex items-center justify-center text-[#727785] hover:text-[#0058be] hover:border-[#0058be]/30 hover:bg-[#0058be]/[0.04] transition-all"
                aria-label="Follow LeadSnipper on Facebook"
              >
                <IconBrandFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/leadsnipper/"
                target="_blank"
                rel="noopener noreferrer me"
                className="w-9 h-9 rounded-lg border border-[#c2c6d6]/30 flex items-center justify-center text-[#727785] hover:text-[#0058be] hover:border-[#0058be]/30 hover:bg-[#0058be]/[0.04] transition-all"
                aria-label="Follow LeadSnipper on Instagram"
              >
                <IconBrandInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@leadsnipper_official"
                target="_blank"
                rel="noopener noreferrer me"
                className="w-9 h-9 rounded-lg border border-[#c2c6d6]/30 flex items-center justify-center text-[#727785] hover:text-[#0058be] hover:border-[#0058be]/30 hover:bg-[#0058be]/[0.04] transition-all"
                aria-label="Subscribe to LeadSnipper on YouTube"
              >
                <IconBrandYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono text-[11px] font-medium text-[#0058be] uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#727785] hover:text-[#0058be] transition-colors inline-block hover:translate-x-0.5 transition-transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[#c2c6d6]/30 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#727785]">
            © {currentYear} LeadSnipper. Built in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-[#727785] hover:text-[#0058be] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Large Watermark Text */}
        <p className="text-center uppercase mt-4 mb-8 text-5xl md:text-8xl lg:text-[10rem] font-heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#eaedff] to-[#f2f3ff] select-none pointer-events-none leading-none">
          LeadSnipper
        </p>
      </div>
    </footer>
  );
}
