export interface FAQItem {
  question: string;
  answer: string;
}

export const homepageFaqs: FAQItem[] = [
  {
    question: "Why should I use LeadSnipper instead of Instantly?",
    answer:
      "Instantly is solid for getting started. But they own your sending infrastructure — when they have issues, your domains get hit. With LeadSnipper, you bring your own AWS SES. You own your reputation, your deliverability, your data. Plus, we have built-in Reoon email verification, AI-powered warmup, and a domain health dashboard that Instantly doesn't offer.",
  },
  {
    question: "I already use Smartlead. Why switch?",
    answer:
      "If Smartlead is working, great. But if the UI frustrates you, you want built-in verification instead of a separate tool, or you want to use your own SES instead of their infrastructure — that's exactly what we built. Teams that switch tell us the domain health dashboard alone was worth it.",
  },
  {
    question: "What is BYO SES? Do I need to know AWS?",
    answer:
      'BYO SES means "Bring Your Own" Amazon Simple Email Service. It gives you full control over your sending infrastructure and reputation. But if you don\'t know AWS or don\'t want to deal with it, choose our Managed mode — we handle everything for you. The BYO option is there when you\'re ready for full control.',
  },
  {
    question: "How does LeadSnipper handle deliverability?",
    answer:
      "Deliverability isn't a feature we bolt on — it's the architecture. Verified domains with proper DNS (DKIM, SPF), AI-powered warmup with daily pacing, automatic bounce suppression, complaint tracking, and built-in Reoon verification. Every layer is designed so your emails land in the inbox, not spam.",
  },
  {
    question: "How does the AI email writer work?",
    answer:
      "The AI writer generates campaign drafts using your knowledge base and tone — so it writes like you, not like a generic template. You get a strong first draft that sounds like a real person. Edit and send, saving hours per campaign. It doesn't write perfect cold email by itself (nobody's AI does), but it gets you 80% there fast.",
  },
  {
    question: "What does AI warmup actually do?",
    answer:
      "Our AI warmup engine generates realistic email conversations across Gmail, Outlook, Yahoo, Zoho, and SES. It creates natural threads with 5-8 exchanges, varied writing styles, and proper timing. Mailbox providers see real engagement on your account, which builds sender trust before you run cold campaigns at scale.",
  },
  {
    question: "Can I really send cold email on this?",
    answer:
      "That's literally what it's built for. We're not a newsletter tool pretending to do outbound. Cold email is the entire product — warmup, verification, domain health, sending, analytics. Every feature is designed for cold outbound at scale.",
  },
  {
    question: "The pricing seems low. What's the catch?",
    answer:
      "We're in early-bird pricing because we're growing. The product is production-ready — real teams are sending real campaigns on it today. We're pricing aggressively now because we want early users who give us feedback and stick around. Prices will go up. AWS SES costs $0.10 per 1,000 emails — the math works because we're not marking up infrastructure 100x.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Start free with no credit card. You get 1,000 emails, 500 contacts, basic analytics, and API access for 1 month. Enough to run a real campaign and see if LeadSnipper is the right fit for your outbound.",
  },
  {
    question: "Do you have integrations with my CRM?",
    answer:
      "We integrate with the tools outbound teams actually use — HubSpot, Salesforce, Zapier, Make, Clay, Zoho, and Google Sheets. We also have a full REST API for custom workflows. More integrations are shipping regularly.",
  },
];

export function generateFaqPageSchema(faqs: FAQItem[] = homepageFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
