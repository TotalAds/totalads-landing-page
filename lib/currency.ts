/**
 * Currency helpers for LeadSnipper pricing.
 *
 * Public pricing is INR (₹) billed via Razorpay, with USD display for non-India
 * visitors. Pricing values are explicitly defined here as the single source of
 * truth so they can be reused in every pricing surface (landing page, product
 * page, savings calculator, in-app pricing, comparison pages, JSON-LD).
 */

export type DisplayCurrency = "INR" | "USD";

export type PlanName = "starter" | "growth" | "scale";

export interface PlanPrice {
  inr: number;
  usd: number;
}

/**
 * Authoritative pricing matrix. Source of truth for every pricing surface.
 * - INR values are integer rupees (₹)
 * - USD values are integer dollars ($)
 * Trial is intentionally NOT listed here — the trial is hidden in-product only
 * and never appears on public landing surfaces.
 */
export const PLANS: Record<PlanName, PlanPrice> = {
  starter: { inr: 999, usd: 19 },
  growth: { inr: 2499, usd: 49 },
  scale: { inr: 5999, usd: 119 },
};

export function detectDisplayCurrency(): DisplayCurrency {
  if (typeof window === "undefined") return "INR";

  const languages = navigator.languages ?? [navigator.language];
  const isIndiaLanguage = languages.some((lang) =>
    lang.toUpperCase().endsWith("-IN")
  );
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  const isIndiaTimeZone = timeZone.includes("Asia/Kolkata");

  return isIndiaLanguage || isIndiaTimeZone ? "INR" : "USD";
}

export function formatInr(inr: number): string {
  return `₹${Math.max(0, Math.round(inr)).toLocaleString("en-IN")}`;
}

export function formatUsd(usd: number): string {
  return `$${Math.max(0, Number(usd.toFixed(2))).toLocaleString("en-US")}`;
}

/**
 * Approximate INR→USD conversion used only for non-PLANS amounts (service
 * tiers, add-ons) where we don't have an explicit dual-currency entry.
 *
 * Derived from PLANS: ₹999/$19 ≈ 52.6, ₹2499/$49 ≈ 51, ₹5999/$119 ≈ 50.4.
 * Round to 50 for stable display. PLANS values themselves are the source of
 * truth for product tier pricing — this rate is only for ad-hoc service lines.
 */
export const INR_PER_USD = 50;

/**
 * Inverse rate used for ad-hoc conversions (competitor USD prices etc.).
 * Numerically equal to INR_PER_USD (1 USD ≈ ₹50); the name is the inverse
 * direction so call sites read naturally:
 *   `usdToInr(47)` → 47 USD converted to INR
 *   "FX used: $1 = ₹{USD_TO_INR}" → display string
 */
export const USD_TO_INR = INR_PER_USD;

export function inrToUsd(inr: number): number {
  return Math.max(0, inr) / INR_PER_USD;
}

export function usdToInr(usd: number): number {
  return Math.max(0, usd) * USD_TO_INR;
}

/**
 * Format an arbitrary INR amount in the active display currency.
 *   formatAmount(30000, 'INR') => '₹30,000'
 *   formatAmount(30000, 'USD') => '$600'
 *
 * Use this for service tiers and add-ons. For product tiers use
 * `displayPlanPrice` so the explicit dual values from PLANS are honored.
 */
export function formatAmount(inr: number, currency: DisplayCurrency): string {
  return currency === "INR" ? formatInr(inr) : formatUsd(inrToUsd(inr));
}

/**
 * Format a plan's price for the given display currency.
 *   displayPlanPrice('starter', 'INR') => '₹999'
 *   displayPlanPrice('starter', 'USD') => '$19'
 *
 * Falls back to the starter price if the plan name is unknown so callers never
 * crash at render time.
 */
export function displayPlanPrice(
  plan: PlanName | string,
  currency: DisplayCurrency
): string {
  const price = (PLANS as Record<string, PlanPrice | undefined>)[plan];
  if (!price) {
    const fallback = PLANS.starter;
    return currency === "INR"
      ? formatInr(fallback.inr)
      : formatUsd(fallback.usd);
  }
  return currency === "INR" ? formatInr(price.inr) : formatUsd(price.usd);
}

/**
 * Short dual-currency label suitable for "starting from" copy.
 *   displayPlanPriceShort('starter', 'INR') => '₹999 / $19'
 *   displayPlanPriceShort('starter', 'USD') => '$19 / ₹999'
 */
export function displayPlanPriceShort(
  plan: PlanName | string,
  currency: DisplayCurrency
): string {
  const price =
    (PLANS as Record<string, PlanPrice | undefined>)[plan] ?? PLANS.starter;
  const primary =
    currency === "INR" ? formatInr(price.inr) : formatUsd(price.usd);
  const secondary =
    currency === "INR" ? formatUsd(price.usd) : formatInr(price.inr);
  return `${primary} / ${secondary}`;
}

/**
 * Bare-number formatter for plan price (no currency symbol). Useful when the
 * surrounding JSX controls the currency display.
 */
export function planPriceNumber(
  plan: PlanName | string,
  currency: DisplayCurrency
): number {
  const price =
    (PLANS as Record<string, PlanPrice | undefined>)[plan] ?? PLANS.starter;
  return currency === "INR" ? price.inr : price.usd;
}
