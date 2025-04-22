import { NewsBlogsBannerData } from "@/api/Dummy";
import BlogGlimpsSection from "@/component/Blogs/BlogGlimpsSection";
import CommonBanner from "@/component/Common/CommonBanner";
import Contact from "@/component/Contact/Contact";
import BlogSection from "@/component/Home/BlogSection";
import React from "react";

export const metadata = {
  title: "Blogs | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

const page = () => {
  const bannerData = NewsBlogsBannerData;
  return (
    <div>
      <CommonBanner bannerData={bannerData} />
      <div className="container py-10">
        <BlogGlimpsSection />
      </div>
      <BlogSection />
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default page;
