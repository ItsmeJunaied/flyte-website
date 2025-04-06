/* eslint-disable @next/next/no-img-element */
import React from "react";
import Subtitle from "../Common/Subtitle";
import Link from "next/link";

type Keywords = string[];
type ServiceData = {
  title: string;
  description: string;
  keywords: Keywords;
  image: string;
};

type ServiceSectionProps = {
  serviceData: ServiceData[];
};
const ServiceSection: React.FC<ServiceSectionProps> = ({ serviceData }) => {
  
  return (
    <div
      className="flex flex-col gap"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div>
        <Subtitle Subtitle="Our Services" />
        {/* <Title title={headertitle} /> */}
        <h2 className="max-w-[624px] justify-start text-black text-2xl lg:text-4xl font-semibold lg:leading-[50px]">Empowering your vision through a range of professional services</h2>
      </div>

      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 lg:mt-10 mb-8"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {serviceData &&
          serviceData?.slice(0, 6)?.map((data, index) => (
            <div
              key={index}
              className=" h-auto px-[24px]  py-[32px] bg-white rounded-[15px] shadow-md justify-start items-stretch gap-3 inline-flex overflow-hidden"
            >
              <div className=" w-2/3 grow shrink basis-0 self-stretch flex-col justify-center items-start gap-6 inline-flex overflow-hidden">
                <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch text-black text-sm font-bold  ">
                      {data?.title}
                    </div>
                    <div className="self-stretch text-[#7e7e7e] text-xs font-normal  ">
                      {data?.description}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {data?.keywords?.map((words, index) => {
                      const colors = [
                        "#95BF08",
                        "#1D9FE4",
                        "#FFA23B",
                        "#FF5733",
                        "#8E44AD",
                      ];

                      const color = colors[index % colors.length];

                      return (
                        <div
                          key={index}
                          className="px-2.5 py-1.5 rounded-[10px] justify-center items-center gap-2.5 flex"
                          style={{ backgroundColor: color }}
                        >
                          <div className="text-white text-[8px] font-bold">
                            {words}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className=" w-1/3 relative flex justify-center items-center  overflow-hidden h-full">
                <img
                  className=" h-fit object-cover"
                  src={data?.image}
                  alt="image"
                />
              </div>
            </div>
          ))}
      </div>

      <div className="w-full flex justify-center items-center -mb-2">
        <Link href="/services" className="px-8 py-3 bgGradientNevyBlue rounded-md">
          <div className="text-white text-sm font-semibold">
            See All Services
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceSection;
