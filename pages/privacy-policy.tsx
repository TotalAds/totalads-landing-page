import Head from 'next/head';

import Footer from '@/components/sections/Footer';
import { Navbar } from '@/components/ui/navbar';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f0f0f0] to-[#fafafa]">
      <Head>
        <title>Privacy Policy – LeadSnipper</title>
        <meta
          name="description"
          content="Privacy Policy for LeadSnipper – how we collect, use, and protect your data."
        />
        <meta name="robots" content="index,follow" />
      </Head>

      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] mb-2">
            Privacy Policy
          </h1>
          <p className="text-[#4a4a4a] text-sm mb-8">
            Last updated: 18 Oct 2025
          </p>

          <div className="prose max-w-none prose-headings:text-[#131313] prose-headings:font-bold prose-a:text-[#eb857a] prose-a:hover:text-[#9DD0c7] prose-p:text-[#4a4a4a] prose-li:text-[#4a4a4a] text-[#131313]">
            <p>
              This Privacy Policy explains how LeadSnipper (the “Service”)
              collects, uses, and safeguards information when you use our
              website, APIs, and related products. We build sales intelligence
              tools that turn public websites into structured company profiles
              and lead insights for legitimate business purposes. We also
              provide bulk email services for outreach and lead engagement
              campaigns.
            </p>

            <h2>Who we are</h2>
            <p>
              LeadSnipper is provided by{" "}
              <strong>LeadSnipper Technologies</strong> (the “Company”). If you
              have questions about this policy, contact us at{" "}
              <a href="mailto:hello@leadsnipper.com">hello@leadsnipper.com</a>.
            </p>

            <h2>Information we collect</h2>
            <ul>
              <li>
                Account data: name, email, password hash, organization and
                preferences.
              </li>
              <li>
                Usage data: logs of requests, API tokens used, IP address,
                device/browser metadata.
              </li>
              <li>
                Billing data: plan, invoices, payment method (processed by our
                payment provider).
              </li>
              <li>
                Scraped content: public information from websites/links you
                explicitly submit to the Service, processed to create profiles
                and insights.
              </li>
              <li>
                Email campaign data: recipient email addresses, campaign
                content, delivery status, open/click metrics, and engagement
                data for bulk email services.
              </li>
              <li>
                Mailbox data: email account credentials (encrypted), mailbox
                configuration, and email metadata for email warmup and delivery
                optimization.
              </li>
            </ul>

            <h2>How we use information</h2>
            <ul>
              <li>Provide and operate the Service and APIs.</li>
              <li>
                Maintain security, prevent abuse, and enforce rate limits/terms.
              </li>
              <li>
                Measure performance, debug issues, and improve accuracy and
                coverage.
              </li>
              <li>Process payments and manage your subscription/credits.</li>
              <li>
                Communicate product updates and important notices (you can opt
                out of marketing).
              </li>
              <li>
                For bulk email services: send campaigns on your behalf, track
                delivery and engagement metrics, optimize email deliverability,
                and maintain mailbox health through warmup processes.
              </li>
              <li>
                Analyze email performance data to improve our email
                infrastructure and services.
              </li>
            </ul>

            <h2>Legal basis</h2>
            <p>
              Where applicable, we process data under legitimate interests to
              provide a B2B tool, to pursue product improvement and security,
              and to fulfill contracts when you create an account, use our API,
              or purchase credits.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain account, usage, and billing records for as long as your
              account is active and as required for legal, tax, and security
              purposes. You may request deletion of your account data; some logs
              may be retained for security and auditing.
            </p>

            <h2>Sharing with third parties</h2>
            <ul>
              <li>
                Infrastructure and hosting providers (cloud, CDN,
                logging/monitoring).
              </li>
              <li>Payment processors for secure billing and invoicing.</li>
              <li>
                Analytics and error reporting to improve reliability and UX.
              </li>
              <li>
                Only as required by law, to protect rights, or with your
                explicit consent.
              </li>
            </ul>

            <h2>International transfers</h2>
            <p>
              Your data may be processed in jurisdictions different from your
              own. We use reputable providers and appropriate safeguards to
              protect your information during transfers.
            </p>

            <h2>Email compliance and recipient consent</h2>
            <p>
              For bulk email services, you are responsible for ensuring that all
              recipients have provided proper consent to receive emails in
              accordance with applicable laws (CAN-SPAM, GDPR, CASL, etc.). You
              must maintain accurate records of consent and provide recipients
              with clear unsubscribe options. We do not send emails to
              recipients without your explicit instruction and authorization.
            </p>

            <h2>Security</h2>
            <p>
              We employ industry-standard security practices including
              encryption in transit, access controls, and continuous monitoring.
              Email credentials are encrypted at rest. No method is 100% secure;
              please use strong credentials and protect your tokens.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on your location, you may have the right to access,
              correct, export, or delete your personal data, and object to
              certain processing. Contact
              <a href="mailto:hello@leadsnipper.com">
                {" "}
                hello@leadsnipper.com
              </a>{" "}
              to make a request.
            </p>

            <h2>Children’s privacy</h2>
            <p>
              The Service is intended for business use and not directed to
              children under 16. We do not knowingly collect personal
              information from children.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes to the
              Service or legal requirements. We will update the “Last updated”
              date and, when appropriate, notify you.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href="mailto:hello@leadsnipper.com">hello@leadsnipper.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
