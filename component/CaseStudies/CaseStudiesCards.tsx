"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import Link from "next/link";
import { useGetCategoryBasedCaseStudiesQuery, useGetContentCategoryQuery } from "@/redux/api/caseStudiesApi";

type CaseStudy = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  category: string;
  tag: string[];
  short_description: string;
};

type Category = {
  id: number | null;
  name: string;
  type: string;
};

const CaseStudiesCards = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: null,
    name: "All Industries",
    type: "",
  });

  const { data: contentCagetories, isLoading } = useGetContentCategoryQuery("");
  const { data: caseStudies } = useGetCategoryBasedCaseStudiesQuery(selectedCategory?.id ?? 0);

  if (isLoading) {
    return "loading...";
  }

  const { categories } = contentCagetories?.data || {};
  // console.log("caseStudiess", caseStudies?.data?.data);
  // const {current_page   } = caseStudies?.data || {}

  // const categories = Array.from(new Set(caseStudyData.map((item) => item.category)));

  // const filteredCaseStudies =
  //   selectedCategory === "All Industries"
  //     ? caseStudyData
  //     : caseStudyData.filter((caseStudy) => caseStudy.category === selectedCategory);

  return (
    <div className="rounded-t-[60px] lg:py-5 lg:px-0 w-full flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <Subtitle Subtitle="Explore Our Success Stories" />
          <Title
            width="w-full"
            padding="px-2 lg:px-0"
            title="Driving Innovation with Real-World Solutions"
            fontSize="text-2xl lg:text-3xl"
            fontColor="text-black"
          />
        </div>

        {/* <div className="flex flex-row flex-wrap gap-2 mt-4 lg:mt-16">
          <button
            className={`h-9 px-4 py-2 ${
              selectedCategory === "All Industries" ? "bg-[#fff]" : "bg-[#FDF6E3]"
            } hover:bg-[#fff] justify-center items-center gap-2 inline-flex`}
            onClick={() => setSelectedCategory("All Industries")}
          >
            <p className="text-center text-[#4A4A89] text-base font-normal font-['Open Sans'] leading-tight tracking-tight">
              All Industries
            </p>
          </button>

          {categories.map((item) => (
            <button
              key={item}
              className={`h-9 px-4 py-2 ${
                selectedCategory === item ? "bg-[#fff]" : "bg-[#FDF6E3]"
              } hover:bg-[#fff] justify-center items-center gap-2 inline-flex`}
              onClick={() => setSelectedCategory(item)}
            >
              <p className="text-center text-[#4A4A89] text-base font-normal font-['Open Sans'] leading-tight tracking-tight">
                {item}
              </p>
            </button>
          ))}
        </div> */}
        <div className="flex flex-row flex-wrap gap-2 mt-4 lg:mt-16">
          {categories?.map((categroy: Category, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(categroy)}
              className={`h-9 px-4 py-2 ${
                selectedCategory?.name === categroy?.name ? "bg-[#fff]" : "bg-[#FDF6E3]"
              } hover:bg-[#fff] justify-center items-center gap-2 inline-flex`}
            >
              <span className="text-center text-[#4A4A89] text-base font-normal font-['Open Sans'] leading-tight tracking-tight">
                {categroy?.name?.toUpperCase()}
              </span>
            </button>
          ))}
        </div>

        {/* <div className="pt-5 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14">
            {filteredCaseStudies.map((caseStudy) => (
              <Link
                href={`case-studies/${caseStudy?.caseStudyLinkName}`}
                key={caseStudy.id}
                className={`flex flex-col lg:w-[620px ${
                  caseStudy.id % 2 === 0 ? "lg:mt-20" : ""
                } bg-white h-fit shadow-[0px_0px_10px_10px_rgba(223,223,223,0.25)]`}
                data-aos={caseStudy.id % 2 === 0 ? "fade-up-left" : "fade-up-right"}
              >
                <div className="h-[165px] sm:h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 hover:transform-origin-center"
                    src={caseStudy.image}
                    alt={caseStudy.title}
                  />
                </div>

                <div className="justify-center bg-[#2b3e50] h-11 items-center lg:gap-6 flex w-full">
                  {caseStudy.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="w-1/3 px-6 py-4 h-11 border-r-2 border-[#dda380] justify-center items-center gap-2.5 flex"
                    >
                      <p className="text-white text-xs font-semibold leading-normal">{tag}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 h-full pb-5 mt-5 w-full">
                  <div className="flex flex-row items-center px-4 lg:px-10 w-full">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div>
                        <h1 className="text-lg lg:text-2xl font-semibold text-black">{caseStudy.title}</h1>
                      </div>

                      <div className="px-1 lg:px-2 py-[6.36px] bg-[#ffcc00] rounded-[3.18px] backdrop-blur-[9.55px] flex-col justify-center items-center gap-2 inline-flex">
                        <p className="text-black text-xs font-normal font-['Open Sans']">
                          Project Management
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-normal text-[#00000080] px-4 lg:px-10">
                    {caseStudy.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
        <div className="pt-5 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14">
            {caseStudies?.data?.data?.length === 0 ? (
              <div className="col-span-2 text-center text-lg text-gray-500 py-5 lg:py-20">
                No case studies found.
              </div>
            ) : (
              caseStudies?.data?.data?.map((caseStudy: CaseStudy, index: number) => (
                <Link
                  key={index}
                  href={`case-studies/${caseStudy?.slug}`}
                  className={`flex flex-col lg:w-[620px] ${
                    caseStudy.id % 2 === 0 ? "lg:mt-20" : ""
                  } bg-white h-fit shadow-[0px_0px_10px_10px_rgba(223,223,223,0.25)]`}
                  data-aos={caseStudy.id % 2 === 0 ? "fade-up-left" : "fade-up-right"}
                >
                  <div className="h-[165px] sm:h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 hover:transform-origin-center"
                      src={caseStudy?.image}
                      alt={caseStudy?.title}
                    />
                  </div>

                  <div className="flex  bg-[#2b3e50] h-11">
                    {caseStudy.tag.map((tag, index: number) => (
                      <div key={index} className="w-full px-6 py-4 h-11 border-r-2 border-[#dda380]">
                        <p className="text-white text-xs font-semibold text-center">{tag}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 h-full pb-5 mt-5 w-full">
                    <div className="flex flex-row items-center px-4 lg:px-10 w-full">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div>
                          <h1 className="text-lg lg:text-2xl font-semibold text-black">{caseStudy?.title}</h1>
                        </div>

                        <div className="px-1 lg:px-2 py-[6.36px] bg-[#ffcc00] rounded-[3.18px] backdrop-blur-[9.55px] flex-col justify-center items-center gap-2 inline-flex">
                          <p className="text-black text-xs font-normal font-['Open Sans']">
                            Project Management
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg font-normal text-[#00000080] px-4 lg:px-10">
                      {caseStudy?.short_description}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesCards;
