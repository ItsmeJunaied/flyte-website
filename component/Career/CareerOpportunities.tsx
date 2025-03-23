"use client";
import React from "react";
import OpportunityCard from "./OpportunityCard";
import { useGetAllCareerOpportunitiesQuery } from "@/redux/api/careerApi";
import { Skeleton } from "@/components/ui/skeleton";

export type Opportunity = {
  id: number;
  title: string;
  company_name: string;
  short_description: string;
  description: string;
  employment_status: string;
  location: string;
  slug: string;
  sorting: number;
  status: string;
};

const CareerOpportunities = () => {
  const { data, isLoading } = useGetAllCareerOpportunitiesQuery();

  return (
    <div className="container mb-10 md:mb-16">
      <h2 className="w-full md:w-[613px] md:text-center text-lg md:text-[32px] font-semibold mx-auto md:leading-10">
        Explore Exciting <span className="text-[#5856d6]">Career</span> Opportunities -
        <span className="text-[#5856d6]"> Join</span> Our Team Today!
      </h2>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Skeleton className="h-60 w-full" />
          <Skeleton className="h-60 w-full" />
          <Skeleton className="h-60 w-full" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {data?.data?.map((opportunity: Opportunity, index: number) => (
            <div key={index}>
              <OpportunityCard opportunity={opportunity} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CareerOpportunities;
