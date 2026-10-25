"use client";
import { motion } from "framer-motion";
import { Activity, Inbox, ListChecks, PieChart } from "lucide-react";
import React from "react";

const problems = [
  {
    icon: <ListChecks className="w-5 h-5" />,
    title: "Keep your lead lists cleaner",
    body: "Use email verification before launching campaigns to identify invalid and risky contacts.",
  },
  {
    icon: <Inbox className="w-5 h-5" />,
    title: "Stay in control of your mailboxes",
    body: "Configure sending limits and pacing at the mailbox level, rather than relying on one campaign-wide number.",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Catch sending problems earlier",
    body: "Monitor bounce and complaint signals, review sender health, and automatically pause campaigns when risk thresholds are reached.",
  },
  {
    icon: <PieChart className="w-5 h-5" />,
    title: "Make campaign performance easier to review",
    body: "Track campaign activity and engagement. Export PDF campaign reports on eligible plans to help review results with your team and clients.",
  },
];

export default function PainSection() {
  return (
    <section className="py-24 relative overflow-hidden section-blue border-t border-[#c2c6d6]/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="section-tag justify-center mb-6">The problem</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            More clients shouldn&apos;t mean more{" "}
            <span className="font-display italic text-[#0058be]">outbound chaos.</span>
          </h2>
          <p className="text-body-md text-[#424754] mt-5 leading-relaxed">
            One campaign is manageable. Running campaigns for 10 different clients across dozens of mailboxes is a different story.
          </p>
          <p className="text-body-md text-[#727785] mt-4 leading-relaxed">
            Lists need cleaning. Sending limits need monitoring. Campaigns need follow-ups. Clients want reports. And when bounce rates rise, you need to know before the problem gets worse.
          </p>
          <p className="text-body-md text-[#727785] mt-4 leading-relaxed">
            LeadSnipper brings key outbound workflows together so your team can spend less time managing disconnected tools and more time running campaigns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-[#c2c6d6]/20 p-6"
            >
              <span className="w-10 h-10 rounded-xl bg-[#0058be]/10 text-[#0058be] flex items-center justify-center">
                {item.icon}
              </span>
              <h3 className="font-heading font-bold text-[17px] text-[#131b2e] mt-4">
                {item.title}
              </h3>
              <p className="text-sm text-[#424754] leading-relaxed mt-2">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
