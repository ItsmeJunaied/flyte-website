import React from "react";
import TrendingTopic from "./TrendingTopic";
import Topreads from "./Topreads";
import { blogData } from "@/api/Dummy";

const BlogGlimpsSection = () => {
  const blogsData = blogData;

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-stretch gap-5">
        <div className="w-full lg:w-1/2 flex-1 px-5 lg:px-0">
          <TrendingTopic />
        </div>
        <div className="w-full lg:w-1/2 flex-1 px-5 lg:px-0">
          <Topreads blogData={blogsData} />
        </div>
      </div>
    </div>
  );
};

export default BlogGlimpsSection;
