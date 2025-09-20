"use client";

import { motion } from "framer-motion";
import { Brain, Target, Users, Zap } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { randFromIndex } from "@/lib/landing";
import { staggerContainer, staggerItem } from "@/lib/utils";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${randFromIndex(i, "features-left") * 100}%`,
              top: `${randFromIndex(i, "features-top") * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 2, 1],
              y: [0, -20, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={staggerItem}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Supercharge Your Sales Pipeline
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            Transform any website into actionable sales intelligence with our
            AI-powered platform. Get verified contacts, business insights, and
            ICP scoring in seconds.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* AI-Powered Intelligence */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -15, scale: 1.02 }}
          >
            <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10">
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-3">
                  AI-Powered Intelligence
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  Extract comprehensive business data, contact information, and
                  company insights from any website using advanced AI
                  algorithms.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -15, scale: 1.02 }}
          >
            <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10">
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-3">
                  Contact Discovery
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  Find verified email addresses, phone numbers, and social
                  profiles of key decision-makers with 95% accuracy.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -15, scale: 1.02 }}
          >
            <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10">
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-3">
                  ICP Scoring & Matching
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  Automatically score prospects against your Ideal Customer
                  Profile with AI-powered matching and qualification algorithms.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -15, scale: 1.02 }}
          >
            <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10">
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-3">
                  Lightning Fast Results
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  Get comprehensive business intelligence in under 30 seconds
                  with our optimized processing pipeline and real-time data
                  extraction.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
