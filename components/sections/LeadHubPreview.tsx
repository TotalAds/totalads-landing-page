"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LeadHubPreview() {
  return (
    <section id="leadhub" className="scroll-mt-28 border-t border-[#c2c6d6]/20 bg-white py-16">
      <div className="mx-auto max-w-[800px] px-5 sm:px-6 lg:px-16 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="section-tag">LeadHub</span>
          <span className="badge-beta text-[10px]">Beta</span>
        </div>
        <p className="mt-5 text-body-md leading-relaxed text-[#424754]">
          LeadSnipper Email manages campaigns. LeadHub is a separate beta for researching companies and finding who to contact.
        </p>
        <Link href="/leadhub" className="btn-ghost mt-6 inline-flex">
          Explore LeadHub <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
