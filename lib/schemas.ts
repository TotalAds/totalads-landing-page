/**
 * Advanced Schema.org structured data generators for AEO/GEO optimization.
 * These schemas help AI answer engines and Google understand page content
 * more precisely, improving citation and rich result eligibility.
 */

const BASE_URL = "https://leadsnipper.com";

// ─── Breadcrumb Schema ───

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── HowTo Schema (for guide/tutorial blog posts) ───

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[],
  totalTime?: string // ISO 8601 duration, e.g. "PT30M"
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
    tool: [
      {
        "@type": "HowToTool",
        name: "LeadSnipper Account",
      },
    ],
  };
}

// ─── Comparison ItemList Schema (for /vs/* pages) ───

export interface ComparisonProduct {
  name: string;
  description: string;
  url: string;
  priceRange?: string;
  features?: string[];
}

export function generateComparisonSchema(
  competitor: string,
  leadsnipper: ComparisonProduct,
  competitorProduct: ComparisonProduct
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${competitor} vs ${leadsnipper.name} comparison`,
    description: `Pricing and feature comparison between ${competitor} and ${leadsnipper.name} for cold email.`,
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: leadsnipper.name,
          description: leadsnipper.description,
          url: leadsnipper.url,
          applicationCategory: "BusinessApplication",
          ...(leadsnipper.priceRange
            ? {
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "USD",
                  lowPrice: "19",
                  highPrice: "119",
                  offerCount: "3",
                },
              }
            : {}),
          ...(leadsnipper.features
            ? { featureList: leadsnipper.features }
            : {}),
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: competitorProduct.name,
          description: competitorProduct.description,
          url: competitorProduct.url,
          applicationCategory: "BusinessApplication",
          ...(competitorProduct.priceRange
            ? {
                offers: {
                  "@type": "Offer",
                  price: competitorProduct.priceRange,
                  priceCurrency: "USD",
                },
              }
            : {}),
          ...(competitorProduct.features
            ? { featureList: competitorProduct.features }
            : {}),
        },
      },
    ],
  };
}

// ─── Pre-built comparison data for each competitor ───

// Competitor facts. Prices re-checked on vendor pricing pages on 2026-10-31 (Mailshake, Apollo,
// Instantly, Smartlead, lemlist). Apollo Basic is the annual per-seat list price.
export const competitorData: Record<
  string,
  { product: ComparisonProduct; priceNote: string }
> = {
  Instantly: {
    product: {
      name: "Instantly",
      description:
        "Cold email outreach tool that sends through connected mailboxes, with unlimited email accounts and warm-up on every plan.",
      url: "https://instantly.ai",
      priceRange: "47",
      features: [
        "Unlimited email accounts",
        "Built-in warm-up",
        "One plan subscription per workspace",
        "Dedicated IPs (SISR) on Light Speed",
      ],
    },
    priceNote: "Starts at $47/month ($37.60/month billed yearly)",
  },
  Smartlead: {
    product: {
      name: "Smartlead",
      description:
        "Cold email platform for agencies with unlimited email accounts and white-label client workspaces.",
      url: "https://smartlead.ai",
      priceRange: "39",
      features: [
        "Unlimited email accounts",
        "Multi-inbox rotation",
        "White-label client workspaces ($29/client from Pro)",
        "API access (from Pro)",
      ],
    },
    priceNote: "Starts at $39/month",
  },
  Lemlist: {
    product: {
      name: "Lemlist",
      description:
        "Cold email and outreach platform with multichannel sequences and personalization.",
      url: "https://lemlist.com",
      priceRange: "69",
      features: [
        "Multichannel sequences",
        "Image and video personalization",
        "LinkedIn steps",
        "Email plan with unlimited users and senders",
      ],
    },
    priceNote: "Email plan from $69/month ($55/month billed yearly)",
  },
  Mailshake: {
    product: {
      name: "Mailshake",
      description:
        "Sales engagement platform with cold email, phone dialer, and social selling.",
      url: "https://mailshake.com",
      priceRange: "29",
      features: [
        "Per-seat pricing",
        "Phone dialer",
        "Social selling",
        "CRM integrations",
      ],
    },
    priceNote: "Starts at $29/month per user ($25 billed yearly)",
  },
  Apollo: {
    product: {
      name: "Apollo.io",
      description:
        "B2B prospecting database with email finding, sequences, and CRM integration.",
      url: "https://apollo.io",
      priceRange: "49",
      features: [
        "Prospecting database",
        "Email finder",
        "Sequences",
        "CRM integration",
      ],
    },
    priceNote: "Basic from $49/seat/month billed annually ($65 monthly)",
  },
};

// LeadSnipper facts only from leadsnipper.com (pricing page, FAQ). No warm-up, free plan,
// built-in Reoon, lead database, white-label or client-workspace claims.
export const leadsnipperProduct: ComparisonProduct = {
  name: "LeadSnipper",
  description:
    "Cold email software for B2B agencies with mailbox-level daily limits, Reoon verification before send (bring your own Reoon account), and bounce and complaint auto-pause.",
  url: BASE_URL,
  priceRange: "19-119",
  features: [
    "Google Workspace, Microsoft 365, Zoho and SMTP/IMAP mailbox connections",
    "Mailbox-level daily limits and sending delays",
    "Sender rotation and ESP matching",
    "Reoon email verification before send (bring your own Reoon account)",
    "Bounce and complaint monitoring with automatic campaign pause",
    "Campaign builder with spintax",
    "Campaign analytics",
    "Managed AWS SES add-on",
  ],
};

// ─── Speakable Schema (AEO / Voice Search) ───

export function generateSpeakableSchema(
  url: string,
  cssSelectors: string[] = ["h1", "[data-speakable]", ".faq-answer"]
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

// ─── Article Schema with dateModified (for blog posts with freshness) ───

export function generateArticleSchemaWithFreshness(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  wordCount: number,
  imageUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    wordCount,
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: "LeadSnipper",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "LeadSnipper",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "[data-speakable]"],
    },
  };
}
