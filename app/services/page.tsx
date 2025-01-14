import CommonBanner from "@/component/Common/CommonBanner";
import Subtitle from "@/component/Common/Subtitle";
import SuccessStories from "@/component/Common/SuccessStories";
import Title from "@/component/Common/Title";
import Contact from "@/component/Contact/Contact";
import ServiceCard from "@/component/Services/ServiceCard";
import React from "react";
import { servicesBannerData } from "@/api/Dummy";

export const metadata = {
  title: "Services | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
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
        <ServiceCard reverse={true} />
        <ServiceCard reverse={false} />
        <ServiceCard reverse={true} />
        <ServiceCard reverse={false} />
      </div>

      <div className="container">
        <SuccessStories />
        <Contact />
      </div>
    </div>
  );
};

export default page;
