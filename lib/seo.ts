// SEO Configuration for LeadSnipper Landing Page
export const seoConfig = {
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://leadsnipper.com"
      : "http://localhost:3001",

  defaultTitle:
    "LeadSnipper — Cold Email at Scale Without Burning Your Domain",
  titleTemplate: "%s | LeadSnipper",
  defaultDescription:
    "LeadSnipper is the cold email platform built on AWS SES. Bring your own sending infrastructure, verify leads with Reoon, warm up domains, and send campaigns that land in the inbox — not spam. Start free.",

  defaultOpenGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leadsnipper.com",
    siteName: "LeadSnipper",
    images: [
      {
        url: "https://leadsnipper.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "LeadSnipper — Cold email at scale without burning your domain",
      },
    ],
  },

  defaultTwitter: {
    handle: "@leadsnipper",
    site: "@leadsnipper",
    cardType: "summary_large_image",
  },

  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "theme-color",
      content: "#3b82f6",
    },
    {
      name: "msapplication-TileColor",
      content: "#3b82f6",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      name: "format-detection",
      content: "telephone=no",
    },
  ],

  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "canonical",
      href: "https://leadsnipper.com",
    },
  ],
};

export interface PageConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  openGraph?: {
    title: string;
    description: string;
    url: string;
    images?: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
}

export const pageConfigs: Record<string, PageConfig> = {
  home: {
    title:
      "LeadSnipper — Send 10,000+ Cold Emails Without Killing Your Domain Reputation",
    description:
      "LeadSnipper is the cold email outreach platform built on AWS SES. Bring your own sending infrastructure, verify leads with built-in Reoon verification, warm up domains with daily pacing, and send campaigns that land in the inbox. Free trial — no credit card required.",
    keywords:
      "cold email platform, cold email software, email outreach tool, AWS SES cold email, BYO SES, email deliverability, domain reputation, email warmup, email verification, cold email at scale, bulk email sender, email campaign tool, sender reputation, inbox placement, cold outreach, Instantly alternative, Smartlead alternative, cold email infrastructure",
    canonical: "https://leadsnipper.com",
    openGraph: {
      title:
        "LeadSnipper — Cold Email at Scale Without Burning Your Domain",
      description:
        "Own your sending infrastructure with BYO AWS SES. Built-in email verification, domain health monitoring, intelligent warmup, and campaigns that land in the inbox.",
      url: "https://leadsnipper.com",
      images: [
        {
          url: "https://leadsnipper.com/og-home.png",
          width: 1200,
          height: 630,
          alt: "LeadSnipper — Cold email platform with BYO AWS SES, email warmup, and verification",
        },
      ],
    },
  },

  contact: {
    title: "Contact LeadSnipper — Sales, Support & Partnership Inquiries",
    description:
      "Get in touch with the LeadSnipper team for cold email platform support, sales questions, enterprise plans, or partnership opportunities. We respond within 24 hours.",
    keywords:
      "contact LeadSnipper, cold email support, email platform help, LeadSnipper sales, enterprise cold email",
    canonical: "https://leadsnipper.com/contact",
    openGraph: {
      title: "Contact LeadSnipper — Sales, Support & Partnerships",
      description:
        "Reach the LeadSnipper team for support, sales inquiries, or partnership opportunities.",
      url: "https://leadsnipper.com/contact",
    },
  },

  savingsCalculator: {
    title:
      "Cold Email Savings Calculator — Instantly/Smartlead vs LeadSnipper",
    description:
      "Use this cold email savings calculator to compare Instantly and Smartlead costs against LeadSnipper + AWS SES. Enter monthly email volume and see your potential yearly savings in INR.",
    keywords:
      "cold email cost calculator, Instantly pricing comparison, Smartlead pricing comparison, LeadSnipper savings calculator, AWS SES pricing calculator, outbound software cost",
    canonical: "https://leadsnipper.com/savings-calculator",
    openGraph: {
      title:
        "Cold Email Savings Calculator — Save vs Instantly and Smartlead",
      description:
        "Enter your monthly email volume and instantly see how much you can save per year with LeadSnipper + AWS SES.",
      url: "https://leadsnipper.com/savings-calculator",
    },
  },

  blog: {
    title:
      "LeadSnipper Blog — Cold Email Tips, Deliverability Guides & Outbound Strategy",
    description:
      "Learn cold email best practices, email deliverability strategies, domain health tips, and outbound sales techniques. Practical guides from the LeadSnipper team.",
    keywords:
      "cold email blog, email deliverability tips, cold outreach guide, email warmup guide, domain reputation blog, cold email best practices, outbound email strategy, BYO SES guide, email verification tips",
    canonical: "https://leadsnipper.com/blog",
    openGraph: {
      title: "LeadSnipper Blog — Cold Email & Deliverability Guides",
      description:
        "Practical cold email guides, deliverability strategies, and outbound tips from the LeadSnipper team.",
      url: "https://leadsnipper.com/blog",
    },
  },

  privacy: {
    title: "Privacy Policy — LeadSnipper Data Protection",
    description:
      "LeadSnipper privacy policy. How we collect, use, and protect your data. GDPR compliant data handling.",
    keywords:
      "privacy policy, data protection, GDPR compliance, LeadSnipper privacy",
    canonical: "https://leadsnipper.com/privacy-policy",
  },

  terms: {
    title: "Terms of Service — LeadSnipper Usage Agreement",
    description:
      "LeadSnipper terms of service and usage agreement. Your rights and responsibilities when using our cold email platform.",
    keywords:
      "terms of service, usage agreement, LeadSnipper terms, legal terms",
    canonical: "https://leadsnipper.com/terms-of-service",
  },

  refund: {
    title: "Refund Policy — LeadSnipper",
    description:
      "LeadSnipper refund policy. Learn about our fair refund process for cold email platform subscriptions.",
    keywords:
      "refund policy, billing support, LeadSnipper refund, payment terms",
    canonical: "https://leadsnipper.com/refund-policy",
  },
};

