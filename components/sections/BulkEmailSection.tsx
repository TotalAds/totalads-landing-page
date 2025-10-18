import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Mail,
  MessageSquare,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const randFromIndex = (i: number, salt: string, min = 0, max = 1) => {
  const hashString = (str: string) => {
    let h = 2166136261 >>> 0;
    for (let j = 0; j < str.length; j++) {
      h ^= str.charCodeAt(j);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  };

  const seededRandom = (seed: number) => {
    let t = seed + 0x6d2b79f5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const s = hashString(`${salt}:${i}`);
  const r = seededRandom(s);
  return min + r * (max - min);
};

export default function BulkEmailSection() {
  const features = [
    {
      icon: Mail,
      title: "Premium Deliverability",
      description: "99.9% inbox placement with dedicated IP servers",
    },
    {
      icon: Zap,
      title: "Unlimited Mailboxes",
      description: "Scale without artificial limits or restrictions",
    },
    {
      icon: MessageSquare,
      title: "Email Warmup",
      description: "Build sender reputation with AI-powered warmups",
    },
    {
      icon: Users,
      title: "Unified Inbox",
      description: "Manage all conversations in one dashboard",
    },
    {
      icon: Sparkles,
      title: "AI Personalization",
      description: "Hyper-personalized emails with smart variables",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track performance with detailed metrics",
    },
  ];

  return (
    <section
      id="bulk-email"
      className="py-24 scroll-mt-28 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900/20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${randFromIndex(i, "bulk-email-left") * 100}%`,
              top: `${randFromIndex(i, "bulk-email-top") * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 2, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + randFromIndex(i, "bulk-email-duration", 0, 3),
              repeat: Infinity,
              delay: randFromIndex(i, "bulk-email-delay", 0, 3),
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 leading-tight">
              Scale Your Cold Email{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Outreach
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl -z-10"
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
            </h2>
          </motion.div>

          <motion.p
            className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Convert cold emails into reliable revenue streams with{" "}
            <span className="text-purple-300 font-semibold">
              unlimited mailboxes
            </span>
            ,{" "}
            <span className="text-pink-300 font-semibold">
              premium deliverability
            </span>
            , and{" "}
            <span className="text-purple-300 font-semibold">
              AI-powered personalization
            </span>
            .
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="/bulk-email-service">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6">
                Explore Bulk Email <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://app.leadsnipper.com/signup">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6"
              >
                Start Free Trial
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-700">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </CardDescription>
                    </motion.div>
                  </CardHeader>

                  <motion.div
                    className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/60 rounded-xl transition-all duration-500"
                    initial={false}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
