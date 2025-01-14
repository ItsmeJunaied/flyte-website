import CommonBanner from "@/component/Common/CommonBanner";
import Subtitle from "@/component/Common/Subtitle";
import SuccessStories from "@/component/Common/SuccessStories";
import Title from "@/component/Common/Title";
import Contact from "@/component/Contact/Contact";
import ServiceCard from "@/component/Services/ServiceCard";
import React from "react";

const servicesBannerData = {
  bgImage: "https://i.ibb.co.com/18ym442/Rectangle-3843.png",
  subtitle: "Explore Our Services, Built to Drive Your Success",
  title: "Discover Professional Services for Your Business",
  description:
    "We provide expert services to enhance your operations, improve efficiency, and help you achieve your goals.",
  btnName: "Book A Consultation",
  btnPath: "/about",
};

export const metadata = {
  title: "Services | Flyte Solutions Ltd.",
  description:
    "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};
const page = () => {
  return (
    <div>
      <CommonBanner bannerData={servicesBannerData} />

      <div className="mb-5">
      <div className=" flex-col gap-2 w-full flex justify-center items-center my-8  ">
        <Subtitle Subtitle={"Our Services"} />
        <Title
          width={"lg:w-full"}
          fontSize={" text-lg lg:text-3xl"}
          title={"Core Development Services"}
        />
      </div>
        <ServiceCard reverse={true} />
        <ServiceCard reverse={false} />
        <ServiceCard reverse={true} />
        <ServiceCard reverse={false} />
      </div>

      <div className="  container mx-auto">
        <SuccessStories />
        <Contact />
      </div>
    </div>
  );
};

export default page;
