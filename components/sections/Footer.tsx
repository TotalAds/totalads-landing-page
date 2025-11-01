import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/asset/leadsnipper_rec.svg";
import { IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
    Company: [
      { label: "Contact", href: "mailto:rehan@leadsnipper.com" },
      { label: "Careers", href: "mailto:rehan@leadsnipper.com" },
    ],

    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
    Socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/leadsnipper/",
      },
      { label: "Twitter", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-[#2a2a2d] bg-gradient-to-b from-[#131313] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#eb857a] to-[#9DD0c7] rounded flex items-center justify-center overflow-hidden">
                <Image src={Logo} alt="" />
              </div>
              <span className="text-white font-bold">LeadSnipper</span>
            </Link>
            <p className="text-[#f4cdc1] text-sm">
              LeadSnipper — Convert cold email into predictable revenue.
              <br />
              Made with ❤️ in India.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#f4cdc1] hover:text-[#eb857a] transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-[#2a2a2d] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#f4cdc1] text-sm">
            © {currentYear} LeadSnipper. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/leadsnipper/"
              className="text-[#f4cdc1] hover:text-[#eb857a] transition"
            >
              <IconBrandLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
