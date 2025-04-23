"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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
  industryLinkName:string;
};

type IndustriesCardsDataProps = {
  IndustriesCardsData: IndustriesCardsData[];
};

const IdustrySectionCard: React.FC<IndustriesCardsDataProps> = ({ IndustriesCardsData }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to Specific Section
  const scrollToSection = (index: number) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen lg:px-0">
      {/* Industry names navbar */}
      <div
        className={`bg-white shadow-lg text-nowrap ${
          isScrolled ? "fixed top-14 lg:top-24 left-0 w-full" : ""
        }`}
      >
        <div className="container w-full flex justify-start lg:justify-center items-start overflow-x-auto gap-[16px] border-b-[1px] py-4 scrollbar-hide">
          {IndustriesCardsData.map((data, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-fit text-xs lg:text-sm font-semibold uppercase border-b-[2px] ${
                activeIndex === index
                  ? "text-[#5856D6] border-[#5856D6]"
                  : "text-[#151411] border-[#Fff] hover:text-[#5856D6] hover:border-[#5856D6]"
              }`}
            >
              {data.industryName}
            </button>
          ))}
        </div>
      </div>

      {IndustriesCardsData.map((data, index) => (
        <div
          key={index}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          id={`section-${index}`}
          className={`py-[40px] min-h-screen flex flex-col justify-center items-center scroll-mt-[105px] lg:scroll-mt-36 ${
            index % 2 === 1 ? "bg-[#14171D]" : ""
          }`}
          // style={{ scrollMarginTop: "150px" }}
        >
          <div className="lg:px-48 flex flex-col justify-center items-center">
            <div
              className={`container h-full flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse bg-[#14171D]" : ""
              } justify-between items-center gap-[40px]`}
            >
              {/* review */}
              <div className="w-full lg:w-3/5 flex flex-col gap-6">
                <div className="flex flex-row lg:flex-col justify-center items-center gap-3 lg:gap-5">
                  <div className="lg:w-full flex justify-center items-center">
                    <p className={`text-4xl ${index % 2 === 1 ? "text-white" : "text-[#282828]"}`}>
                      <i
                        className={`${data.industryLogo} ${
                          index % 2 === 1 ? "text-white" : "text-[#282828]"
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
                  className={`${
                    index % 2 === 1 ? "text-white" : "text-[#121212]/80"
                  } text-sm font-medium mb-2`}
                >
                  {data.industryDescription}
                </p>

                <div className="flex flex-col justify-start">
                  <div>
                    <FaQuoteRight className="text-[#E1E1E1] text-3xl -mb-3 -ml-5" />
                  </div>
                  <div className="border-[#E1E1E1] border-[2px] rounded-lg p-[24px] flex flex-col gap-5 mb-4">
                    <p
                      className={`${index % 2 === 1 ? "text-white" : "text-[#121212]"} text-sm font-semibold`}
                    >
                      {data.industryReview}
                    </p>

                    <div className="flex flex-row justify-start items-center gap-3">
                      <div className="w-12 h-12">
                        <img className="rounded-full w-full h-full cover" src={data.reviewerImage} alt={data.reviewerName} />
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

                {/* <p
                  className={`${
                    index % 2 === 1 ? "text-white" : "text-[#121212]"
                  } text-xs font-semibold flex flex-row gap-4 justify-start items-center`}
                >
                  Explore {data.industryName} Solutions <FaArrowRight />
                </p> */}
              </div>

              {/* Bullet points */}
              <div
                className={`w-full lg:w-2/5 flex ${
                  index % 2 === 1
                    ? "lg:justify-start justify-center"
                    : "justify-center lg:justify-end items-end"
                }`}
              >
                <div className="w-[320px] flex flex-col gap-6 bg-[#1E232C] py-[24px] px-[30px]">
                  <h1 className="text-start text-[#dda380] text-base font-bold">
                    {data.industryName} Solutions We Deliver
                  </h1>

                  <div className="flex flex-col gap-4">
                    {data.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex flex-row text-wrap gap-3 justify-start items-center"
                      >
                        <FaArrowRight className="text-white" />
                        <p className="text-[#f0f0f0]/80 text-sm font-medium">{service}</p>
                      </div>
                    ))}
                  </div>

                  <div className="w-full flex justify-start items-center">
                    <Link href="/schedule-consultation" className="h-10 px-6 py-2.5 bg-white hover:bg-black hover:text-white transition duration-500 rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] justify-start items-start gap-2.5 inline-flex overflow-hidden">
                      <p className="tex</button>t-[#191919] text-sm font-semibold font-['DM Sans']">
                        Book A Consultation
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="container flex flex-wrap justify-center lg:justify-between items-center gap-3 py-[56px]">
              {data.brands.map((brand, brandIndex) => (
                <div key={brandIndex} className="w-fit flex flex-row flex-wrap object-cover h-[48px]">
                  <img src={brand.src} alt={brand.alt} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>

            <div className="w-full flex justify-center items-center">
              <Link href={`/industries/${data?.industryLinkName}`} className="h-[43px] px-8 py-3 bg-[#5856d6] rounded-md justify-start items-start gap-2.5 inline-flex overflow-hidden">
                <p className="text-white text-sm font-semibold">Explore {data?.industryName} Solutions</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdustrySectionCard;
