import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "AI-Powered Extraction",
      description:
        "Automatically extract business data with advanced AI algorithms for accurate results.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Easy to Use",
      description:
        "Simple and intuitive interface designed for everyone, no technical skills required.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Affordable Pricing",
      description:
        "Transparent pricing with no hidden fees. Pay only for what you use.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "99.9% Uptime",
      description: "Enterprise-grade reliability with guaranteed uptime.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-Source Integration",
      description: "Combine data from LinkedIn, Crunchbase, and web scraping.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to help you succeed.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "Not satisfied? Get your money back, no questions asked.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And Much More",
      description: "Continuous updates and new features added regularly.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
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
        "flex flex-col lg:border-r  py-10 relative group/feature border-[#e0e0e0]",
        (index === 0 || index === 4) && "lg:border-l border-[#e0e0e0]",
        index < 4 && "lg:border-b border-[#e0e0e0]"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#f0f0f0] to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#f0f0f0] to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#eb857a]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#f0f0f0] group-hover/feature:bg-[#eb857a] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#131313]">
          {title}
        </span>
      </div>
      <p className="text-sm text-[#4a4a4a] max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

