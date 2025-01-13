import { induscriedBannerData } from "@/api/Dummy";
import CommonBanner from "@/component/Common/CommonBanner";
import Contact from "@/component/Contact/Contact";
import IndustryPageSection from "@/component/Industries/IndustryPageSection";
import React from "react";

export const metadata = {
  title: "Industry | Flyte Solutions Ltd.",
  description:
    "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

const page: React.FC = () => {
  const industriesBannerData = induscriedBannerData;
  return (
    <div>
      <CommonBanner bannerData={industriesBannerData} />
      <IndustryPageSection />

      <div className=" container mx-auto">
        <Contact />
      </div>
    </div>
  );
};

export default page;
