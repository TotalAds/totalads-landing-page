import Head from "next/head";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100">
      <Head>
        <title>Terms of Service – LeadSnipper</title>
        <meta
          name="description"
          content="Terms of Service for LeadSnipper – rules and conditions for using the platform and APIs."
        />
        <meta name="robots" content="index,follow" />
      </Head>

      <header className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-40 bg-slate-900/70">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 font-bold">
              ✨
            </span>
            <span className="text-xl font-bold">LeadSnipper</span>
          </Link>
          <nav className="text-sm">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur">
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-400">
            Last updated: 09 Aug 2025
          </p>

          <div className="prose prose-invert mt-8 max-w-none prose-headings:text-white prose-a:text-purple-300">
            <p>
              These Terms of Service (the “Terms”) govern your access to and use
              of LeadSnipper, including our website, APIs, and related services
              (collectively, the “Service”). By using the Service you agree to
              these Terms.
            </p>

            <h2>1. Accounts and access</h2>
            <ul>
              <li>
                You must provide accurate information and keep your credentials
                secure.
              </li>
              <li>
                You are responsible for activities under your account and API
                tokens.
              </li>
              <li>
                We may suspend accounts for abuse, security issues, or
                non-compliance.
              </li>
            </ul>

            <h2>2. Acceptable use</h2>
            <ul>
              <li>
                Use the Service only for lawful, authorized business purposes.
              </li>
              <li>
                Do not scrape sites you are not authorized to process; submit
                only URLs you own or are permitted to analyze.
              </li>
              <li>
                No reverse engineering, circumventing rate limits, or
                interfering with platform integrity.
              </li>
            </ul>

            <h2>3. Content and ownership</h2>
            <ul>
              <li>
                You retain rights to your input and outputs created from URLs
                you submit.
              </li>
              <li>
                We own the Service, models, and infrastructure; you receive a
                limited license to use the Service.
              </li>
              <li>
                You are responsible for ensuring lawful use of data extracted
                for your workflows.
              </li>
            </ul>

            <h2>4. Plans, credits, and billing</h2>
            <ul>
              <li>
                Free and paid plans may include monthly credits and rate limits.
              </li>
              <li>
                Paid subscriptions renew automatically unless cancelled before
                the renewal date.
              </li>
              <li>
                Usage beyond included credits may incur additional fees as
                described at checkout.
              </li>
            </ul>

            <h2>5. Service availability</h2>
            <p>
              We strive for high availability but do not guarantee uninterrupted
              operation. Planned maintenance and unplanned outages may occur. We
              will communicate major incidents on our status page or via email
              when appropriate.
            </p>

            <h2>6. Confidentiality and security</h2>
            <p>
              We take reasonable measures to protect your data. You must keep
              API tokens confidential and notify us immediately of any suspected
              breach.
            </p>

            <h2>7. Compliance</h2>
            <p>
              You are responsible for complying with applicable laws and
              regulations for your use case, including privacy, consent, and
              data processing obligations.
            </p>

            <h2>8. Disclaimers</h2>
            <p>
              THE SERVICE IS PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND. We
              do not warrant accuracy or fitness for a particular purpose. You
              are responsible for validating outputs before production use.
            </p>

            <h2>9. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, LeadSnipper and its
              affiliates will not be liable for indirect, incidental, special,
              consequential, or punitive damages, or for lost profits, revenues,
              or data, even if advised of the possibility. Our total liability
              will not exceed the amount you paid to us in the 3 months
              preceding the claim.
            </p>

            <h2>10. Termination</h2>
            <p>
              You may stop using the Service at any time. We may suspend or
              terminate access for breach of these Terms or to protect the
              platform, with notice where reasonable.
            </p>

            <h2>11. Changes</h2>
            <p>
              We may update these Terms to reflect changes to the Service or
              legal requirements. We will update the “Last updated” date and,
              when material, provide notice.
            </p>

            <h2>12. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href="mailto:hello@leadsnipper.com">hello@leadsnipper.com</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
