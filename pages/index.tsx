"use client";

import Head from "next/head";
import React from "react";

import BenefitsRow from "@/components/sections/BenefitsRow";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import { HeroScrollAnimation } from "@/components/sections/HeroScrollAnimation";
import HowItWorks from "@/components/sections/HowItWorks";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import TrustStrip from "@/components/sections/TrustStrip";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          LeadSnipper — Turn Cold Emails Into Booked Meetings Automatically
        </title>
        <meta
          name="description"
          content="LeadSnipper is the AI-powered email platform for agencies, founders, and sales teams. Join 40,000+ teams turning cold email into predictable revenue. Free Forever — no credit card."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="LeadSnipper — Book More Meetings from Cold Email"
        />
        <meta
          property="og:description"
          content="Turn cold emails into booked meetings automatically. Free Forever plan, 99.9% deliverability, AI personalization."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leadsnipper.com" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f0f0f0] to-[#fafafa]">
        <Navbar />
        <div className="pt-24">
          <HeroScrollAnimation />
          <TrustStrip />
          <BenefitsRow />
          <HowItWorks />
          <FeaturesSectionWithHoverEffects />
          <TestimonialsSlider />
          <PricingSection />
          <FAQSection />
          <IntegrationsSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}
