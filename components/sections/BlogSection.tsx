import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

import { blogPosts } from "@/lib/blog";

const categoryColors: Record<string, string> = {
  Deliverability: "bg-[#22c55e]/10 text-[#16a34a]",
  Infrastructure: "bg-[#3b82f6]/10 text-[#2563eb]",
  Guide: "bg-[#a855f7]/10 text-[#9333ea]",
  Comparison: "bg-[#f59e0b]/10 text-[#d97706]",
  Strategy: "bg-[#ec4899]/10 text-[#db2777]",
  Tutorial: "bg-[#06b6d4]/10 text-[#0891b2]",
};

const latestPosts = [...blogPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f0f0] to-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#3b82f6]/10 text-[#3b82f6] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            From the Blog
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Cold Email Guides That Actually Help
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            Practical strategies for deliverability, domain health, and outbound
            at scale. No fluff — just what works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border-2 border-[#f0f0f0] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:border-[#3b82f6]/30 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="h-2 bg-gradient-to-r from-[#3b82f6] to-[#22c55e]" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-[#f1f5f9] text-[#64748b]"}`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#94a3b8]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1e293b] mb-3 leading-snug group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[#475569] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-xs text-[#94a3b8]"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#3b82f6] group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg font-semibold hover:bg-[#3b82f6]/10 transition"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
