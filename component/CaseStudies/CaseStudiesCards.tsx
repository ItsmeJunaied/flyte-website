"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import Link from "next/link";
import { useGetCategoryBasedCaseStudiesQuery, useGetContentCategoryQuery } from "@/redux/api/caseStudiesApi";
import Pagination from "../Common/Pagination";
import { Skeleton } from "@/components/ui/skeleton";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: null,
    name: "All Industries",
    type: "",
  });

  const { data: contentCagetories, isLoading: isLoadingContent } = useGetContentCategoryQuery("");
  const {
    data: caseStudies,
    isLoading,
    isFetching,
  } = useGetCategoryBasedCaseStudiesQuery({
    category_id: selectedCategory?.id ?? 0,
    page: currentPage,
  });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // The query will automatically refetch because currentPage changed
  };

  const { categories } = contentCagetories?.data || {};
  const { current_page, last_page } = caseStudies?.data || {};

  console.log("caseStudies?.data", caseStudies?.data);

  return (
    <div>
      {isLoading || isLoadingContent ? (
        <Skeleton className="h-screen w-full" />
      ) : (
        <div className="rounded-t-[60px] lg:py-5 lg:px-0 w-full flex justify-center items-center">
          <div className="container">
            <div className="flex flex-col justify-center items-center gap-1 w-full">
              <Subtitle Subtitle="Case Stuies" />
              <Title
                width="w-full"
                padding="px-2 lg:px-0"
                title="Driving Innovation with Real-World Solutions"
                fontSize="text-2xl lg:text-3xl"
                fontColor="text-black"
              />
            </div>

            {/* category tab  */}
            <div className="flex flex-row flex-wrap gap-2 mt-4 lg:mt-10">
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

            {/* case studies  */}
            <div className="pt-5 lg:pt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                {caseStudies?.data?.data?.length === 0 ? (
                  <div className="col-span-2 text-center text-lg text-gray-500 py-5 lg:py-20">
                    No case studies found.
                  </div>
                ) : (
                  caseStudies?.data?.data?.map((caseStudy: CaseStudy, index: number) => (
                    <Link
                      key={index}
                      href={`/case-studies/${caseStudy?.slug}`}
                      className={`flex flex-col ${
                        index % 2 !== 0 ? "lg:mt-10" : ""
                      } bg-white h-fit shadow-[0px_0px_10px_10px_rgba(223,223,223,0.25)]`}
                      data-aos={index % 2 !== 0 ? "fade-up-left" : "fade-up-right"}
                    >
                      <div className="h-[165px] sm:h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden">
                        <img
                          className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 hover:transform-origin-center"
                          src={caseStudy?.image}
                          alt={caseStudy?.title}
                        />
                      </div>

                      <div className="flex flex-col lg:flex-row">
                        {caseStudy.tag.map((tag, index: number) => (
                          <div
                            key={index}
                            className="w-full px-6 py-4 bg-[#2b3e50] h-11 border-r-2 border-[#dda380]"
                          >
                            <p className="text-white text-xs font-semibold text-center">{tag}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col gap-3 h-full pb-5 mt-5 w-full">
                        <div className="flex flex-row items-center px-4 lg:px-10 w-full">
                          <div className="flex flex-col lg:flex-row justify-between items-start gap-3 w-full">
                            <h1 className="text-lg lg:text-2xl font-semibold text-black lg:h-16 line-clamp-2 overflow-hidden">
                              {caseStudy?.title}
                            </h1>

                            <div className="px-1 lg:px-2 py-[6.36px] bg-[#ffcc00] rounded-[3.18px] backdrop-blur-[9.55px] flex-col justify-center items-center gap-2 inline-flex">
                              <p className="text-black text-xs font-normal font-['Open Sans']">
                                Project Management
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-lg font-normal text-[#00000080] px-4 lg:px-10 h-[90px] line-clamp-3 overflow-hidden">
                          {caseStudy?.short_description}
                        </p>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>

            {/* pagination  */}
            {caseStudies?.data && (
              <Pagination
                current_page={current_page}
                last_page={last_page}
                onPageChange={handlePageChange}
                isLoading={isFetching}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesCards;
