import React from "react";
import Link from "next/link";

import SEO from "@/components/SEO";
import Footer from "@/components/sections/Footer";
import SavingsCalculator from "@/components/sections/SavingsCalculator";
import { Navbar } from "@/components/ui/navbar";

export default function SavingsCalculatorPage() {
  return (
    <>
      <SEO pageKey="savingsCalculator" />
      <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f0f7ff] to-[#fafafa]">
        <Navbar />
        <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <section className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-flex rounded-full bg-[#dbeafe] px-4 py-1 text-xs font-bold text-[#1d4ed8]">
                Instantly/Smartlead vs LeadSnipper + AWS SES
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0f172a]">
                Cold Email Savings Calculator
              </h1>
              <p className="mt-3 text-[#475569] max-w-2xl mx-auto">
                See your annual spend difference in seconds. Enter your monthly
                email + contact volume and compare Instantly, Smartlead, and
                LeadSnipper BYO SES with threshold-aware billing.
              </p>
            </div>

            <SavingsCalculator />
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-4">
                <p className="font-bold text-[#0f172a] mb-2">Instantly tiers</p>
                <p className="text-[#475569]">Growth: $47 (1k contacts, 5k emails)</p>
                <p className="text-[#475569]">
                  Hypergrowth: $97 (25k contacts, 100k emails)
                </p>
                <p className="text-[#475569]">
                  Light Speed: $358 (100k contacts, 500k emails)
                </p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-4">
                <p className="font-bold text-[#0f172a] mb-2">Smartlead tiers</p>
                <p className="text-[#475569]">Base: $32 (2k contacts, 6k emails)</p>
                <p className="text-[#475569]">Pro: $78 (30k contacts, 90k emails)</p>
                <p className="text-[#475569]">
                  Unlimited Smart/Prime: $144 / $315
                </p>
              </div>
              <div className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-4">
                <p className="font-bold text-[#166534] mb-2">
                  LeadSnipper BYO SES rule
                </p>
                <p className="text-[#166534]">
                  Free platform up to 1,000 contacts and 2,000 emails/month.
                </p>
                <p className="text-[#166534]">
                  After that: ₹999/month platform + AWS SES usage.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-[#dbeafe] bg-white p-5 text-center">
              <p className="text-[#475569]">
                Comparing tools before switching? Read the dedicated{" "}
                <Link
                  href="/vs/instantly"
                  className="font-bold text-[#2563eb] hover:underline"
                >
                  Instantly alternative
                </Link>{" "}
                and{" "}
                <Link
                  href="/vs/smartlead"
                  className="font-bold text-[#2563eb] hover:underline"
                >
                  Smartlead alternative
                </Link>{" "}
                pages for deliverability, infrastructure, and verification trade-offs.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
