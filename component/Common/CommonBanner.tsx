import React from "react";
import Link from "next/link";

type BannerData = {
  bgImage: string;
  subtitle: string;
  title: string;
  description: string;
  btnName: string;
  btnPath: string;
};

const CommonBanner: React.FC<{ bannerData: BannerData }> = ({ bannerData }) => {
  return (
    <div
      className="pt-10 lg:pt-40 relative lg:min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerData?.bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="container pb-8 lg:pb-16 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 relative">
        <div className="w-full lg:w-[50%] flex flex-col justify-between space-y-8 lg:space-y-16">
          <div>
            <h2 className="text-white text-base lg:text-lg font-bold tracking-wide mb-4">
              - {bannerData?.subtitle}!
            </h2>
            <h1 className="text-white text-2xl lg:text-4xl font-bold leading-10 tracking-wider">
              {bannerData?.title}
            </h1>
          </div>
          <p className="text-white text-sm lg:text-[18px] tracking-wide"> {bannerData?.description}</p>
          <Link
            href={bannerData?.btnPath}
            className="w-fit px-8 py-3 bg-[#5856d6] rounded-md text-white text-base font-semibold"
          >
            {bannerData?.btnName}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
