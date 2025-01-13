import React from "react";
import CustomNavigateButton from "../Hire/CustomNavigateButton";
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
    <div className="">
      <div
        className="w-full h-[250px] md:h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bannerData?.bgImage})`,
        }}
      >
        {/* Content */}
        <div className="container h-full flex flex-col justify-center gap-3 md:gap-6 text-white p-2">
          <p className="text-[#6ec1ff] text-xs md:text-lg font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">
            - {bannerData?.subtitle}!
          </p>

          <h2 className="text-white text-base md:text-4xl font-bold font-['DM Sans'] md:leading-[40px] max-w-[558px]">
            {bannerData?.title}
          </h2>
          <p className="md:max-w-[558px] text-[#dddddd] text-xs md:text-sm font-normal font-['DM Sans'] leading-snug">
            {bannerData?.description}
          </p>

          <Link
            href={bannerData?.btnPath}
            className="h-[42px] w-fit px-8 py-3 bg-[#5856d6] rounded-md justify-start items-start gap-2.5 inline-flex overflow-hidden"
          >
            <div className="text-white text-sm font-semibold font-['DM Sans']">
            {bannerData?.btnName}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
