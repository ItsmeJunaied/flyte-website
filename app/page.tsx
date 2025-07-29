import React from "react";
import Banner from "../component/Home/Banner";
import { bannerData, brandData, industrydata, serviceData, techData } from "../api/Dummy";
import Brands from "../component/Home/Brands";
import ServiceSection from "../component/Home/ServiceSection";
import IndustrySection from "../component/Home/IndustrySection";
import Contact from "../component/Contact/Contact";
import OperationsSections from "../component/Home/OperationsSections";
import ProjectSection from "../component/Home/ProjectSection";
import AboutUs from "../component/Home/AboutUs";
import ProductsHomeComp from "@/component/Home/ProductsHomeComp";

export const metadata = {
  title: "Flyte Solutions | Hire Remote Software Development Team.",
  description:
    "Flyte Solutions specializes in providing top remote software development teams, delivering innovative web, mobile, and cloud solutions to accelerate your business growth.",
  keywords: ["Flyte Solutions", "Web Development", "AI Solutions", "Mobile App", "Software Company", "Bangladesh IT"],
  openGraph: {
    title: "Flyte Solutions | Hire Remote Software Development Team.",
    description: "Flyte Solutions specializes in providing top remote software development teams, delivering innovative web, mobile, and cloud solutions to accelerate your business growth.",
    url: "https://flytesolutions.com",
    siteName: "Flyte Solutions Ltd.",
    images: [
      {
        url: "https://flytesolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Flyte Solutions Ltd. - Empowering Digital Innovation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flyte Solutions | Hire Remote Software Development Team.",
    description: "Flyte Solutions specializes in providing top remote software development teams, delivering innovative web, mobile, and cloud solutions to accelerate your business growth.",
    images: ["https://flytesolutions.com/logo.png"],
  },
};


const page = () => {
  return (
    <div>
      <div>
        <Banner bannerData={bannerData} />
        <div className="flex flex-col justify-center items-center ">
          <Brands title={brandData.title} brands={brandData.brands} />
        </div>
        <div className="bg-white">
          <AboutUs />
        </div>
        <div className="my-10 container">
          <ServiceSection serviceData={serviceData} />
        </div>
        <div className="bg-white py-10">
          <ProductsHomeComp />
        </div>
        <div className="bg-white">
          <IndustrySection industrydata={industrydata} />
        </div>
        <OperationsSections techData={techData} />
        <div className=" lg:bg-black bg-white">
          <ProjectSection />
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default page;
