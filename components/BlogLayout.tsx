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

      <div className="min-h-screen bg-[#faf8ff]">
        <Navbar />

        {/* Blog post hero */}
        <section className="hero-bg dot-grid pt-32 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs font-mono text-[#727785]">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#0058be] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-[#c2c6d6]">/</li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[#0058be] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li className="text-[#c2c6d6]">/</li>
                <li className="text-[#424754] truncate max-w-[200px]">
                  {post.title}
                </li>
              </ol>
            </nav>

            <header>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[10px] font-medium text-[#0058be] bg-[#0058be]/[0.06] border border-[#0058be]/20 mb-5">
                {post.category.toUpperCase()}
              </span>
              <h1 className="font-heading font-bold text-[28px] md:text-[36px] lg:text-[42px] text-[#131b2e] leading-tight mb-5">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#727785]">
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-heading font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #0058be, #2170e4)",
                    }}
                  >
                    {post.author
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </div>
                  <span>{post.author}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#c2c6d6]" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span className="w-1 h-1 rounded-full bg-[#c2c6d6]" />
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </header>
          </div>
        </section>

        {/* Blog content */}
        <section className="py-12 section-warm border-t border-[#c2c6d6]/20">
          <article className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="blog-content prose-headings:font-heading prose-headings:text-[#131b2e] prose-p:text-[#424754] prose-a:text-[#0058be] prose-strong:text-[#131b2e]">
              {children}
            </div>

            {/* Footer CTA */}
            <footer className="mt-16 pt-8 border-t border-[#c2c6d6]/20">
              <div className="glass-card rounded-2xl border border-[#0058be]/15 p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0058be]/[0.03] via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  <h3 className="font-heading font-bold text-headline-md text-[#131b2e] mb-3">
                    Ready to own your cold email deliverability?
                  </h3>
                  <p className="text-sm text-[#727785] mb-6 max-w-lg mx-auto">
                    LeadSnipper gives you BYO AWS SES, built-in verification,
                    domain health monitoring, and intelligent warmup — all in one
                    platform.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="https://app.leadsnipper.com/signup"
                      className="btn-primary rounded-full text-sm"
                    >
                      Start free — 1,000 emails, no card
                    </Link>
                    <Link
                      href="/blog"
                      className="btn-ghost rounded-full text-sm inline-flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Blog
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </article>
        </section>

        <Footer />
      </div>
    </>
  );
}
