import Link from "next/link";
import React from "react";
import { careerBannerData } from "../../api/Dummy";

const CareerBanner = () => {
  return (
    <div className="container my-5 md:my-12 flex flex-col md:flex-row gap-10 md:gap-20 w-full">
      <div className="flex flex-col gap-5 md:gap-10 md:w-1/2">
        <h2 className="text-xl md:text-4xl font-bold">{careerBannerData?.title}</h2>
        <p className="text-sm md:text-base font-normal">{careerBannerData?.description}</p>
        <div className="flex flex-wrap gap-3">
          {careerBannerData?.images?.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </div>
        <Link
          href="/"
          className="w-full md:w-[137px] text-white text-sm text-center font-semibold px-8 py-3 bg-[#5856d6] hover:bg-[#4a46bc] rounded-md"
        >
          Learn More
        </Link>
      </div>
      <div className="md:w-1/2">
        <img className="w-full md:w-[600px] md:h-[480px] rounded-[15px]" src={careerBannerData?.bannerImage} alt="" />
      </div>
    </div>
  );
};

export default CareerBanner;
