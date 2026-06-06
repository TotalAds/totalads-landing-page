export type BlogCluster = "infrastructure" | "deliverability";
export type ClusterRole = "hub" | "spoke" | "bridge";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  keywords: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  cluster: BlogCluster;
  clusterRole: ClusterRole;
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "instantly-vs-leadsnipper-indian-agencies-comparison",
    title:
      "Instantly vs LeadSnipper: Which is Better for Agencies in India? (2026)",
    excerpt:
      "Indian agencies face unique challenges: INR pricing, forex fees, and multi-client deliverability. Here's a detailed comparison of Instantly vs LeadSnipper built specifically for agency owners in India.",
    description:
      "Compare Instantly vs LeadSnipper for Indian agencies. Covers INR vs USD pricing, forex fees, BYO AWS SES vs shared infrastructure, built-in verification, and local support — from the perspective of running a lead generation agency in India.",
    keywords:
      "Instantly vs LeadSnipper India, cold email tool for Indian agencies, Instantly alternative India, LeadSnipper vs Instantly pricing, cold email software India, best cold email tool for agencies India, INR pricing cold email, AWS SES India, lead generation agency India, cold email deliverability India",
    date: "2026-05-21",
    readTime: "12 min read",
    author: "LeadSnipper Team",
    category: "Comparison",
    cluster: "infrastructure",
    clusterRole: "bridge",
    relatedSlugs: [
      "best-cold-email-software-2026-comparison",
      "how-to-set-up-aws-ses-for-cold-email-step-by-step",
      "how-to-send-cold-emails-at-scale-without-getting-blacklisted",
    ],
  },
  {
    slug: "why-cold-emails-land-in-spam-fix-today",
    title:
      "Why Your Cold Emails Are Landing in Spam (And How to Fix It Today)",
    excerpt:
      "90% of deliverability problems have nothing to do with your copy. Here are the 5 real reasons cold emails go to spam — domain reputation, DNS records, bounce rates, sending speed, and content triggers — with actionable fixes for each.",
    description:
      "Learn why your cold emails are landing in spam and how to fix it today. Covers domain reputation, SPF DKIM DMARC setup, bounce rate management, email verification, sending pace, and spam trigger words — with a diagnostic checklist.",
    keywords:
      "cold emails landing in spam, fix cold email deliverability, why emails go to spam, cold email spam folder, improve email deliverability, email domain reputation fix, SPF DKIM DMARC setup, reduce email bounce rate, email verification importance, cold email sending best practices, spam filter triggers, inbox placement fix",
    date: "2026-05-18",
    readTime: "11 min read",
    author: "LeadSnipper Team",
    category: "Deliverability",
    cluster: "deliverability",
    clusterRole: "spoke",
    relatedSlugs: [
      "domain-reputation-management-protect-sender-score",
      "email-list-cleaning-why-verification-prevents-bounce-disasters",
      "email-warmup-verification-domain-health-complete-guide",
    ],
  },
  {
    slug: "outbound-stack-20-meetings-per-month",
    title:
      "The Exact Outbound Stack We Use to Book 20+ Meetings Per Month",
    excerpt:
      "Sustainable outbound requires a system, not a tactic. Here's the complete stack: infrastructure (domains, DNS, AWS SES), list building (Apollo, Sales Nav), messaging (sequences, personalization), execution (daily rhythm), and analytics — with real numbers and costs.",
    description:
      "Discover the exact outbound stack for booking 20+ B2B meetings per month. Complete breakdown of infrastructure, list building tools, email sequences, sending cadence, analytics, and monthly costs — with real performance numbers and lessons learned.",
    keywords:
      "outbound stack 20 meetings per month, cold email stack, B2B outbound system, cold email infrastructure, outbound meeting booking, cold email tools stack, Apollo LinkedIn Sales Navigator, AWS SES cold email, email sequence templates, cold email analytics, outbound sales process, lead generation stack, cold email best practices 2026",
    date: "2026-05-15",
    readTime: "14 min read",
    author: "LeadSnipper Team",
    category: "Strategy",
    cluster: "infrastructure",
    clusterRole: "bridge",
    relatedSlugs: [
      "how-to-send-cold-emails-at-scale-without-getting-blacklisted",
      "how-to-set-up-aws-ses-for-cold-email-step-by-step",
      "domain-reputation-management-protect-sender-score",
    ],
  },
  {
    slug: "cold-email-open-rate-dropping-fix-domain-reputation",
    title:
      "Cold Email Open Rate Dropping? How to Diagnose and Fix Domain Reputation",
    excerpt:
      "A sudden open-rate drop is usually a deliverability warning, not a copywriting problem. Learn how to check domain reputation, DNS, bounce rates, warmup, and list quality before your campaigns slide into spam.",
    description:
      "Learn why your cold email open rate is dropping and how to fix domain reputation problems. Covers DNS checks, bounce rate diagnosis, email verification, warmup, sender rotation, and domain health monitoring.",
    keywords:
      "cold email open rate dropping, fix email domain reputation, cold email open rate drop, email domain reputation, cold email deliverability problem, email open rate decline, domain health monitoring, cold email warmup, email bounce rate, sender reputation fix",
    date: "2026-04-12",
    readTime: "11 min read",
    author: "LeadSnipper Team",
    category: "Deliverability",
    cluster: "deliverability",
    clusterRole: "spoke",
    relatedSlugs: [
      "domain-reputation-management-protect-sender-score",
      "email-list-cleaning-why-verification-prevents-bounce-disasters",
      "email-warmup-verification-domain-health-complete-guide",
    ],
  },
  {
    slug: "how-to-send-cold-emails-at-scale-without-getting-blacklisted",
    title:
      "How to Send Cold Emails at Scale Without Getting Blacklisted in 2026",
    excerpt:
      "Most cold email senders get blacklisted because they skip the fundamentals — domain warmup, list verification, and reputation monitoring. Here's how to send 10,000+ cold emails per month without destroying your sender reputation.",
    description:
      "Learn how to send cold emails at scale without getting blacklisted. Covers domain warmup, email verification, sender reputation management, DNS setup (DKIM, SPF, DMARC), and best practices for bulk cold outreach in 2026.",
    keywords:
      "cold email at scale, email blacklist prevention, domain reputation management, email deliverability guide, cold email best practices, avoid email blacklist, bulk email sending tips, sender reputation, DKIM SPF setup, cold email warmup, email bounce rate, cold outreach strategy 2026",
    date: "2026-04-08",
    readTime: "12 min read",
    author: "LeadSnipper Team",
    category: "Deliverability",
    cluster: "infrastructure",
    clusterRole: "hub",
    relatedSlugs: [
      "how-to-set-up-aws-ses-for-cold-email-step-by-step",
      "cold-email-vs-newsletter-tools-why-mailchimp-wont-work",
      "byo-aws-ses-vs-shared-email-infrastructure-cold-outreach",
      "domain-reputation-management-protect-sender-score",
      "email-list-cleaning-why-verification-prevents-bounce-disasters",
    ],
  },
  {
    slug: "byo-aws-ses-vs-shared-email-infrastructure-cold-outreach",
    title:
      "BYO AWS SES vs Shared Email Infrastructure: Why It Matters for Cold Outreach",
    excerpt:
      "When your cold email tool owns your sending infrastructure, their problems become your problems. Here's why BYO AWS SES wins — plus Try BYO SES (free) vs BYO SES Pro (₹999), your responsibility in SES, and how we protect the platform without capping your AWS sends.",
    description:
      "Compare BYO AWS SES vs shared email infrastructure for cold outreach. Covers Try BYO SES vs BYO SES Pro pricing, unlimited domains on your SES, disclaimers, and why full control beats shared pools — with safeguards for legitimate teams.",
    keywords:
      "BYO AWS SES, shared email infrastructure, Amazon SES cold email, email sending infrastructure, own sending reputation, AWS SES vs shared IP, cold email infrastructure, Instantly alternative, Smartlead alternative, email deliverability control, cold email cost comparison, dedicated IP cold email",
    date: "2026-04-04",
    readTime: "12 min read",
    author: "LeadSnipper Team",
    category: "Infrastructure",
    cluster: "infrastructure",
    clusterRole: "spoke",
    relatedSlugs: [
      "how-to-send-cold-emails-at-scale-without-getting-blacklisted",
      "how-to-set-up-aws-ses-for-cold-email-step-by-step",
      "domain-reputation-management-protect-sender-score",
    ],
  },
  {
    slug: "email-warmup-verification-domain-health-complete-guide",
    title:
      "Email Warmup, Verification, and Domain Health: The Complete Cold Email Deliverability Guide",
    excerpt:
      "Email warmup, list verification, and domain health monitoring are the three pillars of cold email deliverability. Skip any one of them and your campaigns land in spam. This guide covers all three in depth.",
    description:
      "Complete guide to cold email deliverability covering email warmup strategies, email verification with Reoon, and domain health monitoring. Learn how to build sender reputation, clean your email lists, and monitor DNS health (DKIM, SPF, DMARC) for reliable inbox placement.",
    keywords:
      "email warmup guide, email verification, domain health monitoring, cold email deliverability, Reoon email verification, email list cleaning, sender reputation building, DKIM SPF DMARC setup, inbox placement, email bounce prevention, warmup schedule, domain health dashboard, cold email DNS setup, email deliverability stack",
    date: "2026-03-28",
    readTime: "15 min read",
    author: "LeadSnipper Team",
    category: "Guide",
    cluster: "deliverability",
    clusterRole: "spoke",
    relatedSlugs: [
      "domain-reputation-management-protect-sender-score",
      "cold-email-open-rate-dropping-fix-domain-reputation",
      "email-list-cleaning-why-verification-prevents-bounce-disasters",
    ],
  },
  {
    slug: "best-cold-email-software-2026-comparison",
    title:
      "Best Cold Email Software in 2026: Instantly vs Smartlead vs LeadSnipper (Honest Comparison)",
    excerpt:
      "Choosing the right cold email tool in 2026 means understanding what you're actually paying for — infrastructure ownership, deliverability controls, and verification. Here's an honest comparison of the top platforms.",
    description:
      "Compare the best cold email software in 2026. Honest side-by-side review of Instantly, Smartlead, and LeadSnipper covering pricing, deliverability, email warmup, BYO AWS SES, email verification, and infrastructure ownership.",
    keywords:
      "best cold email software 2026, cold email tool comparison, Instantly vs Smartlead, Instantly alternative, Smartlead alternative, cold email platform review, email outreach tool, cold email pricing comparison, best bulk email sender, cold email deliverability tools, email campaign software, sales email automation",
    date: "2026-04-10",
    readTime: "14 min read",
    author: "LeadSnipper Team",
    category: "Comparison",
    cluster: "infrastructure",
    clusterRole: "bridge",
    relatedSlugs: [
      "byo-aws-ses-vs-shared-email-infrastructure-cold-outreach",
      "how-to-send-cold-emails-at-scale-without-getting-blacklisted",
      "domain-reputation-management-protect-sender-score",
    ],
  },
  {
    slug: "domain-reputation-management-protect-sender-score",
    title:
      "Domain Reputation Management: How to Protect Your Sender Score for Cold Email",
    excerpt:
      "Your domain reputation decides whether your cold emails reach the inbox or land in spam. Most senders don't monitor it until it's too late. Here's how to build, protect, and recover your sender reputation.",
    description:
      "Learn how to manage your domain reputation for cold email. Covers sender score monitoring, bounce rate management, complaint rate thresholds, DNS authentication, and recovery strategies for blacklisted domains.",
    keywords:
      "domain reputation management, sender score, email sender reputation, protect domain reputation, email reputation monitoring, sender reputation cold email, bounce rate management, complaint rate threshold, domain blacklist recovery, Google Postmaster Tools, email reputation score, cold email domain health",
    date: "2026-03-22",
    readTime: "11 min read",
    author: "LeadSnipper Team",
    category: "Deliverability",
    cluster: "deliverability",
    clusterRole: "hub",
    relatedSlugs: [
      "email-warmup-verification-domain-health-complete-guide",
      "cold-email-open-rate-dropping-fix-domain-reputation",
      "email-list-cleaning-why-verification-prevents-bounce-disasters",
      "why-cold-emails-land-in-spam-fix-today",
      "how-to-send-cold-emails-at-scale-without-getting-blacklisted",
    ],
  },
  {
    slug: "cold-email-vs-newsletter-tools-why-mailchimp-wont-work",
    title:
      "Cold Email vs Newsletter Tools: Why Mailchimp and Mailerlite Won't Work for Outbound",
    excerpt:
      "Newsletter platforms like Mailchimp are built for opt-in subscribers, not cold outreach. Using them for cold email will get your account banned and your domain flagged. Here's what actually works for outbound.",
    description:
      "Understand why newsletter tools like Mailchimp, Mailerlite, and ConvertKit fail for cold email outreach. Learn the differences between opt-in email marketing and cold outbound, and why purpose-built cold email platforms with BYO SES deliver better results.",
    keywords:
      "cold email vs newsletter, Mailchimp cold email, can I send cold email with Mailchimp, cold email vs email marketing, newsletter tool for cold outreach, Mailerlite cold email, cold email platform vs ESP, outbound email tool, cold email compliance, best tool for cold outreach, dedicated cold email software",
    date: "2026-03-15",
    readTime: "9 min read",
    author: "LeadSnipper Team",
    category: "Strategy",
    cluster: "infrastructure",
    clusterRole: "spoke",
    relatedSlugs: [
      "how-to-send-cold-emails-at-scale-without-getting-blacklisted",
      "how-to-set-up-aws-ses-for-cold-email-step-by-step",
      "byo-aws-ses-vs-shared-email-infrastructure-cold-outreach",
    ],
  },
  {
    slug: "how-to-set-up-aws-ses-for-cold-email-step-by-step",
    title:
      "How to Set Up AWS SES for Cold Email: A Step-by-Step Guide (2026)",
    excerpt:
      "AWS SES costs $0.10 per 1,000 emails and gives you full control over your sending reputation. This step-by-step guide walks you through setting up SES for cold outreach — from account creation to production sending.",
    description:
      "Step-by-step guide to setting up Amazon AWS SES for cold email. Covers SES account creation, sandbox exit, domain verification, DKIM and SPF setup, dedicated IP configuration, sending limits, and connecting SES to LeadSnipper for cold outreach campaigns.",
    keywords:
      "AWS SES setup guide, Amazon SES cold email, set up SES for cold outreach, AWS SES tutorial 2026, SES domain verification, SES DKIM setup, SES sandbox exit, AWS SES sending limits, SES dedicated IP, connect AWS SES to cold email tool, SES cold email configuration, Amazon email service setup",
    date: "2026-03-08",
    readTime: "13 min read",
    author: "LeadSnipper Team",
    category: "Tutorial",
    cluster: "infrastructure",
    clusterRole: "spoke",
    relatedSlugs: [
      "how-to-send-cold-emails-at-scale-without-getting-blacklisted",
      "byo-aws-ses-vs-shared-email-infrastructure-cold-outreach",
      "cold-email-vs-newsletter-tools-why-mailchimp-wont-work",
    ],
  },
  {
    slug: "email-list-cleaning-why-verification-prevents-bounce-disasters",
    title:
      "Email List Cleaning: Why Verification Prevents Bounce Disasters (Real Story Inside)",
    excerpt:
      "An agency uploaded 10,000 unverified leads and hit send. Bounce rate hit 15% in the first hour. The domain was blacklisted within 24 hours. Here's why email list cleaning isn't optional — and how to do it right.",
    description:
      "Learn why email list cleaning and verification is critical for cold email campaigns. Real-world bounce disaster story, email verification best practices, how to remove invalid addresses, spam traps, and catch-all domains, and why built-in verification with Reoon prevents domain damage.",
    keywords:
      "email list cleaning, email verification, email bounce disaster, clean email list, remove invalid emails, spam trap detection, catch-all email addresses, email list hygiene, Reoon email verification, email bounce rate, email list validation, cold email list cleaning, bulk email verification, prevent email blacklist",
    date: "2026-02-28",
    readTime: "10 min read",
    author: "LeadSnipper Team",
    category: "Deliverability",
    cluster: "deliverability",
    clusterRole: "spoke",
    relatedSlugs: [
      "domain-reputation-management-protect-sender-score",
      "email-warmup-verification-domain-health-complete-guide",
      "cold-email-open-rate-dropping-fix-domain-reputation",
    ],
  },
  {
    slug: "how-to-avoid-spam-folder-cold-email",
    title: "How to Avoid the Spam Folder in Cold Email (2026 Guide)",
    excerpt:
      "Landing in spam kills campaigns before they start. Here are the 7 proven steps to keep cold emails in the inbox — from DNS setup to list verification to sending pace.",
    description:
      "Learn how to avoid the spam folder in cold email. Covers SPF DKIM DMARC, domain warmup, list verification, sending pace, content triggers, and deliverability monitoring — with actionable fixes.",
    keywords:
      "how to avoid spam folder cold email, cold email spam folder fix, avoid spam cold outreach, cold email deliverability tips, inbox placement cold email, prevent spam folder cold email",
    date: "2026-06-01",
    readTime: "10 min read",
    author: "LeadSnipper Team",
    category: "Deliverability",
    cluster: "deliverability",
    clusterRole: "spoke",
    relatedSlugs: [
      "why-cold-emails-land-in-spam-fix-today",
      "spf-dkim-dmarc-cold-email-guide",
      "cold-email-deliverability-checklist",
    ],
  },
  {
    slug: "spf-dkim-dmarc-cold-email-guide",
    title: "SPF vs DKIM vs DMARC Explained for Cold Email Senders",
    excerpt:
      "SPF, DKIM, and DMARC are the three DNS records that decide whether your cold emails reach the inbox. Here's what each one does and how to set them up correctly.",
    description:
      "SPF vs DKIM vs DMARC explained for cold email. Learn what each DNS record does, how to configure them for AWS SES, and why missing authentication sends your emails straight to spam.",
    keywords:
      "SPF DKIM DMARC explained, SPF vs DKIM vs DMARC, cold email DNS setup, email authentication records, DMARC policy cold email, DKIM setup AWS SES, SPF record cold email",
    date: "2026-06-02",
    readTime: "9 min read",
    author: "LeadSnipper Team",
    category: "Deliverability",
    cluster: "deliverability",
    clusterRole: "spoke",
    relatedSlugs: [
      "how-to-avoid-spam-folder-cold-email",
      "how-to-set-up-aws-ses-for-cold-email-step-by-step",
      "cold-email-deliverability-checklist",
    ],
  },
  {
    slug: "amazon-ses-cold-email-setup-2026",
    title: "How to Set Up Amazon SES for Cold Email in 2026 (Updated Guide)",
    excerpt:
      "AWS SES costs $0.10 per 1,000 emails and gives you full sending control. This updated 2026 guide walks through SES setup for cold outreach — sandbox exit, DNS, and LeadSnipper connection.",
    description:
      "How to setup Amazon SES for cold email in 2026. Step-by-step guide covering account creation, sandbox exit, domain verification, DKIM SPF DMARC, sending limits, and connecting SES to LeadSnipper.",
    keywords:
      "Amazon SES cold email setup 2026, how to setup AWS SES for cold email, SES cold email configuration, AWS SES tutorial cold outreach, connect SES to cold email tool",
    date: "2026-06-03",
    readTime: "12 min read",
    author: "LeadSnipper Team",
    category: "Tutorial",
    cluster: "infrastructure",
    clusterRole: "spoke",
    relatedSlugs: [
      "how-to-set-up-aws-ses-for-cold-email-step-by-step",
      "byo-aws-ses-vs-shared-email-infrastructure-cold-outreach",
    ],
  },
  {
    slug: "cold-email-deliverability-checklist",
    title: "Cold Email Deliverability Checklist: 15 Steps Before You Hit Send",
    excerpt:
      "Use this deliverability checklist before every cold email campaign. 15 steps covering DNS, list quality, warmup, sending pace, and monitoring — skip any one and risk the spam folder.",
    description:
      "Cold email deliverability checklist with 15 steps before sending. Covers DNS authentication, list verification, domain warmup, sending limits, content review, and post-send monitoring.",
    keywords:
      "cold email deliverability checklist, email deliverability checklist, pre-send email checklist, cold email launch checklist, inbox placement checklist, email sending checklist",
    date: "2026-06-04",
    readTime: "8 min read",
    author: "LeadSnipper Team",
    category: "Deliverability",
    cluster: "deliverability",
    clusterRole: "spoke",
    relatedSlugs: [
      "how-to-avoid-spam-folder-cold-email",
      "email-warmup-verification-domain-health-complete-guide",
      "domain-reputation-management-protect-sender-score",
    ],
  },
  {
    slug: "how-many-emails-per-day-cold-outreach",
    title: "How Many Emails Can I Send Per Day? Cold Outreach Volume Guide",
    excerpt:
      "The answer depends on your domain age, warmup status, and reputation. Here's a practical guide to daily send limits for cold email — from new domains to scaled outbound.",
    description:
      "How many emails can I send per day for cold outreach? Practical daily send limits by domain age, warmup stage, and reputation. Includes scaling timeline and multi-domain strategies.",
    keywords:
      "how many emails per day cold email, cold email daily send limit, email sending volume guide, cold outreach volume limits, how many cold emails per day, email send rate cold outreach",
    date: "2026-06-05",
    readTime: "7 min read",
    author: "LeadSnipper Team",
    category: "Deliverability",
    cluster: "deliverability",
    clusterRole: "spoke",
    relatedSlugs: [
      "how-to-send-cold-emails-at-scale-without-getting-blacklisted",
      "email-warmup-verification-domain-health-complete-guide",
      "cold-email-deliverability-checklist",
    ],
  },
  {
    slug: "cold-email-for-saas-companies",
    title: "Cold Email for SaaS Companies: Strategy, Sequences & Deliverability",
    excerpt:
      "SaaS outbound is different — long cycles, multiple ICPs, and one domain mistake can kill all company email. Here's how SaaS teams run cold email safely and effectively.",
    description:
      "Cold email for SaaS companies — strategy, sample sequences, deliverability tips, and infrastructure setup. Learn how B2B SaaS teams book demos through outbound without burning domains.",
    keywords:
      "cold email for SaaS, SaaS cold outreach, B2B SaaS outbound email, cold email SaaS companies, SaaS lead generation email, SaaS outbound strategy 2026",
    date: "2026-06-06",
    readTime: "11 min read",
    author: "LeadSnipper Team",
    category: "Strategy",
    cluster: "infrastructure",
    clusterRole: "hub",
    relatedSlugs: [
      "outbound-stack-20-meetings-per-month",
      "how-to-send-cold-emails-at-scale-without-getting-blacklisted",
      "best-cold-email-software-2026-comparison",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/**
 * Get related posts for a given blog post, based on its relatedSlugs.
 * Returns full BlogPost objects in the order specified by relatedSlugs.
 */
export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined);
}

