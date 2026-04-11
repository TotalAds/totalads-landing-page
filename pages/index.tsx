"use client";

import Head from "next/head";
import React from "react";

import BenefitsRow from "@/components/sections/BenefitsRow";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import FounderStory from "@/components/sections/FounderStory";
import { HeroScrollAnimation } from "@/components/sections/HeroScrollAnimation";
import HowItWorks from "@/components/sections/HowItWorks";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import PainSection from "@/components/sections/PainSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import TrustStrip from "@/components/sections/TrustStrip";
import WhyBYOSES from "@/components/sections/WhyBYOSES";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          LeadSnipper — Send 10,000+ Cold Emails Without Killing Your Domain
        </title>
        <meta
          name="description"
          content="LeadSnipper is the AI-first cold email platform built on AWS SES. Own your sending infrastructure, verify with AI, warm up intelligently, and send campaigns that land in the inbox. Start free."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="LeadSnipper — Own Your Sending Infrastructure. Own Your Results."
        />
        <meta
          property="og:description"
          content="AI-powered cold email with BYO AWS SES, built-in verification, domain health monitoring, and intelligent warmup. Built for teams who send at scale."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leadsnipper.com" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f0f0f0] to-[#fafafa]">
        <Navbar />
        <div className="pt-24">
          <HeroScrollAnimation />
          <TrustStrip />
          <PainSection />
          <WhyBYOSES />
          <BenefitsRow />
          <HowItWorks />
          <FeaturesSectionWithHoverEffects />
          <TestimonialsSlider />
          <PricingSection />
          <FounderStory />
          <FAQSection />
          {/* <IntegrationsSection /> */}
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}
