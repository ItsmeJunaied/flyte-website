import Title from "@/component/Common/Title";
import React from "react";
import { aboutBannerData } from "../../../api/Dummy";

type AboutBannerData = {
  title: string;
  description: string;
  img: string;
  altText: string;
};

const AboutBanner = () => {
  const data: AboutBannerData | undefined = aboutBannerData;
  return (
    <div className=" mt-5 lg:mt-40">
      <span className="container flex flex-col items-center my-2 md:my-7">
        <Title title={data?.title} width="full" fontSize="text-lg lg:text-4xl" />
        <p className="text-center text-[#afadb5] text-xs md:text-sm md:mt-2">{data?.description}</p>
      </span>
      <div>
        {/* <img className="w-full" src="/images/about-banner.png" alt="About Us Banner" /> */}
        <img className="w-full lg:h-[500px] object-cover" src={data?.img} alt={data?.altText} />
      </div>
    </div>
  );
};

export default AboutBanner;
