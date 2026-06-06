import React from "react";

import ChecklistLeadCaptureSystem from "@/components/sections/ChecklistLeadCaptureSystem";
import CTASection from "@/components/sections/CTASection";
import DeliverabilityStack from "@/components/sections/DeliverabilityStack";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import { HeroScrollAnimation } from "@/components/sections/HeroScrollAnimation";
import PainSection from "@/components/sections/PainSection";
import ProductsShowcase from "@/components/sections/ProductsShowcase";
import SEOLinksSection from "@/components/sections/SEOLinksSection";
import ServicesBento from "@/components/sections/ServicesBento";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import TwoWaysSection from "@/components/sections/TwoWaysSection";
import VisionSection from "@/components/sections/VisionSection";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <SEO pageKey="home" />

      {/* Navbar */}
      <Navbar />

      {/* Hero — Centered layout with dot-grid & radial glow */}
      <section className="hero-bg dot-grid pt-24 md:pt-32">
        <HeroScrollAnimation />
      </section>

      {/* Problem — The Reality */}
      <PainSection />

      {/* Two Ways to Work */}
      <TwoWaysSection />

      {/* Products Showcase — LeadSnipper + SocialSnipper */}
      <ProductsShowcase />

      {/* SEO Links — Money Pages & Competitor Comparisons */}
      <SEOLinksSection />

      {/* Deliverability Stack Visual */}
      <DeliverabilityStack />

      {/* Services Bento Grid */}
      <ServicesBento />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* Vision — Why Build With Us */}
      <VisionSection />

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
