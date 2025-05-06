import React from "react";
import CommonBanner from "@/component/Common/CommonBanner";
import { productBannerData } from "@/api/Dummy";
import ProductsSections from "@/component/Products/ProductsSections";
import Contact from "@/component/Contact/Contact";
import ClutchSuccessStories from "@/component/Common/ClutchSuccessStories";
// import SuccessStories from "@/component/Common/SuccessStories";

export const metadata = {
  title: "Products | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

const page = () => {
  const productsBannerData = productBannerData;
  return (
    <div>
      <CommonBanner bannerData={productsBannerData} />
      <ProductsSections />
      <div className="container">
        {/* <SuccessStories /> */}
        <ClutchSuccessStories />
        <Contact />
      </div>
    </div>
  );
};

export default page;
