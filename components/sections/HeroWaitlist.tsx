"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import AuthButtons from '@/components/auth/AuthButtons';
import { randFromIndex } from '@/lib/landing';
import { staggerContainer, staggerItem } from '@/lib/utils';

export default function HeroBeta({
  onHoverChange,
}: {
  onHoverChange?: (hover: boolean) => void;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    onHoverChange?.(isHovering);
  }, [isHovering, onHoverChange]);

  return (
    <motion.section
      ref={heroRef}
      className="relative overflow-hidden pt-24 pb-20 min-h-screen flex items-center"
      style={{ scale: heroScale, opacity: heroOpacity }}
    >
      {/* Advanced Animated background elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-gradient-to-r from-pink-500/10 to-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/12 to-pink-600/8 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-r from-pink-500/25 to-purple-500/25 rounded-full"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Enhanced Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${randFromIndex(i, "dots-left") * 100}%`,
                top: `${randFromIndex(i, "dots-top") * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + randFromIndex(i, "dots-duration", 0, 2),
                repeat: Infinity,
                delay: randFromIndex(i, "dots-delay", 0, 2),
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <motion.div style={{ y }} className="relative container mx-auto px-4">
        {/* Split-Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[85vh] py-8">
          {/* Left Side - Hero Text */}
          <motion.div
            className="text-left lg:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={staggerItem}
              className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tight"
            >
              <motion.div
                className="overflow-hidden mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                >
                  TURN ANY WEBSITE INTO
                </motion.span>
              </motion.div>

              <motion.div
                className="overflow-hidden mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.span
                  className="block relative"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                    ACTIONABLE BUSINESS
                  </span>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-2xl -z-10"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>
              </motion.div>

              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <motion.span
                  className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 font-black"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                    ease: "easeOut",
                  }}
                >
                  INTELLIGENCE
                </motion.span>
              </motion.div>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-light max-w-2xl"
            >
              <motion.span
                className="text-purple-300 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Get 12+ data points in one profile
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {" "}
                including{" "}
              </motion.span>
              <motion.span
                className="text-pink-300 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                contacts, social profiles, company details, tech stack
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                {" "}
                and an ICP fit score — powered by our{" "}
              </motion.span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
              >
                Sales Intelligence Engine
              </motion.span>
              <motion.span
                className="block mt-4 text-gray-400 text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                🚀{" "}
                <span className="text-green-400 font-semibold">
                  Now Live in Beta!
                </span>{" "}
                Free to explore and test - perfect for sales teams, lead
                generation, and market research
              </motion.span>
            </motion.p>

            <motion.div
              id="auth-buttons"
              className="space-y-4 mb-8"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <AuthButtons />
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Demo Container */}
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4 shadow-2xl">
              {/* URL Input Demo */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2">
                    Live Preview
                  </span>
                </div>

                <div className="bg-slate-900/80 rounded-lg p-3 border border-purple-500/30">
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400 text-sm">POST</span>
                    <span className="text-gray-300 text-sm font-mono">
                      api.leadsnipper.com/enrich
                    </span>
                  </div>
                  <div className="mt-2 text-gray-400 text-xs">
                    <span className="text-pink-400">URL:</span>{" "}
                    https://example-company.com
                  </div>
                </div>
              </motion.div>

              {/* Processing Animation */}
              <motion.div
                className="mb-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <motion.div
                  className="inline-flex items-center space-x-2 text-purple-300"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: 0.4,
                    }}
                  />
                  <span className="text-sm ml-2">Building profile...</span>
                </motion.div>
              </motion.div>

              {/* Results Header */}
              <motion.div
                className="mb-3 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <div className="inline-flex items-center space-x-2 text-green-400 text-sm font-semibold">
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span>✅ 12+ Profile Data Points</span>
                </div>
              </motion.div>

              {/* Results Demo */}
              <motion.div
                className="space-y-2 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-slate-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                {[
                  {
                    icon: "🏢",
                    label: "Company Name",
                    value: "TechCorp Inc",
                    delay: 2.2,
                  },
                  {
                    icon: "📧",
                    label: "Contact Email",
                    value: "contact@techcorp.com",
                    delay: 2.3,
                  },
                  {
                    icon: "📞",
                    label: "Phone Number",
                    value: "+1-555-0123",
                    delay: 2.4,
                  },
                  {
                    icon: "👤",
                    label: "CEO/Founder",
                    value: "John Smith",
                    delay: 2.5,
                  },
                  {
                    icon: "👥",
                    label: "Team Size",
                    value: "50-100 employees",
                    delay: 2.6,
                  },
                  {
                    icon: "🌐",
                    label: "Industry",
                    value: "Software Development",
                    delay: 2.7,
                  },
                  {
                    icon: "📍",
                    label: "Location",
                    value: "San Francisco, CA",
                    delay: 2.8,
                  },
                  {
                    icon: "💰",
                    label: "Revenue Range",
                    value: "$1M - $10M",
                    delay: 2.9,
                  },
                  {
                    icon: "🔗",
                    label: "LinkedIn",
                    value: "linkedin.com/company/techcorp",
                    delay: 3.0,
                  },
                  {
                    icon: "🐦",
                    label: "Twitter",
                    value: "@techcorp",
                    delay: 3.1,
                  },
                  {
                    icon: "⚡",
                    label: "Tech Stack",
                    value: "React, Node.js, AWS",
                    delay: 3.2,
                  },
                  {
                    icon: "📈",
                    label: "Founded",
                    value: "2018",
                    delay: 3.3,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-2 bg-slate-800/60 rounded-lg border border-purple-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: item.delay }}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-gray-400 text-xs">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-white text-xs font-medium">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating particles around demo */}
              <div className="absolute -inset-4 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    style={{
                      left: `${randFromIndex(i, "demo-left") * 100}%`,
                      top: `${randFromIndex(i, "demo-top") * 100}%`,
                    }}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + randFromIndex(i, "demo-duration", 0, 2),
                      repeat: Infinity,
                      delay: randFromIndex(i, "demo-delay", 0, 2),
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
