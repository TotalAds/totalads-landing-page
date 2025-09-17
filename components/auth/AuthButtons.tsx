"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AuthButtons() {
  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row w-full gap-3">
        {/* Sign Up Button - Primary */}
        <Link href="https://app.leadsnipper.com/signup" className="flex-1">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 group">
            <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            Start Free Beta
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

        {/* Login Button - Secondary */}
        <Link href="https://app.leadsnipper.com/login" className="flex-1">
          <Button
            variant="outline"
            className="w-full border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            Login
          </Button>
        </Link>
      </div>

      {/* Beta Badge */}
      {/* <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          <span className="text-green-300 text-xs font-medium">
            Beta Access • Free Forever Plan Available
          </span>
        </div>
      </motion.div> */}

      {/* Trust indicators */}
      <motion.div
        className="mt-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-gray-400 text-xs">
          ✨ No credit card required • 🚀 Instant access • 🔒 Secure & private
        </p>
      </motion.div>
    </div>
  );
}
