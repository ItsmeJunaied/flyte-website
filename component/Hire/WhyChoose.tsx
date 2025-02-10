import React from "react";
import { techData } from "@/api/Dummy";
import CommonCard from "../Common/CommonCard";

type Props = {
  params: string;
};

const WhyChoose = ({ params }: Props) => {
  const tech = Object.values(techData).find((item) => item.hireLinkName === params);
  return (
    <div className="bg-white">
      <div className="container pt-10 lg:pt-20 pb-10">
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">
          Why Choose Our Frontend Developers?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tech?.advantages?.map((item, index) => (
            <div key={index}>
              <CommonCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
