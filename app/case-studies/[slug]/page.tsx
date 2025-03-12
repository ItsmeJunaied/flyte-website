import CaseDetailsOverview from "@/component/CaseStudies/CaseDetailsOverview";
import ReadyToTransform from "@/component/CaseStudies/ReadyToTransform";
import SuccessStories from "@/component/Common/SuccessStories";
import Contact from "@/component/Contact/Contact";
import { Metadata } from "next";
import React from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};
// type PageProps = {
//   params: { slug: string };
// };

const fetchCaseStudy = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/case-studies/${slug}`);
  if (!res.ok) return null;
  return res.json();
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await fetchCaseStudy(slug);
  const { meta_title, meta_description } = caseStudy?.data || {};

  return {
    title: meta_title || "Case Studies Details | Flyte Solutions Ltd.",
    description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    openGraph: {
      title: meta_title || "Case Studies Details | Flyte Solutions Ltd.",
      description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    },
  };
}

// Generate static paths for all case studies
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/case-studies`);
  if (!res.ok) return [];

  const caseStudies = await res.json();
  return caseStudies.data.data.map((caseStudy: { slug: string }) => ({
    slug: caseStudy.slug,
  }));
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <div>
      <CaseDetailsOverview params={slug} />
      <SuccessStories />
      <ReadyToTransform />
      <Contact />
    </div>
  );
};

export default page;
