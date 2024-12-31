/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projectData = [
    {
      title: "Marketing Material Design",
      description:
        "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
      image:
        "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
      tags: [
        "Digital ads",
        "Marketing materials",
        "Email templates",
        "Motion graphics",
        "Social media design",
      ],
    },
    {
      title: "Marketing Material Design",
      description:
        "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
      image:
        "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
      tags: [
        "Digital ads",
        "Marketing materials",
        "Email templates",
        "Motion graphics",
        "Social media design",
      ],
    },
    {
      title: "Marketing Material Design",
      description:
        "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
      image:
        "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
      tags: [
        "Digital ads",
        "Marketing materials",
        "Email templates",
        "Motion graphics",
        "Social media design",
      ],
    },
    {
      title: "Marketing Material Design",
      description:
        "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
      image:
        "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
      tags: [
        "Digital ads",
        "Marketing materials",
        "Email templates",
        "Motion graphics",
        "Social media design",
      ],
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    if (container && scroll) {
      const scrollWidth = scroll.scrollWidth - container.offsetWidth;

      gsap.to(scroll, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: true,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black py-10">
      <div className="container mx-auto py-12">
        <Subtitle Subtitle="Our Work" />
        <Title title="Featured Case Studies" />
      </div>
      <div ref={scrollRef} className="flex gap-10">
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
              <h1 className="text-white text-4xl text-start">{project.title}</h1>
              <p className="text-white text-base">{project.description}</p>
              <div className="flex flex-row flex-wrap gap-3 mt-5">
                {project.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-3 rounded-3xl bg-[#313131] hover:bg-[#9FE870] hover:text-black"
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
