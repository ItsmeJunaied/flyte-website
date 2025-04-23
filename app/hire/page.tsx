import React from "react";
import HireBanner from "@/component/Hire/HireBanner";
import ServicesOverview from "@/component/Hire/ServicesOverview";
import ServiceFitHighlights from "@/component/Hire/ServiceFitHighlights";
import BookConsultation from "@/component/Common/BookConsultation";
import OperationsSections from "@/component/Home/OperationsSections";
import { techData } from "@/api/Dummy";
import SuccessStories from "@/component/Common/SuccessStories";
import HireSteps from "@/component/Hire/HireSteps";
import HirePackages from "@/component/Hire/HirePackages";

export const metadata = {
  title: "Hire | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
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
      <SuccessStories />
      <BookConsultation />
    </div>
  );
};

export default page;
