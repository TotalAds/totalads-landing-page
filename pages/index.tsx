import React from "react";

import CampaignHealthScore from "@/components/sections/CampaignHealthScore";
import ChecklistLeadCaptureSystem from "@/components/sections/ChecklistLeadCaptureSystem";
import CTASection from "@/components/sections/CTASection";
import DeliverabilityStack from "@/components/sections/DeliverabilityStack";
import FAQSection from "@/components/sections/FAQSection";
import FeaturedInBar from "@/components/sections/FeaturedInBar";
import Footer from "@/components/sections/Footer";
import { HeroScrollAnimation } from "@/components/sections/HeroScrollAnimation";
import InboxIntegrationsSection from "@/components/sections/InboxIntegrationsSection";
import ManagedServicesSection from "@/components/sections/ManagedServicesSection";
import PainSection from "@/components/sections/PainSection";
import PricingSection from "@/components/sections/PricingSection";
import SimplicitySection from "@/components/sections/SimplicitySection";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import TrustStrip from "@/components/sections/TrustStrip";
import FeaturesGrid from "@/components/sections/TwoWaysSection";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <SEO pageKey="home" />

      {/* Navbar */}
      <Navbar />

      {/* Hero — Own Your Email Infrastructure */}
      <section className="hero-bg dot-grid pt-24 md:pt-32">
        <HeroScrollAnimation />
      </section>

      {/* Trust Strip — real company logos */}
      <TrustStrip />

      {/* Featured In — wordmarks + segment pills */}
      <FeaturedInBar />

      {/* Problem — Before / After */}
      <PainSection />

      {/* Solution — Flagship: Intelligent Deliverability Protection */}
      <DeliverabilityStack />

      {/* Campaign Health Score — live deliverability dashboard */}
      <CampaignHealthScore />

      {/* Features — Connect / Send / Protect / Measure */}
      <FeaturesGrid />

      {/* Inbox Integrations — Gmail / Outlook / SMTP + Campaign Guardrails */}
      <InboxIntegrationsSection />

      {/* From Zero to Sending — 4-step onboarding */}
      <SimplicitySection />

      {/* Add-on Support Services + Premium Managed AWS SES */}
      <ManagedServicesSection />

      {/* Pricing — Starter / Growth / Scale */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Lead capture system — preserved (scroll bar + exit intent) */}
      <ChecklistLeadCaptureSystem />
    </>
  );
}
