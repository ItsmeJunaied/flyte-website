import React from "react";
import { serviceOverviewData } from "../../api/Dummy";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  icon: {
    path: string;
    fill: string;
  };
};

const ServicesOverview: React.FC = () => {
  return (
    <div className="bg-white pb-10">
      <div className="container">
        <h2 className="max-w-[492px] text-center text-black text-base md:text-[32px] font-semibold font-['Open Sans'] mx-auto py-5 md:py-10 md:leading-10">
          Advantages of the Dedicated Development Team Model
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceOverviewData?.map((service: Service, index: number) => (
            <div
              key={index}
              className="h-[281px] p-5 bg-[#f4f5f9] rounded-xl grid grid-rows-3 place-items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d={service?.icon?.path} fill={service?.icon?.fill} />
              </svg>
              <h4 className="text-gray-800 text-base xl:text-xl text-center font-semibold">
                {service?.title}
              </h4>
              <p className="text-gray-600 text-sm font-normal text-center self-start">
                {service?.description}
              </p>
            </div>
          ))}
          <div className="px-8 py-10 bg-[#31323c] rounded-xl flex flex-col justify-between min-h-[281px]">
            <h2 className="text-[#f7f7f7] text-xl md:text-3xl font-semibold">Build Your Team</h2>
            <span className="w-20 h-[3px] bg-[#dda380]" />
            <p className="text-[#d9d9d9] text-base font-normal">
              Need to hire? Contact us to build a skilled team for your needs.
            </p>
            <Link
              href="/hire/application-form"
              className="text-white hover:text-black text-center text-sm font-semibold px-8 py-3 border border-white hover:bg-white"
            >
              Hire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
