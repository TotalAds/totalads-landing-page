import type { GetServerSideProps } from "next";

import { generateSitemapUrls, generateSitemapXml } from "@/lib/sitemap";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemapXml = generateSitemapXml(generateSitemapUrls());

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400");
  res.write(sitemapXml);
  res.end();

  return {
    props: {},
  };
};

export default function SitemapXml() {
  return null;
}
