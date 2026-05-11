"use client";
import Image from "next/image";
import React from "react";

import LeadsnipperSc from "@/asset/leadsnipper_dash_sc.png";
import { HeroLeadCapture } from "@/components/sections/HeroLeadCapture";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-[#1e293b]">
              <span className="text-3xl md:text-[4.5rem] font-bold mt-1 leading-[1.05] bg-linear-to-r from-[#3b82f6] to-[#22c55e] bg-clip-text text-transparent">
                Send 10,000+ Cold Emails Without Killing Your Domain Reputation.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#475569] mt-6 max-w-3xl mx-auto mb-2">
              Most tools use shared infrastructure. When they fail, your domain
              gets flagged.{" "}
              <span className="font-semibold text-[#1e293b]">
                LeadSnipper lets you bring your own AWS SES
              </span>
              , verify domains, warm up with AI, clean lists with built-in
              verification, and send campaigns that actually land in the inbox.
            </p>

            {/* Immediate proof — trust triggers in first 5 seconds */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#1e293b] text-sm font-medium mt-4 mb-8">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                Built for teams sending 1k–100k emails/month
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                Runs on AWS SES — not shared pools
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                Used by founders, agencies &amp; SDR teams
              </span>
            </div>

            <HeroLeadCapture />

            <div className="flex flex-wrap justify-center gap-6 text-[#64748b] text-sm mt-8">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                Own your sending reputation (BYO SES)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                Built-in verification — no bounce disasters
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                Domain health dashboard — know before you send
              </span>
            </div>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={LeadsnipperSc}
            alt="LeadSnipper AI Dashboard — Domain health, campaign analytics, and sending controls"
            className="w-full"
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
