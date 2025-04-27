import Link from "next/link";
import React from "react";

type BannerProps = {
  bannerData: {
    title: string;
    description: string;
    industries: {
      logo: string;
      name: string;
      path: string;
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
        // padding: "50px 20px",
        color: "white",
        textAlign: "center",
        // height: "740px",
        opacity: "100%",
      }}
      className="flex flex-col pt-10 lg:pt-20 pb-10 lg:pb-0 lg:h-[740px] justify-center items-start gap-5 "
    >
      <div className="container flex flex-col gap-[24px]">
        <div className="w-full flex justify-start items-start">
          <h2
            className="bannerTitle max-w-[1000px] text-start text-white text-2xl lg:text-5xl font-semibold leading-10 lg:leading-[64px]"
            dangerouslySetInnerHTML={{
              __html: bannerData.title.replace(
                /<span>/g,
                '<span style="display: inline; margin: 0; padding: 0; white-space: nowrap;">'
              ),
            }}
          ></h2>
        </div>

        <div className="w-full flex justify-start items-start">
          <h2 className="max-w-[840px] text-start text-white text-base lg:text-xl font-normal leading-7 lg:leading-loose">
            {bannerData.description}
          </h2>
        </div>

        <div className=" flex flex-row gap-2 overflow-x-auto scrollbar-hide ">
          {bannerData.industries.map((industry, index) => (
            <Link href={industry?.path}
              key={index}
              className=" w-[125px] lg:w-[140px] h-40 flex flex-col gap-3 justify-center items-center rounded-[10px] bannerIndustries hover:bg-white group"
            >
              <p className="h-1/2 text-4xl text-end flex justify-end items-end group-hover:text-btnColor">
                <i className={industry.logo}></i>
              </p>
              <h1 className="h-1/2 w-[140px] text-center text-white group-hover:text-black text-sm font-semibold leading-5 px-2 ">
                {industry.name}
              </h1>
            </Link>
          ))}
        </div>

        <div className=" flex flex-col lg:flex-row gap-2">
          <Link href={`/schedule-consultation`}
            id="alertButton"
            className="w-fit px-[32px] py-[12px] border border-btnColor hover:border-pink-500 bg-btnColor hover:bg-pink-500 text-white rounded-md"
          >
            Book A Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
