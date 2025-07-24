import CommonBanner from "@/component/Common/CommonBanner";
import Subtitle from "@/component/Common/Subtitle";
// import SuccessStories from "@/component/Common/SuccessStories";
import Title from "@/component/Common/Title";
import Contact from "@/component/Contact/Contact";
import ServiceCard from "@/component/Services/ServiceCard";
import React from "react";
import { servicesBannerData, serviceData } from "@/api/Dummy";
import ClutchSuccessStories from "@/component/Common/ClutchSuccessStories";

export const metadata = {
  title: "Our Services | Flyte Solutions Ltd.",
  description: "Explore a wide range of software development services at Flyte Solutions Ltd., including web development, mobile apps, DevOps, AI/ML, and more. We turn ideas into scalable digital solutions.",
  keywords: [
    "Software development services",
    "Flyte Solutions services",
    "Web development",
    "Mobile app development",
    "AI and machine learning",
    "DevOps services",
    "IT solutions in Bangladesh"
  ],
  openGraph: {
    title: "Software Development Services | Flyte Solutions Ltd.",
    description: "Flyte Solutions Ltd. offers expert services in web, mobile, DevOps, and AI to help businesses grow and innovate.",
    url: "https://flytesolutions.com/services",
    siteName: "Flyte Solutions Ltd.",
    images: [
      {
        url: "https://flytesolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Flyte Solutions Ltd. - Software Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | Flyte Solutions Ltd.",
    description: "Transform your business with Flyte Solutions Ltd.'s full suite of development services including web, mobile, DevOps, and AI.",
    images: ["https://flytesolutions.com/logo.png"],
  },
};



const page = () => {
  return (
    <div>
      <CommonBanner bannerData={servicesBannerData} />

      <div className="container mb-5">
        <div className=" flex-col gap-2 w-full flex justify-center items-center my-8  ">
          <Subtitle Subtitle={"Our Services"} />
          <Title width={"lg:w-full"} fontSize={" text-lg lg:text-3xl"} title={"Core Development Services"} />
        </div>
        <div>
          {serviceData?.map((service, index) => (
            <div key={index}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* <SuccessStories /> */}
        <ClutchSuccessStories/>
        <Contact />
      </div>
    </div>
  );
};

export default page;
