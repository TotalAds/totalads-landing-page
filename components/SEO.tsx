import Head from 'next/head';

import { PageConfig, pageConfigs, seoConfig, structuredData } from '@/lib/seo';

interface SEOProps {
  pageKey?: keyof typeof pageConfigs;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogImage?: string;
  ogType?: string;
  structuredDataType?: "organization" | "website" | "softwareApplication";
}

export default function SEO({
  pageKey,
  title,
  description,
  keywords,
  canonical,
  noindex = false,
  nofollow = false,
  ogImage,
  ogType = "website",
  structuredDataType,
}: SEOProps) {
  // Get page-specific config or use provided props
  const pageConfig = pageKey ? pageConfigs[pageKey] : null;

  const finalTitle = title || pageConfig?.title || seoConfig.defaultTitle;
  const finalDescription =
    description || pageConfig?.description || seoConfig.defaultDescription;
  const finalKeywords = keywords || pageConfig?.keywords || "";
  const finalCanonical =
    canonical || pageConfig?.canonical || seoConfig.baseUrl;
  const finalOgImage =
    ogImage ||
    pageConfig?.openGraph?.images?.[0]?.url ||
    seoConfig.defaultOpenGraph.images[0].url;

  // Robots meta content
  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
  ].join(", ");

  // Get structured data if specified
  const getStructuredData = () => {
    if (!structuredDataType) return null;
    return structuredData[structuredDataType];
  };

  const structuredDataJson = getStructuredData();

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonical} />
      <meta
        property="og:site_name"
        content={seoConfig.defaultOpenGraph.siteName}
      />
      <meta property="og:locale" content={seoConfig.defaultOpenGraph.locale} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={finalTitle} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.defaultTwitter.site} />
      <meta name="twitter:creator" content={seoConfig.defaultTwitter.handle} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content={finalTitle} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#eb857a" />
      <meta name="msapplication-TileColor" content="#eb857a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />

      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

      {/* Structured Data */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataJson),
          }}
        />
      )}

      {/* Additional page-specific structured data */}
      {pageKey === "home" && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData.organization),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData.website),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData.softwareApplication),
            }}
          />
        </>
      )}
    </Head>
  );
}
