import React from "react";
import CommonCard from "../Common/CommonCard";

type Expertise = {
  icon: string;
  title: string;
  description: string;
};

const OurExpertise: React.FC<{ data: Expertise[]; title: string }> = ({ data, title }) => {
  console.log("industries data formula: ", data)
  return (
    <div className="bg-white py-10">
      <div className="container">
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">
          Our {title} Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((item, index) => (
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
