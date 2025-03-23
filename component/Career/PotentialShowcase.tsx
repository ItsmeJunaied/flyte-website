import React from "react";

type Service = {
  name: string;
  icon: string;
};

type ShowcaseData = {
  title: string;
  description: string;
  image: string;
  services: Service[];
};

type PotentialProps = {
  direction: "left" | "right";
  fromColor: string;
  toColor: string;
  showCase: ShowcaseData;
};

const PotentialShowcase: React.FC<PotentialProps> = ({ direction, fromColor, toColor, showCase }) => {
  return (
    <div>
      <div
        className="px-4 lg:px-6 py-5 md:py-7 h-[400px] lg:h-[518px] relative rounded-3xl"
        style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }}
      >
        <h2 className=" text-white text-base lg:text-4xl font-bold">{showCase?.title}</h2>
        <p className="text-white text-sm lg:text-lg font-normal mt-1">{showCase?.description}</p>
        <img
          className={`w-[460px] lg:h-[326.92px] absolute bottom-0 ${
            direction === "left" ? "left-0" : "right-0"
          }`}
          src={showCase?.image}
        />
        <div
          className={`w-[90%] lg:w-[404px] lg:h-[273px] grid grid-cols-2 gap-2 lg:gap-0 absolute top-28 lg:top-[199px] ${
            direction === "left" ? "right-1/2 lg:right-10 translate-x-1/2 lg:translate-x-0" : "left-1/2 lg:left-10 -translate-x-1/2 lg:translate-x-0"
          }`}
        >
          {showCase?.services?.map((service, index) => (
            <div
              key={index}
              className="lg:w-[190px] h-[91px] lg:h-[124px] bg-[#311b92]/50 backdrop-blur-md rounded-xl flex flex-col justify-center items-center gap-2"
            >
              <i className={`text-xl md:text-4xl text-white fa-solid ${service?.icon}`}></i>
              <p className="text-white text-xs md:text-sm text-center font-semibold h-10">{service?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotentialShowcase;
