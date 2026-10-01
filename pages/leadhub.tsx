import React from "react";

import LeadHubDetails from "@/components/leadhub/LeadHubDetails";
import LeadHubNav from "@/components/leadhub/LeadHubNav";
import LeadHubStory from "@/components/leadhub/LeadHubStory";
import SEO from "@/components/SEO";
import { leadhubFaqs } from "@/lib/leadhubFaqs";
import { generateFaqPageSchema } from "@/lib/faqs";

export default function LeadHubPage() {
  return (
    <>
      <SEO
        pageKey="leadhub"
        skipTitleTemplate
        additionalStructuredData={[generateFaqPageSchema(leadhubFaqs)]}
      />
      <LeadHubNav />
      <main>
        <LeadHubStory />
        <LeadHubDetails />
      </main>
    </>
  );
}
