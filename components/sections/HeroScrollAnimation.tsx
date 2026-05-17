"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import LeadsnipperSc from "@/asset/leadsnipper_dash_sc.png";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            {/* Hero Badge */}
            <div className="flex justify-center mb-8">
              <span className="badge-hero">
                AI-Powered Outbound Infrastructure
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-heading font-extrabold text-[#131b2e] text-center">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                We build and operate
              </span>
              <span className="block font-display italic text-[#0058be] text-3xl md:text-display-hero mt-2">
                AI-powered outbound systems.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-body-lg text-[#424754] mt-6 max-w-2xl mx-auto text-center leading-relaxed">
              Email infrastructure you own. LinkedIn presence that compounds.
              Services that run your entire pipeline. One partner for B2B growth.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="https://app.leadsnipper.com/signup"
                className="btn-primary btn-hero"
              >
                Start free — ₹0
              </Link>
              <Link href="/contact" className="btn-ghost btn-hero">
                Book a free audit →
              </Link>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[#727785] text-xs mt-8">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                No card required
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Setup in 15 minutes
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                AWS SES infrastructure
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Cancel anytime
              </span>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {["AK", "SP", "MR", "JS", "PD"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-heading font-bold text-white"
                    style={{
                      background: [
                        "linear-gradient(135deg, #0058be, #2170e4)",
                        "linear-gradient(135deg, #10b981, #34d399)",
                        "linear-gradient(135deg, #8b5cf6, #a78bfa)",
                        "linear-gradient(135deg, #b75b00, #e57c1a)",
                        "linear-gradient(135deg, #0058be, #2170e4)",
                      ][i],
                      zIndex: 5 - i,
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#727785]">
                Trusted by <span className="font-semibold text-[#131b2e]">200+</span> B2B teams across India
              </p>
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
