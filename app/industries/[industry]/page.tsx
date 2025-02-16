import React from "react";
import { industrydata } from "../../../api/Dummy";
import BookConsultation from "@/component/Common/BookConsultation";
import ProjectSection from "@/component/Home/ProjectSection";
import SuccessStories from "@/component/Common/SuccessStories";
import Contact from "@/component/Contact/Contact";
import TrustedIndustry from "@/component/Common/TrustedIndustry";
import IndustryOverview from "@/component/Industries/IndustryOverview";

export function generateStaticParams() {
  return industrydata?.industries?.map((item) => ({
    industry: item?.industryLinkName,
  }));
}

type PageProps = {
  params: Promise<{ industry: string }>;
};

const page = async ({ params }: PageProps) => {
  const { industry } = await params;
  return (
    <div>
      <IndustryOverview params={industry}/>
      <ProjectSection />
      <BookConsultation />
      <SuccessStories/>
      <TrustedIndustry/>
      <Contact />
    </div>
  );
};

export default page;
