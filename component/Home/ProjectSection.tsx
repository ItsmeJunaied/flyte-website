/* eslint-disable @next/next/no-img-element */
import React from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import ProjectCards from "./HomeSubComponents.tsx/ProjectCards";
import { projectSliderData } from "@/api/Dummy";
import ProjectCardsMobile from "./HomeSubComponents.tsx/ProjectCardsMobile";

const ProjectSection: React.FC = () => {
  const projectData = projectSliderData;

  return (
    <div className="relative overflow-hidden lg:bg-black bg-white px-5 py-5 lg:py-10">
      <div className="container py-3 lg:py-12">
      <Subtitle Subtitle="Case Studies" />
      <Title
        fontColor=" text-black lg:text-white"
        title="Driving Success Through Proven SOlutions"
      />
      </div>

      <div className="hidden lg:block">
      <ProjectCards projectData={projectData} />
      </div>
      <div className="block lg:hidden">
      <ProjectCardsMobile projectData={projectData} />
      </div>
    </div>
  );
};

export default ProjectSection;
