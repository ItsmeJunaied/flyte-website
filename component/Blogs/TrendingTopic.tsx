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
  console.log("trendings", data);

  return (
    <div className=" border-2 border-[#FFD988] bg-[#FFF8E6] py-10 px-5 lg:px-[40px] h-full rounded-2xl flex flex-col flex-1">
      <h1 className=" text-center text-[#161c2d] text-2xl font-bold mb-2  leading-10">Trending Topics</h1>
      <p className="text-[#121416] text-center text-base font-normal font-['Open Sans'] leading-tight mb-8">
        Navigate through our most popular blog topics.
      </p>

      <div className=" grid grid-cols-2 gap-3">
        {data?.trendingtopics?.map((trend: Trend, index: number) => (
          <div key={index} className="  rounded-xl relative">
            <img className="w-full h-full rounded-xl object-cover" src={trend?.image} alt={trend?.slug} />
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
