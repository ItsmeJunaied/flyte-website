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
      className="pt-10 lg:pt-40 relative lg:min-h-[610px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="container pb-8 lg:pb-16 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 relative">
        <div className="w-full lg:w-[60%] flex flex-col justify-between space-y-8 lg:space-y-16">
          <div>
            <h2 className="text-white text-base lg:text-lg font-bold tracking-wide mb-4">{short_title}</h2>
            <h1 className="text-white text-2xl lg:text-4xl font-bold leading-10 tracking-wider">{title}</h1>
          </div>
          <p className="text-white text-sm lg:text-[18px] tracking-wide">{short_description}</p>
          <button className="w-fit px-8 py-3 bg-[#5856d6] rounded-md text-white text-base font-semibold">
            Book A Consultation
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
