import Link from "next/link";

import { LEGAL_CONTACT, LEGAL_ENTITY, LEGAL_URLS } from "@/lib/legal";

export default function TermsOfServiceContent() {
  return (
    <>
      <p>
        These Terms of Service (“Terms”) govern access to and use of websites,
        applications, APIs, and services operated by {LEGAL_ENTITY.name},
        including <strong>LeadSnipper</strong> (email outreach) and{" "}
        <strong>SocialSnipper</strong> (LinkedIn content), and related billing
        (collectively, the “Service”). By creating an account, subscribing, or
        using the Service, you agree to these Terms, our{" "}
        <Link href={LEGAL_URLS.privacy}>Privacy Policy</Link>,{" "}
        <Link href={LEGAL_URLS.refund}>Refund Policy</Link>, and{" "}
        <Link href={LEGAL_URLS.dataUse}>Data Use Policy</Link>.
      </p>

      <h2>1. Eligibility and accounts</h2>
      <ul>
        <li>You must be at least 18 and able to form a binding contract.</li>
        <li>Provide accurate registration information and keep credentials secure.</li>
        <li>You are responsible for all activity under your account and API tokens.</li>
        <li>
          We may suspend or terminate accounts for breach, abuse, non-payment, or
          legal risk.
        </li>
      </ul>

      <h2>2. Products covered</h2>
      <p>
        <strong>LeadSnipper</strong> provides cold email infrastructure, lead
        management, verification, campaigns, analytics, and optional BYO AWS SES.{" "}
        <strong>SocialSnipper</strong> provides AI-assisted content, approval
        workflows, scheduling, and publishing via LinkedIn&apos;s official APIs.
        Features may vary by plan and region.
      </p>

      <h2>3. Acceptable use</h2>
      <p>You agree to use the Service only for lawful business purposes. You must not:</p>
      <ul>
        <li>Send spam, phishing, malware, or deceptive messages.</li>
        <li>
          Email recipients without proper permission or a valid legal basis;
          import scraped, purchased, or harvested lists without consent.
        </li>
        <li>Violate CAN-SPAM, GDPR, CASL, India&apos;s DPDP Act, or other applicable laws.</li>
        <li>Impersonate others or misrepresent sender identity.</li>
        <li>Reverse engineer, overload, or circumvent rate limits or security.</li>
        <li>Resell or sublicense platform access without written permission.</li>
        <li>Use the Service to harm minors or promote illegal activity.</li>
      </ul>

      <h2>4. LeadSnipper — email terms</h2>
      <ul>
        <li>
          You are solely responsible for list quality, consent, unsubscribe
          handling, and email content.
        </li>
        <li>
          You must send only from domains and addresses you are authorized to use
          and that pass our verification requirements.
        </li>
        <li>
          We may pause or limit sending to protect deliverability and reputation
          if bounce, complaint, or abuse thresholds are exceeded.
        </li>
        <li>
          Warmup, verification, and deliverability tools are provided “as is”; we
          do not guarantee inbox placement or specific open rates.
        </li>
        <li>
          BYO-SES users remain responsible for their AWS account compliance and
          costs.
        </li>
      </ul>

      <h2>5. SocialSnipper — LinkedIn terms addendum</h2>
      <ul>
        <li>
          You must comply with LinkedIn&apos;s User Agreement, Professional
          Community Policies, and API terms at all times.
        </li>
        <li>
          SocialSnipper uses official OAuth; we do not store LinkedIn passwords.
          You may revoke access from LinkedIn settings at any time.
        </li>
        <li>
          <strong>Prohibited:</strong> automated connection requests at scale,
          spam DMs, scraping LinkedIn, impersonation, or any use that violates
          LinkedIn policies. Violations are grounds for immediate termination.
        </li>
        <li>
          We access LinkedIn data only to schedule and publish content you
          approve, display analytics about your posts, and operate features you
          enable. We are not a LinkedIn outreach automation tool.
        </li>
        <li>
          LinkedIn may change API availability; we are not liable for outages or
          policy changes imposed by LinkedIn.
        </li>
      </ul>

      <h2>6. Payments and subscriptions</h2>
      <ul>
        <li>
          Paid plans, credits, and add-ons are billed through{" "}
          <strong>Razorpay</strong> (or other processors we designate). By
          subscribing, you authorize recurring charges until you cancel per
          your plan terms.
        </li>
        <li>
          Prices are shown at checkout in INR unless stated otherwise. Taxes may
          apply.
        </li>
        <li>
          Refunds are governed by our{" "}
          <Link href={LEGAL_URLS.refund}>Refund Policy</Link>.
        </li>
        <li>
          Failure to pay may result in suspension of sending, publishing, or
          account access.
        </li>
      </ul>

      <h2>7. Intellectual property</h2>
      <ul>
        <li>You retain rights to content you upload or approve.</li>
        <li>
          You grant us a limited license to host, process, and transmit your
          content solely to operate the Service.
        </li>
        <li>
          We own the Service, software, branding, and documentation. No rights are
          granted except as expressly stated.
        </li>
      </ul>

      <h2>8. Confidentiality and security</h2>
      <p>
        Each party will protect confidential information. You must safeguard API
        keys and notify us promptly of suspected unauthorized access.
      </p>

      <h2>9. Service availability</h2>
      <p>
        We aim for high availability but do not guarantee uninterrupted access.
        Maintenance, third-party outages (AWS, LinkedIn, Razorpay), and force
        majeure may affect the Service.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF
        ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT. You are responsible for
        validating outputs (including AI-generated content) before use.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {LEGAL_ENTITY.name} and its
        affiliates are not liable for indirect, incidental, special,
        consequential, or punitive damages, or lost profits, revenue, or data.
        Our total liability for any claim arising from these Terms or the
        Service will not exceed the fees you paid us in the three (3) months
        before the event giving rise to the claim.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You will indemnify and hold us harmless from claims arising from your
        content, your email or LinkedIn activity, violation of law or third-party
        rights, or breach of these Terms.
      </p>

      <h2>13. Termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or terminate
        access for breach, risk to the platform, or non-payment. Provisions that
        by nature should survive (payment obligations, liability limits,
        indemnity) survive termination.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These Terms are governed by the laws of India. Courts in{" "}
        {LEGAL_ENTITY.jurisdiction} have exclusive jurisdiction, subject to
        mandatory consumer protections in your country of residence where
        applicable.
      </p>

      <h2>15. Changes</h2>
      <p>
        We may update these Terms. Material changes will be communicated via the
        Service or email. Continued use after the effective date constitutes
        acceptance.
      </p>

      <h2>16. Contact</h2>
      <p>
        Questions:{" "}
        <a href={`mailto:${LEGAL_CONTACT.hello}`}>{LEGAL_CONTACT.hello}</a>.
        Billing:{" "}
        <a href={`mailto:${LEGAL_CONTACT.billing}`}>{LEGAL_CONTACT.billing}</a>.
      </p>
    </>
  );
}
