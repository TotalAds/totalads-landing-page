import Head from 'next/head';

import Footer from '@/components/sections/Footer';
import { Navbar } from '@/components/ui/navbar';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f0f0f0] to-[#fafafa]">
      <Head>
        <title>Refund Policy – LeadSnipper</title>
        <meta
          name="description"
          content="Refund Policy for LeadSnipper – subscriptions, credits, and eligibility."
        />
        <meta name="robots" content="index,follow" />
      </Head>

      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] mb-2">
            Refund Policy
          </h1>
          <p className="text-[#4a4a4a] text-sm mb-8">
            Last updated: 18 Oct 2025
          </p>

          <div className="prose max-w-none prose-headings:text-[#131313] prose-headings:font-bold prose-a:text-[#eb857a] prose-a:hover:text-[#9DD0c7] prose-p:text-[#4a4a4a] prose-li:text-[#4a4a4a] text-[#131313]">
            <p>
              We want you to get value from LeadSnipper. This policy explains
              how refunds work for subscriptions, usage-based credits, and bulk
              email services.
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

            <h2>Bulk email service</h2>
            <ul>
              <li>
                Email credits and campaign packages are non-refundable once
                campaigns have been sent or emails have been delivered.
              </li>
              <li>
                Unused email credits may be carried forward to the next billing
                period or expire as specified in your plan.
              </li>
              <li>
                If emails fail to send due to a platform error, we will credit
                your account for the failed sends at our discretion.
              </li>
              <li>
                Email warmup and deliverability optimization services are
                non-refundable as they are ongoing services.
              </li>
              <li>
                Refunds for email service issues must be requested within 7 days
                of the incident with supporting documentation.
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

      <Footer />
    </div>
  );
}
