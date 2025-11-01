"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import LeadsnipperSc from "@/asset/leadsnipper_dash_sc.png";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden  ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-[#131313]">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-[#eb857a] to-[#9DD0c7] bg-clip-text text-transparent">
                Turn Cold Emails Into Booked Meetings — Automatically.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#4a4a4a] mt-6 max-w-2xl mx-auto mb-4">
              LeadSnipper is the AI-powered email platform built for agencies,
              founders, and sales teams. Join 40,000+ teams using LeadSnipper to
              generate predictable revenue from cold email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.leadsnipper.com/signup"
                className="px-8 py-4 bg-[#eb857a]  text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#eb857a]/50 transition transform hover:scale-105"
              >
                Start Free Now
              </Link>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ event: "book_demo_click" });
                  }
                }}
                className="px-8 py-4 border-2 border-[#eb857a] text-[#eb857a] rounded-lg font-semibold hover:bg-[#eb857a]/10 transition"
              >
                Book a Demo
              </button>
            </div>
            <p className="text-[#4a4a4a] text-sm mt-6">
              ✅ Free Forever Plan • ✅ No Credit Card • ✅ Upgrade Anytime
            </p>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center ">
          <Image src={LeadsnipperSc} alt="" className="w-full" />
        </div>
      </ContainerScroll>
    </div>
  );
}
