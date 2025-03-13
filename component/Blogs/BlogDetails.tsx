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

  console.log("blogs data", blogsData?.data);
  const { blog_section, title, image } = blogsData?.data || {};

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 325) {
        setTopPosition(110);
      } else {
        setTopPosition(180);
      }

      blog_section?.forEach((section: { id: string; title: string }) => {
        const element = sectionRefs.current[section.title];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.title);
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
    <div className="flex gap-8 px-4 py-8">
      {/* Left Side - Blog Content */}
      <div className="w-full h-fit space-y-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <img src={image} alt={title} className="rounded-lg w-full object-cover" />
        <div className="blog-content space-y-8">
          {blog_section?.map((section: { id: number; title: string; description: string }) => (
            <div
              key={section?.id}
              ref={(el) => {
                sectionRefs.current[section?.title] = el!;
              }}
              id={section?.title.replace(/\s+/g, "-").toLowerCase()}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold">{section?.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section?.description }} />
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
          <h3 className="text-lg font-bold">Sections</h3>
          <ul className="space-y-2">
            {blog_section?.map((section: { id: string; title: string }) => (
              <li key={section?.id}>
                <button
                  onClick={() => scrollToSection(section.title)}
                  className={`block px-4 py-2 rounded-lg ${
                    activeSection === section?.title ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {section?.title}
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
