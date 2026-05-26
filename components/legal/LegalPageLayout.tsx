import Link from "next/link";
import { ReactNode } from "react";

import SEO from "@/components/SEO";
import Footer from "@/components/sections/Footer";
import { Navbar } from "@/components/ui/navbar";
import { LEGAL_LAST_UPDATED } from "@/lib/legal";
import { pageConfigs } from "@/lib/seo";

type LegalPageLayoutProps = {
  pageKey: keyof typeof pageConfigs;
  breadcrumbLabel: string;
  children: ReactNode;
};

export default function LegalPageLayout({
  pageKey,
  breadcrumbLabel,
  children,
}: LegalPageLayoutProps) {
  const canonical = pageConfigs[pageKey]?.canonical ?? "https://leadsnipper.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://leadsnipper.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Legal",
        item: "https://leadsnipper.com/privacy-policy",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: breadcrumbLabel,
        item: canonical,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f0f0f0] to-[#fafafa]">
      <SEO pageKey={pageKey} additionalStructuredData={[breadcrumbSchema]} />

      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <nav
            className="text-xs text-[#4a4a4a] mb-6"
            aria-label="Breadcrumb"
          >
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-[#eb857a]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span>Legal</span>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#131313] font-medium">{breadcrumbLabel}</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] mb-2">
            {breadcrumbLabel}
          </h1>
          <p className="text-[#4a4a4a] text-sm mb-8">
            Last updated: {LEGAL_LAST_UPDATED}
          </p>

          <div className="prose max-w-none prose-headings:text-[#131313] prose-headings:font-bold prose-a:text-[#eb857a] prose-a:hover:text-[#9DD0c7] prose-p:text-[#4a4a4a] prose-li:text-[#4a4a4a] text-[#131313]">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
