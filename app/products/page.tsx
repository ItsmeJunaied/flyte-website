import React from "react";
import CommonBanner from "@/component/Common/CommonBanner";
import { productBannerData } from "@/api/Dummy";
import ProductsSections from "@/component/Products/ProductsSections";
import Contact from "@/component/Contact/Contact";
import ClutchSuccessStories from "@/component/Common/ClutchSuccessStories";
// import SuccessStories from "@/component/Common/SuccessStories";

export const metadata = {
  title: "Our Products | Flyte Solutions Ltd.",
  description: "Browse innovative digital products built by Flyte Solutions Ltd. From task managers to enterprise tools, our products are designed to solve real-world problems with modern technology.",
  keywords: [
    "Flyte Solutions products",
    "Digital products",
    "Task management tools",
    "Enterprise software",
    "SaaS solutions",
    "Productivity apps",
    "Software products in Bangladesh"
  ],
  openGraph: {
    title: "Explore Our Products | Flyte Solutions Ltd.",
    description: "Discover powerful and user-friendly products developed by Flyte Solutions Ltd., tailored for businesses and individuals.",
    url: "https://flytesolutions.com/products",
    siteName: "Flyte Solutions Ltd.",
    images: [
      {
        url: "https://flytesolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Flyte Solutions Ltd. - Our Products",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Our Products | Flyte Solutions Ltd.",
    description: "Flyte Solutions Ltd. delivers innovative digital products to boost productivity, collaboration, and business efficiency.",
    images: ["https://flytesolutions.com/logo.png"],
  },
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
