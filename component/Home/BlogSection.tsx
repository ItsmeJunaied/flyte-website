"use client";
import { useGetAllBlogsQuery } from "@/redux/api/blogsApi";
import React from "react";
import BlogCard from "../Blogs/BlogCard";

// Define the Blog type
type Blog = {
  image: string;
  title: string;
  tag: string[];
  date: string;
  view_count: string;
  short_description: string;
  slug: string;
  admin: { name: string; profile: string };
};

const BlogSection = () => {
  const { data: blogsData, isLoading } = useGetAllBlogsQuery("");

  if (isLoading) {
    return "loading...";
  }

  const { data: blogs } = blogsData || {};

  return (
    <div
      className="py-5 lg:py-10"
      style={{
        backgroundImage: "url('/images/BlogSectionBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="w-full text-center text-[#161c2d] text-2xl font-bold leading-10">
        <h1>News & Blogs</h1>
      </div>

      <div className="container py-5 lg:py-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog: Blog, index: number) => (
           <div key={index}>
           <BlogCard blog={blog} />
         </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
