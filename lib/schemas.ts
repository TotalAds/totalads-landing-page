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
    name: `${leadsnipper.name} vs ${competitor} Comparison`,
    description: `Feature and pricing comparison between ${leadsnipper.name} and ${competitor} for cold email.`,
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

export const competitorData: Record<
  string,
  { product: ComparisonProduct; priceNote: string }
> = {
  Instantly: {
    product: {
      name: "Instantly",
      description:
        "Cold email outreach tool with shared sending infrastructure and built-in warmup.",
      url: "https://instantly.ai",
      priceRange: "37",
      features: [
        "Shared sending infrastructure",
        "Built-in warmup",
        "Unlimited email accounts",
        "Campaign analytics",
      ],
    },
    priceNote: "Starts at $37/month",
  },
  Smartlead: {
    product: {
      name: "Smartlead",
      description:
        "Cold email platform for agencies with multi-inbox rotation and shared infrastructure.",
      url: "https://smartlead.ai",
      priceRange: "39",
      features: [
        "Multi-inbox rotation",
        "Shared infrastructure",
        "Agency features",
        "API access",
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
      priceRange: "55",
      features: [
        "Multichannel sequences",
        "Video personalization",
        "Shared infrastructure",
        "LinkedIn automation",
      ],
    },
    priceNote: "Starts at $55/month",
  },
  Mailshake: {
    product: {
      name: "Mailshake",
      description:
        "Sales engagement platform with cold email, phone dialer, and social selling.",
      url: "https://mailshake.com",
      priceRange: "59",
      features: [
        "Per-seat pricing",
        "Phone dialer",
        "Social selling",
        "Shared infrastructure",
      ],
    },
    priceNote: "Starts at $59/month per seat",
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
    priceNote: "Starts at $49/month",
  },
};

export const leadsnipperProduct: ComparisonProduct = {
  name: "LeadSnipper",
  description:
    "Deliverability-first cold email platform with BYO AWS SES, built-in Reoon verification, AI warmup, and domain health monitoring.",
  url: BASE_URL,
  priceRange: "19-119",
  features: [
    "BYO AWS SES infrastructure",
    "Built-in Reoon email verification",
    "AI-powered email warmup",
    "Domain health dashboard",
    "Campaign builder with spintax",
    "Sender rotation and daily pacing",
    "Bounce auto-pause",
    "Campaign analytics",
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
