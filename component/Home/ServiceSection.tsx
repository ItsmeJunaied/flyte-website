/* eslint-disable @next/next/no-img-element */
import React from "react";
import Title from "../Common/Title";
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
  const headertitle: string = "Empowering your vision through a range";
  return (
    <div
      className="  flex flex-col gap-5 "
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="  ">
        <Subtitle Subtitle="Our Services" />
        <Title title={headertitle} />
      </div>

      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-3 lg:my-10"
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

      <div className=" w-full flex justify-center items-center">
        <Link href="/services" className="h-[42px] px-8 py-3 bgGradientNevyBlue rounded-md justify-start items-start gap-2.5 inline-flex overflow-hidden">
          <div className="text-white text-sm font-semibold font-['DM Sans']">
            See All Services
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceSection;
