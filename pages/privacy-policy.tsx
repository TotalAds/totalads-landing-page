import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100">
      <Head>
        <title>Privacy Policy – LeadSnipper</title>
        <meta name="description" content="Privacy Policy for LeadSnipper – how we collect, use, and protect your data." />
        <meta name="robots" content="index,follow" />
      </Head>

      <header className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-40 bg-slate-900/70">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 font-bold">✨</span>
            <span className="text-xl font-bold">LeadSnipper</span>
          </Link>
          <nav className="text-sm">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: 09 Aug 2025</p>

          <div className="prose prose-invert mt-8 max-w-none prose-headings:text-white prose-a:text-purple-300">
            <p>
              This Privacy Policy explains how LeadSnipper (the “Service”) collects, uses, and
              safeguards information when you use our website, APIs, and related products. We build
              sales intelligence tools that turn public websites into structured company profiles and
              lead insights for legitimate business purposes.
            </p>

            <h2>Who we are</h2>
            <p>
              LeadSnipper is provided by <strong>LeadSnipper Technologies</strong> (the “Company”). If you have
              questions about this policy, contact us at <a href="mailto:support@leadsnipper.com">support@leadsnipper.com</a>.
            </p>

            <h2>Information we collect</h2>
            <ul>
              <li>Account data: name, email, password hash, organization and preferences.</li>
              <li>Usage data: logs of requests, API tokens used, IP address, device/browser metadata.</li>
              <li>Billing data: plan, invoices, payment method (processed by our payment provider).</li>
              <li>
                Scraped content: public information from websites/links you explicitly submit to the
                Service, processed to create profiles and insights.
              </li>
            </ul>

            <h2>How we use information</h2>
            <ul>
              <li>Provide and operate the Service and APIs.</li>
              <li>Maintain security, prevent abuse, and enforce rate limits/terms.</li>
              <li>Measure performance, debug issues, and improve accuracy and coverage.</li>
              <li>Process payments and manage your subscription/credits.</li>
              <li>Communicate product updates and important notices (you can opt out of marketing).</li>
            </ul>

            <h2>Legal basis</h2>
            <p>
              Where applicable, we process data under legitimate interests to provide a B2B tool, to
              pursue product improvement and security, and to fulfill contracts when you create an
              account, use our API, or purchase credits.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain account, usage, and billing records for as long as your account is active and
              as required for legal, tax, and security purposes. You may request deletion of your
              account data; some logs may be retained for security and auditing.
            </p>

            <h2>Sharing with third parties</h2>
            <ul>
              <li>Infrastructure and hosting providers (cloud, CDN, logging/monitoring).</li>
              <li>Payment processors for secure billing and invoicing.</li>
              <li>Analytics and error reporting to improve reliability and UX.</li>
              <li>Only as required by law, to protect rights, or with your explicit consent.</li>
            </ul>

            <h2>International transfers</h2>
            <p>
              Your data may be processed in jurisdictions different from your own. We use reputable
              providers and appropriate safeguards to protect your information during transfers.
            </p>

            <h2>Security</h2>
            <p>
              We employ industry-standard security practices including encryption in transit, access
              controls, and continuous monitoring. No method is 100% secure; please use strong
              credentials and protect your tokens.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, export, or
              delete your personal data, and object to certain processing. Contact
              <a href="mailto:support@leadsnipper.com"> support@leadsnipper.com</a> to make a request.
            </p>

            <h2>Children’s privacy</h2>
            <p>
              The Service is intended for business use and not directed to children under 16. We do
              not knowingly collect personal information from children.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes to the Service or legal
              requirements. We will update the “Last updated” date and, when appropriate, notify you.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Email <a href="mailto:support@leadsnipper.com">support@leadsnipper.com</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

