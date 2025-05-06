import React from "react";
import { techData } from "../../../api/Dummy";
import BookConsultation from "@/component/Common/BookConsultation";
// import SuccessStories from "@/component/Common/SuccessStories";
import Contact from "@/component/Contact/Contact";
import TrustedIndustry from "@/component/Common/TrustedIndustry";
// import HireTeamFlexibility from "@/component/Hire/HireTeamFlexibility";
import HireOverview from "@/component/Hire/HireOverview";
import HireSteps from "@/component/Hire/HireSteps";
import HirePackages from "@/component/Hire/HirePackages";
import ClutchSuccessStories from "@/component/Common/ClutchSuccessStories";

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

const page = async ({ params }: PageProps) => {
  const { hire } = await params;
  return (
    <div>
      <HireOverview params={hire}/>
      <BookConsultation />
      <HireSteps/>
      <HirePackages/>
      {/* <HireTeamFlexibility /> */}
      <TrustedIndustry />
      {/* <SuccessStories /> */}
      <ClutchSuccessStories/>
      <Contact />
    </div>
  );
};

export default page;
