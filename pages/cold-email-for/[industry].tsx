import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import IndustryLandingPage from "@/components/IndustryLandingPage";
import { getAllIndustrySlugs, getIndustry, IndustryConfig } from "@/lib/industries";

interface IndustryPageProps {
  industry: IndustryConfig;
}

export default function IndustryPage({ industry }: IndustryPageProps) {
  return <IndustryLandingPage industry={industry} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllIndustrySlugs();
  return {
    paths: slugs.map((slug) => ({ params: { industry: slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IndustryPageProps> = async ({
  params,
}) => {
  const slug = params?.industry as string;
  const industry = getIndustry(slug);

  if (!industry) {
    return { notFound: true };
  }

  return {
    props: { industry },
  };
};
