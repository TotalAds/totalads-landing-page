import { cn } from "@/lib/utils";
import {
  IconBrain,
  IconChartBar,
  IconCloud,
  IconCode,
  IconFlame,
  IconMail,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "BYO AWS SES or Managed",
      description:
        "Stop renting infrastructure you don't control. Bring your own SES for full ownership — or choose managed mode and start in minutes.",
      icon: <IconCloud />,
    },
    {
      title: "AI Email Writer",
      description:
        "Write cold emails in minutes, not hours. AI drafts using your tone — so campaigns sound human, not like a marketing bot.",
      icon: <IconBrain />,
    },
    {
      title: "AI-Powered Warmup",
      description:
        "Stop new domains from hitting spam. AI generates real conversations across Gmail, Outlook, Yahoo, and SES — building trust automatically.",
      icon: <IconFlame />,
    },
    {
      title: "Built-In Email Verification",
      description:
        "Never upload 10k leads and watch half bounce. Reoon verification removes bad addresses before they touch your sender reputation.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Domain Health Dashboard",
      description:
        "Stop checking MXToolbox, Postmaster, and your sending tool every morning. One screen tells you if your domain is healthy.",
      icon: <IconMail />,
    },
    {
      title: "Multi-Day Smart Sending",
      description:
        "\"Send 50k emails\" doesn't mean send them all today. The system paces across days — protecting you from reputation-killing spikes.",
      icon: <IconUsers />,
    },
    {
      title: "Analytics & PDF Reports",
      description:
        "Prove campaign results to clients and leadership with real data. Opens, clicks, bounces — per campaign, exportable as PDF. No more screenshots.",
      icon: <IconChartBar />,
    },
    {
      title: "API-First Architecture",
      description:
        "Build custom workflows, connect your CRM, or power your entire outbound stack through our REST API and webhooks.",
      icon: <IconCode />,
    },
  ];

  return (
    <section
      id="features"
      className="py-16 bg-gradient-to-b from-[#f0f0f0] to-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Everything You Need. Nothing You Don&apos;t.
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            Domains, verification, warmup, AI writing, campaigns, analytics —
            one platform, not 4 tools duct-taped together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-[#e2e8f0]",
        (index === 0 || index === 4) && "lg:border-l border-[#e2e8f0]",
        index < 4 && "lg:border-b border-[#e2e8f0]"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#eff6ff] to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#eff6ff] to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#3b82f6]">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#e2e8f0] group-hover/feature:bg-[#3b82f6] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#1e293b]">
          {title}
        </span>
      </div>
      <p className="text-sm text-[#475569] max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
