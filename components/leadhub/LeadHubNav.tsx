"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import LeadsnipperRounded from "@/asset/leadsnipper.svg";
import { LEADHUB_SIGNUP_URL, LEADSNIPPER_HOME_URL } from "@/lib/launchLinks";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Examples", href: "#examples" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function LeadHubNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 py-4">
      <div className="flex w-full max-w-5xl items-center justify-between rounded-3xl border border-[#c2c6d6]/30 bg-white/70 px-5 py-3 shadow-md backdrop-blur-sm">
        <a href={LEADSNIPPER_HOME_URL} className="flex items-center gap-2 min-w-0" aria-label="Go to LeadSnipper home">
          <Image
            src={LeadsnipperRounded}
            alt="LeadHub by LeadSnipper"
            className="h-8 w-8"
          />
          <span className="font-heading text-[15px] font-bold text-[#131b2e] truncate">
            LeadHub{" "}
            <span className="font-medium text-[#727785]">by LeadSnipper</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-heading font-semibold text-[#424754] hover:text-[#131b2e] rounded-lg hover:bg-[#f2f3ff] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LEADSNIPPER_HOME_URL}
            className="hidden md:inline-flex px-3 py-2 text-sm font-heading font-semibold text-[#424754] hover:text-[#0058be] transition-colors"
          >
            ← LeadSnipper
          </a>
          <a href={LEADHUB_SIGNUP_URL} className="btn-primary !text-sm !py-2 !px-4 rounded-full hidden sm:inline-flex">
            Start free beta
          </a>
          <button
            type="button"
            className="lg:hidden flex items-center"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute top-[4.5rem] left-4 right-4 rounded-2xl border border-[#c2c6d6]/30 bg-white p-3 shadow-xl lg:hidden">
          <a
            href={LEADSNIPPER_HOME_URL}
            className="mb-2 block rounded-xl px-3 py-3 text-sm font-heading font-semibold text-[#0058be] hover:bg-[#f2f3ff]"
          >
            ← Back to LeadSnipper
          </a>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm font-heading font-semibold text-[#131b2e] hover:bg-[#f2f3ff]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LEADHUB_SIGNUP_URL}
            className="btn-primary mt-2 w-full rounded-full text-center"
          >
            Start free beta
          </a>
        </div>
      )}
    </div>
  );
}
