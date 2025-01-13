import React from "react";
import ListCard from "../Common/ListCard";

type CardProps = {
  reverse: boolean;
};

const ServiceCard: React.FC<CardProps> = ({ reverse }) => {
  return (
    <div className="container px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {reverse ? (
        <div className="md:mr-auto relative md:order-2 my-20">
          <div className="w-40 md:w-60 h-[120px] md:h-[155.27px] bg-[#c3c3c3] absolute left-20 md:left-32 -top-20 md:-top-20" />
          <div className="w-40 md:w-60 h-[120px] md:h-[155.27px] bg-[#d9d9d9] relative" />
          <div className="w-40 md:w-60 h-[120px] md:h-[155.27px] bg-[#c3c3c3] absolute left-20 md:left-32 -bottom-20 md:-bottom-20" />
        </div>
      ) : (
        <div className="mx-auto md:mx-0 md:ml-auto relative">
          <div className="w-40 md:w-60 h-[120px] md:h-[155.27px] bg-[#c3c3c3]" />
          <div className="w-40 md:w-60 h-[120px] md:h-[155.27px] bg-[#d9d9d9] absolute top-1/2 -translate-y-1/2 right-16 md:right-[120px]" />
          <div className="w-40 md:w-60 h-[120px] md:h-[155.27px] bg-[#c3c3c3] mt-5 md:mt-10 relative" />
        </div>
      )}

      <div className={`max-w-[460px] space-y-5 ${reverse && "md:ml-auto"}`}>
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
        <button className="h-[42px] px-8 py-3 bg-[#5856d6] hover:bg-[#3d3b98] rounded-md text-white text-sm font-semibold">Learn More</button>
      </div>
    </div>
  );
};

export default ServiceCard;
