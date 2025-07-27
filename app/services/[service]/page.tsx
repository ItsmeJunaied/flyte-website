import React from "react";
import { serviceData, techData } from "../../../api/Dummy";
import ServiceDetailsBanner from "@/component/Services/ServiceDetailsBanner";
import OurProcess from "@/component/Services/OurProcess";
import BookConsultation from "@/component/Common/BookConsultation";
import OperationsSections from "@/component/Home/OperationsSections";
import ProjectSection from "@/component/Home/ProjectSection";
import Contact from "@/component/Contact/Contact";
// import SuccessStories from "@/component/Common/SuccessStories";
import TrustedIndustry from "@/component/Common/TrustedIndustry";
import ServiceProcessStep from "@/component/Services/ServiceProcessStep";
import CustomSoftware from "@/component/Services/CustomSoftware";
import BoosterCard from "@/component/Common/BoosterCard";
import ClutchSuccessStories from "@/component/Common/ClutchSuccessStories";



export function generateStaticParams() {
  return serviceData?.map((item) => ({
    service: item?.serviceLinkName,
  }));
}

type PageProps = {
  params: Promise<{ service: string }>;
};

// for metadata 
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;

  const service = serviceData?.find((item) => item?.serviceLinkName === resolvedParams.service);

  const { short_title, description, keywords } = service || {};

  return {
    title: `${short_title ? `${short_title} | Flyte Solutions Ltd.` : "Service Details | Flyte Solutions Ltd."}`,
    description: description || "Discover Flyte Solutions Ltd.'s expert software services and how we can help grow your business.",
    keywords: keywords || [],
    openGraph: {
      title: `${short_title ? `${short_title} | Flyte Solutions Ltd.` : "Service Details | Flyte Solutions Ltd."}`,
      description: description || "Discover Flyte Solutions Ltd.'s expert software services and how we can help grow your business.",
      images: [
        {
          url: "https://flytesolutions.com/logo.png",
          width: 1200,
          height: 630,
          alt: "Flyte Solutions Ltd. - Expert Software Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${short_title ? `${short_title} | Flyte Solutions Ltd.` : "Service Details | Flyte Solutions Ltd."}`,
      description: description || "Discover Flyte Solutions Ltd.'s expert software services and how we can help grow your business.",
      images: ["https://flytesolutions.com/logo.png"],
    },
  };
}


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
      <div className="bg-white">
      <ClutchSuccessStories/>
      </div>
      {/* <SuccessStories bgColor="bg-white" /> */}
      <TrustedIndustry />
      <Contact />
    </div>
  );
};

export default page;
