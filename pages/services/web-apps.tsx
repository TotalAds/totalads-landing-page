import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function WebAppsService() {
  return (
    <ServicePageLayout
      seo={{
        title: "Conversion Web Applications — LeadSnipper | Revenue-Engineered Web Experiences",
        description: "Landing pages, portals, and web apps designed to convert visitors into customers. 40-70% conversion rate improvements through data-driven design.",
        canonical: "https://leadsnipper.com/services/web-apps",
      }}
      badge="Web Applications"
      headline="Beautiful websites don't convert."
      headlineAccent="Engineered ones do."
      subtitle="Revenue-engineered web experiences — not just aesthetic ones. Landing pages, portals, and apps designed to convert visitors into customers."
      problem={{
        heading: "You redesigned your site.",
        headingAccent: "Conversion didn't change.",
        body: [
          "Your website looks great. The designer nailed it. But your conversion rate is still 1.2% and nobody can explain why.",
          "Pretty doesn't equal profitable. Most web agencies optimize for aesthetics. We optimize for the action you need visitors to take.",
          "Every pixel, every word, every interaction on your site should move the visitor closer to a conversion. That's what conversion engineering means.",
        ],
      }}
      features={[
        { icon: "🎨", title: "UX/UI Design", desc: "Data-informed design that balances aesthetics with conversion psychology. Every screen has a purpose." },
        { icon: "💻", title: "Full-Stack Development", desc: "Next.js, React, and modern web tech. Fast load times, responsive layouts, and SEO built in." },
        { icon: "🧪", title: "A/B Testing Framework", desc: "Built-in experimentation infrastructure. Test headlines, CTAs, layouts, and pricing displays." },
        { icon: "⚡", title: "Performance Optimization", desc: "Sub-2-second load times. Core Web Vitals optimized. Speed directly impacts conversion." },
        { icon: "📊", title: "Analytics Integration", desc: "Event tracking, funnel visualization, and heatmap integration. Know exactly where users drop off." },
        { icon: "🔍", title: "SEO Architecture", desc: "Technical SEO built into the foundation — meta tags, structured data, sitemap, and crawl optimization." },
      ]}
      process={[
        { step: "01", title: "Conversion Audit", desc: "We analyze your current site, identify drop-off points, and map the ideal user journey." },
        { step: "02", title: "Design & Prototype", desc: "Wireframes and interactive prototypes tested against conversion best practices." },
        { step: "03", title: "Build & Optimize", desc: "Development with performance and SEO baked in. A/B testing setup from day one." },
        { step: "04", title: "Launch & Iterate", desc: "Go live with monitoring, then continuous optimization based on real user data." },
      ]}
      results={[
        "↑ 40–70% conversion rate improvement",
        "↑ 2x average session duration",
        "↓ 50% bounce rate reduction",
        "↑ Sub-2-second page load times",
        "↑ 90+ Google PageSpeed score",
        "↑ SEO-ready architecture from day one",
      ]}
      faqs={[
        { q: "What's the difference between a web app and a website?", a: "A website presents information. A web app lets users take actions — sign up, manage data, interact with features. We build both, but our specialty is conversion-focused experiences." },
        { q: "Do you redesign existing sites or only build new ones?", a: "Both. We can optimize your existing site's conversion funnel or build from scratch. We'll recommend the right approach after auditing your current setup." },
        { q: "What CMS do you use?", a: "We typically build with Next.js for maximum performance and flexibility. For content-heavy sites, we integrate headless CMS options like Sanity or Contentful." },
        { q: "How do you measure conversion improvement?", a: "We set up proper analytics tracking before launch, establish baseline metrics, and run controlled experiments. You see exactly what changed and by how much." },
      ]}
    />
  );
}