/**
 * Get the hub/pillar page for a given cluster.
 */
export function getClusterHub(cluster: BlogCluster): BlogPost | undefined {
  return blogPosts.find(
    (p) => p.cluster === cluster && p.clusterRole === "hub"
  );
}

/**
 * Get all posts in a given cluster (hub + spokes + bridges).
 */
export function getClusterPosts(cluster: BlogCluster): BlogPost[] {
  return blogPosts.filter((p) => p.cluster === cluster);
}

/**
 * Cluster display metadata for the blog index and navigation.
 */
export const clusterMeta: Record<
  BlogCluster,
  { label: string; icon: string; description: string }
> = {
  infrastructure: {
    label: "Infrastructure & Scale",
    icon: "🔧",
    description:
      "The mechanics of cold email sending — from DNS and AWS SES setup to scaling without blacklists.",
  },
  deliverability: {
    label: "Deliverability & Domain Health",
    icon: "📬",
    description:
      "Maintaining inbox placement — domain reputation, warmup, verification, and troubleshooting.",
  },
};

export function generateBlogPostSchema(post: BlogPost) {
  const hub = getClusterHub(post.cluster);
  const relatedPosts = getRelatedPosts(post);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "LeadSnipper",
      url: "https://leadsnipper.com",
    },
    publisher: {
      "@type": "Organization",
      name: "LeadSnipper",
      url: "https://leadsnipper.com",
      logo: {
        "@type": "ImageObject",
        url: "https://leadsnipper.com/logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://leadsnipper.com/blog/${post.slug}`,
    },
    url: `https://leadsnipper.com/blog/${post.slug}`,
    keywords: post.keywords,
    image: {
      "@type": "ImageObject",
      url: "https://leadsnipper.com/og-image.png",
      width: 1200,
      height: 630,
    },
    wordCount: post.readTime.includes("15")
      ? 3200
      : post.readTime.includes("12")
        ? 2600
        : 2200,
    // Cluster relationship: spoke pages reference their hub as "isPartOf"
    ...(post.clusterRole === "spoke" && hub
      ? {
          isPartOf: {
            "@type": "WebPage",
            "@id": `https://leadsnipper.com/blog/${hub.slug}`,
            name: hub.title,
          },
        }
      : {}),
    // Related links for all posts
    ...(relatedPosts.length > 0
      ? {
          relatedLink: relatedPosts.map(
            (rp) => `https://leadsnipper.com/blog/${rp.slug}`
          ),
        }
      : {}),
  };
}
