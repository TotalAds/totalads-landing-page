"use client";

import React from "react";

import SEO from "@/components/SEO";
import BenefitsRow from "@/components/sections/BenefitsRow";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import FounderStory from "@/components/sections/FounderStory";
import { HeroScrollAnimation } from "@/components/sections/HeroScrollAnimation";
import HowItWorks from "@/components/sections/HowItWorks";
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
      <SEO
        pageKey="home"
        structuredDataType="softwareApplication"
      />

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
          <BlogSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}
