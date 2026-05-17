import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function LeadGenService() {
  return (
    <ServicePageLayout
      seo={{
        title: "Lead Generation & Sales Automation — LeadSnipper | 20-40 Qualified Meetings/Month",
        description: "Full outbound pipeline — ICP research, prospect enrichment, personalised sequences across email and LinkedIn. We book the meetings, you close the deals.",
        canonical: "https://leadsnipper.com/services/lead-generation",
      }}
      badge="Lead Generation"
      headline="We book the meetings."
      headlineAccent="You close the deals."
      subtitle="Full outbound pipeline — ICP research, prospect enrichment, personalised sequences across email and LinkedIn. Stop prospecting. Start selling."
      problem={{
        heading: "Your reps spend 70% of their time",
        headingAccent: "finding people to talk to.",
        body: [
          "You hired closers. But they spend most of their day building lists, writing sequences, and chasing dead leads through LinkedIn.",
          "The pipeline is inconsistent. Some weeks are great. Others are empty. And the 'lead gen tools' you've tried either send garbage or cost a fortune.",
          "What if you could hand your calendar to a team that fills it with qualified prospects — every week, without fail?",
        ],
      }}
      features={[
        { icon: "🎯", title: "ICP Research & List Building", desc: "We define your ideal customer profile, build targeted lists, and enrich every contact with verified data before any outreach begins." },
        { icon: "📧", title: "Multi-Channel Sequences", desc: "Coordinated email + LinkedIn sequences with personalized messaging. Not templates — genuine, relevant outreach." },
        { icon: "📅", title: "Meeting Booking", desc: "We handle the entire conversation from first touch to calendar invite. You show up to calls with qualified prospects." },
        { icon: "🔄", title: "CRM Integration", desc: "Every interaction logged automatically. Pipeline stages, notes, and follow-ups synced to your CRM in real-time." },
        { icon: "📊", title: "Weekly Pipeline Reports", desc: "Transparent reporting on outreach volume, response rates, meetings booked, and pipeline value." },
        { icon: "🧠", title: "AI Lead Scoring", desc: "Machine learning identifies which prospects are most likely to convert. Hot leads get fast-tracked." },
      ]}
      process={[
        { step: "01", title: "ICP Workshop", desc: "90-minute deep-dive into your ideal customer, offer positioning, and competitive landscape." },
        { step: "02", title: "Infrastructure Setup", desc: "Domain warming, inbox rotation, and sequence building. Takes 2-3 weeks." },
        { step: "03", title: "Campaigns Launch", desc: "Targeted outreach begins across email and LinkedIn with daily monitoring." },
        { step: "04", title: "Qualify & Book", desc: "Warm responses are qualified and meetings are booked directly on your calendar." },
      ]}
      results={[
        "↑ 20–40 qualified meetings per month",
        "↓ 70% reduction in prospecting time",
        "↑ 15-25% average response rate",
        "↓ Zero manual list building for your reps",
        "↑ Consistent weekly pipeline generation",
        "↑ Multi-channel touchpoints per prospect",
      ]}
      faqs={[
        { q: "What industries do you work with?", a: "We specialize in B2B SaaS, professional services, and tech companies. If you sell to businesses with a deal size above $5K, we can likely help." },
        { q: "How quickly will we see meetings?", a: "Infrastructure setup takes 2-3 weeks. First qualified meetings typically arrive in weeks 3-4. Full pipeline velocity by month 2." },
        { q: "Do you guarantee a specific number of meetings?", a: "We commit to activity volumes and process quality. Most clients see 20-40 qualified meetings per month once ramped. We share transparent metrics weekly." },
        { q: "Will outreach damage our domain reputation?", a: "Absolutely not. We use proper domain warming, inbox rotation, and volume controls. We built LeadSnipper — deliverability is our core competency." },
      ]}
    />
  );
}
