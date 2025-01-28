import React from "react";
import CultureCard from "./CultureCard";
import { workCultureData } from "../../api/Dummy";

const WorkCulture = () => {
  return (
    <div className="container mb-10 lg:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
      {/* images  */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
        <div className="space-y-4">
          <img
            className="w-full lg:w-[311px] lg:h-[165px] object-cover"
            src={workCultureData?.imgage1}
            alt=""
          />
          <img
            className="w-full lg:w-[311px] lg:h-[165px] object-cover"
            src={workCultureData?.imgage2}
            alt=""
          />
        </div>
        <img
          className="w-full lg:w-[244px] lg:h-[346px] object-cover"
          src={workCultureData?.imgage3}
          alt=""
        />
      </div>

      {/* work culture */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-4 lg:mb-8">
          <span className="text-[#5856d6]">Work</span> Culture
        </h2>

        {/* card details  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-x-6 gap-5 lg:gap-y-9">
          {workCultureData?.cultures?.map((culture, index) => (
            <div key={index}>
              <CultureCard culture={culture} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCulture;
