"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection: React.FC<{ projectData: any[] }> = () => {
  const projectData=[
    {
      "title": "Marketing Material Design",
      "description": "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
      "image": "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
      "tags": ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"]
    },
    {
      "title": "Marketing Material Design",
      "description": "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
      "image": "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
      "tags": ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"]
    },
    {
      "title": "Marketing Material Design",
      "description": "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
      "image": "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
      "tags": ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"]
    },
  ]
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const section = sectionRef.current;

    if (container && section) {
      gsap.to(container, {
        x: () => -(container.scrollWidth - container.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section, // The parent container that triggers scrolling
          start: "top top", // Start when the section hits the top of the viewport
          end: () => `+=${container.scrollWidth}`, // End after the full scrollable width
          pin: true, // Pin the section while scrolling
          scrub: true, // Smooth scrubbing
        },
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className="py-10 bg-black overflow-x-visible">
      <div className="container mx-auto py-12">
        <Subtitle Subtitle="Our Work" />
        <Title title="Featured Case Studies" />
      </div>
      <div
        className="flex gap-10 overflow-visible"
        ref={scrollContainerRef}
        style={{ width: projectData.length * 1295 }}
      >
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-[#1A1A1A] w-[1295px] h-[550px] rounded-xl flex flex-row justify-center items-center gap-10 p-6"
          >
            <div className="w-full lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-[585px] h-[500px] rounded-xl"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-start items-center gap-8 text-start">
              <h1 className="text-white text-4xl text-start">
                {project.title}
              </h1>
              <p className="text-white text-base">{project.description}</p>
              <div className="flex flex-row flex-wrap gap-3 mt-5">
                {project.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-3 rounded-3xl bg-[#313131]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;