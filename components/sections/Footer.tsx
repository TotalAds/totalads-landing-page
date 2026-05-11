import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/asset/leadsnipper_rec.svg";
import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Integrations", href: "/#integrations" },
      { label: "FAQ", href: "/#faq" },
      { label: "Cost Calculator", href: "/savings-calculator" }
      ],
    Company: [
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "mailto:rehan@leadsnipper.com" },
    ],
    
    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Data Use Policy", href: "/legal/data-use" },
    ],
    Resources: [
      { label: "Blog", href: "/blog" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/leadsnipper/",
      },
      { label: "Twitter", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-[#e2e8f0] bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-8 mb-12"
        >
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#3b82f6] to-[#22c55e] rounded flex items-center justify-center overflow-hidden">
                <Image src={Logo} alt="LeadSnipper Logo" />
              </div>
              <span className="text-white font-bold">LeadSnipper</span>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              AI-first cold email platform. Own your sending infrastructure. Own
              your deliverability.
            </p>
            <p className="text-[#64748b] text-xs mt-3">
              Made with care in India.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#94a3b8] hover:text-[#3b82f6] transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="border-t border-[#334155] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94a3b8] text-sm">
            Copyright &copy; {currentYear} LeadSnipper. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/leadsnipper/"
              className="text-[#94a3b8] hover:text-[#3b82f6] transition"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#94a3b8] hover:text-[#3b82f6] transition"
              aria-label="Twitter"
            >
              <IconBrandX className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
