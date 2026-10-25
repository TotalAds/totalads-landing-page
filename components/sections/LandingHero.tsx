"use client";
import Link from "next/link";
import React from "react";

import ProductHuntChip from "@/components/sections/ProductHuntChip";

const WALKTHROUGH_URL = "https://cal.com/heyrehan/30min";
const TRIAL_URL = "https://app.leadsnipper.com/signup?product=leadsnipper";
const VIDEO_SRC =
  "https://www.youtube.com/embed/g7D7nUPE2qI?rel=0&modestbranding=1";

const providers = ["Google Workspace", "Microsoft 365", "Zoho", "Custom SMTP"];

const points = [
  "Mailbox limits and pacing",
  "Lead verification before send",
  "Bounce and complaint monitoring",
];

const buttonStyle: React.CSSProperties = {
  whiteSpace: "nowrap",
  flexShrink: 0,
};

export function HomeHero() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <ProductHuntChip />
          <h1 className="hero-title mt-6 max-w-xl font-heading font-extrabold tracking-tight text-[#131b2e]">
            Run client cold email
            <span className="mt-1 block font-display font-normal italic text-[#0058be]">
              with more control.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#424754]">
            Manage sending accounts, verify leads, build follow-up sequences,
            and monitor bounce and complaint signals from one place.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href={TRIAL_URL} className="btn-primary" style={buttonStyle}>
              Start Free 14-Day Trial
            </Link>
            <a
              href={WALKTHROUGH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={buttonStyle}
            >
              Book an Agency Walkthrough
            </a>
          </div>
          <p className="mt-4 text-sm text-[#727785]">
            No credit card required. Connect the inboxes you already use.
          </p>
        </div>

        <figure>
          <div className="overflow-hidden rounded-2xl border border-[#c2c6d6]/70 bg-white shadow-xl">
            <div className="flex h-11 items-center gap-2 border-b border-[#c2c6d6]/40 bg-[#f7f8fc] px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ba1a1a]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#b75b00]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]/50" />
              <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-[#727785]">
                Product walkthrough
              </span>
            </div>
            <div
              className="relative w-full bg-[#0e1424]"
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src={VIDEO_SRC}
                title="LeadSnipper product walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {providers.map((provider) => (
              <li
                key={provider}
                className="rounded-full border border-[#c2c6d6]/60 bg-white px-3 py-1 text-xs font-medium text-[#424754]"
              >
                {provider}
              </li>
            ))}
          </ul>
        </figure>
      </div>

      <ul className="mt-8 mb-8 grid gap-3 border-t border-[#c2c6d6]/50 pt-6 md:grid-cols-3">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2 text-sm text-[#424754]"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0058be]" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
