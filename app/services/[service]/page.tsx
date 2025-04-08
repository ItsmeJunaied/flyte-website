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
import ServiceProcessStep from "@/component/Services/ServiceProcessStep";
import CustomSoftware from "@/component/Services/CustomSoftware";
import BoosterCard from "@/component/Common/BoosterCard";

export const metadata = {
  title: "service-details | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

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
      <ServiceProcessStep params={service} />
      <OurProcess params={service} />
      <BookConsultation />
      <OperationsSections techData={techData} />
      <CustomSoftware />
      <BoosterCard />
      <ProjectSection />
      <SuccessStories bgColor="bg-white" />
      <TrustedIndustry />
      <Contact />
    </div>
  );
};

export default page;
