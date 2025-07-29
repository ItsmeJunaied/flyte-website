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

// Convert techData into an array before mapping
export function generateStaticParams() {
  return Object.values(techData).map((tech) => ({
    hire: tech.hireLinkName,
  }));
}

type PageProps = {
  params: Promise<{ hire: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  // Await the params Promise to get the actual parameters
  const resolvedParams = await params;

  const tech = Object.values(techData).find((item) => item.hireLinkName === resolvedParams.hire);
  const { title, description, keywords } = tech || {};

  return {
    title: `${title ? `${title} | Flyte Solutions Ltd.` : "Career Details | Flyte Solutions Ltd."}`,
    description: description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    keywords: keywords || [],
    openGraph: {
      title: `${title ? `${title} | Flyte Solutions Ltd.` : "Career Details | Flyte Solutions Ltd."}`,
      description: description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
      images: [
        {
          url: "https://flytesolutions.com/og.png",
          width: 1200,
          height: 630,
          alt: "Flyte Solutions Ltd. - Empowering Digital Innovation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
       title: `${title ? `${title} | Flyte Solutions Ltd.` : "Career Details | Flyte Solutions Ltd."}`,
      description: description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
      images: ["https://flytesolutions.com/og.png"],
    },
  };
}

const page = async ({ params }: PageProps) => {
  const { hire } = await params;
  return (
    <div>
      <HireOverview params={hire} />
      <BookConsultation />
      <HireSteps />
      <HirePackages />
      {/* <HireTeamFlexibility /> */}
      <TrustedIndustry />
      {/* <SuccessStories /> */}
      <ClutchSuccessStories />
      <Contact />
    </div>
  );
};

export default page;
