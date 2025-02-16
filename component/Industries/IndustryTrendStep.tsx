/* eslint-disable @next/next/no-img-element */
import React from "react";

type Step = {
  id: number;
  name: string;
  description: string;
};

type TrendStepProps = {
  title: string;
  image: string;
  steps: Step[];
};

const IndustryTrendStep: React.FC<{ data: TrendStepProps }> = ({ data }) => {
  return (
    <div className="bg-white py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
        <div className="col-span-1">
          <h2 className="text-[#181a2a] text-xl lg:text-3xl font-semibold leading-10 mb-5 lg:mb-10">
            {data?.title}
          </h2>
          <img
            className="object-cover animate-infiniteRotate"
            style={{ transitionDuration: "3s" }} // 3 seconds
            src={data?.image}
            alt=""
          />
        </div>

        <div className="col-span-1 lg:col-span-2 space-y-2">
          {data?.steps?.map((step, index) => (
            <div key={index} className="flex items-center pb-4 border-b-2 border-[#dbe6ff] h-fit">
              <span className="mr-3 lg:mr-5 text-[#709bff] text-xl lg:text-2xl font-semibold w-5 block">
                0{step?.id}
              </span>
              <div className="relative pl-4 lg:pl-5 flex items-center">
                <div className="absolute left-0 top-[8px] h-[90%] border-l-2 border-[#dbe6ff]"></div>
                <div>
                  <h4 className="text-[#2e6dff] text-lg font-semibold">{step?.name}</h4>
                  <p className="text-[#353c50] text-sm leading-snug">{step?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryTrendStep;
