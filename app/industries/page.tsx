import { induscriedBannerData } from "@/api/Dummy";
import CommonBanner from "@/component/Common/CommonBanner";
import Contact from "@/component/Contact/Contact";
import IndustryPageSection from "@/component/Industries/IndustryPageSection";
import React from "react";

export const metadata = {
  title: "Industry | Flyte Solutions Ltd.",
  description: "Discover how Flyte Solutions Ltd. empowers diverse industries with cutting-edge web, mobile, and AI technologies. We deliver tailored digital solutions to drive growth and innovation.",
  keywords: [
    "Industry software solutions",
    "Flyte Solutions for businesses",
    "Web solutions for industry",
    "Mobile app for enterprises",
    "AI for business",
    "Custom software development",
    "Bangladesh tech industry"
  ],
  openGraph: {
    title: "Empowering Industries | Flyte Solutions Ltd.",
    description: "Flyte Solutions Ltd. partners with industries to deliver innovative web, mobile, and AI-driven solutions tailored to business needs.",
    url: "https://flytesolutions.com/industries",
    siteName: "Flyte Solutions Ltd.",
    images: [
      {
        url: "https://flytesolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Empowering Industries - Flyte Solutions Ltd.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empowering Industries | Flyte Solutions Ltd.",
    description: "Explore Flyte Solutions Ltd.’s industry-specific digital solutions powered by web, mobile, and AI expertise.",
    images: ["https://flytesolutions.com/logo.png"],
  },
};


const page: React.FC = () => {
  const industriesBannerData = induscriedBannerData;
  return (
    <div>
      <CommonBanner bannerData={industriesBannerData} />
      <IndustryPageSection />

      <div className="container">
        <Contact />
      </div>
    </div>
  );
};

export default page;
