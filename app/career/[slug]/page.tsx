import CareerDetails from "@/component/Career/CareerDetails";
import React from "react";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const fetchCareerData = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/career/${slug}`);
  if (!res.ok) return null;
  return res.json();
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const careerData = await fetchCareerData(slug);
  // console.log("careerData", careerData?.data)
  const { meta_title, meta_description } = careerData?.data || {};

  return {
    title: meta_title || "Career Details | Flyte Solutions Ltd.",
    description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    openGraph: {
      title: meta_title || "Career Details | Flyte Solutions Ltd.",
      description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    },
  };
}

// Generate static paths for all case studies
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/career`);
  if (!res.ok) return [];

  const career = await res.json();
  return career?.data?.map((carr: { slug: string }) => ({
    slug: carr.slug,
  }));
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <div>
      <CareerDetails params={slug}/>
    </div>
  );
};

export default page;
