import React from "react";
import HireBanner from "@/component/Hire/HireBanner";
import ServicesOverview from "@/component/Hire/ServicesOverview";
import ServiceFitHighlights from "@/component/Hire/ServiceFitHighlights";
import BookConsultation from "@/component/Hire/BookConsultation";

export const metadata = {
  title: "Hire | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};
const page = () => {
  return (
    <div>
      <HireBanner />
      <ServicesOverview />
      <ServiceFitHighlights />
      <BookConsultation />
    </div>
  );
};

export default page;
