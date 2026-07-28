/**
 * Competitor and LeadSnipper pricing data for the savings calculator.
 *
 * Single source of truth so the interactive calculator, the static comparison
 * table, and the email-breakdown API all use identical numbers.
 *
 * Competitor prices are publicly listed as of July 2026 and rounded to the
 * nearest dollar. LeadSnipper plans mirror `lib/currency.ts` PLANS.
 */

import { PLANS, type PlanName } from "./currency";

/* ── Competitor types ─────────────────────────────────────────────── */

export type CompetitorSlug =
  | "ses-direct"
  | "smartlead"
  | "instantly"
  | "lemlist"
  | "mailshake"
  | "apollo";

export interface CompetitorMeta {
  slug: CompetitorSlug;
  label: string;
  /** Short note shown in the comparison table */
  note: string;
}

export interface CompetitorTier {
  name: string;
  monthlyUsd: number;
  monthlyEmails: number;
  /** Max contacts/recipients (Infinity = unlimited) */
  contacts: number;
}

export interface CompetitorProfile {
  meta: CompetitorMeta;
  tiers: CompetitorTier[];
}

/* ── Competitor profiles ──────────────────────────────────────────── */

export const competitors: Record<CompetitorSlug, CompetitorProfile> = {
  "ses-direct": {
    meta: {
      slug: "ses-direct",
      label: "AWS SES (direct)",
      note: "Raw SES cost only — no campaign UI, warmup, or verification",
    },
    tiers: [
      // SES has no tiers — flat $0.10/1K
      {
        name: "Pay-as-you-go",
        monthlyUsd: 0,
        monthlyEmails: Infinity,
        contacts: Infinity,
      },
    ],
  },

  instantly: {
    meta: {
      slug: "instantly",
      label: "Instantly",
      note: "Shared infrastructure, separate warmup network",
    },
    tiers: [
      { name: "Growth", monthlyUsd: 47, monthlyEmails: 5_000, contacts: 1_000 },
      { name: "Hypergrowth", monthlyUsd: 97, monthlyEmails: 100_000, contacts: 25_000 },
      { name: "Light Speed", monthlyUsd: 358, monthlyEmails: 500_000, contacts: 100_000 },
    ],
  },

  smartlead: {
    meta: {
      slug: "smartlead",
      label: "Smartlead",
      note: "Shared infrastructure, unlimited contacts on higher tiers",
    },
    tiers: [
      { name: "Base", monthlyUsd: 32, monthlyEmails: 6_000, contacts: 2_000 },
      { name: "Pro", monthlyUsd: 78, monthlyEmails: 90_000, contacts: 30_000 },
      { name: "Unlimited Smart", monthlyUsd: 144, monthlyEmails: 150_000, contacts: Infinity },
      { name: "Unlimited Prime", monthlyUsd: 315, monthlyEmails: 5_694_000, contacts: Infinity },
    ],
  },

  lemlist: {
    meta: {
      slug: "lemlist",
      label: "Lemlist",
      note: "Image personalization focus, shared sending",
    },
    tiers: [
      { name: "Email Starter", monthlyUsd: 39, monthlyEmails: 3_000, contacts: Infinity },
      { name: "Email Pro", monthlyUsd: 69, monthlyEmails: 7_500, contacts: Infinity },
      { name: "Multichannel Expert", monthlyUsd: 99, monthlyEmails: 15_000, contacts: Infinity },
      { name: "Outreach Scale", monthlyUsd: 159, monthlyEmails: 45_000, contacts: Infinity },
    ],
  },

  mailshake: {
    meta: {
      slug: "mailshake",
      label: "Mailshake",
      note: "Per-seat pricing, separate phone dialer",
    },
    tiers: [
      { name: "Email Outreach", monthlyUsd: 45, monthlyEmails: 1_500, contacts: 1_500 },
      { name: "Sales Engagement", monthlyUsd: 85, monthlyEmails: 2_500, contacts: 2_500 },
    ],
  },

  apollo: {
    meta: {
      slug: "apollo",
      label: "Apollo",
      note: "CRM + outreach combo, shared infrastructure",
    },
    tiers: [
      { name: "Free", monthlyUsd: 0, monthlyEmails: 250, contacts: Infinity },
      { name: "Basic", monthlyUsd: 49, monthlyEmails: 10_000, contacts: Infinity },
      { name: "Professional", monthlyUsd: 79, monthlyEmails: 30_000, contacts: Infinity },
      { name: "Organization", monthlyUsd: 119, monthlyEmails: 100_000, contacts: Infinity },
    ],
  },
};

export const COMPETITOR_OPTIONS: CompetitorMeta[] = Object.values(competitors).map(
  (c) => c.meta
);

