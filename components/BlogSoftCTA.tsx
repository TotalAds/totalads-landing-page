import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BlogSoftCTA() {
  return (
    <div className="my-8 p-6 rounded-xl border border-[#0058be]/15 bg-gradient-to-br from-[#0058be]/[0.02] to-[#10b981]/[0.01]">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-[#10b981]/10 flex items-center justify-center">
          <Zap className="w-5 h-5 text-[#10b981]" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-[#475569] leading-relaxed mb-3">
            <strong className="text-[#131b2e]">Skip the manual setup</strong> — LeadSnipper handles infrastructure, warmup, and verification so you can focus on outreach.
          </p>
          <Link
            href="/cold-email-software"
            className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-[#0058be] hover:text-[#2170e4] transition-colors"
          >
            See how LeadSnipper works →
          </Link>
        </div>
      </div>
    </div>
  );
}
