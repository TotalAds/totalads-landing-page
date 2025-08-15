"use client";

import { motion } from "framer-motion";
import { BarChart3, MessageSquare, Search, Workflow } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerContainer, staggerItem } from "@/lib/utils";
import { randFromIndex } from "@/lib/landing";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${randFromIndex(i, "features-left") * 100}%`,
              top: `${randFromIndex(i, "features-top") * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 2, 1], y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          {/* Example card */}
          <motion.div variants={staggerItem} whileHover={{ y: -15, scale: 1.02 }}>
            <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10">
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-3">Pipeline Growth Engine</CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  Turn websites into complete company profiles your reps can act on — contacts, signals, and buying context — in seconds.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem} whileHover={{ y: -15, scale: 1.02 }}>
            <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10">
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-3">Decision-Maker Ready Data</CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  Auto-enriched contacts with verified phones, socials, and roles — deduped and formatted to drop straight into your sequences.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem} whileHover={{ y: -15, scale: 1.02 }}>
            <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10">
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Workflow className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-3">ICP Fit & Next Best Action</CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  Automatically score and qualify leads based on your Ideal Customer Profile criteria with AI-powered matching algorithms.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem} whileHover={{ y: -15, scale: 1.02 }}>
            <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10">
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-3">Developer-Friendly API Design</CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  RESTful API, intuitive endpoints, and documentation that gets you up and running in under 5 minutes.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

