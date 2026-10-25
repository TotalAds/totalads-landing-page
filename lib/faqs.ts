export interface FAQItem {
  question: string;
  answer: string;
}

export const homepageFaqs: FAQItem[] = [
  {
    question: "Can I use the inboxes I already have?",
    answer:
      "Yes. LeadSnipper supports Google Workspace, Microsoft 365/Outlook, Zoho, and custom SMTP/IMAP sending accounts.",
  },
  {
    question: "Does LeadSnipper guarantee inbox placement?",
    answer:
      "No. Inbox placement depends on many factors, including sender configuration, list quality, email content, sending practices, and receiving-provider decisions. LeadSnipper provides verification, sending controls, monitoring, and safeguards to help you manage your outbound process.",
  },
  {
    question: "How does LeadSnipper help protect sender reputation?",
    answer:
      "It offers email verification, sender health checks, mailbox-level sending controls, pacing, bounce and complaint monitoring, and automatic campaign pauses when risk thresholds are reached. A paused campaign stays paused until you acknowledge it.",
  },
  {
    question: "Does LeadSnipper include automatic email warm-up?",
    answer:
      "LeadSnipper does not use artificial warm-up pools. It focuses on sender health checks, verification, controlled sending, monitoring, and campaign safeguards.",
  },
  {
    question: "Does LeadSnipper find leads for me?",
    answer:
      "No. LeadSnipper focuses on managing and executing outbound campaigns. You bring your own leads.",
  },
  {
    question: "Can I share campaign reports with clients?",
    answer:
      "Campaign analytics are available, and PDF campaign exports are included on eligible plans. Check your selected plan's feature list before subscribing.",
  },
  {
    question: "Can you help us set up our outbound system?",
    answer:
      "Yes. LeadSnipper also offers outbound setup and campaign management services. Contact us to discuss the scope of support you need.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. LeadSnipper offers a 14-day trial with 1,000 emails, 2 sending mailboxes, and 1 custom domain. The trial does not include the developer API, Google Sheets sync, PDF export, or webhooks. Check the current trial terms before starting.",
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
