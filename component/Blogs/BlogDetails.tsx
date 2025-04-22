"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetSingleBlogQuery } from "@/redux/api/blogsApi";
import React, { useEffect, useRef, useState } from "react";

type ParamProps = {
  params: string;
};

const BlogDetails: React.FC<ParamProps> = ({ params }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [topPosition, setTopPosition] = useState<number>(180);
  const sectionRefs = useRef<Record<string, HTMLDivElement>>({});

  const { data: blogsData, isLoading } = useGetSingleBlogQuery(params);
  const { blog_section, title, image, tag, date, view_count } = blogsData?.data || {};

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 325) {
        setTopPosition(110);
      } else {
        setTopPosition(180);
      }

      blog_section?.forEach((section: { id: string; blog_section_title: string }) => {
        const element = sectionRefs.current[section.blog_section_title];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.blog_section_title);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog_section]);

  const scrollToSection = (title: string) => {
    const element = sectionRefs.current[title];
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 110,
        behavior: "smooth",
      });
    }
  };

  if (isLoading)
    return (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
        <div className="lg:col-span-3 space-y-8">
          <Skeleton className="w-full h-7" />
          <Skeleton className="w-full h-[220px] lg:h-[440px]" />
        </div>
        <div className="col-span-1 space-y-6">
          <Skeleton className="w-40 h-7" />
          <Skeleton className="w-60 h-7" />
          <Skeleton className="w-60 h-7" />
          <Skeleton className="w-60 h-7" />
          <Skeleton className="w-60 h-7" />
          <Skeleton className="w-60 h-7" />
        </div>
      </div>
    );

  return (
    <div className="flex gap-8 px-4 mb-8">
      {/* Left Side - Blog Content */}
      <div className="w-full h-fit">
        {/* tags  */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tag?.map((tagItem: string, index: number) => (
            <p key={index} className="px-3 py-1.5 bg-[#4b6bfb] rounded-md text-white w-fit">
              {tagItem}
            </p>
          ))}
        </div>

        {/* title  */}
        <h1 className="mb-5 text-3xl font-semibold text-[text-[#181a2a]]">{title}</h1>

        {/* user image and name  */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co.com/7JCbP8nB/Ishrafil.jpg"
            alt="user image"
            className="rounded-full w-8 h-8 object-cover border text-[8px] text-center"
          />
          <h4 className="text-[#696A75] text-xs font-semibold">Md Ishrafil Hossain</h4>
          <div className="w-5 h-[1px] bg-[#696A75]" />
          <time className="text-[#696A75] text-xs" dateTime={date}>
            {date}
          </time>
          <div className="w-5 h-[1px] bg-[#696A75]" />
          <div className="text-[#696A75] text-xs">
            <i className="mr-1 fa-solid fa-bookmark"></i> 5 min read
          </div>
          <div className="w-5 h-[1px] bg-[#696A75]" />
          <div className="text-[#696A75] text-xs">
            <i className="mr-1 fa-solid fa-chart-simple"></i> {view_count} views
          </div>
        </div>

        {/* blog image  */}
        <img src={image} alt={title} className="my-6 rounded-lg w-full object-cover" />

        {/* blog content  */}
        <div className="blog-content space-y-6">
          {blog_section?.map((section: { id: number; blog_section_title: string; description: string }) => (
            <div
              key={section?.id}
              ref={(el) => {
                sectionRefs.current[section?.blog_section_title] = el!;
              }}
              id={section?.blog_section_title?.replace(/\s+/g, "-")?.toLowerCase()}
              className="space-y-3"
            >
              <h2 className="text-[#181a2a] text-2xl font-semibold">{section?.blog_section_title}</h2>
              <div className="text-[#3b3c4a] text-xl" dangerouslySetInnerHTML={{ __html: section?.description }} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Section List (Fixed) */}
      <div className="w-[400px]">
        <div
          className="h-fit"
          style={{
            position: "fixed",
            top: `${topPosition}px`,
            zIndex: 0,
            transition: "top 0.5s",
          }}
        >
          <h3 className="mb-4 text-lg font-semibold">Table of Content</h3>
          <ul className="space-y-2">
            {blog_section?.map((section: { id: string; blog_section_title: string }) => (
              <li key={section?.id}>
                <button
                  onClick={() => scrollToSection(section?.blog_section_title)}
                  className={`block px-4 py-2 rounded-lg ${
                    activeSection === section?.blog_section_title
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {section?.blog_section_title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
