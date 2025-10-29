// SEO Configuration for LeadSnipper Landing Page
export const seoConfig = {
  // Base configuration
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://leadsnipper.com"
      : "http://localhost:3001",

  // Default SEO settings
  defaultTitle: "LeadSnipper - AI-Powered Email Campaign Platform",
  titleTemplate: "%s | LeadSnipper",
  defaultDescription:
    "Scale your cold email outreach with 99.9% deliverability, AI personalization, and unlimited mailboxes. Send campaigns at scale with premium inbox placement. 1000 free credits for early users.",

  // Open Graph defaults
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
        alt: "LeadSnipper - AI-Powered Email Campaign Platform",
      },
    ],
  },

  // Twitter defaults
  defaultTwitter: {
    handle: "@leadsnipper",
    site: "@leadsnipper",
    cardType: "summary_large_image",
  },

  // Additional meta tags
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "theme-color",
      content: "#a855f7",
    },
    {
      name: "msapplication-TileColor",
      content: "#a855f7",
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

  // Additional link tags
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

// Type definitions for page configurations
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

// Page-specific SEO configurations
export const pageConfigs: Record<string, PageConfig> = {
  home: {
    title: "LeadSnipper - AI-Powered Email Campaign Platform",
    description:
      "Scale your cold email outreach with 99.9% deliverability, AI personalization, and unlimited mailboxes. Send campaigns at scale with premium inbox placement. 1000 free credits for early users.",
    keywords:
      "cold email, email campaigns, email marketing, email automation, deliverability, AI personalization, email outreach, sales automation, email sequences, campaign management",
    canonical: "https://leadsnipper.com",
    openGraph: {
      title: "LeadSnipper - AI-Powered Email Campaign Platform",
      description:
        "Scale cold email campaigns with 99.9% deliverability and AI-powered personalization.",
      url: "https://leadsnipper.com",
      images: [
        {
          url: "https://leadsnipper.com/og-home.png",
          width: 1200,
          height: 630,
          alt: "LeadSnipper Homepage - Email Campaign Platform",
        },
      ],
    },
  },

  howToUse: {
    title: "How to Use LeadSnipper - Email Campaign Guide",
    description:
      "Learn how to launch email campaigns with LeadSnipper. Add domains, upload leads, create campaigns, and send at scale in 4 simple steps.",
    keywords:
      "how to use leadsnipper, email campaign setup, cold email guide, email automation tutorial, campaign creation",
    canonical: "https://leadsnipper.com/how-to-use",
    openGraph: {
      title: "How to Use LeadSnipper - Email Campaign Guide",
      description:
        "Step-by-step guide to creating and launching email campaigns with premium deliverability.",
      url: "https://leadsnipper.com/how-to-use",
    },
  },

  contact: {
    title: "Contact LeadSnipper - Email Campaign Support",
    description:
      "Contact LeadSnipper for support, sales inquiries, or partnership opportunities. Get help with email campaigns, deliverability, and platform features.",
    keywords:
      "contact leadsnipper, customer support, email support, campaign help, partnership inquiries",
    canonical: "https://leadsnipper.com/contact",
    openGraph: {
      title: "Contact LeadSnipper - Email Campaign Support",
      description:
        "Contact our team for support, sales inquiries, or partnership opportunities.",
      url: "https://leadsnipper.com/contact",
      images: [
        {
          url: "https://leadsnipper.com/og-contact.png",
          width: 1200,
          height: 630,
          alt: "Contact LeadSnipper - Email Campaign Support Team",
        },
      ],
    },
  },

  privacy: {
    title: "Privacy Policy - LeadSnipper Data Protection",
    description:
      "LeadSnipper privacy policy explaining how we collect, use, and protect your data. GDPR compliant data handling for sales intelligence.",
    keywords:
      "privacy policy, data protection, GDPR compliance, data security, user privacy",
    canonical: "https://leadsnipper.com/privacy-policy",
  },

  terms: {
    title: "Terms of Service - LeadSnipper Usage Agreement",
    description:
      "LeadSnipper terms of service and usage agreement. Understand your rights and responsibilities when using our sales intelligence platform.",
    keywords:
      "terms of service, usage agreement, legal terms, service conditions",
    canonical: "https://leadsnipper.com/terms-of-service",
  },

  refund: {
    title: "Refund Policy - LeadSnipper Money-Back Guarantee",
    description:
      "LeadSnipper refund policy and money-back guarantee. Learn about our fair refund process for sales intelligence services.",
    keywords:
      "refund policy, money back guarantee, billing support, payment terms",
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
      "AI-powered email campaign platform for cold outreach with 99.9% deliverability, unlimited mailboxes, and AI personalization.",
    foundingDate: "2024",
    sameAs: [
      "https://twitter.com/leadsnipper",
      "https://linkedin.com/company/leadsnipper",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-LEADS-01",
      contactType: "customer service",
      availableLanguage: "English",
    },
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LeadSnipper",
    url: "https://leadsnipper.com",
    description:
      "AI-powered email campaign platform for cold outreach with premium deliverability and personalization.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://app.leadsnipper.com/search?q={search_term_string}",
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
      "AI-powered email campaign platform for cold outreach with 99.9% deliverability and unlimited mailboxes.",
    url: "https://leadsnipper.com",
    downloadUrl: "https://app.leadsnipper.com/signup",
    softwareVersion: "1.0",
    datePublished: "2024-01-01",
    author: {
      "@type": "Organization",
      name: "LeadSnipper",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "1000 free credits for early users",
    },
  },
};

// Generate meta tags for a specific page
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
