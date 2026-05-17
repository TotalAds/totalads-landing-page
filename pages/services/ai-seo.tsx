import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function AISEOService() {
  return (
    <ServicePageLayout
      seo={{
        title: "AI Search Optimisation (AI SEO) — LeadSnipper | Get Cited in ChatGPT & Perplexity",
        description: "Get your brand cited in ChatGPT, Perplexity, and Google AI Overviews. AI SEO goes beyond traditional search — it gets you mentioned in answers.",
        canonical: "https://leadsnipper.com/services/ai-seo",
      }}
      badge="AI SEO"
      headline="Traditional SEO gets traffic."
      headlineAccent="AI SEO gets you mentioned."
      subtitle="Get your brand cited in ChatGPT, Perplexity, and Google AI Overviews. When your buyer asks an LLM for a recommendation, be the answer."
      accentColor="#0058be"
      problem={{
        heading: "Your competitors are ranking.",
        headingAccent: "But LLMs don't know you exist.",
        body: [
          "You've invested in SEO for years. You rank on Google. But when a buyer asks ChatGPT 'What's the best cold email tool?', your name doesn't come up.",
          "AI-generated answers are becoming the first touchpoint for B2B research. If you're not in those answers, you're invisible to a growing segment of your market.",
          "AI SEO is a different game. It's about structured data, citation-worthy content, and being the source that LLMs trust.",
        ],
      }}
      features={[
        { icon: "🔍", title: "AI Citation Audit", desc: "We test how major LLMs (ChatGPT, Perplexity, Gemini, Claude) currently reference your brand — and where competitors appear instead." },
        { icon: "📝", title: "LLM-Optimized Content", desc: "Content strategy designed for machine comprehension. Structured, authoritative, and citation-worthy." },
        { icon: "🏷️", title: "Schema Markup", desc: "Advanced structured data implementation so search engines and LLMs can understand your content hierarchy." },
        { icon: "📊", title: "Visibility Reports", desc: "Monthly reports tracking your AI search visibility across ChatGPT, Perplexity, and Google AI Overviews." },
        { icon: "🔗", title: "Authority Building", desc: "Strategic link acquisition and mention campaigns to build the kind of trust signals that LLMs weight heavily." },
        { icon: "🎯", title: "Query Mapping", desc: "We identify the exact prompts your buyers use in AI tools and optimize your content to appear in those answers." },
      ]}
      process={[
        { step: "01", title: "AI Visibility Audit", desc: "Comprehensive analysis of how LLMs currently reference your brand vs. competitors." },
        { step: "02", title: "Content Strategy", desc: "Create an LLM-indexing content plan focused on high-intent buyer queries." },
        { step: "03", title: "Implementation", desc: "Schema markup, content creation, and technical optimizations deployed." },
        { step: "04", title: "Monitor & Iterate", desc: "Monthly visibility tracking with continuous optimization based on LLM ranking changes." },
      ]}
      results={[
        "↑ 300% AI search visibility in 6 months",
        "↑ 40% increase in inbound pipeline",
        "↑ Brand cited in top-3 LLM responses",
        "↑ 50% more branded search queries",
        "↓ Reduced dependency on paid channels",
        "↑ Authority score improvement across platforms",
      ]}
      faqs={[
        { q: "How is AI SEO different from regular SEO?", a: "Traditional SEO optimizes for search engine crawlers and click-through rates. AI SEO optimizes for LLM comprehension and citation. The content structure, authority signals, and technical markup are fundamentally different." },
        { q: "Can you guarantee my brand appears in ChatGPT?", a: "No one can guarantee specific LLM outputs. But we can systematically increase your citation probability by building the authority signals and content patterns that LLMs trust. Our clients typically see measurable improvement within 3-4 months." },
        { q: "Do I still need traditional SEO?", a: "Yes. AI SEO is complementary, not a replacement. Google still drives massive traffic, and strong traditional SEO actually helps your AI SEO efforts." },
        { q: "How do you measure AI SEO success?", a: "We track AI citation frequency across major LLMs, branded search query volume, referral traffic from AI platforms, and overall inbound pipeline attribution." },
      ]}
    />
  );
}
