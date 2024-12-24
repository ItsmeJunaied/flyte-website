import React from "react";
import Banner from "./component/Home/Banner";
import { bannerData, blogData, brandData, projectData, serviceData, techData } from "../api/Dummy";
import Brands from "./component/Home/Brands";
import ServiceSection from "./component/Home/ServiceSection";
import IndustrySection from "./component/Home/IndustrySection";
import Footer from "./component/Common/Footer";
import Contact from "./component/Contact/Contact";
import BlogSection from "./component/Home/BlogSection";
import OperationsSections from "./component/Home/OperationsSections";
import ProjectSection from "./component/Home/ProjectSection";
const page = () => {
  // console.log(brandData)
  return (
    <div className=" bg-[#E6E6E6]">
      <div className=" ">
        <div className=" mb-[400px] lg:mb-56">
          <Banner bannerData={bannerData} />
        </div>
        <div className="  flex flex-col justify-center items-center ">
          <Brands title={brandData.title} brands={brandData.brands} />
        </div>
        <div className=" mt-24 container mx-auto">
          <ServiceSection serviceData={serviceData} />
        </div>
        <div className=" bg-white">
          {/* <IndustrySection /> */}
        </div>

        <div className=" my-[30px]">
          <OperationsSections techData={techData} />
        </div>
        <div>
          <ProjectSection projectData={projectData}/>
        </div>
        <div className=" my-[30px]">
          <BlogSection blogData={blogData}/>
        </div>
        <div className=" mt-24 container mx-auto">
          <Contact/>
        </div>


        <div className=" bg-footerBg">
          <div className=" container mx-auto">
          <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
