/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetBlogTrendingQuery } from "@/redux/api/blogsApi";
import Link from "next/link";
import React from "react";

type Admin = {
  name: string;
  profile: string;
};

type Card = {
  title: string;
  image?: string;
  tag: string[];
  admin: Admin;
  slug: string;
  short_description: string;
  keywords: string[];
  date: string;
  view_count: string;
};

const Topreads = () => {
  const { data: blogsTopreads, isLoading } = useGetBlogTrendingQuery("");

  if (isLoading) {
    return "loading...";
  }

  const { data } = blogsTopreads || {};

  return (
    <div className="py-2.5 lg:py-10 px-3 lg:px-[40px] border-2 border-[#FFB2B2] bg-[#FFF8E6] h-full rounded-2xl flex flex-col flex-1 ">
      <h1 className=" text-center text-black text-xl font-bold mb-7">Top Reads</h1>

      <div className="flex flex-col gap-8">
        {data?.topreads?.slice(0, 2)?.map((card: Card, index: number) => (
          <div
            key={index}
            className=" bg-white flex flex-col lg:flex-row gap-5 transition-transform duration-500 mb-2"
          >
            <div className="flex-1 relative h-auto">
              <Link href={`news-and-blogs/${card?.slug}`}>
                <img className="w-full h-full object-cover" src={card?.image} alt={card?.title} />
                {/* Overlay */}
                <div className="absolute h-full inset-0 bg-black/25" />

                {/* Keywords over the image */}
                <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                  {card?.tag?.map((tagItem, idx) => (
                    <div key={idx} className="blogs-keyword-div px-3 py-1 rounded-lg text-xs bg-white/50">
                      <span className="inline-block text-white">{tagItem}</span>
                    </div>
                  ))}
                </div>
              </Link>
            </div>

            <div className="px-2.5 lg:px-0 w-full lg:w-1/2 py-4 space-y-3">
              {/* title  */}
              <h2 className="w-fit h-11 overflow-hidden text-[#121416] text-sm text-wrap font-semibold mb-2 lg:mb-0 line-clamp-2">
                {card?.title}
              </h2>

              {/* Author Info */}
              <div className="flex items-center gap-2">
                <img
                  src={card?.admin?.profile}
                  alt="user image"
                  className="rounded-full w-8 h-8 object-cover border text-[8px] text-center"
                />
                <h4 className="text-[#696A75] text-xs font-semibold">{card?.admin?.name}</h4>
                <div className="w-5 h-[1px] bg-[#696A75]" />
                <time className="text-[#696A75] text-xs" dateTime={card?.date}>
                  {card?.date}
                </time>
              </div>

              {/* viewers  */}
              <div className="flex items-center gap-2">
                <div className="text-[#696A75] text-xs">
                  <i className="mr-1 fa-solid fa-bookmark"></i> 5 min read
                </div>
                <div className="w-5 h-[1px] bg-[#696A75]" />
                <div className="text-[#696A75] text-xs">
                  <i className="mr-1 fa-solid fa-chart-simple"></i> {card?.view_count} views
                </div>
              </div>

              {/* description  */}
              <p className="h-16 overflowHidden text-[#6c757d] text-xs line-clamp-4">
                {card?.short_description}
              </p>
              {/* button  */}
              <div>
                <Link className="border-black hover:border-btnColor" href={`news-and-blogs/${card?.slug}`}>
                  <div className="text-black hover:text-btnColor text-xs">View Post</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topreads;
