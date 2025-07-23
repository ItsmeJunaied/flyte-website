import React from "react";
import HireBanner from "@/component/Hire/HireBanner";
import ServicesOverview from "@/component/Hire/ServicesOverview";
import ServiceFitHighlights from "@/component/Hire/ServiceFitHighlights";
import BookConsultation from "@/component/Common/BookConsultation";
import OperationsSections from "@/component/Home/OperationsSections";
import { techData } from "@/api/Dummy";
// import SuccessStories from "@/component/Common/SuccessStories";
import HireSteps from "@/component/Hire/HireSteps";
import HirePackages from "@/component/Hire/HirePackages";
import ClutchSuccessStories from "@/component/Common/ClutchSuccessStories";

export const metadata = {
  title: "Hire | Flyte Solutions Ltd.",
  description: "Looking to join a forward-thinking software company? Flyte Solutions Ltd. is hiring talented professionals passionate about web, mobile, and AI technologies. Apply now and grow your career with us!",
  keywords: [
    "Flyte Solutions hiring",
    "Software jobs",
    "Tech careers",
    "Web development jobs",
    "AI jobs",
    "Mobile app developer jobs",
    "Bangladesh IT careers"
  ],
  openGraph: {
    title: "Join Flyte Solutions Ltd. | Careers & Hiring",
    description: "Explore exciting career opportunities at Flyte Solutions Ltd. We're looking for skilled web, mobile, and AI experts to join our innovative team.",
    url: "https://flytesolutions.com/hire",
    siteName: "Flyte Solutions Ltd.",
    images: [
      {
        url: "https://flytesolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Join Flyte Solutions Ltd. - Careers and Hiring",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Flyte Solutions Ltd. | Careers & Hiring",
    description: "Exciting job opportunities available at Flyte Solutions Ltd. Apply today to grow your tech career.",
    images: ["https://flytesolutions.com/logo.png"],
  },
};


const page = () => {
  return (
    <div>
      <HireBanner />
      <ServicesOverview />
      <HireSteps />
      <HirePackages />
      <OperationsSections techData={techData} />
      <ServiceFitHighlights />
      {/* <SuccessStories /> */}
      <ClutchSuccessStories/>
      <BookConsultation />
    </div>
  );
};

export default page;
