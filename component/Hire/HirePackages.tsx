import React from "react";
import PackageCard from "./PackageCard";
import { hireTopTalents } from "@/api/Dummy";

const HirePackages = () => {
  return (
    <div className="bg-white py-4 lg:py-8">
      <div className="container">
        <div>
          <h1 className="text-[#060b13] text-2xl lg:text-[32px] font-semibold leading-[30px]">
            Hire Top Talent through Flexible Engagement Models
          </h1>
          <p className="py-6 text-gray-600 text-sm lg:text-base font-normal">
            Hire Experienced Web Developers for Successful Project Completion
          </p>
        </div>

        {/* package cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hireTopTalents?.map((item, index) => (
            <PackageCard key={index} items={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HirePackages;
