import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100">
      <Head>
        <title>Contact Us – LeadSnipper</title>
        <meta
          name="description"
          content="Contact LeadSnipper – sales, support, and general inquiries."
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
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
          <p className="mt-2 text-sm text-gray-400">
            We typically reply within 24–48 hours.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-slate-900/60 p-4">
              <h2 className="text-lg font-semibold text-white">Support</h2>
              <p className="mt-2 text-sm text-gray-300">
                Billing or product issues? Reach our support team.
              </p>
              <p className="mt-2 text-sm">
                <a
                  className="text-purple-300 hover:text-white"
                  href="mailto:support@leadsnipper.com"
                >
                  support@leadsnipper.com
                </a>
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-900/60 p-4">
              <h2 className="text-lg font-semibold text-white">Sales</h2>
              <p className="mt-2 text-sm text-gray-300">
                Evaluating LeadSnipper for your team? We can help.
              </p>
              <p className="mt-2 text-sm">
                <a
                  className="text-purple-300 hover:text-white"
                  href="mailto:sales@leadsnipper.com"
                >
                  sales@leadsnipper.com
                </a>
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-900/60 p-4 md:col-span-2">
              <h2 className="text-lg font-semibold text-white">Company</h2>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                <li>LeadSnipper Technologies</li>
                <li>Registered in [Your Country/State]</li>
                <li>Operational HQ: Remote-first</li>
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = Object.fromEntries(new FormData(form).entries());
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });
              const json = await res.json();
              alert(
                json.ok
                  ? "Thanks! We'll get back to you soon."
                  : `Error: ${json.error}`
              );
              if (json.ok) form.reset();
            }}
            className="mt-10 grid gap-4"
          >
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input
                name="name"
                required
                className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-medium text-white hover:from-purple-600 hover:to-pink-600">
              Send
            </button>
          </form>

          <div className="mt-10 text-sm text-gray-400">
            <p>
              Looking for docs? Visit our API Documentation from the homepage.
              For data requests, email{" "}
              <a
                className="text-purple-300 hover:text-white"
                href="mailto:privacy@leadsnipper.com"
              >
                privacy@leadsnipper.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
