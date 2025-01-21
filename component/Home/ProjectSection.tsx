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
      <div className="container py-12">
        <Subtitle Subtitle="Case Studies" />
        <Title fontColor="text-white" title="Driving Success Through Proven SOlutions" />
      </div>

      <ProjectCards projectData={projectData} />

    </div>
  );
};

export default ProjectSection;
