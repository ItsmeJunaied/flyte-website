import AboutBanner from "@/component/Company/AboutUs/AboutBanner";
import MissionVision from "@/component/Company/AboutUs/MissionVision";
import React from "react";

export const metadata = {
  title: "Company | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

const page = () => {
  return (
    <div>
      <AboutBanner />
      <MissionVision />
    </div>
  );
};

export default page;
