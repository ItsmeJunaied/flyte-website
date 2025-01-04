"use client"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

type BannerProps = {
  bannerData: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      yearsExperience: number;
      projectsCompleted: number;
      recurringClients: number;
      solutionsDelivered: number;
    };
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
        backgroundAttachment: "fixed", // Enables the parallax effect
        padding: "50px 20px",
        color: "white",
        textAlign: "center",
        height: "640px",
        opacity: "100%",
      }}
      className="flex flex-col justify-center items-center gap-5 "
    >

      <div className="relative pt-3">
        <h1 className="text-[#6ec1ff] text-lg font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">
          -{bannerData.title}
        </h1>
        <DotLottieReact
          src="/plane.lottie"
          loop
          autoplay
          style={{
            width: "200px", // Adjust size as needed
            height: "200px", // Adjust size as needed
          }}
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className=" w-full flex justify-center items-center">
        <h2 className=" max-w-[1000px] text-center text-white text-6xl font-bold font-['DM Sans'] leading-[80px] ">
          {bannerData.subtitle}
        </h2>
      </div>

      <div className=" w-full flex justify-center items-center">
        <h2 className=" max-w-[600px] text-center text-[#dddddd] text-sm font-normal font-['DM Sans']  ">
          {bannerData.description}
        </h2>
      </div>

      <button id="alertButton" className=" uppercase px-6 py-2 bg-btnColor text-white rounded-md">
        Book A Consultation
      </button>


    </div>
  );
};

export default Banner;
