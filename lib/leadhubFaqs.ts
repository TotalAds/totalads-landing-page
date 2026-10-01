import type { FAQItem } from "./faqs";

export const leadhubFaqs: FAQItem[] = [
  {
    question: "How is this different from a lead database?",
    answer:
      "Databases return stored rows. LeadHub researches the company live, proves identity, and shows its evidence. If it cannot prove it, it says so.",
  },
  {
    question: "What if it can't find the right person?",
    answer:
      "You get Target not found and no charge. It will not substitute a CEO or recruiter to fill the card, unless your agent allows owner substitution and the org evidence supports it.",
  },
  {
    question: "Does it make things up?",
    answer:
      "No. Every claim comes from verified facts. Missing data stays empty with low confidence. Guards strip invented news, funding, or job titles.",
  },
  {
    question: "Do I need my own API keys?",
    answer:
      "Yes, during the beta. Connect your own LLM, Apify, and email-verification keys for the providers your mission needs. Pre-configured APIs and a more automated managed setup are coming soon.",
  },
  {
    question: "Does it send emails?",
    answer:
      "No. Use LeadSnipper to send. LeadHub writes the angle and opener.",
  },
  {
    question: "Does it work for Indian companies?",
    answer:
      "Yes. Keka job boards are checked first, and missions that mention India or its major cities prefer India-located people and hiring evidence.",
  },
  {
    question: "Is it live?",
    answer: "LeadHub is in beta. LeadSnipper is live.",
  },
  {
    question: "Can I see why it picked a person?",
    answer:
      "Yes. The Research trace shows the org reasoning, the evidence, and any rejected candidates.",
  },
];
