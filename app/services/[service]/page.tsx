import React from "react";
import { serviceData, techData } from "../../../api/Dummy";
import ServiceDetailsBanner from "@/component/Services/ServiceDetailsBanner";
import OurProcess from "@/component/Services/OurProcess";
import BookConsultation from "@/component/Common/BookConsultation";
import OperationsSections from "@/component/Home/OperationsSections";
import ProjectSection from "@/component/Home/ProjectSection";
import Contact from "@/component/Contact/Contact";
import SuccessStories from "@/component/Common/SuccessStories";
import TrustedIndustry from "@/component/Common/TrustedIndustry";

export function generateStaticParams() {
  return serviceData?.map((item) => ({
    service: item?.serviceLinkName,
  }));
}

type PageProps = {
  params: Promise<{ service: string }>;
};

const page = async ({ params }: PageProps) => {
  const { service } = await params;
  return (
    <div>
      <ServiceDetailsBanner params={service} />
      <OurProcess params={service}/>
      <BookConsultation />
      <OperationsSections techData={techData} />
      <ProjectSection />
      <SuccessStories/>
      <TrustedIndustry/>
      <Contact />
    </div>
  );
};

export default page;
