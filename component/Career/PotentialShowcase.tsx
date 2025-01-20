import React from "react";

type Service = {
  name: string;
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
        className="px-3 lg:px-6 py-3 md:py-7 lg:h-[518px] relative rounded-3xl"
        style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }}
      >
        <h2 className=" text-white text-xl lg:text-4xl font-bold">{showCase?.title}</h2>
        <p className="text-white text-sm lg:text-lg font-normal mt-1">{showCase?.description}</p>
        <img
          className={`w-full lg:w-[460px] lg:h-[326.92px] lg:absolute top-[192px] ${
            direction === "left" ? "left-0" : "right-0"
          }`}
          src={showCase?.image}
        />
        <div
          className={`w-full lg:w-[404px] h-[273px] grid grid-cols-2 gap-5 lg:gap-0 lg:absolute top-[199px] ${
            direction === "left" ? "right-10" : "left-10"
          }`}
        >
          {showCase?.services?.map((service, index) => (
            <div
              key={index}
              className="w-full lg:w-[190px] h-[124px] bg-[#311b92]/50 backdrop-blur-md rounded-xl"
            >
              <p className="p-2 pb-5 flex justify-center items-end h-full text-white text-sm text-center font-semibold">
                {service?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotentialShowcase;
