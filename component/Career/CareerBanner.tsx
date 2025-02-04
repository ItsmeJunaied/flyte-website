import Link from "next/link";
import React from "react";
import { careerBannerData } from "../../api/Dummy";

const CareerBanner = () => {
  return (
    <div className="container pt-5 lg:pt-7 mb-10 md:mb-16 flex flex-col lg:flex-row gap-5 md:gap-20 w-full">
      <div className="flex flex-col gap-5 md:gap-10 lg:w-1/2">
        <h2 className="text-xl md:text-4xl font-bold">{careerBannerData?.title}</h2>
        <p className="text-sm md:text-base font-normal">{careerBannerData?.description}</p>
        <div className="flex flex-wrap gap-3">
          {careerBannerData?.images?.map((image, index) => (
            <img className="h-10 lg:h-16" key={index} src={image} alt={`career band image-${index}`} />
          ))}
        </div>
        <Link
          href="/"
          className="w-full md:w-[137px] text-white text-sm text-center font-semibold px-8 py-3 bg-[#5856d6] hover:bg-[#4a46bc] rounded-md"
        >
          Learn More
        </Link>
      </div>
      <div className="lg:w-1/2">
        <img className="w-full lg:w-[600px] lg:h-[480px] rounded-[15px] object-cover" src={careerBannerData?.bannerImage} alt="career banner image" />
      </div>
    </div>
  );
};

export default CareerBanner;
