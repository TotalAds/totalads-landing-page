import React from "react";

import AppSumoDealSection from "@/components/sections/AppSumoDealSection";
import AgencyOperationsSection from "@/components/sections/AgencyOperationsSection";
import ChecklistLeadCaptureSystem from "@/components/sections/ChecklistLeadCaptureSystem";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import { HomeHero } from "@/components/sections/LandingHero";
import ManagedServicesSection from "@/components/sections/ManagedServicesSection";
import PainSection from "@/components/sections/PainSection";
import PricingSection from "@/components/sections/PricingSection";
import SimplicitySection from "@/components/sections/SimplicitySection";
import FeaturesGrid from "@/components/sections/TwoWaysSection";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <SEO pageKey="home" />

      <Navbar />

      <section className="hero-bg dot-grid">
        <div className="pt-24">
          <div className="border-y border-[#c2c6d6]/40 bg-white/80">
            <p className="mx-auto max-w-4xl px-5 py-2.5 text-center text-[13px] font-medium tracking-wide text-[#131b2e]">
              Cold email operations for B2B agencies managing multiple client campaigns.
            </p>
          </div>
        </div>
        <HomeHero />
      </section>

      <PainSection />

      <FeaturesGrid />

      <SimplicitySection />

      <AgencyOperationsSection />

      <ManagedServicesSection />

      <PricingSection />

      <AppSumoDealSection />

      <FAQSection />

      <CTASection />

      <Footer />

      <ChecklistLeadCaptureSystem />
    </>
  );
}
