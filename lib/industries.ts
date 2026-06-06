export interface IndustryConfig {
  slug: string;
  name: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  headline: string;
  subheadline: string;
  challenges: string[];
  sampleSequence: Array<{ subject: string; body: string }>;
  deliverabilityTips: string[];
  faqs: Array<{ question: string; answer: string }>;
  ctaHeadline: string;
  ctaDescription: string;
}

const baseUrl = "https://leadsnipper.com";

function createIndustry(
  slug: string,
  name: string,
  headline: string,
  subheadline: string,
  challenges: string[],
  sampleSequence: Array<{ subject: string; body: string }>,
  deliverabilityTips: string[],
  faqs: Array<{ question: string; answer: string }>
): IndustryConfig {
  return {
    slug,
    name,
    title: `Cold Email for ${name} | LeadSnipper`,
    description: `Learn how ${name.toLowerCase()} teams use cold email to book meetings. Industry-specific sequences, deliverability tips, and LeadSnipper's cold email infrastructure built on AWS SES. Start free.`,
    keywords: `cold email for ${slug}, cold email ${name.toLowerCase()}, ${name.toLowerCase()} outbound email, cold outreach ${slug}, B2B cold email ${slug}`,
    canonical: `${baseUrl}/cold-email-for/${slug}`,
    headline,
    subheadline,
    challenges,
    sampleSequence,
    deliverabilityTips,
    faqs,
    ctaHeadline: `Launch cold email for ${name} with deliverability built in`,
    ctaDescription: `Start with 1,000 free emails, verify leads before sending, and monitor domain health from day one.`,
  };
}

