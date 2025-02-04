import React from "react";
import { serviceData, techData } from "../../../api/Dummy";
import ServiceDetailsBanner from "@/component/Services/ServiceDetailsBanner";
import OurProcess from "@/component/Services/OurProcess";
import BookConsultation from "@/component/Common/BookConsultation";
import OperationsSections from "@/component/Home/OperationsSections";
import ProjectSection from "@/component/Home/ProjectSection";
import Contact from "@/component/Contact/Contact";

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
    <div className="my-16 lg:my-28">
      <ServiceDetailsBanner params={service} />
      <OurProcess params={service}/>
      <BookConsultation />
      <OperationsSections techData={techData} />
      <ProjectSection />
      <Contact />
    </div>
  );
};

export default page;
