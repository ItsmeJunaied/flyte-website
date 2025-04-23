"use client";
import { useGetRelatedBlogsQuery } from "@/redux/api/blogsApi";
import React from "react";
import BlogCard from "./BlogCard";

// Define the Blog type
export type Blog = {
  image: string;
  title: string;
  tag: string[];
  date: string;
  view_count: string;
  short_description: string;
  slug: string;
  admin: { name: string; profile: string };
};

const FavoriteBlogs = () => {
  const { data: blogsData, isLoading } = useGetRelatedBlogsQuery("");

  if (isLoading) {
    return "loading...";
  }

  const { data: blogs } = blogsData || {};

  return (
    <div className="py-5 lg:py-10">
      <div>
        <h2 className="mb-4 text-[#161c2d] text-2xl text-center font-bold">You May Also Like</h2>
      </div>

      <div className=" py-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog: Blog, index: number) => (
          <div key={index}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteBlogs;
