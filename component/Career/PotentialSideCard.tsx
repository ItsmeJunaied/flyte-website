import React from "react";

type Service = {
  name: string;
};

type Showcase = {
  title: string;
  description: string;
  services: Service[];
};

type PotentialProps = {
  fromColor: string;
  toColor: string;
  showCase: Showcase;
  columns: number;
  paddingTop: string;
};

const PotentialSideCard: React.FC<PotentialProps> = ({ fromColor, toColor, showCase, columns, paddingTop }) => {
  return (
    <div
      className="px-3 md:px-6 py-3 md:py-7 h-[400px] md:h-[518px] relative bg-gradient-to-br rounded-3xl"
      style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }}
    >
      <h2 className="text-black/90 text-xl md:text-4xl font-bold">{showCase?.title}</h2>
      <p className="text-black/90 text-sm md:text-base mt-2">{showCase?.description}</p>

      <div  className={`grid grid-cols-1 md:grid-cols-${columns} gap-x-3 gap-y-4 ${paddingTop}`}>
        {showCase?.services?.map((service, index) => (
          <div
            key={index}
            className="h-10 md:h-[124px] bg-white/50 rounded-xl flex justify-center items-center md:items-end"
          >
            <p className="text-sm text-black font-semibold md:mb-5">{service?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotentialSideCard;
