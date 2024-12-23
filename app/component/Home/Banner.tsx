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
        padding: "50px 20px",
        color: "white",
        textAlign: "center",
        height: "720px",
        opacity: "100%",
      }}
      className=" flex flex-col justify-start items-center gap-5 "
    >
      <h1 className="text-[#6ec1ff] text-lg font-bold font-['DM Sans'] uppercase leading-tight tracking-widest pt-20">
        -{bannerData.title}
      </h1>
      <div className=" w-full flex justify-center items-center">
        <h2 className=" max-w-[600px] text-center text-white text-4xl font-bold font-['DM Sans'] leading-[46px] ">
          {bannerData.subtitle}
        </h2>
      </div>

      <div className=" w-full flex justify-center items-center">
        <h2 className=" max-w-[600px] text-center text-[#dddddd] text-sm font-normal font-['DM Sans'] leading-snug ">
          {bannerData.description}
        </h2>
      </div>

      <button className=" uppercase px-6 py-2 bg-btnColor text-white rounded-md">
        Book A Consultation
      </button>

      <div className="mt-56">
        <div className=" px-10 lg:px-20 py-12 bg-white rounded-xl shadow-[0px_0px_10px_10px_rgba(233,233,233,0.25)] grid grid-cols-2 lg:grid-cols-4 gap-6  overflow-hidden  place-items-center">
          <div className="flex flex-col justify-center items-center gap-2.5 h-full">
            <div className="text-center text-black text-[28px] lg:text-[32px] font-bold font-['DM Sans']">
              {bannerData.stats.yearsExperience}+
            </div>
            <div className="text-center text-black text-base lg:text-xl font-medium font-['DM Sans']">
              Years Experience
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5 h-full">
            <div className="text-center text-black text-[28px] lg:text-[32px] font-bold font-['DM Sans']">
              {bannerData.stats.projectsCompleted}+
            </div>
            <div className="text-center text-black text-base lg:text-xl font-medium font-['DM Sans']">
              Projects Completed
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5 h-full">
            <div className="text-center text-black text-[28px] lg:text-[32px] font-bold font-['DM Sans']">
              {bannerData.stats.recurringClients}%
            </div>
            <div className="text-center text-black text-base lg:text-xl font-medium font-['DM Sans']">
              Recurring Clients
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5 h-full">
            <div className="text-center text-black text-[28px] lg:text-[32px] font-bold font-['DM Sans']">
              {bannerData.stats.solutionsDelivered}+
            </div>
            <div className="text-center text-black text-base lg:text-xl font-medium font-['DM Sans']">
              Solutions Delivered
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
