"use client";
import React, { useState } from "react";
import Title from "../Common/Title";
import Subtitle from "../Common/Subtitle";
import { FaArrowRight } from "react-icons/fa";

// Type alias for Industry
type Industry = {
  name: string;
  icon?: string;
  features: Feature[];
};

// Type alias for Feature
type Feature = {
  icon?: string; 
  title: string;
  description: string;
};

type IndustryData = {
  sectionTitle: string;
  subTitle: string;
  industries: Industry[];
};

const IndustrySection: React.FC<{ industrydata: IndustryData }> = ({
  industrydata,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(
    industrydata.industries[0]
  );

  const handleIndustryClick = (industry: Industry) => {
    setSelectedIndustry(
      selectedIndustry?.name === industry.name ? null : industry
    );
  };

  return (
    <div
      className="bg-white py-10"
      style={{
        backgroundImage: "url('/images/world-map.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "top right",
        backgroundPositionY: "-75px",
      }}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="mb-[64px] ">
          <Subtitle Subtitle={industrydata.subTitle} />
          <Title title={industrydata.sectionTitle} />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="w-full lg:w-1/3 px-[34px] py-[24px] border-2 border-[#006FBA] rounded-2xl flex flex-col gap-3">
            {industrydata.industries.map((industry, index) => (
              <div key={index}>
                <div
                  className={`text-[#718096] hover:text-[#2B6CB0]  flex flex-row gap-2 items-center text-[16px] ${
                    selectedIndustry?.name === industry.name
                      ? "text-white lg:text-[#2B6CB0] bg-[#2B6CB0] lg:bg-transparent p-[10px] lg:p-0"
                      : " text-[#718096]"
                  }`}
                  onClick={() => handleIndustryClick(industry)}
                >
                  {/* Icon */}
                  {industry.icon && (
                    <i
                      className={`${industry.icon} ${
                        selectedIndustry?.name === industry.name
                          ? "text-white lg:text-[#2B6CB0] icon"
                          : "text-[#718096] icon"
                      }`}
                    ></i>
                  )}

                  {/* Industry Name */}
                  <button>
                    <h1
                      className={`text-[16px] ${
                        selectedIndustry?.name === industry.name
                          ? "text-white lg:text-[#2B6CB0]"
                          : "text-[#718096]"
                      }`}
                    >
                      {industry.name}
                    </h1>
                  </button>
                </div>

                {/* Render Features Below Selected Industry */}
                <div className=" flex lg:hidden  ">
                  {selectedIndustry?.name === industry.name && (
                    <div className="w-full mt-4 flex flex-col gap-4 items-start bg-[#F6F8FA] px-4 py-4">
                      {selectedIndustry.features.map(
                        (feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className={`w-[400px] flex flex-col   gap-6  rounded-lg `}
                          >
                            <div className=" flex flex-col gap-4">
                              <div className="flex flex-row text-wrap gap-3 justify-start items-center">
                                <FaArrowRight className="text-black" />
                                <p className="text-black text-sm font-medium">
                                  {feature.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className=" hidden lg:flex ">
            <div className="w-full  grid grid-cols-2 gap-4 items-start">
              {selectedIndustry?.features.map((feature, index) => (
                <div
                  key={index}
                  className="h-[116.59px] px-6 py-8 bg-[#f6f8fa] rounded-[10px] border border-[#d0d8df] justify-start items-center gap-6 inline-flex"
                >
                  {feature.icon && <i className={`${feature.icon} icon2`}></i>}
                  <div className="self-stretch flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch text-[#2f4f4f] text-[15px] font-bold ">
                      {feature.title}
                    </div>
                    <div className="w-full text-[#838383] text-xs font-normal ">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}

              {selectedIndustry && (
                <div className="h-[116.59px] px-6 py-8 bg-[#2c3e50] hover:bg-[#2B6CB0] rounded-[10px] border border-[#d0d8df] justify-center items-center gap-6 inline-flex transition-all duration-500 ease-in-out">
                  <div className="justify-center items-center gap-1.5 flex flex-row">
                    <h1 className="self-stretch text-white text-[15px] font-extrabold transition-colors duration-500 ease-in-out hover:text-[#2B6CB0]">
                      See All Features
                    </h1>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="19"
                      viewBox="0 0 32 19"
                      fill="none"
                      className="transition-colors duration-500 ease-in-out hover:fill-[#2B6CB0]"
                    >
                      <path
                        d="M25 10.4746H7C6.44 10.4746 6 10.0346 6 9.47461C6 8.91461 6.44 8.47461 7 8.47461H25C25.56 8.47461 26 8.91461 26 9.47461C26 10.0346 25.56 10.4746 25 10.4746Z"
                        fill="white"
                      />
                      <path
                        d="M20 17.4755C19.8688 17.4771 19.7388 17.4513 19.6183 17.3996C19.4977 17.3479 19.3893 17.2716 19.3 17.1755C18.9 16.7755 18.9 16.1555 19.3 15.7555L25.6 9.45555L19.3 3.15555C18.9 2.75555 18.9 2.13555 19.3 1.73555C19.7 1.33555 20.32 1.33555 20.72 1.73555L27.72 8.73555C28.12 9.13555 28.12 9.75555 27.72 10.1555L20.72 17.1555C20.52 17.3555 20.26 17.4555 20.02 17.4555L20 17.4755Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full bg-white overflow-hidden flex justify-center items-center">
          <h1 className="text-[#191919] text-sm font-semibold bg-white rounded-md  border border-[#dddddd] gap-2.5 px-6 py-2.5 mt-8">
            See All Industries
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;
