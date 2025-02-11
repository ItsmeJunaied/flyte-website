import WhyChoose from "@/component/Hire/WhyChoose";
import React from "react";
import { techData } from "../../../api/Dummy";
import HireDetailsBanner from "@/component/Hire/HireDetailsBanner";
import BookConsultation from "@/component/Common/BookConsultation";
import SuccessStories from "@/component/Common/SuccessStories";
import Contact from "@/component/Contact/Contact";
import TrustedIndustry from "@/component/Common/TrustedIndustry";
import HireProcessStep from "@/component/Hire/HireProcessStep";
import HireMoreDevelopers from "@/component/Hire/HireMoreDevelopers";
import OurTechnologies from "@/component/Hire/OurTechnologies";
import HireTeamFlexibility from "@/component/Hire/HireTeamFlexibility";

export const metadata = {
  title: "Hire Details | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

// Convert techData into an array before mapping
export function generateStaticParams() {
  return Object.values(techData).map((tech) => ({
    hire: tech.hireLinkName,
  }));
}

type PageProps = {
  params: Promise<{ hire: string }>;
};

export type ParamProps = {
  params: string;
};

const page = async ({ params }: PageProps) => {
  const { hire } = await params;
  return (
    <div>
      <HireDetailsBanner params={hire} />
      <WhyChoose params={hire} />
      <OurTechnologies params={hire}/>
      <HireMoreDevelopers params={hire}/>
      <HireProcessStep params={hire}/>
      <BookConsultation />
      <HireTeamFlexibility/>
      <TrustedIndustry/>
      <SuccessStories/>
      <Contact />
    </div>
  );
};

export default page;
