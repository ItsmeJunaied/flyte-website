"use client";
import { useGetBlogTrendingQuery } from "@/redux/api/blogsApi";
import React from "react";

type Trend = {
  image: string;
  slug: string;
  tag: string;
};

const TrendingTopic: React.FC = () => {
  const { data: blogsTrending, isLoading } = useGetBlogTrendingQuery("");

  if (isLoading) {
    return "loading...";
  }

  const { data } = blogsTrending || {};

  return (
    <div className="py-2.5 lg:py-10 px-3 lg:px-[40px] border-2 border-[#FFD988] bg-[#FFF8E6]  h-full rounded-2xl flex flex-col flex-1">
      <h1 className=" text-center text-[#161c2d] text-2xl font-bold mb-2">Trending Topics</h1>
      <p className="text-[#121416] text-center text-base font-normal mb-5">
        Navigate through our most popular blog topics.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {data?.trendingtopics?.map((trend: Trend, index: number) => (
          <div key={index} className="rounded-xl relative">
            <img className="lg:w-[240px] lg:h-[165px] rounded-xl object-cover mb-2" src={trend?.image} alt={trend?.slug} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[29px] px-2 py-[7px] bg-white/20 rounded-[3.18px] backdrop-blur-[9.55px] flex items-center">
              <p className="text-white text-xs font-normal ">{trend?.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopic;
