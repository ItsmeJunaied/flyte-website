import Link from "next/link";
import React from "react";

type HeroBannerProps = {
  title?: string;
  short_title?: string;
  short_description?: string;
  image?: string;
  video_link?: string;
};

const HeroBanner: React.FC<{ bannerData: HeroBannerProps }> = ({ bannerData }) => {
  const { title, short_title, short_description, image } = bannerData;
  return (
    <div
      className="pt-10 lg:pt-44 relative lg:min-h-[610px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80" />
      {/* className="container pb-8 lg:pb-16 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 relative" */}
      <div className="container pb-8 lg:pb-16 relative">
        <div className="w-full lg:w-[60%]">
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-[#6ec1ff] text-base lg:text-lg uppercase font-bold tracking-wide flex lg:items-center gap-2">
              <div className="w-[22px] h-0.5 bg-[#6ec1ff] mt-3 lg:mt-0" /> {short_title}
            </h4>
            <h1 className="text-white text-2xl lg:text-4xl font-bold lg:leading-[46px]">{title}</h1>
            <p className="text-[#dddddd] text-sm leading-snug">{short_description}</p>
          </div>

          <div className="mt-8 lg:mt-12">
            <Link
              href="/schedule-consultation"
              className="w-fit px-8 py-3 bgGradientNevyBlue rounded-md text-white text-base font-semibold"
            >
              Book A Consultation
            </Link>
          </div>
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
