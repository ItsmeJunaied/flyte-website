"use client"
import React, { useRef } from "react";
import { FaArrowRight, FaQuoteRight } from "react-icons/fa";

type IndustriesCardsData = {
  industryImage: string;
  industryLogo: string;
  industryName: string;
  industryDescription: string;
  industryReview: string;
  reviewerName: string;
  reviewerImage: string;
  reviewerPosition: string;
  reviewerCompany: string;
  services: string[];
  brands: {
    src: string;
    alt: string;
  }[];
};

type IndustriesCardsDataProps = {
  IndustriesCardsData: IndustriesCardsData[];
};

const IdustrySectionCard: React.FC<IndustriesCardsDataProps> = ({
  IndustriesCardsData,
}) => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollToSection = (index: number) => {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
  return (
    <div className=" min-h-screen  lg:px-0 ">
      {/* industryNames stiky navbar */}
      <div className="sticky top-0 z-50  w-full  flex justify-center items-center overflow-x-auto gap-[16px] border-b-[1px] py-4" >
        {IndustriesCardsData.map((data, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className=" w-fit  text-[#151411] hover:text-[#5856D6] border-[#F7F8FD] border-b-[2px] hover:border-[#5856D6] text-sm font-semibold  uppercase "
          >
            {data.industryName}
          </button>
        ))}
      </div>

      {IndustriesCardsData.map((data, index) => (
        <div
        key={index}
        ref={(el) => {
          sectionRefs.current[index] = el;
        }}
        id={`section-${index}`}
          className={` py-[40px]  ${index % 2 === 1 ? " bg-[#14171D]" : ""}  `}
        >
          <div
            className={` container  flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse bg-[#14171D]" : ""
            } justify-between items-center gap-[40px]  `}
          >
            {/* review */}
            <div className="w-full lg:w-3/5 flex flex-col gap-6 px-10">
              <div className="flex flex-row lg:flex-col justify-center items-center gap-3 lg:gap-5">
                <div className="lg:w-full flex justify-center items-center">
                  <p
                    className={`text-4xl  ${
                      index % 2 === 1 ? "text-white" : " text-[#282828]"
                    } `}
                  >
                    <i
                      className={`${data.industryLogo} ${
                        index % 2 === 1 ? "text-white" : " text-[#282828]"
                      }`}
                    ></i>
                  </p>
                </div>
                <h1
                  className={`text-center ${
                    index % 2 === 1 ? "text-white" : "text-[#282828]"
                  } text-xl font-bold`}
                >
                  {data.industryName}
                </h1>
              </div>
              <p
                className={` ${
                  index % 2 === 1 ? "text-white" : "text-[#121212]/80"
                }  text-sm font-medium mb-2`}
              >
                {data.industryDescription}
              </p>

              <div className="flex flex-col justify-start">
                <div>
                  <FaQuoteRight className="text-[#E1E1E1] text-3xl -mb-3 -ml-5" />
                </div>
                <div className="border-[#E1E1E1] border-[2px] rounded-lg p-[24px] flex flex-col gap-5 mb-4">
                  <p
                    className={` ${
                      index % 2 === 1 ? "text-white" : "text-[#121212]"
                    }   text-sm font-semibold`}
                  >
                    {data.industryReview}
                  </p>

                  <div className="flex flex-row justify-start items-center gap-3">
                    <div className="w-[50px] h-[50px]">
                      <img
                        className="rounded-full"
                        src={data.reviewerImage}
                        alt={data.reviewerName}
                      />
                    </div>

                    <div>
                      <h1
                        className={`${
                          index % 2 === 1 ? "text-white" : "text-[#121212]"
                        } text-xs font-medium`}
                      >
                        {data.reviewerName}
                      </h1>
                      <p
                        className={`${
                          index % 2 === 1 ? "text-white" : "text-[#121212]"
                        } text-[#121212] text-[10px] font-normal`}
                      >
                        {data.reviewerPosition} at {data.reviewerCompany}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p
                className={`${
                  index % 2 === 1 ? "text-white" : "text-[#121212]"
                } text-xs font-semibold flex flex-row gap-4 justify-start items-center`}
              >
                Explore {data.industryName} Solutions <FaArrowRight />
              </p>
            </div>

            {/* Bullet points */}
            <div
              className={`w-full lg:w-2/5 flex  ${
                index % 2 === 1 ? " justify-start" : " justify-end items-end"
              }`}
            >
              <div
                className={`w-[400px] flex flex-col   gap-6 bg-[#1E232C] rounded-lg py-[24px] px-[66px]`}
              >
                <h1 className="text-start text-[#dda380] text-base font-bold">
                  {data.industryName} Solutions We Deliver
                </h1>

                <div className=" flex flex-col gap-4">
                  {data.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex flex-row text-wrap gap-3 justify-start items-center"
                    >
                      <FaArrowRight className="text-white" />
                      <p className="text-[#f0f0f0]/80 text-sm font-medium">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>

                <div className=" w-full flex justify-start items-center">
                  <button className="h-10 px-6 py-2.5 bg-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] justify-start items-start gap-2.5 inline-flex overflow-hidden">
                    <p className="text-[#191919] text-sm font-semibold font-['DM Sans']">
                      Book A Consultation
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="container flex flex-wrap justify-center lg:justify-between items-center gap-3 py-[56px]">
            {data.brands.map((brand, brandIndex) => (
              <div
                key={brandIndex}
                className="w-fit flex flex-row flex-wrap object-cover h-[48px]"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className=" w-full flex justify-center items-center">
            <button className=" h-[43px] px-8 py-3 bg-[#5856d6] rounded-md justify-start items-start gap-2.5 inline-flex overflow-hidden">
              <p className=" text-white text-sm font-semibold ">
                Explore Fintech Solutions
              </p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdustrySectionCard;
