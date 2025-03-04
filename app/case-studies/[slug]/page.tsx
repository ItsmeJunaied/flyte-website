import { caseStudyData } from "@/api/Dummy";
import CaseDetailsOverview from "@/component/CaseStudies/CaseDetailsOverview";
import ReadyToTransform from "@/component/CaseStudies/ReadyToTransform";
import SuccessStories from "@/component/Common/SuccessStories";
import Contact from "@/component/Contact/Contact";
import { Metadata } from "next";
import React from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const fetchCaseStudy = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/case-studies/${slug}`);
  if (!res.ok) return null;
  return res.json();
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // const caseStudy = await fetchCaseStudy(params.slug);
  const caseStudy = await fetchCaseStudy("sd");
  const { meta_title, meta_description } = caseStudy?.data || {};

  return {
    title: meta_title || "Case Studies Details | Flyte Solutions Ltd.",
    description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    openGraph: {
      title: meta_title || "Case Studies Details | Flyte Solutions Ltd.",
      description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
      // url: `${process.env.NEXT_PUBLIC_BASE_URL}/case-studies/sd`,
      // images: caseStudy?.image ? [{ url: caseStudy.image, alt: meta_title }] : [],
    },
  };
}

// Convert techData into an array before mapping
export function generateStaticParams() {
  return caseStudyData.map((cases) => ({
    slug: cases.caseStudyLinkName,
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
