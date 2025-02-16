/* eslint-disable @next/next/no-img-element */
import React from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";

type HeroBannerProps = {
  heroSubtitle?: string;
  heroTitle?: string;
  heroDesctiption?: string;
  heroButton?: string;
  heroImage?: string;
};

const HeroBanner: React.FC<{ bannerData: HeroBannerProps }> = ({ bannerData }) => {
  return (
    <div className="container pt-5 lg:pt-7 pb-8 lg:pb-16 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16">
      <div className="w-full lg:w-[40%] flex flex-col justify-between">
        <div>
          <Subtitle Subtitle={bannerData?.heroSubtitle || "Our Dedicated Developers"} />
          <Title
            width="full"
            title={bannerData?.heroTitle || "Hire Dedicated Developers for Seamless User Experiences"}
          />
        </div>
        <p className="text-[#12094a] text-sm py-5 lg:py-7">{bannerData?.heroDesctiption}</p>
        <button className="w-fit px-8 py-1.5 bg-[#5856d6] rounded-md text-white text-base font-semibold">
          {bannerData?.heroButton}
        </button>
      </div>
      <div className="w-full lg:w-[60%]">
        <img className="w-full aspect-[16/9] object-cover rounded-2xl" src={bannerData?.heroImage} alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
