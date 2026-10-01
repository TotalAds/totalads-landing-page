"use client";
import Link from "next/link";
import React from "react";

import ProductHuntChip from "@/components/sections/ProductHuntChip";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { LEADHUB_SIGNUP_URL } from "@/lib/launchLinks";

export function HeroScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            {/* Product Hunt launch chip — short button in hero, not navbar */}
            <div className="flex justify-center mb-5">
              <ProductHuntChip />
            </div>

            {/* Hero Badge */}
            <div className="flex justify-center mb-8">
              <span className="badge-hero">
                Deliverability-first cold email
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[#131b2e] text-center">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                Send cold email that lands.
              </span>
              <span className="block font-display italic text-[#0058be] text-3xl md:text-display-hero mt-2">
                Built on infrastructure you own.
              </span>
            </h1>

            <p className="text-base md:text-body-lg text-[#424754] mt-6 max-w-2xl mx-auto text-center leading-relaxed">
              <strong className="font-semibold text-[#131b2e]">LeadSnipper</strong> helps you send confidently from your own infrastructure, with verification, pacing, and domain protection built in. Need stronger leads first? <strong className="font-semibold text-[#131b2e]">LeadHub</strong> finds the person and the reason to write.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="https://app.leadsnipper.com/signup?product=leadsnipper"
                className="btn-primary btn-hero"
              >
                Start Free 14-Day Trial: LeadSnipper
              </Link>
              <Link
                href={LEADHUB_SIGNUP_URL}
                className="btn-ghost btn-hero"
              >
                Try LeadHub beta →
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="badge-live text-[11px]">LeadSnipper: Live</span>
              <span className="badge-beta text-[11px]">LeadHub: Beta</span>
            </div>
            <p className="text-xs text-[#727785] mt-4 text-center">
              AppSumo lifetime deal covers LeadSnipper.
            </p>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[#727785] text-xs mt-6">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Emails reach inboxes
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Domains stay healthy
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Lifetime deal from $39
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                No card required
              </span>
            </div>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center">
          {/* <Image
            src={LeadsnipperSc}
            alt="LeadSnipper Dashboard — Domain health, campaign analytics, and sending controls"
            className="w-full"
          /> */}
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/g7D7nUPE2qI?si=UHUcJRk4-7nYWEkD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </ContainerScroll>
    </div>
  );
}
