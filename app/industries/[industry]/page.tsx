import React from "react";
import IndustryDetailsBanner from "@/component/Industries/IndustryDetailsBanner";
import { industrydata } from "../../../api/Dummy";
import OurExpertise from "@/component/Industries/OurExpertise";
import BookConsultation from "@/component/Common/BookConsultation";
import ProjectSection from "@/component/Home/ProjectSection";
import SuccessStories from "@/component/Common/SuccessStories";
import Contact from "@/component/Contact/Contact";
import TrustedIndustry from "@/component/Common/TrustedIndustry";
import IndustryFeatures from "@/component/Industries/IndustryFeatures";

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
      <IndustryDetailsBanner params={industry} />
      <IndustryFeatures/>
      <OurExpertise params={industry}/>
      <BookConsultation />
      <ProjectSection />
      <SuccessStories/>
      <TrustedIndustry/>
      <Contact />
    </div>
  );
};

export default page;
