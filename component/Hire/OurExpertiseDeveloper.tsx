import { techData } from "@/api/Dummy";
import { ParamProps } from "@/app/hire/[hire]/page";
import React from "react";
import CommonCard from "../Common/CommonCard";

const OurExpertiseDeveloper = ({ params }: ParamProps) => {
  const tech = Object.values(techData).find((item) => item.hireLinkName === params);
  return (
    <div className="bg-[#f4f2f0]">
      <div className="container pt-10 lg:pb-10">
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">
          Our React Developers Expertise
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2">
            {tech?.advantages?.map((item, index) => (
              <div key={index}>
                <CommonCard data={item} bgColor="bg-transferent" />
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <img className="lg:max-w-[391px] max-h-[341px] object-cover" src="https://i.ibb.co.com/GQQQS9Rn/OBJECTS.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertiseDeveloper;
