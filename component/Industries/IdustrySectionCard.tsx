"use client";
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
};

type IndustriesCardsDataProps = {
  IndustriesCardsData: IndustriesCardsData[];
};

const IdustrySectionCard: React.FC<IndustriesCardsDataProps> = ({
  IndustriesCardsData,
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const firstNav = document.querySelector(".header");
  const firstNavHeight = (firstNav as HTMLElement)?.offsetHeight || 0;

  console.log(isFixed)
  useEffect(() => {
    const industryNav = document.querySelector(".industry-nav");
    const firstNav = document.querySelector(".header");

    if (!industryNav || !firstNav) return;

    const firstNavHeight = (firstNav as HTMLElement)?.offsetHeight || 0;

    // Create IntersectionObserver to detect when header touches the industry-nav
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the .industry-nav is fully inside the viewport and header has touched it, set isFixed
        if (!entry.isIntersecting) {
          setIsFixed(true); // Make navbar fixed
        } else {
          setIsFixed(false); // Reset navbar to sticky
        }
      },
      {
        threshold: 1.0, // Fully in view
        rootMargin: `-${firstNavHeight}px`, // Trigger when the header's bottom reaches the industry-nav
      }
    );

    observer.observe(industryNav);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down, keep the navbar fixed
        setIsFixed(true);
      } else {
        // Scrolling up, return the navbar to sticky
        setIsFixed(false);
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (index: number) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen lg:px-0">
      {/* Industry names sticky navbar */}
      <div
        className={`industry-nav ${
          isFixed ? "fixedd top-0 bg-white" : "stickyy bg-white"
        }`}
        style={isFixed ? { marginTop: `${firstNavHeight}px` } : {}}
      >
        <div className="w-full flex justify-start lg:justify-center items-start overflow-x-auto gap-[16px] border-b-[1px] py-4 px-2 lg:px-0 scrollbar-hide">
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
          className={`py-[40px] min-h-screen flex flex-col justify-center items-center ${
            index % 2 === 1 ? "bg-[#14171D]" : ""
          }`}
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
                    <p
                      className={`text-4xl ${
                        index % 2 === 1 ? "text-white" : "text-[#282828]"
                      }`}
                    >
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
                      className={`${
                        index % 2 === 1 ? "text-white" : "text-[#121212]"
                      } text-sm font-semibold`}
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
                        <p className="text-[#f0f0f0]/80 text-sm font-medium">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="w-full flex justify-start items-center">
                    <button className="h-10 px-6 py-2.5 bg-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] justify-start items-start gap-2.5 inline-flex overflow-hidden">
                      <p className="tex</button>t-[#191919] text-sm font-semibold font-['DM Sans']">
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

            <div className="w-full flex justify-center items-center">
              <button className="h-[43px] px-8 py-3 bg-[#5856d6] rounded-md justify-start items-start gap-2.5 inline-flex overflow-hidden">
                <p className="text-white text-sm font-semibold">
                  Explore Fintech Solutions
                </p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdustrySectionCard;
