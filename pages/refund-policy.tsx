import Head from "next/head";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100">
      <Head>
        <title>Refund Policy – LeadSnipper</title>
        <meta
          name="description"
          content="Refund Policy for LeadSnipper – subscriptions, credits, and eligibility."
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
          <h1 className="text-3xl font-bold text-white">Refund Policy</h1>
          <p className="mt-2 text-sm text-gray-400">
            Last updated: 09 Aug 2025
          </p>

          <div className="prose prose-invert mt-8 max-w-none prose-headings:text-white prose-a:text-purple-300">
            <p>
              We want you to get value from LeadSnipper. This policy explains
              how refunds work for subscriptions and usage-based credits.
            </p>

            <h2>Subscriptions</h2>
            <ul>
              <li>
                Monthly/annual subscriptions renew automatically unless
                cancelled before renewal.
              </li>
              <li>
                We do not provide refunds for partial billing periods after
                renewal.
              </li>
              <li>
                If you cancel, you retain access until the end of the current
                billing period.
              </li>
            </ul>

            <h2>Usage-based credits</h2>
            <ul>
              <li>
                Purchased credits are non-transferable and non-refundable once
                used.
              </li>
              <li>
                Unused promotional credits may expire as communicated in the
                offer.
              </li>
              <li>
                We may, at our discretion, credit your account if a platform
                error caused failed jobs.
              </li>
            </ul>

            <h2>Unintended charges or errors</h2>
            <p>
              If you believe you were charged in error, contact us within 7 days
              at
              <a href="mailto:billing@leadsnipper.com">
                {" "}
                billing@leadsnipper.com
              </a>{" "}
              with details (account email, date, amount, and description). We’ll
              investigate and respond promptly.
            </p>

            <h2>EU/UK consumer rights</h2>
            <p>
              If applicable consumer laws grant you withdrawal or refund rights,
              we will honor those rights in addition to this policy.
            </p>

            <h2>How to request a refund</h2>
            <p>
              Email{" "}
              <a href="mailto:billing@leadsnipper.com">
                billing@leadsnipper.com
              </a>{" "}
              from your account email and include your invoice number. Most
              requests are resolved within 5–7 business days.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href="mailto:hello@leadsnipper.com">hello@leadsnipper.com</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
