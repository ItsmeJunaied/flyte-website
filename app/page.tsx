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