export const industries: IndustryConfig[] = [
  createIndustry(
    "saas",
    "SaaS",
    "Cold email for SaaS companies that need pipeline without burning domains",
    "SaaS founders and SDR teams need predictable outbound. LeadSnipper helps you send cold email at scale with BYO AWS SES, built-in verification, and domain health monitoring.",
    [
      "Long sales cycles require consistent follow-up without spam folder risk",
      "Multiple ICPs mean you need separate domains and sender rotation",
      "High-volume outreach can destroy domain reputation without warmup",
      "Prospects expect personalized outreach, not generic blasts",
    ],
    [
      {
        subject: "Quick question about {{company}}'s outbound stack",
        body: "Hi {{first_name}},\n\nI noticed {{company}} is scaling its sales team. Most SaaS teams we work with struggle with cold email deliverability once they pass 500 sends/day.\n\nWe built LeadSnipper on AWS SES so teams own their sending infrastructure. Would a 15-min call on how other SaaS companies handle this be useful?",
      },
      {
        subject: "Re: outbound at {{company}}",
        body: "Hi {{first_name}},\n\nFollowing up — we helped a SaaS company go from 2% to 18% open rates by fixing domain warmup and list verification before campaigns.\n\nHappy to share the playbook if relevant.",
      },
    ],
    [
      "Use separate sending domains per ICP or product line",
      "Verify every lead with Reoon before uploading — SaaS lists decay fast",
      "Warm up new domains for 2-4 weeks before cold outreach",
      "Keep daily send volume under 50 per domain until reputation is established",
    ],
    [
      {
        question: "How many cold emails can a SaaS company send per day?",
        answer:
          "Start with 30-50 emails per domain per day after warmup. Scale gradually based on bounce rates and open rates. With multiple domains, SaaS teams can reach 500-2,000 sends/day safely.",
      },
      {
        question: "Should SaaS companies use shared or dedicated email infrastructure?",
        answer:
          "Dedicated infrastructure (BYO AWS SES) gives you control over sender reputation. Shared pools from generic cold email tools can expose your domain to other senders' bad behavior.",
      },
    ]
  ),
  createIndustry(
    "recruiters",
    "Recruiters",
    "Cold email for recruiters who need replies, not spam folder trips",
    "Recruitment outreach lives or dies on inbox placement. LeadSnipper gives recruiters verified lists, domain warmup, and AWS SES infrastructure to reach candidates and hiring managers reliably.",
    [
      "High-volume candidate outreach triggers spam filters quickly",
      "Recruiting emails often look templated, hurting engagement",
      "Multiple clients require separate domains and sender management",
      "Bounce rates spike when sourcing from stale LinkedIn exports",
    ],
    [
      {
        subject: "Senior {{role}} opportunity — {{company}}",
        body: "Hi {{first_name}},\n\nI'm reaching out about a {{role}} role at {{company}} that matches your background in {{skill}}.\n\nWould you be open to a brief chat this week?",
      },
    ],
    [
      "Verify candidate emails before sending — stale lists cause bounces",
      "Use role-specific subject lines, not generic 'Job Opportunity'",
      "Rotate across 2-3 sending domains for high-volume recruiting",
      "Keep personalization genuine — spam filters detect mail-merge patterns",
    ],
    [
      {
        question: "Can recruiters send cold email at scale without getting blocked?",
        answer:
          "Yes, with proper warmup, verification, and pacing. Recruiters should verify every email, warm up domains for 2-3 weeks, and limit to 40-60 sends per domain per day.",
      },
    ]
  ),
  createIndustry(
    "real-estate",
    "Real Estate",
    "Cold email for real estate agents and investors",
    "Real estate professionals use cold email to reach property owners, investors, and leads. LeadSnipper helps you send locally targeted outreach with deliverability controls that keep you out of spam.",
    [
      "Local outreach requires trusted sender reputation in specific markets",
      "Property owner lists often contain outdated or catch-all emails",
      "High personalization expectations from prospects",
      "Compliance considerations for real estate marketing emails",
    ],
    [
      {
        subject: "Quick question about {{property_address}}",
        body: "Hi {{first_name}},\n\nI'm a local agent specializing in {{neighborhood}}. I noticed {{property_address}} and wanted to see if you'd be open to a brief conversation about the market in your area.\n\nNo pressure — happy to share recent comps either way.",
      },
    ],
    [
      "Verify property owner emails — many lists contain catch-all domains",
      "Use local domain names when possible (e.g., yourname-realestate.com)",
      "Keep volume low initially — 20-30 emails per domain per day",
      "Include a clear opt-out and physical address for compliance",
    ],
    [
      {
        question: "Is cold email legal for real estate agents?",
        answer:
          "Cold email is legal in most jurisdictions when you include accurate sender info, a physical address, and an unsubscribe option. Always check local regulations and CAN-SPAM requirements.",
      },
    ]
  ),
  createIndustry(
    "agencies",
    "Agencies",
    "Cold email for agencies managing multiple client campaigns",
    "Agencies need cold email infrastructure that scales across clients without shared reputation risk. LeadSnipper offers multi-domain management, PDF reports, and BYO AWS SES per client.",
    [
      "Managing deliverability across multiple client domains",
      "Client reporting requires professional analytics and PDF exports",
      "Shared infrastructure puts all clients at risk from one bad campaign",
      "Verification costs add up across multiple client lists",
    ],
    [
      {
        subject: "Outbound idea for {{company}}",
        body: "Hi {{first_name}},\n\nWe help B2B companies book 15-20 meetings/month through cold email. I noticed {{company}} is hiring SDRs — we might be able to accelerate pipeline while you build the team.\n\nWorth a 15-min call?",
      },
    ],
    [
      "Use separate domains per client — never share sending reputation",
      "Export PDF reports monthly for client transparency",
      "Verify all client lists before launch — one bad upload affects the domain",
      "Set daily pacing limits per domain to protect client reputation",
    ],
    [
      {
        question: "Can agencies use LeadSnipper for multiple clients?",
        answer:
          "Yes. LeadSnipper supports unlimited domains on Business and BYO SES plans. Each client gets their own domain, warmup schedule, and analytics dashboard with PDF export.",
      },
    ]
  ),
  createIndustry(
    "consultants",
    "Consultants",
    "Cold email for consultants and fractional executives",
    "Independent consultants need a reliable outbound channel without enterprise tool costs. LeadSnipper offers affordable cold email with AWS SES, verification, and warmup starting free.",
    [
      "Limited budget for expensive outbound tools",
      "Personal brand depends on inbox placement, not spam folder",
      "Small lists require high-quality, verified contacts",
      "Need professional outreach without looking like mass marketing",
    ],
    [
      {
        subject: "Thought on {{company}}'s {{challenge_area}}",
        body: "Hi {{first_name}},\n\nI help {{industry}} companies with {{service}}. I noticed {{company}} recently {{trigger_event}} and thought there might be a fit.\n\nOpen to a brief call?",
      },
    ],
    [
      "Send from a personal domain that matches your consulting brand",
      "Keep volume modest — 20-40 emails per day is plenty for consultants",
      "Verify every contact — small lists mean every bounce hurts reputation",
      "Use genuine personalization referencing specific company triggers",
    ],
    [
      {
        question: "What's the best cold email tool for solo consultants?",
        answer:
          "LeadSnipper's free trial and Starter plan (₹499/mo) give consultants BYO AWS SES, verification, and warmup without enterprise pricing. Most consultants send 50-200 emails/week.",
      },
    ]
  ),
  createIndustry(
    "b2b-startups",
    "B2B Startups",
    "Cold email for B2B startups building their first outbound motion",
    "Early-stage B2B startups need cold email that works without burning their only domain. LeadSnipper helps founders launch outbound safely with warmup, verification, and AWS SES from day one.",
    [
      "One domain reputation mistake can kill all company email",
      "Founders wear multiple hats — need simple, focused tooling",
      "Limited budget for Instantly/Smartlead enterprise tiers",
      "Need to validate ICP before investing in paid ads",
    ],
    [
      {
        subject: "Quick idea for {{company}}",
        body: "Hi {{first_name}},\n\nWe're building {{product}} for {{target_audience}}. {{company}} looks like a great fit because {{reason}}.\n\nWould a 10-min demo be useful?",
      },
    ],
    [
      "Buy a separate outreach domain — never cold email from your main company domain",
      "Start with 10-20 emails/day and ramp over 3 weeks",
      "Verify every lead before sending — startup lists are often scraped and stale",
      "Track reply rates by ICP segment to find product-market fit signals",
    ],
    [
      {
        question: "When should a B2B startup start cold email?",
        answer:
          "Once you have a clear ICP and offer. Start with 50-100 verified contacts, test messaging, then scale volume gradually. LeadSnipper's free trial lets you validate outbound before committing.",
      },
    ]
  ),
  createIndustry(
    "fintech",
    "Fintech",
    "Cold email for fintech companies with compliance-aware outbound",
    "Fintech outbound requires careful messaging and reliable deliverability. LeadSnipper provides infrastructure control, verification, and domain health monitoring for regulated industries.",
    [
      "Compliance requirements limit messaging and targeting options",
      "Financial services emails face stricter spam filtering",
      "Prospects are skeptical of unsolicited financial outreach",
      "Domain reputation is critical for transactional and marketing email coexistence",
    ],
    [
      {
        subject: "{{company}} + {{product_category}} efficiency",
        body: "Hi {{first_name}},\n\nWe help {{target_segment}} reduce {{pain_point}} by {{value_prop}}. Given {{company}}'s focus on {{area}}, I thought this might be relevant.\n\nHappy to share a brief overview if useful.",
      },
    ],
    [
      "Use a dedicated outreach domain separate from transactional email",
      "Avoid financial claims or guarantees in subject lines",
      "Verify all contacts — fintech lists from data providers often contain role-based emails",
      "Monitor complaint rates closely — financial services have lower tolerance thresholds",
    ],
    [
      {
        question: "Can fintech companies use cold email safely?",
        answer:
          "Yes, with proper compliance (CAN-SPAM, GDPR where applicable), verified lists, and dedicated sending infrastructure. LeadSnipper's domain health dashboard helps monitor reputation signals.",
      },
    ]
  ),
  createIndustry(
    "healthcare",
    "Healthcare",
    "Cold email for healthcare and healthtech outbound",
    "Healthcare outreach demands careful targeting and deliverability. LeadSnipper helps healthtech and healthcare services companies reach decision-makers with verified lists and controlled sending.",
    [
      "HIPAA and privacy considerations limit data usage",
      "Healthcare inboxes have aggressive spam filtering",
      "Decision-makers are hard to reach and slow to respond",
      "Generic outreach fails — needs role and organization-specific messaging",
    ],
    [
      {
        subject: "Improving {{process}} at {{organization}}",
        body: "Hi {{first_name}},\n\nWe work with {{organization_type}} organizations to {{value_prop}}. I noticed {{organization}} is focused on {{initiative}} and thought there might be a fit.\n\nWould a brief call make sense?",
      },
    ],
    [
      "Never include patient data or PHI in cold emails",
      "Verify contacts against role-based and organizational emails",
      "Use professional, clinical tone — avoid salesy language",
      "Warm up domains for 3-4 weeks before healthcare outreach",
    ],
    [
      {
        question: "Is cold email allowed in healthcare marketing?",
        answer:
          "B2B cold email to healthcare decision-makers is generally permitted under CAN-SPAM when properly formatted. Never include PHI. Always verify you're contacting business emails, not patients.",
      },
    ]
  ),
];

export function getIndustry(slug: string): IndustryConfig | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
