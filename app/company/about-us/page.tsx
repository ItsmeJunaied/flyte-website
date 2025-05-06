// import SuccessStories from "@/component/Common/SuccessStories";
import ClutchSuccessStories from "@/component/Common/ClutchSuccessStories";
import AboutOverview from "@/component/Company/AboutUs/AboutOverview";
import BehindFlyte from "@/component/Company/AboutUs/BehindFlyte";
import Roadmap from "@/component/Company/AboutUs/Roadmap";
import Contact from "@/component/Contact/Contact";
import React from "react";

export const metadata = {
  title: "Company | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

const page = () => {
  return (
    <div>
      <AboutOverview />
      <Roadmap/>
      <BehindFlyte/>
      {/* <SuccessStories /> */}
      <ClutchSuccessStories/>
      <Contact />
    </div>
  );
};

export default page;