/* ── SES cost constant ────────────────────────────────────────────── */

/** AWS SES cost per email in USD */
export const SES_COST_PER_EMAIL_USD = 0.0001; // $0.10 per 1,000

/* ── LeadSnipper managed plan tiers ───────────────────────────────── */

export interface LeadSnipperPlan {
  planName: PlanName;
  label: string;
  monthlyEmails: number;
  monthlyInr: number;
  monthlyUsd: number;
}

export const leadsnipperPlans: LeadSnipperPlan[] = [
  {
    planName: "starter",
    label: "Starter",
    monthlyEmails: 10_000,
    monthlyInr: PLANS.starter.inr,
    monthlyUsd: PLANS.starter.usd,
  },
  {
    planName: "growth",
    label: "Growth",
    monthlyEmails: 100_000,
    monthlyInr: PLANS.growth.inr,
    monthlyUsd: PLANS.growth.usd,
  },
  {
    planName: "scale",
    label: "Scale",
    monthlyEmails: 500_000,
    monthlyInr: PLANS.scale.inr,
    monthlyUsd: PLANS.scale.usd,
  },
];

/* ── Cost calculators ─────────────────────────────────────────────── */

/**
 * Pick the cheapest competitor tier that can handle the given monthly volume.
 * Falls back to the highest tier if volume exceeds all tiers.
 */
export function pickCompetitorTier(
  slug: CompetitorSlug,
  monthlyEmails: number
): CompetitorTier {
  const profile = competitors[slug];
  const match = profile.tiers.find((t) => t.monthlyEmails >= monthlyEmails);
  return match ?? profile.tiers[profile.tiers.length - 1];
}

/**
 * Total monthly USD cost for a competitor at the given volume.
 * For SES-direct, it's just the raw SES cost.
 */
export function getCompetitorMonthlyCostUsd(
  slug: CompetitorSlug,
  monthlyEmails: number
): { tier: CompetitorTier; monthlyCostUsd: number } {
  if (slug === "ses-direct") {
    const sesCost = monthlyEmails * SES_COST_PER_EMAIL_USD;
    return {
      tier: competitors["ses-direct"].tiers[0],
      monthlyCostUsd: sesCost,
    };
  }
  const tier = pickCompetitorTier(slug, monthlyEmails);
  return { tier, monthlyCostUsd: tier.monthlyUsd };
}

/**
 * Pick the LeadSnipper plan that fits the volume.
 * Returns null for custom/enterprise volumes.
 */
export function pickLeadSnipperPlan(
  monthlyEmails: number
): LeadSnipperPlan | null {
  return (
    leadsnipperPlans.find((p) => p.monthlyEmails >= monthlyEmails) ?? null
  );
}

/**
 * LeadSnipper total monthly cost (platform + SES).
 */
export function getLeadSnipperMonthlyCostUsd(monthlyEmails: number): {
  plan: LeadSnipperPlan | null;
  platformUsd: number;
  sesUsd: number;
  totalUsd: number;
} {
  const plan = pickLeadSnipperPlan(monthlyEmails);
  const platformUsd = plan?.monthlyUsd ?? 0;
  const sesUsd = monthlyEmails * SES_COST_PER_EMAIL_USD;
  return {
    plan,
    platformUsd,
    sesUsd,
    totalUsd: platformUsd + sesUsd,
  };
}

/* ── Static comparison table data ─────────────────────────────────── */

export const VOLUME_BENCHMARKS = [10_000, 50_000, 100_000, 500_000] as const;

export type VolumeBenchmark = (typeof VOLUME_BENCHMARKS)[number];

export interface StaticComparisonRow {
  volume: number;
  leadsnipper: number;
  instantly: number;
  smartlead: number;
  lemlist: number;
  mailshake: number;
  apollo: number;
  sesDirect: number;
}

export function generateStaticComparisonData(): StaticComparisonRow[] {
  return VOLUME_BENCHMARKS.map((vol) => ({
    volume: vol,
    leadsnipper: getLeadSnipperMonthlyCostUsd(vol).totalUsd,
    instantly: getCompetitorMonthlyCostUsd("instantly", vol).monthlyCostUsd,
    smartlead: getCompetitorMonthlyCostUsd("smartlead", vol).monthlyCostUsd,
    lemlist: getCompetitorMonthlyCostUsd("lemlist", vol).monthlyCostUsd,
    mailshake: getCompetitorMonthlyCostUsd("mailshake", vol).monthlyCostUsd,
    apollo: getCompetitorMonthlyCostUsd("apollo", vol).monthlyCostUsd,
    sesDirect: getCompetitorMonthlyCostUsd("ses-direct", vol).monthlyCostUsd,
  }));
}
