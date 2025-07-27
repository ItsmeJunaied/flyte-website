import React from "react";
import { industrydata } from "../../../api/Dummy";
import BookConsultation from "@/component/Common/BookConsultation";
import ProjectSection from "@/component/Home/ProjectSection";
import Contact from "@/component/Contact/Contact";
import TrustedIndustry from "@/component/Common/TrustedIndustry";
import IndustryOverview from "@/component/Industries/IndustryOverview";
import ClutchSuccessStories from "@/component/Common/ClutchSuccessStories";


export function generateStaticParams() {
  return industrydata?.industries?.map((item) => ({
    industry: item?.industryLinkName,
  }));
}

type PageProps = {
  params: Promise<{ industry: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;

  const industry = industrydata?.industries?.find((item) => item?.industryLinkName === resolvedParams.industry);

  const { name, short_description, keywords } = industry || {};

  return {
    title: `${name ? `${name} | Flyte Solutions Ltd.` : "Industry Details | Flyte Solutions Ltd."}`,
    description: short_description || "Explore how Flyte Solutions Ltd. is transforming industries with modern digital solutions.",
    keywords: keywords || [],
    openGraph: {
      title: `${name ? `${name} | Flyte Solutions Ltd.` : "Industry Details | Flyte Solutions Ltd."}`,
      description: short_description || "Explore how Flyte Solutions Ltd. is transforming industries with modern digital solutions.",
      images: [
        {
          url: "https://flytesolutions.com/logo.png",
          width: 1200,
          height: 630,
          alt: "Flyte Solutions Ltd. - Empowering Industry Innovation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name ? `${name} | Flyte Solutions Ltd.` : "Industry Details | Flyte Solutions Ltd."}`,
      description: short_description || "Explore how Flyte Solutions Ltd. is transforming industries with modern digital solutions.",
      images: ["https://flytesolutions.com/logo.png"],
    },
  };
}


const page = async ({ params }: PageProps) => {
  const { industry } = await params;
  return (
    <div>
      <IndustryOverview params={industry}/>
      <ProjectSection />
      <BookConsultation />
      <ClutchSuccessStories/>
      <TrustedIndustry/>
      <Contact />
    </div>
  );
};

export default page;
