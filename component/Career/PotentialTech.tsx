import React from "react";

type Service = {
  name: string;
  icon: string;
};

type TechnologyShowcase = {
  title: string;
  description: string;
  services: Service[];
};

const PotentialTech: React.FC<{ technologyShowcase: TechnologyShowcase }> = ({ technologyShowcase }) => {
  return (
    <div
      className="px-4 md:px-6 py-5 md:py-7 md:h-[518px] relative bg-gradient-to-br rounded-3xl"
      style={{ background: `linear-gradient(to bottom, #84ffff, #d5d5d3)` }}
    >
      <h2 className="text-black/90 text-xl md:text-4xl font-bold">{technologyShowcase?.title}</h2>
      <p className="text-black/90 text-sm md:text-base mt-2">{technologyShowcase?.description}</p>

      <div className={`grid grid-cols-1 gap-x-3 gap-y-2 md:gap-y-4 mt-5 md:mt-12`}>
        {technologyShowcase?.services?.map((service, index) => (
          <div
            key={index}
            className="py-1 h-[100px] md:h-[124px] bg-white/50 rounded-xl flex flex-col justify-center items-center gap-2"
          >
            <i className={`text-xl md:text-4xl fa-solid ${service?.icon}`}></i>
            <p className="text-sm text-black font-semibold">{service?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotentialTech;
