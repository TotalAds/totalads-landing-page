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

  instantlyAlternative: {
    title:
      "Instantly Alternative — LeadSnipper vs Instantly for Cold Email",
    description:
      "Compare LeadSnipper with Instantly for cold email. See how BYO AWS SES, built-in Reoon verification, domain health monitoring, and lower sending costs stack up against shared infrastructure.",
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
      "Smartlead Alternative — LeadSnipper vs Smartlead for Cold Email",
    description:
      "Compare LeadSnipper with Smartlead for cold email. See how dedicated AWS SES control, built-in verification, domain health, and simpler pricing help teams protect deliverability.",
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
    title: "Pricing — LeadSnipper | From ₹0 to Enterprise Cold Email",
    description:
      "LeadSnipper pricing plans starting free. Starter at ₹499/mo, Business at ₹999/mo, and Enterprise with BYO AWS SES, unlimited domains, and advanced analytics. No credit card required.",
    keywords:
      "LeadSnipper pricing, cold email pricing, email outreach cost, AWS SES pricing plan, cold email platform price, BYO SES plan",
    canonical: "https://leadsnipper.com/pricing",
    openGraph: {
      title: "LeadSnipper Pricing — Cold Email From ₹0",
      description:
        "Start free or pick a plan that scales with your outreach. Starter ₹499/mo, Business ₹999/mo, Enterprise custom.",
      url: "https://leadsnipper.com/pricing",
    },
  },

  leadsnipper: {
    title: "LeadSnipper — Cold Email on Infrastructure You Own",
    description:
      "Send 10,000+ cold emails without killing your domain reputation. Built on AWS SES. Domain health, warmup, verification, and campaigns in one platform.",
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
      "Stay visible on LinkedIn without the daily grind. Schedule posts, research trending topics, and let AI help you write — so your emails land and your profile compounds.",
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
    potentialAction: {
      "@type": "SearchAction",
      target: "https://leadsnipper.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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
    downloadUrl: "https://app.leadsnipper.com/signup",
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
      lowPrice: "0",
      highPrice: "999",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Free Trial",
          price: "0",
          priceCurrency: "INR",
          url: "https://app.leadsnipper.com/signup",
          availability: "https://schema.org/InStock",
          description:
            "Free trial with 1,000 emails, 500 contacts, basic analytics, and API access.",
        },
        {
          "@type": "Offer",
          name: "Starter",
          price: "499",
          priceCurrency: "INR",
          url: "https://app.leadsnipper.com/signup",
          availability: "https://schema.org/InStock",
          description:
            "Starter cold email plan with 5,000 emails, 3,000 contacts, custom domain, warmup, analytics, and 3 domains.",
        },
        {
          "@type": "Offer",
          name: "Business",
          price: "999",
          priceCurrency: "INR",
          url: "https://app.leadsnipper.com/signup",
          availability: "https://schema.org/InStock",
          description:
            "Business cold email plan with 15,000 emails, 10,000 contacts, unlimited domains, unlimited warmup, and advanced analytics.",
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
      lowPrice: "0",
      highPrice: "999",
      offerCount: "3",
      url: "https://leadsnipper.com/#pricing",
    },
  },

  faqPage: generateFaqPageSchema(),
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
