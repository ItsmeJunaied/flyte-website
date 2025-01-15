/* eslint-disable @next/next/no-img-element */
import React from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import ProjectCards from "./HomeSubComponents.tsx/ProjectCards";
import { projectSliderData } from "@/api/Dummy";



const ProjectSection: React.FC = () => {
  const projectData = projectSliderData;

  return (
    <div className="relative overflow-hidden bg-black py-10">
      <div className="container px-5 lg:px-[80px] py-12">
        <Subtitle Subtitle="Our Work" />
        <Title fontColor="text-white" title="Featured Case Studies" />
      </div>

      <ProjectCards projectData={projectData} />

    </div>
  );
};

export default ProjectSection;
