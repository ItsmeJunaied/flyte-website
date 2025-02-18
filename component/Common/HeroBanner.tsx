/* eslint-disable @next/next/no-img-element */
import React from "react";

type HeroBannerProps = {
  heroSubtitle?: string;
  heroTitle?: string;
  heroDesctiption?: string;
  heroButton?: string;
  heroImage?: string;
};

const HeroBanner: React.FC<{ bannerData: HeroBannerProps }> = ({ bannerData }) => {
  return (
    <div
      className="pt-10 lg:pt-40 relative"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/d0Sv44HQ/home-page-experiment-5-cover.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className=" container  pb-8 lg:pb-16 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 relative">
        <div className="w-full lg:w-[40%] flex flex-col justify-between space-y-8 lg:space-y-16">
          <div>
            <h2 className="text-white text-base lg:text-lg font-bold mb-4">{bannerData?.heroSubtitle}</h2>
            <h1 className="text-white text-2xl lg:text-4xl font-bold">{bannerData?.heroTitle}</h1>
          </div>
          <p className="text-white text-sm">{bannerData?.heroDesctiption}</p>
          <button className="w-fit px-8 py-3 bg-[#5856d6] rounded-md text-white text-base font-semibold">
            {bannerData?.heroButton}
          </button>
        </div>
        {/* <div className="w-full lg:w-[60%]">
          <img
            className="w-full aspect-[16/9] object-cover rounded-2xl"
            src={bannerData?.heroImage}
            alt={bannerData?.heroSubtitle}
          />
        </div> */}
      </div>
    </div>
  );
};

export default HeroBanner;
