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
    <div className="relative overflow-hidden bg-white px-5 py-4 lg:py-6">
      <div className="container mb-3 lg:mb-6">
      <Subtitle Subtitle="Case Studies" />
      <Title
        fontColor=""
        title="Driving Success Through Proven SOlutions"
        width="full"
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
