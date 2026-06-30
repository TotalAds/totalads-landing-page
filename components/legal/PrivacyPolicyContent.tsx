import { LEGAL_CONTACT, LEGAL_ENTITY } from "@/lib/legal";

export default function PrivacyPolicyContent() {
  return (
    <>
      <p>
        This Privacy Policy explains how {LEGAL_ENTITY.name} (“we”, “us”)
        collects, uses, stores, and protects personal information when you use
        our websites, applications, and services, including{" "}
        <strong>LeadSnipper</strong> (cold email and outbound) and{" "}
        <strong>SocialSnipper</strong> (LinkedIn content and scheduling), and
        when you make purchases through our platform (collectively, the
        “Services”).
      </p>

      <h2>1. Who we are</h2>
      <p>
        {LEGAL_ENTITY.name} operates LeadSnipper and SocialSnipper. For privacy
        requests, contact{" "}
        <a href={`mailto:${LEGAL_CONTACT.privacy}`}>{LEGAL_CONTACT.privacy}</a>{" "}
        or{" "}
        <a href={`mailto:${LEGAL_CONTACT.hello}`}>{LEGAL_CONTACT.hello}</a>.
        Our principal place of business is in {LEGAL_ENTITY.jurisdiction}.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Account data:</strong> name, email, password hash, company
          details, timezone, product preference (LeadSnipper or SocialSnipper),
          and onboarding responses.
        </li>
        <li>
          <strong>Billing and payment data:</strong> subscription plan, invoices,
          transaction references, and billing email. Card and UPI details are
          processed by our payment provider (Razorpay); we do not store full
          payment card numbers on our servers.
        </li>
        <li>
          <strong>Usage and technical data:</strong> IP address, device and
          browser metadata, API logs, feature usage, and security events.
        </li>
        <li>
          <strong>LeadSnipper — email and outreach data:</strong> domains and
          senders you verify, lead and recipient lists you upload, campaign
          content, delivery and engagement metrics (opens, clicks, bounces,
          complaints), mailbox configuration for warmup, and optional encrypted
          mailbox credentials for deliverability features.
        </li>
        <li>
          <strong>LeadSnipper — verification data:</strong> email addresses
          submitted for verification (including via Reoon or similar providers)
          and verification results.
        </li>
        <li>
          <strong>SocialSnipper — LinkedIn data:</strong> only data you
          authorize through LinkedIn&apos;s official OAuth connection, such as
          profile identifiers, posting permissions, scheduled content, and
          analytics about your published posts. We do not store your LinkedIn
          password.
        </li>
        <li>
          <strong>Communications:</strong> support messages, approval
          notifications (e.g. Telegram or WhatsApp where you connect them), and
          product emails you opt into.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> session cookies,
          authentication tokens, and analytics on our marketing site (see
          Section 8).
        </li>
      </ul>

      <h2>3. Gmail and Google Workspace Data</h2>
      <p>
        When you connect a Google / Gmail account to LeadSnipper (for example to
        send cold-email campaigns or enable email warmup), we access data through
        Google&apos;s official OAuth 2.0 APIs. This section explains exactly what
        we access, why, and your rights.
      </p>

      <h3>3a. What Gmail data we access</h3>
      <ul>
        <li>
          <strong>Send email on your behalf</strong> — we use the{" "}
          <code>gmail.send</code> scope to compose and deliver outbound messages
          (campaigns and warmup emails) that you authorise.
        </li>
        <li>
          <strong>Read warmup replies</strong> — we use the{" "}
          <code>gmail.readonly</code> or <code>gmail.modify</code> scope solely
          to detect auto-generated warmup replies so we can mark them as read and
          move them out of your inbox. We never read your personal or business
          emails.
        </li>
        <li>
          <strong>OAuth tokens</strong> — we store encrypted OAuth access and
          refresh tokens so your mailbox stays connected without you needing to
          re-authenticate every session.
        </li>
        <li>
          We do <strong>not</strong> access attachments, contacts, calendar data,
          drafts, or any other Gmail data beyond what is explicitly listed above.
        </li>
      </ul>

      <h3>3b. Why we access Gmail data</h3>
      <ul>
        <li>
          <strong>Campaign sending:</strong> to deliver the outbound emails you
          set up inside LeadSnipper, using your mailbox as the sending address.
        </li>
        <li>
          <strong>Email warmup:</strong> to send and receive low-volume warmup
          messages that improve your domain&apos;s sender reputation with email
          providers.
        </li>
        <li>
          <strong>Deliverability monitoring:</strong> to detect bounces and
          warmup-reply threads so we can report accurate metrics to you.
        </li>
      </ul>

      <h3>3c. How long we store Gmail data</h3>
      <ul>
        <li>
          <strong>OAuth tokens</strong> are retained for as long as your sending
          account is connected. They are deleted immediately when you disconnect
          the account or delete your LeadSnipper account.
        </li>
        <li>
          <strong>Sent-email metadata</strong> (subject, recipient, timestamp,
          open/click status) is retained for up to <strong>24 months</strong> or
          until you request deletion, whichever comes first.
        </li>
        <li>
          <strong>Message content</strong> (body text) of emails sent through our
          platform is retained for up to <strong>90 days</strong> to support
          delivery retries and reporting, then permanently deleted.
        </li>
        <li>
          Warmup reply content is <strong>never stored</strong> — we only process
          it in memory to perform the inbox-cleanup action and immediately discard
          it.
        </li>
      </ul>

      <h3>3d. We do not sell Gmail data</h3>
      <p>
        We <strong>never sell, rent, share, or monetise</strong> any data
        obtained through Google APIs — including Gmail data — to third parties.
        Gmail data is used exclusively to provide the LeadSnipper features you
        have explicitly enabled. It is not used for advertising, profiling,
        training AI models, or any other purpose unrelated to operating the
        Service on your behalf.
      </p>

      <h3>3e. How to revoke Google access</h3>
      <p>
        You can revoke LeadSnipper&apos;s access to your Google account at any
        time using either of the following methods:
      </p>
      <ul>
        <li>
          <strong>Inside LeadSnipper:</strong> go to{" "}
          <em>Settings → Sending Accounts</em>, find the Gmail address, and click{" "}
          <em>Disconnect</em>. This immediately invalidates our stored tokens.
        </li>
        <li>
          <strong>Via Google Account settings:</strong> visit{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            myaccount.google.com/permissions
          </a>{
            " "
          }
          and remove <em>LeadSnipper</em> from the list of connected apps. Once
          revoked, we will be unable to access your Gmail and no further emails
          will be sent through that account.
        </li>
      </ul>

      <h3>3f. How to delete your Gmail data</h3>
      <p>
        To request deletion of all Gmail-related data we hold about you:
      </p>
      <ul>
        <li>
          Email{" "}
          <a href={`mailto:${LEGAL_CONTACT.privacy}`}>
            {LEGAL_CONTACT.privacy}
          </a>{" "}
          with the subject line <em>&quot;Gmail Data Deletion Request&quot;</em>.
          Include the Gmail address(es) connected to your account.
        </li>
        <li>
          We will permanently delete all OAuth tokens, sent-email metadata, and
          any stored message content associated with that address within{" "}
          <strong>30 days</strong> of receiving your verified request.
        </li>
        <li>
          You may also delete your entire LeadSnipper account from{" "}
          <em>Settings → Account → Delete Account</em>, which triggers immediate
          deletion of all your data including Gmail data.
        </li>
      </ul>

      <h2>4. How we use information</h2>
      <ul>
        <li>Provide, operate, and secure the Services and your account.</li>
        <li>
          Process subscriptions, usage-based credits, and payments through
          Razorpay.
        </li>
        <li>
          Send and track email campaigns, verify leads, and optimize
          deliverability on your instructions (LeadSnipper).
        </li>
        <li>
          Generate, schedule, publish, and analyze LinkedIn content you approve
          (SocialSnipper).
        </li>
        <li>Detect abuse, enforce our terms, and protect platform integrity.</li>
        <li>Improve accuracy, reliability, and product experience.</li>
        <li>
          Send service notices; send marketing only where you have opted in.
        </li>
      </ul>

      <h2>5. Legal bases (where applicable)</h2>
      <p>
        For users in the EEA, UK, and similar jurisdictions, we process personal
        data based on: (a) contract — to provide the Services you sign up for;
        (b) legitimate interests — security, fraud prevention, and product
        improvement; (c) consent — where required (e.g. marketing, optional
        integrations); and (d) legal obligation — tax, accounting, and lawful
        requests.
      </p>

      <h2>6. Sharing with third parties</h2>
      <p>We share data only as needed to run the Services:</p>
      <ul>
        <li>
          <strong>Infrastructure:</strong> cloud hosting, CDN, logging, and
          monitoring (e.g. AWS).
        </li>
        <li>
          <strong>Email delivery:</strong> AWS SES (managed or your BYO-SES
          credentials you connect).
        </li>
        <li>
          <strong>Email verification:</strong> Reoon or comparable verification
          providers when you use verification features.
        </li>
        <li>
          <strong>Payments:</strong> Razorpay for checkout, subscriptions, and
          refunds per our Refund Policy.
        </li>
        <li>
          <strong>LinkedIn:</strong> official LinkedIn APIs when you connect
          SocialSnipper.
        </li>
        <li>
          <strong>Analytics:</strong> privacy-oriented or product analytics tools
          to understand usage.
        </li>
        <li>
          <strong>Legal and safety:</strong> when required by law or to protect
          rights, safety, and integrity of the Services.
        </li>
      </ul>
      <p>
        We do not sell your personal information. We require processors to
        handle data under appropriate contractual safeguards.
      </p>

      <h2>7. International transfers</h2>
      <p>
        Your data may be processed in India and other countries where our
        providers operate. We use reputable vendors and appropriate safeguards
        (including standard contractual clauses where applicable) for
        cross-border transfers.
      </p>

      <h2>8. Data retention</h2>
      <p>
        We retain account, billing, and usage records while your account is
        active and as needed for legal, tax, and security purposes. Campaign and
        lead data are retained per your plan and deletion requests. Logs may be
        kept for a limited period for security auditing. You may request account
        deletion; some records may be retained where required by law.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Our marketing site and app use essential cookies for authentication and
        security. We may use analytics cookies to understand traffic; you can
        control non-essential cookies through your browser settings where
        available.
      </p>

      <h2>10. Your responsibilities (customer data)</h2>
      <p>
        When you upload leads or connect LinkedIn, you act as the controller of
        that contact data. You must have a lawful basis (consent, legitimate
        interest where permitted, etc.) and comply with CAN-SPAM, GDPR, CASL,
        India&apos;s DPDP Act, and other laws applicable to you. We process
        recipient data only on your documented instructions as a processor.
      </p>

      <h2>11. Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct,
        delete, restrict, or port your personal data, and to object to certain
        processing. To exercise these rights, email{" "}
        <a href={`mailto:${LEGAL_CONTACT.privacy}`}>{LEGAL_CONTACT.privacy}</a>.
        You may lodge a complaint with your local supervisory authority where
        applicable.
      </p>

      <h2>12. Security</h2>
      <p>
        We use encryption in transit, access controls, and monitoring. Sensitive
        credentials (e.g. mailbox or API secrets) are encrypted at rest where
        stored. No method is 100% secure; protect your account credentials.
      </p>

      <h2>13. Children</h2>
      <p>
        The Services are for business users aged 18 and over. We do not
        knowingly collect data from children under 16.
      </p>

      <h2>14. Changes</h2>
      <p>
        We may update this policy when our practices or legal requirements
        change. We will update the “Last updated” date and, for material
        changes, provide notice through the Service or email.
      </p>

      <h2>15. Contact</h2>
      <p>
        Privacy questions:{" "}
        <a href={`mailto:${LEGAL_CONTACT.privacy}`}>{LEGAL_CONTACT.privacy}</a>
        . General support:{" "}
        <a href={`mailto:${LEGAL_CONTACT.hello}`}>{LEGAL_CONTACT.hello}</a>.
      </p>
    </>
  );
}
