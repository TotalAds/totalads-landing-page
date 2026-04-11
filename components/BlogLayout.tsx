import { ArrowLeft, Clock } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

import { BlogPost, generateBlogPostSchema } from "@/lib/blog";
import { seoConfig, structuredData } from "@/lib/seo";

import Footer from "./sections/Footer";
import { Navbar } from "./ui/navbar";

interface BlogLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  const canonical = `https://leadsnipper.com/blog/${post.slug}`;
  const blogSchema = generateBlogPostSchema(post);

  return (
    <>
      <Head>
        <title>{post.title} | LeadSnipper Blog</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={canonical} />

        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:site_name"
          content={seoConfig.defaultOpenGraph.siteName}
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={seoConfig.defaultOpenGraph.images[0].url}
        />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        <meta property="article:author" content="LeadSnipper" />
        <meta property="article:section" content={post.category} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leadsnipper" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta
          name="twitter:image"
          content={seoConfig.defaultOpenGraph.images[0].url}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://leadsnipper.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://leadsnipper.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: canonical,
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f0f0f0] to-[#fafafa]">
        <Navbar />
        <div className="pt-28 pb-20">
          <article className="max-w-3xl mx-auto px-4 sm:px-6">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-[#94a3b8]">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#3b82f6] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[#3b82f6] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[#475569] truncate max-w-[200px]">
                  {post.title}
                </li>
              </ol>
            </nav>

            <header className="mb-10">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1e293b] leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748b]">
                <span>{post.author}</span>
                <span className="w-1 h-1 rounded-full bg-[#cbd5e1]" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span className="w-1 h-1 rounded-full bg-[#cbd5e1]" />
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </header>

            <div className="blog-content">
              {children}
            </div>

            <footer className="mt-16 pt-8 border-t border-[#e2e8f0]">
              <div className="bg-gradient-to-r from-[#3b82f6]/5 to-[#22c55e]/5 border border-[#3b82f6]/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-[#1e293b] mb-3">
                  Ready to own your cold email deliverability?
                </h3>
                <p className="text-[#475569] mb-6 max-w-lg mx-auto">
                  LeadSnipper gives you BYO AWS SES, built-in verification,
                  domain health monitoring, and intelligent warmup — all in one
                  platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="https://app.leadsnipper.com/signup"
                    className="px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-[#2563eb] transition"
                  >
                    Start Free — 1,000 Emails, No Credit Card
                  </Link>
                  <Link
                    href="/blog"
                    className="px-6 py-3 border border-[#e2e8f0] text-[#475569] rounded-lg font-semibold hover:bg-[#f8fafc] transition flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                  </Link>
                </div>
              </div>
            </footer>
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
}
