"use client";

import { motion } from "framer-motion";
import { CheckCircle, Quote, Star, TrendingUp, Users } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { staggerContainer, staggerItem } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "LeadSnipper transformed our sales process. We're now generating 300% more qualified leads with their ICP scoring system. The contact accuracy is incredible.",
    author: "Sarah Chen",
    role: "VP of Sales",
    company: "TechFlow Solutions",
    rating: 5,
    metric: "300% more leads",
    avatar: "SC",
  },
  {
    quote:
      "The AI-powered intelligence is phenomenal. We're getting 95% accuracy on verified contacts and business insights across thousands of websites daily.",
    author: "Michael Rodriguez",
    role: "Head of Growth",
    company: "DataStream Inc",
    rating: 5,
    metric: "95% accuracy",
    avatar: "MR",
  },
  {
    quote:
      "Best lead intelligence platform we've used. The ICP matching helped us increase our close rate by 28% in just 2 months. Game-changing technology.",
    author: "Emily Watson",
    role: "Founder & CEO",
    company: "LeadGen Pro",
    rating: 5,
    metric: "28% higher close rate",
    avatar: "EW",
  },
  {
    quote:
      "Integration was seamless and the API documentation is excellent. Our dev team had it running in production within 2 hours. Outstanding developer experience.",
    author: "David Kim",
    role: "CTO",
    company: "SalesForce Automation",
    rating: 5,
    metric: "2 hour integration",
    avatar: "DK",
  },
  {
    quote:
      "The business intelligence depth is remarkable. We're discovering insights about prospects that we never had access to before. It's like having a research team.",
    author: "Lisa Thompson",
    role: "Sales Director",
    company: "Enterprise Solutions",
    rating: 5,
    metric: "10x faster research",
    avatar: "LT",
  },
  {
    quote:
      "ROI was immediate. We recovered our investment in the first week and now we're saving 15+ hours per week on manual prospect research.",
    author: "James Wilson",
    role: "Sales Manager",
    company: "B2B Dynamics",
    rating: 5,
    metric: "15+ hours saved/week",
    avatar: "JW",
  },
];

const stats = [
  { number: "500+", label: "Happy Customers", icon: Users },
  { number: "10K+", label: "Leads Generated", icon: TrendingUp },
  { number: "95%", label: "Data Accuracy", icon: CheckCircle },
  { number: "4.9/5", label: "Customer Rating", icon: Star },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
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
              Trusted by Sales Teams
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            Join hundreds of sales professionals who are already transforming
            their lead generation with LeadSnipper
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={staggerItem}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
                    <span className="text-green-300 text-xs font-medium">
                      {testimonial.metric}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {testimonial.role}
                      </div>
                      <div className="text-purple-400 text-xs">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
