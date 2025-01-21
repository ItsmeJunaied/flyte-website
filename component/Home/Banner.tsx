import React from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";

type BannerProps = {
  bannerData: {
    title: string;
    description: string;
    industries: {
      logo: string;
      name: string;
    }[];
    bannerImage: string;
  };
};

const Banner: React.FC<BannerProps> = ({ bannerData }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerData.bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "50px 20px",
        color: "white",
        textAlign: "center",
        height: "640px",
        opacity: "100%",
      }}
      className="flex flex-col  justify-center items-start gap-5 "
    >
      <div className=" container   flex flex-col gap-[24px]">
        <div className="w-full flex justify-start items-start">
          <h2
            className="bannerTitle max-w-[1000px] text-start text-white text-[32px] lg:text-5xl font-bold leading-9  lg:leading-[80px] tracking-normal"
            dangerouslySetInnerHTML={{
              __html: bannerData.title.replace(
                /<span>/g,
                '<span style="display: inline; margin: 0; padding: 0; white-space: nowrap;">'
              ),
            }}
          ></h2>
        </div>

        <div className=" w-full flex justify-start items-start">
          <h2 className=" max-w-[600px] text-start text-[#dddddd] text-xl font-normal font-['DM Sans']  ">
            {bannerData.description}
          </h2>
        </div>

        <div className=" flex flex-row gap-2 overflow-x-auto scrollbar-hide ">
          {bannerData.industries.map((industry, index) => (
            <button
              key={index}
              className="w-[140px] h-40 flex flex-col gap-3 justify-center items-center rounded-[10px] bannerIndustries"
            >
              <p className="h-1/2 text-4xl text-end flex justify-end items-end">
                <i className={industry.logo}></i>
              </p>
              <h1 className="h-1/2 w-[140px] text-center text-white text-sm font-semibold leading-5">
                {industry.name}
              </h1>
            </button>
          ))}
        </div>

        <div className=" flex flex-col lg:flex-row gap-2">
          <button
            id="alertButton"
            className=" w-fit uppercase px-[32px] py-[12px] border border-btnColor hover:border-pink-500 bg-btnColor hover:bg-pink-500 text-white rounded-md"
          >
            Book A Consultation
          </button>
          <button
            id="alertButton"
            className=" w-fit uppercase px-[32px] py-[12px] hover:bg-btnColor hover:border-btnColor border-white border text-white rounded-md"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
