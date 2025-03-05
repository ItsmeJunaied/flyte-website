/* eslint-disable @next/next/no-img-element */
"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { stripHtml } from "@/lib/stripHtml";
import { useGetAllCaseStudiesQuery } from "@/redux/api/caseStudiesApi";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

type Image = {
  id: number;
  image: string;
};

const CaseStudies = () => {
  const { data: caseStudies, isLoading } = useGetAllCaseStudiesQuery("");

  const { contents, images } = caseStudies?.data || {};

  return (
    <div className="w-full py-5 lg:py-10">
      <div className="w-full flex flex-row">
        <div className="container w-full flex flex-col lg:flex-row items-center gap-5 h-full overflow-x-hidden">
          <div className="w-full lg:w-1/3 h-full">
            {!isLoading ? (
              <div className="flex flex-col gap-3 lg:gap-6 justify-center mb-5 lg:mb-0">
                <h4 className="text-[#5856d6] text-lg font-bold">Explore Our Success Stories</h4>
                <h1 className="text-zinc-950 text-2xl lg:text-4xl font-bold lg:leading-[46px] mb-1">
                  {contents[0]?.title}
                </h1>
                <p className="text-[#12094a] text-sm font-normal leading-snug  lg:px-0">
                  {contents && stripHtml(contents[0]?.description)}
                </p>
                <Link
                  href="/contact-us"
                  className="h-[42px] w-fit px-8 py-3 bg-[#5856d6] rounded-md justify-start items-start gap-2.5 inline-flex overflow-hidden"
                >
                  <p className="text-white text-sm font-semibold ">Book A Consultation</p>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-7">
                <Skeleton className="w-[60%] h-4" />
                <div className="space-y-2">
                  <Skeleton className="w-[85%] h-8" />
                  <Skeleton className="w-[78%] h-8" />
                  <Skeleton className="w-[50%] h-8" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-[95%] h-4" />
                </div>
                <Skeleton className="w-[50%] h-9" />
              </div>
            )}
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-4 h-full ">
            {!isLoading ? (
              <div className="space-y-4">
                <Marquee className="rounded-lg" gradient={false} speed={30} pauseOnHover={true}>
                  {images?.map((item: Image, index: number) => (
                    <div className="px-2" key={index}>
                      <img
                        className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                        src={item?.image}
                        alt=""
                      />
                    </div>
                  ))}
                </Marquee>

                <Marquee
                  className=" rounded-xl"
                  gradient={false}
                  speed={25}
                  pauseOnHover={true}
                  direction="right"
                >
                  {images?.map((item: Image, index: number) => (
                    <div className="px-2" key={index}>
                      <img
                        className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                        src={item?.image}
                        alt=""
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            ) : (
              <div className="flex gap-5">
                <Skeleton className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl" />
                <Skeleton className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl" />
                <Skeleton className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 mt-2">
        {!isLoading ? (
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {images?.map((item: Image, index: number) => (
              <div className="px-2" key={index}>
                <img
                  className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src={item?.image}
                  alt=""
                />
              </div>
            ))}
          </Marquee>
        ) : (
          <div className="flex gap-5">
            <Skeleton className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl" />
            <Skeleton className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl" />
            <Skeleton className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl" />
            <Skeleton className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;
