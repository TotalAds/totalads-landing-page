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
        <title>LeadSnipper - Convert Cold Email Into Predictable Revenue</title>
        <meta
          name="description"
          content="Scale cold email campaigns with 99.9% deliverability, unlimited mailboxes, and AI personalization. Start free - no credit card required."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="LeadSnipper - Cold Email Platform" />
        <meta
          property="og:description"
          content="Convert cold email into predictable revenue with unlimited mailboxes and premium deliverability."
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
