import React from "react";
import CommonBanner from "@/component/Common/CommonBanner";
import { induscriedBannerData } from "@/api/Dummy";
import ProductsSections from "@/component/Products/ProductsSections";
import Contact from "@/component/Contact/Contact";
import SuccessStories from "@/component/Common/SuccessStories";

export const metadata = {
  title: "Products | Flyte Solutions Ltd.",
  description:
    "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

const page = () => {
  const industriesBannerData = induscriedBannerData;
  return (
    <div>
      <CommonBanner bannerData={industriesBannerData} />

      <ProductsSections />

      <div className=" container mx-auto">
        {/* <SuccessStories/> */}
        <Contact />
      </div>
    </div>
  );
};

export default page;
