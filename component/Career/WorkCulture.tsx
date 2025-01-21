import React from "react";
import CultureCard from "./CultureCard";
import { workCultureData } from "../../api/Dummy";

const WorkCulture = () => {
  return (
    <div className="container mb-10 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
      {/* images  */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-8">
        <div className="space-y-4">
          <img
            className="w-full md:w-[311px] md:h-[165px] object-cover"
            src={workCultureData?.imgage1}
            alt=""
          />
          <img
            className="w-full md:w-[311px] md:h-[165px] object-cover"
            src={workCultureData?.imgage2}
            alt=""
          />
        </div>
        <img
          className="w-full md:w-[244px] md:h-[346px] object-cover"
          src={workCultureData?.imgage3}
          alt=""
        />
      </div>

      {/* work culture */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-4 md:mb-8">
          <span className="text-[#5856d6]">Work</span> Culture
        </h2>

        {/* card details  */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-5 md:gap-y-9">
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
