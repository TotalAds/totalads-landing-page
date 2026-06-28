import { generateFaqPageSchema } from "./faqs";

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
    "LeadSnipper is the cold email platform built on AWS SES. Verify leads with Reoon, warm up domains, and send campaigns that land in the inbox — not spam. Start a 14-day trial.",

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
    handle: "@leadsnipper_",
    site: "@leadsnipper_",
    cardType: "summary_large_image",
  },

  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "theme-color",
      content: "#eb857a",
    },
    {
      name: "msapplication-TileColor",
      content: "#eb857a",
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
      "LeadSnipper — Deliverability-First Cold Email Platform (Instantly Alternative)",
    description:
      "LeadSnipper is a deliverability-first cold email platform that helps businesses send from infrastructure they control — Google Workspace, Microsoft 365, SMTP, or AWS SES — with intelligent reputation protection, AI-powered personalization, and advanced campaign automation. Own your email infrastructure.",
    keywords:
      "deliverability-first cold email platform, cold email software, Instantly alternative, Smartlead alternative, email outreach tool, email deliverability, sender reputation, domain reputation, inbox placement, email warmup, email verification, AI personalization, BYO SES, AWS SES cold email, cold email infrastructure, bulk cold email, cold outreach platform, cold email at scale",
    canonical: "https://leadsnipper.com",
    openGraph: {
      title:
        "LeadSnipper — Deliverability-First Cold Email Platform",
      description:
        "Own your email infrastructure. Send from Google Workspace, Microsoft 365, SMTP, or AWS SES — with intelligent reputation protection, AI personalization, and advanced analytics.",
      url: "https://leadsnipper.com",
      images: [
        {
          url: "https://leadsnipper.com/og-home.png",
          width: 1200,
          height: 630,
          alt: "LeadSnipper — Deliverability-first cold email platform that protects your domains automatically",
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

  instantlyAlternative: {
    title:
      "Best Instantly Alternative for Agencies in 2026",
    description:
      "Compare LeadSnipper with Instantly for cold email. BYO AWS SES, built-in Reoon verification, domain health monitoring, and lower sending costs — see how it stacks up. Start a 14-day trial.",
    keywords:
      "Instantly alternative, Instantly competitor, LeadSnipper vs Instantly, cold email software alternative, Instantly pricing alternative, BYO AWS SES cold email, cold email deliverability tool, email verification cold outreach",
    canonical: "https://leadsnipper.com/vs/instantly",
    openGraph: {
      title: "Instantly Alternative — Own Your Cold Email Infrastructure",
      description:
        "LeadSnipper gives outbound teams BYO AWS SES, built-in verification, domain health monitoring, and campaign pacing without shared infrastructure risk.",
      url: "https://leadsnipper.com/vs/instantly",
    },
  },

  smartleadAlternative: {
    title:
      "Best Smartlead Alternative for Cold Email Deliverability",
    description:
      "Compare LeadSnipper with Smartlead for cold email. Dedicated AWS SES control, built-in verification, domain health, and simpler pricing help teams protect deliverability. See how it works — start free.",
    keywords:
      "Smartlead alternative, Smartlead competitor, LeadSnipper vs Smartlead, cold email software alternative, Smartlead pricing alternative, BYO AWS SES cold email, email deliverability tools, cold outreach platform",
    canonical: "https://leadsnipper.com/vs/smartlead",
    openGraph: {
      title: "Smartlead Alternative — Cold Email Control Without Complexity",
      description:
        "LeadSnipper helps outbound teams own sending infrastructure, verify leads, monitor domain health, and send campaigns with safer pacing.",
      url: "https://leadsnipper.com/vs/smartlead",
    },
  },

  blog: {
    title:
      "Cold Email Blog — Deliverability, Comparisons & Outbound Strategy",
    description:
      "Learn cold email best practices, compare tools like Lemlist, Smartlead, Mailshake and Apollo alternatives, and master email deliverability. Practical guides from the LeadSnipper team.",
    keywords:
      "cold email blog, lemlist alternatives, smartlead alternatives, mailshake alternatives, apollo alternative cold email, amazon ses pricing 2026, email deliverability tips, cold outreach guide, email warmup guide, domain reputation blog, cold email best practices, outbound email strategy, BYO SES guide, email verification tips",
    canonical: "https://leadsnipper.com/blog",
    openGraph: {
      title: "LeadSnipper Blog — Cold Email Guides, Tool Comparisons & Deliverability",
      description:
        "Practical cold email guides, tool comparisons (Lemlist, Smartlead, Mailshake), deliverability strategies, and outbound tips from the LeadSnipper team.",
      url: "https://leadsnipper.com/blog",
    },
  },

  privacy: {
    title: "Privacy Policy — LeadSnipper & SocialSnipper",
    description:
      "Privacy policy for LeadSnipper email outreach, SocialSnipper LinkedIn tools, and Razorpay billing. GDPR and DPDP aligned.",
    keywords:
      "privacy policy, data protection, GDPR, LeadSnipper, SocialSnipper",
    canonical: "https://leadsnipper.com/privacy-policy",
  },

  terms: {
    title: "Terms of Service — LeadSnipper & SocialSnipper",
    description:
      "Terms for LeadSnipper cold email, SocialSnipper LinkedIn publishing, acceptable use, and subscription payments.",
    keywords:
      "terms of service, LeadSnipper terms, SocialSnipper, legal agreement",
    canonical: "https://leadsnipper.com/terms-of-service",
  },

  refund: {
    title: "Refund Policy — LeadSnipper & SocialSnipper",
    description:
      "Refund policy for LeadSnipper and SocialSnipper subscriptions, credits, and Razorpay payments.",
    keywords:
      "refund policy, billing, LeadSnipper refund, SocialSnipper, Razorpay",
    canonical: "https://leadsnipper.com/refund-policy",
  },

  dataUse: {
    title: "Data Use Policy — LeadSnipper & SocialSnipper",
    description:
      "How we process contact lists, AWS SES email data, LinkedIn API data, and payment information.",
    keywords:
      "data use policy, processor agreement, lead data, LinkedIn API",
    canonical: "https://leadsnipper.com/legal/data-use",
  },

  about: {
    title: "About LeadSnipper — AI-Powered Growth Infrastructure for B2B Teams",
    description:
      "LeadSnipper is building AI-powered growth infrastructure for modern businesses. Founded by Rehan Qureshi after 5 years in startup environments. Meet the team and the mission.",
    keywords:
      "about LeadSnipper, LeadSnipper team, cold email company, AI growth tools, B2B outreach platform, founder Rehan Qureshi",
    canonical: "https://leadsnipper.com/about",
    openGraph: {
      title: "About LeadSnipper — AI-Powered Growth Infrastructure",
      description:
        "Meet the team building AI-powered email outreach and social publishing tools for modern B2B businesses.",
      url: "https://leadsnipper.com/about",
    },
  },

  pricing: {
    title: "Pricing — LeadSnipper | Three Paid Plans, Dual INR/USD",
    description:
      "LeadSnipper pricing for deliverability-first cold email teams. Starter at ₹999/mo ($19), Growth at ₹2,499/mo ($49), Scale at ₹5,999/mo ($119). Built on AWS SES with mailbox-aware limits. Start a 14-day trial.",
    keywords:
      "LeadSnipper pricing, cold email pricing, email outreach cost, AWS SES pricing plan, cold email platform price, mailbox limits, dual currency pricing",
    canonical: "https://leadsnipper.com/pricing",
    openGraph: {
      title: "LeadSnipper Pricing — Three Plans, Dual INR/USD",
      description:
        "Pick a plan that scales with your outreach. Starter ₹999/mo ($19), Growth ₹2,499/mo ($49), Scale ₹5,999/mo ($119).",
      url: "https://leadsnipper.com/pricing",
    },
  },

  leadsnipper: {
    title: "Cold Email Infrastructure Built on AWS SES",
    description:
      "Send 10,000+ cold emails without killing your domain reputation. Built on AWS SES with domain health, warmup, verification, and campaigns in one platform. Start a 14-day trial.",
    keywords:
      "LeadSnipper product, cold email platform, AWS SES email, BYO SES, email warmup, domain health, email verification, cold email campaigns",
    canonical: "https://leadsnipper.com/products/leadsnipper",
    openGraph: {
      title: "LeadSnipper — Cold Email on Infrastructure You Own",
      description:
        "AWS SES cold email with domain health monitoring, built-in verification, intelligent warmup, and campaign analytics.",
      url: "https://leadsnipper.com/products/leadsnipper",
    },
  },

  socialsnipper: {
    title: "SocialSnipper — LinkedIn Scheduler & AI Content Tool",
    description:
      "Stay visible on LinkedIn without the daily grind. Schedule posts, research trending topics, and let AI help you write — so your emails land and your profile compounds. Join the waitlist free.",
    keywords:
      "SocialSnipper, LinkedIn scheduler, LinkedIn content tool, AI LinkedIn posts, social media automation, LinkedIn publishing, B2B social media",
    canonical: "https://leadsnipper.com/products/socialsnipper",
    openGraph: {
      title: "SocialSnipper — LinkedIn Scheduler & AI Content Tool",
      description:
        "AI-assisted LinkedIn content creation, post scheduling, and topic research for B2B founders and sales teams.",
      url: "https://leadsnipper.com/products/socialsnipper",
    },
  },

  coldEmailSoftware: {
    title: "Cold Email Software That Sends 10,000+ Emails Without Hitting Spam",
    description:
      "LeadSnipper is cold email software built on AWS SES. Automate outreach, verify leads, warm up domains, and track deliverability — all in one platform. Start a 14-day trial.",
    keywords:
      "cold email software, cold email automation software, best cold email software 2026, cold email outreach software, bulk cold email software, cold email platform, cold email sender, cold email tool",
    canonical: "https://leadsnipper.com/cold-email-software",
    openGraph: {
      title: "Cold Email Software — Send at Scale Without Hitting Spam",
      description:
        "Automate cold email outreach with BYO AWS SES, built-in verification, domain warmup, and deliverability monitoring.",
      url: "https://leadsnipper.com/cold-email-software",
    },
  },

  emailWarmup: {
    title: "Email Warmup Tool That Improves Inbox Placement in Days",
    description:
      "LeadSnipper's email warmup tool gradually ramps sending volume, mirrors human patterns, and pauses automatically when domain health drops. Improve inbox placement — start free.",
    keywords:
      "email warmup tool, domain warmup software, email warmup service, cold email warmup, sender reputation warmup, inbox warmup tool, email deliverability warmup",
    canonical: "https://leadsnipper.com/email-warmup",
    openGraph: {
      title: "Email Warmup Tool — Improve Inbox Placement in Days",
      description:
        "AI-paced email warmup tied to your domain health. Gradual volume ramp that protects sender reputation.",
      url: "https://leadsnipper.com/email-warmup",
    },
  },

  emailDeliverability: {
    title: "Email Deliverability Tool for Better Inbox Placement",
    description:
      "Monitor SPF, DKIM, DMARC, bounce rates, and complaint signals in one dashboard. LeadSnipper's email deliverability tool helps you fix issues before they hurt campaigns. Start a 14-day trial.",
    keywords:
      "email deliverability tool, inbox placement tool, email deliverability software, domain health monitoring, SPF DKIM DMARC checker, cold email deliverability, sender reputation tool",
    canonical: "https://leadsnipper.com/email-deliverability",
    openGraph: {
      title: "Email Deliverability Tool — Monitor & Fix Inbox Placement",
      description:
        "Real-time domain health dashboard with DNS checks, bounce tracking, and deliverability alerts.",
      url: "https://leadsnipper.com/email-deliverability",
    },
  },

  coldEmailInfrastructure: {
    title: "Cold Email Infrastructure Built on AWS SES You Control",
    description:
      "Own your cold email infrastructure with BYO AWS SES. No shared pools, no reputation risk from other senders. LeadSnipper gives you full sending control plus verification and warmup. Start a 14-day trial.",
    keywords:
      "cold email infrastructure, BYO SES cold email, AWS SES cold email, cold email sending infrastructure, dedicated email infrastructure, cold email platform infrastructure",
    canonical: "https://leadsnipper.com/cold-email-infrastructure",
    openGraph: {
      title: "Cold Email Infrastructure — BYO AWS SES Control",
      description:
        "Build cold email on infrastructure you own. BYO AWS SES with verification, warmup, and domain health built in.",
      url: "https://leadsnipper.com/cold-email-infrastructure",
    },
  },

  aiColdEmailGenerator: {
    title: "AI Cold Email Software That Writes & Sends at Scale",
    description:
      "Generate personalized cold email drafts with AI, A/B test subject lines, and send through AWS SES infrastructure with built-in verification and warmup. Start a 14-day trial.",
    keywords:
      "AI cold email software, AI cold email generator, AI email writer cold outreach, AI cold email tool, automated cold email AI, AI email copywriting cold outreach",
    canonical: "https://leadsnipper.com/ai-cold-email-generator",
    openGraph: {
      title: "AI Cold Email Software — Write & Send at Scale",
      description:
        "AI-powered cold email generation with deliverability-first sending on AWS SES.",
      url: "https://leadsnipper.com/ai-cold-email-generator",
    },
  },

  apolloAlternative: {
    title: "Best Apollo Alternative for Cold Email in 2026",
    description:
      "Looking for an Apollo alternative focused on cold email deliverability? LeadSnipper offers BYO AWS SES, built-in verification, domain warmup, and campaign analytics without shared infrastructure. Start a 14-day trial.",
    keywords:
      "Apollo alternative, Apollo.io alternative, Apollo competitor cold email, LeadSnipper vs Apollo, cold email software alternative, Apollo pricing alternative",
    canonical: "https://leadsnipper.com/vs/apollo",
    openGraph: {
      title: "Apollo Alternative — Cold Email with Infrastructure You Own",
      description:
        "Compare LeadSnipper vs Apollo for cold email deliverability, verification, and AWS SES control.",
      url: "https://leadsnipper.com/vs/apollo",
    },
  },

  lemlistAlternative: {
    title: "Best Lemlist Alternative for Cold Email Deliverability",
    description:
      "Compare LeadSnipper with Lemlist for cold email. Get BYO AWS SES, built-in Reoon verification, domain health monitoring, and simpler pricing for deliverability-first outbound. Start a 14-day trial.",
    keywords:
      "Lemlist alternative, Lemlist competitor, LeadSnipper vs Lemlist, cold email software alternative, Lemlist pricing alternative, email deliverability tool",
    canonical: "https://leadsnipper.com/vs/lemlist",
    openGraph: {
      title: "Lemlist Alternative — Deliverability-First Cold Email",
      description:
        "LeadSnipper vs Lemlist: infrastructure ownership, verification, and domain health compared.",
      url: "https://leadsnipper.com/vs/lemlist",
    },
  },

  mailshakeAlternative: {
    title: "Best Mailshake Alternative for Cold Email at Scale",
    description:
      "Compare LeadSnipper with Mailshake for cold email. BYO AWS SES, built-in verification, domain health, and lower per-email costs for teams scaling outbound. See how it works — start free.",
    keywords:
      "Mailshake alternative, Mailshake competitor, LeadSnipper vs Mailshake, cold email software alternative, Mailshake pricing alternative, bulk cold email tool",
    canonical: "https://leadsnipper.com/vs/mailshake",
    openGraph: {
      title: "Mailshake Alternative — Scale Cold Email Safely",
      description:
        "LeadSnipper vs Mailshake: sending infrastructure, verification, and deliverability compared.",
      url: "https://leadsnipper.com/vs/mailshake",
    },
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
      "https://www.linkedin.com/company/leadsnipper",
      "https://x.com/leadsnipper_",
      "https://www.facebook.com/people/Leadsnipper/61590183337984/",
      "https://www.instagram.com/leadsnipper/",
      "https://www.youtube.com/@leadsnipper_official",
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
  },

  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://leadsnipper.com/#software",
    name: "LeadSnipper",
    alternateName: "LeadSnipper Cold Email Platform",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Cold Email Software",
    operatingSystem: "Web Browser",
    description:
      "Cold email platform with BYO AWS SES, built-in Reoon email verification, domain health dashboard, AI warmup, and campaign analytics.",
    url: "https://leadsnipper.com",
    downloadUrl: "https://app.leadsnipper.com/signup?product=leadsnipper",
    softwareVersion: "1.0",
    datePublished: "2024-01-01",
    featureList: [
      "Bring Your Own AWS SES sending infrastructure",
      "Managed SES sending option",
      "Reoon email verification",
      "Domain health monitoring",
      "AI-powered email warmup",
      "Cold email campaign builder",
      "Sender rotation and daily pacing",
      "Campaign analytics and reporting",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "B2B founders, sales teams, growth teams, and outbound agencies",
    },
    brand: {
      "@type": "Brand",
      name: "LeadSnipper",
      url: "https://leadsnipper.com",
    },
    author: {
      "@type": "Organization",
      name: "LeadSnipper",
      url: "https://leadsnipper.com",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "999",
      highPrice: "5999",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "999",
          priceCurrency: "INR",
          url: "https://app.leadsnipper.com/signup?product=leadsnipper",
          availability: "https://schema.org/InStock",
          description:
            "Starter cold email plan with 10 sending mailboxes, 10,000 emails per month, custom domain sending, warmup, AI email writer, and use your Reoon account for verification.",
        },
        {
          "@type": "Offer",
          name: "Growth",
          price: "2499",
          priceCurrency: "INR",
          url: "https://app.leadsnipper.com/signup?product=leadsnipper",
          availability: "https://schema.org/InStock",
          description:
            "Growth cold email plan with 50 sending mailboxes, 100,000 emails per month, unlimited custom domains, unlimited warmup, smart scheduling, advanced analytics, and priority support.",
        },
        {
          "@type": "Offer",
          name: "Scale",
          price: "5999",
          priceCurrency: "INR",
          url: "https://leadsnipper.com/contact",
          availability: "https://schema.org/InStock",
          description:
            "Scale cold email plan with unlimited sending mailboxes, 500,000 emails per month, dedicated SES setup, custom API integrations, dedicated CSM, and SLA-backed deliverability.",
        },
      ],
    },
  },

  product: {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://leadsnipper.com/#product",
    name: "LeadSnipper",
    image: "https://leadsnipper.com/og-image.png",
    description:
      "LeadSnipper is a cold email platform built around AWS SES, email verification, domain warmup, campaign management, and deliverability safeguards.",
    brand: {
      "@type": "Brand",
      name: "LeadSnipper",
    },
    category: "Cold Email Software",
    url: "https://leadsnipper.com",
    audience: {
      "@type": "Audience",
      audienceType: "B2B founders, sales teams, growth teams, and outbound agencies",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "999",
      highPrice: "5999",
      offerCount: "3",
      url: "https://leadsnipper.com/#pricing",
    },
  },

  faqPage: generateFaqPageSchema(),

  socialSnipperSoftwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SocialSnipper",
    alternateName: "SocialSnipper LinkedIn Content Tool",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Social Media Management Software",
    operatingSystem: "Web Browser",
    description:
      "LinkedIn content scheduler and AI writing assistant for B2B founders and sales teams. Schedule posts, research topics, and stay visible without the daily grind.",
    url: "https://leadsnipper.com/products/socialsnipper",
    softwareVersion: "1.0",
    featureList: [
      "LinkedIn post scheduling and content calendar",
      "AI writing assistant for LinkedIn content",
      "Content research and trending topic discovery",
      "Performance analytics and engagement tracking",
      "Multi-account support for agencies",
      "Best-time posting recommendations",
    ],
    brand: {
      "@type": "Brand",
      name: "SocialSnipper",
      url: "https://leadsnipper.com/products/socialsnipper",
    },
    author: {
      "@type": "Organization",
      name: "LeadSnipper",
      url: "https://leadsnipper.com",
    },
    offers: {
      "@type": "Offer",
      name: "Waitlist",
      price: "0",
      priceCurrency: "INR",
      url: "https://leadsnipper.com/products/socialsnipper",
      availability: "https://schema.org/PreOrder",
      description: "Join the waitlist for early access to SocialSnipper.",
    },
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
