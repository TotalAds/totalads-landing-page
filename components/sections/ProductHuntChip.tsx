"use client";

import { motion } from "framer-motion";
import React from "react";

import { PRODUCT_HUNT_LAUNCH_URL } from "@/lib/launchLinks";

function ProductHuntIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="20" cy="20" r="20" fill="#FF6154" />
      <path
        d="M22.667 17.333H18.667V13.333H22.667C23.771 13.333 24.667 14.229 24.667 15.333C24.667 16.437 23.771 17.333 22.667 17.333ZM22.667 10.667H15.333V22.667H18.667V20H22.667C25.245 20 27.333 17.912 27.333 15.333C27.333 12.755 25.245 10.667 22.667 10.667Z"
        fill="white"
      />
    </svg>
  );
}

/** Compact Product Hunt launch button — lives in the hero, not the navbar. */
export default function ProductHuntChip() {
  return (
    <motion.a
      href={PRODUCT_HUNT_LAUNCH_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group inline-flex items-center gap-2 rounded-full border border-[#ff6154]/25 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm transition-shadow hover:border-[#ff6154]/45 hover:shadow-md"
      aria-label="LeadSnipper is live on Product Hunt — support our launch"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6154] opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff6154]" />
      </span>
      <ProductHuntIcon className="h-4 w-4 shrink-0" />
      <span className="font-heading text-[12px] font-semibold tracking-tight text-[#131b2e]">
        Live on Product Hunt
      </span>
      <span className="hidden text-[11px] font-medium text-[#ff6154] sm:inline group-hover:underline">
        Support the launch →
      </span>
    </motion.a>
  );
}