// Schema.org structured data
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LeadSnipper",
    url: "https://leadsnipper.com",
    logo: "https://leadsnipper.com/logo.png",
    description:
      "Cold email outreach platform built on AWS SES. Own your sending infrastructure, verify leads, warm up domains, and send campaigns that land in the inbox.",
    foundingDate: "2024",
    sameAs: [
      "https://twitter.com/leadsnipper",
      "https://linkedin.com/company/leadsnipper",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "rehan@leadsnipper.com",
      availableLanguage: "English",
    },
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LeadSnipper",
    url: "https://leadsnipper.com",
    description:
      "Cold email outreach platform built on AWS SES with built-in email verification, domain health monitoring, and intelligent warmup.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://leadsnipper.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },

  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LeadSnipper",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    description:
      "Cold email platform with BYO AWS SES, built-in Reoon email verification, domain health dashboard, AI warmup, and campaign analytics.",
    url: "https://leadsnipper.com",
    downloadUrl: "https://app.leadsnipper.com/signup",
    softwareVersion: "1.0",
    datePublished: "2024-01-01",
    author: {
      "@type": "Organization",
      name: "LeadSnipper",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Trial",
        price: "0",
        priceCurrency: "INR",
        description:
          "Free trial — 1,000 emails, 500 contacts, basic analytics, API access",
      },
      {
        "@type": "Offer",
        name: "Starter",
        price: "499",
        priceCurrency: "INR",
        description:
          "5,000 emails, 3,000 contacts, custom domain, warmup, analytics, 3 domains",
      },
      {
        "@type": "Offer",
        name: "Business",
        price: "999",
        priceCurrency: "INR",
        description:
          "15,000 emails, 10,000 contacts, unlimited domains, unlimited warmup, advanced analytics",
      },
    ],
  },

  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should I use LeadSnipper instead of Instantly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Instantly owns your sending infrastructure — when they have issues, your domains get hit. With LeadSnipper, you bring your own AWS SES. You own your reputation, your deliverability, your data. Plus, we have built-in Reoon email verification and a domain health dashboard that Instantly doesn't offer.",
        },
      },
      {
        "@type": "Question",
        name: "What is BYO SES? Do I need to know AWS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'BYO SES means "Bring Your Own" Amazon Simple Email Service. It gives you full control over your sending infrastructure and reputation. If you don\'t know AWS, choose our Managed mode — we handle everything. The BYO option is there when you\'re ready for full control.',
        },
      },
      {
        "@type": "Question",
        name: "How does LeadSnipper handle email deliverability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deliverability is built into the architecture. Verified domains with proper DNS (DKIM, SPF), warmup with daily pacing, automatic bounce suppression, complaint tracking, and built-in Reoon verification. Every layer ensures your emails land in the inbox, not spam.",
        },
      },
      {
        "@type": "Question",
        name: "How does email warmup work in LeadSnipper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our warmup engine generates realistic email conversations across Gmail, Outlook, Yahoo, Zoho, and SES. It creates natural threads with varied writing styles and proper timing, building sender trust before you run cold campaigns at scale.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a free trial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Start free with no credit card. You get 1,000 emails, 500 contacts, basic analytics, and API access for 1 month — enough to run a real campaign and see if LeadSnipper fits your outbound workflow.",
        },
      },
      {
        "@type": "Question",
        name: "How much does LeadSnipper cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LeadSnipper starts at ₹499/month (Starter plan) for 5,000 emails and 3,000 contacts. Business plan is ₹999/month for 15,000 emails and unlimited domains. Free trial available with 1,000 emails. Significantly cheaper than Instantly ($37-97/mo) or Smartlead ($39-94/mo).",
        },
      },
    ],
  },
};

export function generateMetaTags(pageKey: keyof typeof pageConfigs) {
  const config = pageConfigs[pageKey];
  const base = seoConfig;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    canonical: config.canonical,
    openGraph: {
      ...base.defaultOpenGraph,
      ...config.openGraph,
    },
    twitter: {
      ...base.defaultTwitter,
      title: config.title,
      description: config.description,
    },
  };
}
