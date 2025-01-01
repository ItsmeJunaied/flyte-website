import React from "react";
import Banner from "./component/Home/Banner";
import { bannerData,  brandData, industrydata, serviceData, techData } from "../api/Dummy";
import Brands from "./component/Home/Brands";
import ServiceSection from "./component/Home/ServiceSection";
import IndustrySection from "./component/Home/IndustrySection";
import Contact from "./component/Contact/Contact";
import OperationsSections from "./component/Home/OperationsSections";
import ProjectSection from "./component/Home/ProjectSection";
import AboutUs from "./component/Home/AboutUs";
import ServiceMarquee from "./component/Home/ServiceMarquee";
const page = () => {
  // console.log(brandData)
  return (
    <div className=" ">
      <div className=" ">
        <div className=" ">
          <Banner bannerData={bannerData} />
        </div>
        <div className="  flex flex-col justify-center items-center ">
          <Brands title={brandData.title} brands={brandData.brands} />
        </div>
        <div className="  bg-white">
          <AboutUs/>
        </div>
        <div className=" mt-24 container mx-auto">
          <ServiceSection serviceData={serviceData} />
        </div>
        <div>
          <ServiceMarquee/>
        </div>
        <div className=" bg-white">
          <IndustrySection industrydata={industrydata} />
        </div>
        <div className=" ">
          <OperationsSections techData={techData} />
        </div>
        <div className=" bg-black">
          <ProjectSection />
        </div>
        {/* <ScrollSection/> */}
        {/* <div className=" my-[30px]">
          <BlogSection blogData={blogData}/>
        </div> */}
        <div className="  container mx-auto">
          <Contact/>
        </div>



      </div>
    </div>
  );
};

export default page;
