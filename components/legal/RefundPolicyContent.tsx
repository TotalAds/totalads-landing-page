import Link from "next/link";

import { LEGAL_CONTACT, LEGAL_URLS } from "@/lib/legal";

export default function RefundPolicyContent() {
  return (
    <>
      <p>
        This Refund Policy applies to subscriptions and purchases for{" "}
        <strong>LeadSnipper</strong>, <strong>SocialSnipper</strong>, and
        related credits processed through our payment provider (Razorpay). It
        supplements our{" "}
        <Link href={LEGAL_URLS.terms}>Terms of Service</Link>.
      </p>

      <h2>1. Free trials</h2>
      <p>
        Free or trial plans are not charged. If you upgrade from a trial, the
        refund windows below apply from your first paid charge.
      </p>

      <h2>2. SaaS subscriptions (LeadSnipper &amp; SocialSnipper)</h2>
      <ul>
        <li>
          <strong>First paid charge:</strong> You may request a refund within{" "}
          <strong>7 days</strong> of your first successful subscription payment
          if you have not materially used paid features (e.g. sent campaigns,
          consumed paid credits beyond trial allowance, or published paid
          SocialSnipper posts). We review usage in good faith.
        </li>
        <li>
          <strong>After 7 days:</strong> Subscription fees are generally
          non-refundable for the current billing period. You may cancel to avoid
          future renewals; access continues until the period ends.
        </li>
        <li>
          <strong>Annual plans:</strong> If offered, a <strong>14-day</strong>{" "}
          refund window applies from the annual purchase date, subject to the
          same usage limits above.
        </li>
        <li>
          Partial-month refunds are not provided after a renewal charge has
          processed.
        </li>
      </ul>

      <h2>3. Usage-based credits and add-ons</h2>
      <ul>
        <li>
          Purchased email send credits and similar metered packs are{" "}
          <strong>non-refundable</strong> once used or once a send has been
          initiated.
        </li>
        <li>
          LeadSnipper does not resell email verification. Customers connect
          their own Reoon account, so verification usage is billed and
          refunded directly by Reoon under their own terms.
        </li>
        <li>
          Unused promotional credits may expire as stated in the offer.
        </li>
        <li>
          If a platform error caused failed sends, we may credit your account
          at our discretion after investigation.
        </li>
      </ul>

      <h2>4. Payment processing</h2>
      <p>
        Charges appear from Razorpay or our merchant descriptor. Refunds, when
        approved, are returned to the original payment method. Processing times
        depend on your bank or card issuer (typically 5–10 business days).
      </p>

      <h2>5. Duplicate or erroneous charges</h2>
      <p>
        If you believe you were charged in error, contact{" "}
        <a href={`mailto:${LEGAL_CONTACT.billing}`}>{LEGAL_CONTACT.billing}</a>{" "}
        within <strong>7 days</strong> with your account email, invoice or
        payment ID, date, and amount. We will investigate and respond within 2
        business days.
      </p>

      <h2>6. Service retainers and custom work</h2>
      <p>
        Managed services, consulting, or custom implementation retainers are
        reviewed case by case. First-month retainers may be refundable if no
        deliverable work has started. After work begins, fees are non-refundable
        but you may cancel future months with 30 days written notice where
        agreed in your statement of work.
      </p>

      <h2>7. Chargebacks</h2>
      <p>
        Please contact us before initiating a chargeback so we can resolve the
        issue. Accounts with abusive chargebacks may be suspended.
      </p>

      <h2>8. EU/UK and other consumer rights</h2>
      <p>
        Nothing in this policy limits mandatory withdrawal or refund rights under
        applicable consumer protection laws in your jurisdiction.
      </p>

      <h2>9. How to request a refund</h2>
      <p>Email{" "}
        <a href={`mailto:${LEGAL_CONTACT.billing}`}>{LEGAL_CONTACT.billing}</a>{" "}
        from your account email with:
      </p>
      <ul>
        <li>Full name and registered email</li>
        <li>Product (LeadSnipper or SocialSnipper)</li>
        <li>Invoice or Razorpay payment ID</li>
        <li>Reason for the request</li>
      </ul>
      <p>Most requests are resolved within 5–7 business days.</p>

      <h2>10. Contact</h2>
      <p>
        Billing questions:{" "}
        <a href={`mailto:${LEGAL_CONTACT.billing}`}>{LEGAL_CONTACT.billing}</a>.
        General support:{" "}
        <a href={`mailto:${LEGAL_CONTACT.hello}`}>{LEGAL_CONTACT.hello}</a>.
      </p>
    </>
  );
}
