import React from "react";

type Features = {
  id: number;
  icon: string;
  title: string;
  color: string;
};

type FeaturesProps = {
  name: string;
  description: string;
  features: Features[];
};

const FeaturesCard: React.FC<{ data: FeaturesProps; Width?: string }> = ({ data, Width }) => {
  const { name, description, features } = data || {};
  return (
    <div className="bg-gradient-to-b from-[#8e8cff] to-[#5856d6] relative">
      <div className="container p-5 lg:p-16">
        <h2 className="text-center text-white text-2xl lg:text-[45px] font-bold mb-2">{name}</h2>
        <p className="text-center text-white text-base lg:text-lg">{description}</p>

        <div className="mt-5 lg:mt-14 flex flex-wrap justify-center gap-7">
          {features?.map((feature, index) => (
            <div
              key={index}
              className={`p-4 flex items-center gap-3 bg-white/5 rounded-[7.20px] border border-[#1ed0c6] ${Width}`}
              style={{ borderColor: feature?.color }}
            >
              <i
                className={`fa-2x fa-solid bg-transparent font-extralight ${feature?.icon}`}
                style={{ color: feature?.color }}
              ></i>
              <span className="text-white text-sm font-semibold">{feature?.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
