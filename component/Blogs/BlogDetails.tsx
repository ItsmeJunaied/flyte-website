"use client";
import React, { useEffect, useRef, useState } from "react";

type BlogDetailsProps = {
  blog: {
    title: string;
    image: string;
    description: string;
  };
};

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Extract sections dynamically from the blog description
  const sections = blog.description
    .match(/<h2>(.*?)<\/h2>/g)
    ?.map((section) => section.replace(/<\/?h2>/g, ""));

  const sectionRefs = useRef<Record<string, HTMLDivElement>>({});

  // Track the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sections) {
        sections.forEach((section) => {
          const element = sectionRefs.current[section];
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="flex gap-8 px-4 py-8">
      {/* Left Side - Blog Content */}
      <div className="w-full h-fit space-y-8">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-lg w-full object-cover"
        />
        <div className="blog-content space-y-8">
          {sections?.map((section, index) => (
            <div
              key={section}
              ref={(el) => {
                sectionRefs.current[section] = el!;
              }}
              id={section.replace(/\s+/g, "-").toLowerCase()}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold">{section}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    blog.description
                      .split(`<h2>${section}</h2>`)[1]
                      ?.split("<h2>")[0] || "",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Section List */}
      <div className="w-[400px]">
        <div className="sticky top-5  h-fit">
          <h3 className="text-lg font-bold">Sections</h3>
          <ul className="space-y-2">
            {sections?.map((section) => (
              <li key={section}>
                <a
                  href={`#${section.replace(/\s+/g, "-").toLowerCase()}`}
                  className={`block px-4 py-2 rounded-lg ${
                    activeSection === section
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
