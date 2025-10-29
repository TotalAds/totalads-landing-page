"use client";
import Image from "next/image";
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
              Scale your email campaigns with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-[#eb857a] to-[#9DD0c7] bg-clip-text text-transparent">
                AI-Powered Personalization
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#4a4a4a] mt-6 max-w-2xl mx-auto">
              Send unlimited emails with 99.9% deliverability and watch your
              reply rates soar
            </p>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center ">
          {/* <div className="text-center">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-lg border border-[#e0e0e0]">
              <div className="text-6xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-[#131313] mb-2">
                Email Campaign Platform
              </h3>
              <p className="text-[#4a4a4a]">
                Unlimited mailboxes • AI personalization • 99.9% deliverability
              </p>
            </div>
          </div> */}
          <Image src={LeadsnipperSc} alt="" className="w-full" />
        </div>
      </ContainerScroll>
    </div>
  );
}
