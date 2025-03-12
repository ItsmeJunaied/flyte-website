import { NewsBlogsBannerData } from "@/api/Dummy";
import BlogGlimpsSection from "@/component/Blogs/BlogGlimpsSection";
import CommonBanner from "@/component/Common/CommonBanner";
import Contact from "@/component/Contact/Contact";
import BlogSection from "@/component/Home/BlogSection";
import React from "react";

const page = () => {
  const bannerData = NewsBlogsBannerData;
  return (
    <div>
      <CommonBanner bannerData={bannerData} />
      <div className="container py-10">
        <BlogGlimpsSection />
      </div>
      <BlogSection />
      <div className="container">
        <Contact />
      </div>
    </div>
  );
};

export default page;
