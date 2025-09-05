"use client";

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-[#25D366] to-[#34B7F1] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#25D366] to-[#34B7F1] bg-clip-text text-transparent">
              LeadSnipper
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-[#075E54] hover:text-[#25D366] transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-[#075E54] hover:text-[#25D366] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#roadmap"
              className="text-[#075E54] hover:text-[#25D366] transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#pricing"
              className="text-[#075E54] hover:text-[#25D366] transition-colors"
            >
              Pricing
            </a>
            <Link href="https://app.leadsnipper.com/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="https://app.leadsnipper.com/signup">
              <Button size="sm">Start Free Beta</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-[#075E54]" />
            ) : (
              <Menu className="w-6 h-6 text-[#075E54]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-gray-200/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-[#075E54] hover:text-[#25D366] transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-[#075E54] hover:text-[#25D366] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#roadmap"
                className="text-[#075E54] hover:text-[#25D366] transition-colors"
              >
                Roadmap
              </a>
              <a
                href="#pricing"
                className="text-[#075E54] hover:text-[#25D366] transition-colors"
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="https://app.leadsnipper.com/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="https://app.leadsnipper.com/signup">
                  <Button size="sm">Start Free Beta</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
