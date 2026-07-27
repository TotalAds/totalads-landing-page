import { Calculator } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BlogCalculatorCTA() {
  return (
    <div className="my-8 p-6 rounded-xl border-2 border-[#0058be]/20 bg-gradient-to-br from-[#0058be]/[0.05] to-[#10b981]/[0.03]">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-lg bg-[#0058be] flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-bold text-[17px] text-[#131b2e] mb-2">
            Calculate your exact SES costs
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed mb-3">
            See how much you&apos;ll actually pay with AWS SES vs shared infrastructure tools like Instantly and Smartlead — based on your monthly volume.
          </p>
          <Link
            href="/savings-calculator"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-[#0058be] hover:text-[#2170e4] transition-colors"
          >
            Try our free AWS SES Cost Calculator →
          </Link>
        </div>
      </div>
    </div>
  );
}
