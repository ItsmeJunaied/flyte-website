import React from "react";
import Banner from "../component/Home/Banner";
import { bannerData,  brandData, industrydata, serviceData, techData } from "../api/Dummy";
import Brands from "../component/Home/Brands";
import ServiceSection from "../component/Home/ServiceSection";
import IndustrySection from "../component/Home/IndustrySection";
import Contact from "../component/Contact/Contact";
import OperationsSections from "../component/Home/OperationsSections";
import ProjectSection from "../component/Home/ProjectSection";
import AboutUs from "../component/Home/AboutUs";
import ProductsHomeComp from "@/component/Home/ProductsHomeComp";
// import ServiceMarquee from "../component/Home/ServiceMarquee";
const page = () => {
  // console.log(brandData)nlkmkj
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
        <div className=" my-10 container">
          <ServiceSection serviceData={serviceData} />
        </div>
        <div className=" bg-white py-10">
          {/* <ServiceMarquee/> */}
          <ProductsHomeComp/>
        </div>
        <div className=" bg-white ">
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
        <div className="container">
          <Contact  />
        </div>
      </div>
    </div>
  );
};

export default page;
