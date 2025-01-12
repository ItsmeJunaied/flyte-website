import React from "react";
import CustomNavigateButton from "./CustomNavigateButton";

const HireBanner = () => {
  return (
    <div className="mx-auto">
      <div
        className="w-full h-[250px] md:h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/bH3K5FL/Rectangle-3843-2x.png')",
        }}
      >
        {/* Content */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center gap-3 md:gap-6 text-center text-white p-2">
          <p className="text-[#6ec1ff] text-xs md:text-lg font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">
            - Dedicated Developers, Aligned with Your Goals!
          </p>

          <h2 className="text-center text-white text-base md:text-4xl font-bold font-['DM Sans'] md:leading-[40px] max-w-[558px]">
            Hire a dedicated development team built for your needs
          </h2>
          <p className="md:max-w-[558px] text-center text-[#dddddd] text-xs md:text-sm font-normal font-['DM Sans'] leading-snug">
            Expand your team with dedicated developers who integrate smoothly and enhance your project’s
            success.
          </p>

          {/* <Link href="/job-application-wizard" className="px-2 md:px-8 py-1 md:py-3 text-sm bg-[#5856d6] hover:bg-[#3d3b98] rounded-md mt-3 md:mt-8">Build Your Development Team</Link> */}
          
          <CustomNavigateButton 
            btnName="Build Your Development Team"
            textColor="white"
            textHoverColor="white"
            bgColor="#5856d6"
            bgHover="#3d3b98"
          />
        </div>
      </div>
    </div>
  );
};

export default HireBanner;
