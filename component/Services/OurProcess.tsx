import { serviceData } from "@/api/Dummy";
import React from "react";
import CommonCard from "../Common/CommonCard";

type ProcessProps = {
  params: string;
};

const OurProcess = ({ params }: ProcessProps) => {
  const service = serviceData?.find((item) => item?.serviceLinkName === params);
  return (
    <div className="container mt-10 lg:mt-20 mb-20">
      <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">Why Our Process Works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service?.features?.map((item, index) => (
          <div key={index}>
            <CommonCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
