import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

import SEO from "@/components/SEO";
import Footer from "@/components/sections/Footer";
import { Navbar } from "@/components/ui/navbar";
import { blogPosts } from "@/lib/blog";

const categoryColors: Record<string, string> = {
  Deliverability: "bg-[#22c55e]/10 text-[#16a34a]",
  Infrastructure: "bg-[#3b82f6]/10 text-[#2563eb]",
  Guide: "bg-[#a855f7]/10 text-[#9333ea]",
  Comparison: "bg-[#f59e0b]/10 text-[#d97706]",
  Strategy: "bg-[#ec4899]/10 text-[#db2777]",
  Tutorial: "bg-[#06b6d4]/10 text-[#0891b2]",
};

export default function BlogIndex() {
  return (
    <>
      <SEO pageKey="blog" />

      <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f0f0f0] to-[#fafafa]">
        <Navbar />
        <div className="relative mt-28 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#3b82f6]/10 text-[#3b82f6] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                LeadSnipper Blog
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-5">
                Cold Email Guides &{" "}
                <span className="bg-gradient-to-r from-[#3b82f6] to-[#22c55e] bg-clip-text text-transparent">
                  Deliverability Tips
                </span>
              </h1>
              <p className="text-lg text-[#475569] max-w-2xl mx-auto">
                Practical strategies for domain health, email warmup, list
                verification, and outbound at scale. Written by the team that
                builds LeadSnipper.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
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

                      <h2 className="text-xl font-bold text-[#1e293b] mb-3 leading-snug group-hover:text-[#3b82f6] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-[#475569] text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#22c55e]" />
                          <span className="text-xs text-[#64748b]">
                            {post.author}
                          </span>
                        </div>
                        <time
                          dateTime={post.date}
                          className="text-xs text-[#94a3b8]"
                        >
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>

                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b82f6] group-hover:gap-3 transition-all">
                        Read full article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-20 bg-gradient-to-r from-[#3b82f6]/5 to-[#22c55e]/5 border border-[#3b82f6]/20 rounded-2xl p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-3">
                Stop reading about deliverability. Start owning it.
              </h2>
              <p className="text-[#475569] mb-6 max-w-lg mx-auto">
                LeadSnipper gives you BYO AWS SES, built-in verification, domain
                health monitoring, and intelligent warmup — all in one platform.
              </p>
              <Link
                href="https://app.leadsnipper.com/signup"
                className="inline-flex px-8 py-4 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-[#2563eb] hover:shadow-lg hover:shadow-[#3b82f6]/30 transition"
              >
                Start Free — 1,000 Emails, No Credit Card
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
