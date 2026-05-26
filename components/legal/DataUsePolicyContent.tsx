import Link from "next/link";

import { LEGAL_CONTACT, LEGAL_ENTITY, LEGAL_URLS } from "@/lib/legal";

export default function DataUsePolicyContent() {
  return (
    <>
      <p>
        This Data Use Policy describes how {LEGAL_ENTITY.name} processes data
        you and your contacts provide when using <strong>LeadSnipper</strong>,{" "}
        <strong>SocialSnipper</strong>, and related payment flows. It works
        together with our{" "}
        <Link href={LEGAL_URLS.privacy}>Privacy Policy</Link> and{" "}
        <Link href={LEGAL_URLS.terms}>Terms of Service</Link>.
      </p>

      <h2>1. Roles: controller vs processor</h2>
      <ul>
        <li>
          For your <strong>account and billing data</strong>, we act as the data
          controller.
        </li>
        <li>
          For <strong>lead lists, campaign recipients, and LinkedIn content</strong>{" "}
          you upload or approve, you are the controller and we act as a processor
          on your instructions.
        </li>
      </ul>

      <h2>2. Contact and lead data (LeadSnipper)</h2>
      <ul>
        <li>
          You may import contacts via CSV, API, or integrations. You represent
          that you have a lawful basis to process each contact.
        </li>
        <li>
          We store leads in our secure database, run format and duplicate checks,
          and optionally verify emails via Reoon or similar services you enable.
        </li>
        <li>
          Unverified leads are not treated as send-ready until you complete
          verification steps in the product.
        </li>
        <li>
          You may export or delete lists from your account. Account deletion
          requests are handled per our Privacy Policy.
        </li>
      </ul>

      <h2>3. Email sending and AWS SES</h2>
      <ul>
        <li>
          Campaign content and recipient addresses are transmitted to AWS SES (or
          your connected BYO-SES account) solely to deliver mail you authorize.
        </li>
        <li>
          Delivery events (sent, bounce, complaint, open/click where enabled)
          are stored for analytics, compliance, and deliverability protection.
        </li>
        <li>
          We do not sell recipient data to third parties.
        </li>
      </ul>

      <h2>4. LinkedIn data (SocialSnipper)</h2>
      <ul>
        <li>
          SocialSnipper is built on LinkedIn&apos;s official APIs. We do not
          scrape LinkedIn profiles or messages.
        </li>
        <li>
          Data accessed may include your profile identifier, organization pages
          you manage, draft and scheduled posts, media you upload, and
          performance metrics for content you publish through the Service.
        </li>
        <li>
          We do not store LinkedIn passwords. OAuth tokens are stored securely and
          can be revoked by you via LinkedIn or by disconnecting in settings.
        </li>
        <li>
          LinkedIn data is used only to: (a) generate and schedule content you
          approve; (b) publish on your behalf; (c) show analytics; and (d) operate
          approval channels you connect (e.g. Telegram or WhatsApp).
        </li>
      </ul>

      <h2>5. Public web and enrichment data</h2>
      <p>
        Where features process publicly available business information from URLs
        you submit, we respect robots.txt and site terms. We do not bypass
        paywalls, authentication, or technical access controls. You are responsible
        for lawful use of enriched data in your jurisdiction.
      </p>

      <h2>6. Analytics and product telemetry</h2>
      <p>
        We collect usage events (feature adoption, errors, performance) to
        improve the Service. Marketing site analytics are privacy-oriented where
        possible. We do not use your lead lists for unrelated advertising.
      </p>

      <h2>7. Payment data</h2>
      <p>
        Subscription and checkout data are processed by Razorpay. We receive
        transaction IDs, amounts, and status — not full card numbers. See
        Razorpay&apos;s privacy notice for their processing practices.
      </p>

      <h2>8. Retention</h2>
      <ul>
        <li>Active account data: retained while your account is open.</li>
        <li>
          Campaign and lead data: retained per your settings and plan; deleted or
          anonymized after account closure except where law requires retention.
        </li>
        <li>
          Security logs: typically retained for a limited period (e.g. 90–180
          days) unless needed for an investigation.
        </li>
      </ul>

      <h2>9. Deletion and portability</h2>
      <p>
        Submit deletion or export requests to{" "}
        <a href={`mailto:${LEGAL_CONTACT.privacy}`}>{LEGAL_CONTACT.privacy}</a>.
        We will verify your identity and respond within applicable legal
        timeframes. Takedown requests for specific content:{" "}
        <a href={`mailto:${LEGAL_CONTACT.support}`}>{LEGAL_CONTACT.support}</a>.
      </p>

      <h2>10. GDPR, UK GDPR, and India DPDP</h2>
      <p>
        We support data subject rights and processor obligations under GDPR/UK
        GDPR where applicable, and align with India&apos;s Digital Personal Data
        Protection Act (DPDP) for Indian users. Data Processing Agreements (DPAs)
        are available on request for business customers at{" "}
        <a href={`mailto:${LEGAL_CONTACT.privacy}`}>{LEGAL_CONTACT.privacy}</a>.
      </p>

      <h2>11. Sub-processors</h2>
      <p>
        Key sub-processors include AWS (hosting and email), Razorpay (payments),
        Reoon (verification when enabled), LinkedIn (SocialSnipper publishing),
        and notification providers you connect. An up-to-date list is available on
        request.
      </p>

      <h2>12. Contact</h2>
      <p>
        Data use questions:{" "}
        <a href={`mailto:${LEGAL_CONTACT.privacy}`}>{LEGAL_CONTACT.privacy}</a>.
      </p>
    </>
  );
}
