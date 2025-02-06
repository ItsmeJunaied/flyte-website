import { industrydata } from "@/api/Dummy";
import React from "react";
import CommonCard from "../Common/CommonCard";

type ExpertiseProps = {
  params: string;
};

const OurExpertise = ({ params }: ExpertiseProps) => {
  const industry = industrydata?.industries?.find((item) => item?.industryLinkName === params);
  return (
    <div className="bg-white py-10">
      <div className="container">
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">
          Our Fintech Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industry?.features?.map((item, index) => (
            <div key={index}>
              <CommonCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
