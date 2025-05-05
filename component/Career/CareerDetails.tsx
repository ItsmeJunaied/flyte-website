"use client";
import { useGetCareerDetailsQuery } from "@/redux/api/careerApi";
import React from "react";
import JobDetailsCard from "./JobDetailsCard";
import { Skeleton } from "@/components/ui/skeleton";

type ParamProps = {
  params: string;
};

const CareerDetails: React.FC<ParamProps> = ({ params }) => {
  const { data: career, isLoading } = useGetCareerDetailsQuery(params);

  const { title, description, short_description, skills } = career?.data || {};
  const processedDescription = description?.replace(/<li>/g, '<li class="list-disc p-1.5 ml-5">');

  return (
    <div className="lg:pt-[100px]">
      <div className="bg-white mt-[2px]">
        {isLoading ? (
          <div className="container py-10">
            <Skeleton className="w-[200px] h-5 mx-auto" />
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-12 mt-9">
              <Skeleton className="w-full lg:w-[40%] h-[200px] lg:h-[400px]" />
              <Skeleton className="w-full lg:w-[60%] h-[200px] lg:h-[400px]" />
            </div>
          </div>
        ) : (
          <div className="container">
            <h2 className="py-9 text-center text-2xl font-bold">{title}</h2>
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-12">
              <JobDetailsCard data={career?.data} />
              <div className="px-5 lg:px-0 w-full lg:w-[60%]">
                <h4 className="mb-3 lg:mb-6 text-xl font-semibold">Job Description</h4>
                <p className="text-black/70 text-[13px]">{short_description}</p>
                <div className="mt-7 lg:mt-14">
                  <h4 className="mb-3 lg:mb-6 text-xl font-semibold">Skills</h4>
                  <div className="flex flex-wrap gap-4 lg:w-[60%]">
                    {skills && skills[0] === '["[null]"]' ? (
                      <p className="text-gray-500">No skills found.</p>
                    ) : (
                      skills
                        .map((skill: string) => skill.replace(/^\"|\"$/g, "")) // remove quote from start and end
                        .map((skill: string, index: number) => (
                          <span key={index} className="px-4 py-2 rounded-md bg-[#F6FAFD]">
                            {skill}
                          </span>
                        ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 lg:px-12 py-7 lg:py-14">
              <p className="prose" dangerouslySetInnerHTML={{ __html: processedDescription }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerDetails;
