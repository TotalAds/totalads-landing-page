"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Bomb, Lock, Wrench } from "lucide-react";
import React from "react";

const painCards = [
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    quote: "I keep getting blacklisted and I don't know why.",
    color: "#ba1a1a",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    quote: "I don't own my sending reputation — the platform does.",
    color: "#b75b00",
  },
  {
    icon: <Bomb className="w-5 h-5" />,
    quote: "I uploaded 10k leads and half bounced. Domain's toast.",
    color: "#8b5cf6",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    quote: "I need warmup, verification, and sending in one place — not 4 tools.",
    color: "#0058be",
  },
];

export default function PainSection() {
  return (
    <section className="py-24 relative overflow-hidden section-blue border-t border-[#c2c6d6]/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-tag mb-6">The Reality</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-6">
              Your morning shouldn&apos;t start
              <br />
              <span className="font-display italic text-[#ba1a1a]">
                with three tabs and a prayer.
              </span>
            </h2>
            <div className="space-y-4 text-[#424754] text-body-md leading-relaxed">
              <p>
                Most B2B teams wake up and check MXToolbox, Google Postmaster,
                and their email tool — three separate tabs — just to answer one
                question: &ldquo;Is our domain okay today?&rdquo;
              </p>
              <p>
                Then there&apos;s the list they forgot to verify. The warmup tool
                that doesn&apos;t talk to the sender. The client whose campaign
                bounced 400 domains overnight.
              </p>
              <p className="font-medium text-[#131b2e]">
                We built LeadSnipper because this is exactly what happens when
                you don&apos;t own your infrastructure.
              </p>
            </div>
          </motion.div>

          {/* Right Pain Cards */}
          <div className="grid grid-cols-2 gap-4">
            {painCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-6 rounded-2xl border-l-4"
                style={{ borderLeftColor: `${card.color}66` }}
              >
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ color: card.color, background: `${card.color}10` }}
                >
                  {card.icon}
                </span>
                <p className="font-display italic text-[15px] text-[#131b2e] leading-snug">
                  &ldquo;{card.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
