import React from "react";
import ListCard from "../Common/ListCard";

type CardProps = {
  reverse: boolean;
};

const ServiceCard: React.FC<CardProps> = ({ reverse }) => {
  return (
    <div className={`container px-5 py-10 md:flex justify-center gap-8 space-y-5 md:space-y-0 ${reverse && "flex-row-reverse"}`}>
      <div className={`md:w-[460px] md:h-[365px] flex flex-col items-center md:items-start ${!reverse && "items-center md:items-end"} `}>
        <div className="w-40 md:w-60 h-[120px] md:h-[155px] bg-emerald-300 md:ml-32 -mb-12" />
        <div className="w-40 md:w-60 h-[120px] md:h-[155px] bg-emerald-500 mr-32" />
        <div className="w-40 md:w-60 h-[120px] md:h-[155px] bg-emerald-700 md:ml-32 -mt-12" />
      </div>

      <div className="md:w-[460px] h-[365px] space-y-6">
        <p className="text-[#757575] text-sm uppercase tracking-wide">Team Extension</p>
        <h2 className="text-[#1b1717] text-xl font-bold uppercase tracking-wider">
          Expand your team with skilled experts to drive growth and innovation
        </h2>
        <p className="text-[#6e6e6e] text-xs font-normal">
          Team Extension helps you scale quickly by augmenting your in-house team with specialized talent,
          offering flexibility to meet project demands without the overhead of full-time hires.
        </p>
        <div>
          <ListCard listInfo="Project Scaling for Short-Term Needs" />
          <ListCard listInfo="Filling Skill Gaps" />
          <ListCard listInfo="Long-Term Resource Augmentation for Growing Teams" />
        </div>
        <button className="h-[42px] px-8 py-3 bg-[#5856d6] hover:bg-[#3d3b98] rounded-md text-white text-sm font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
