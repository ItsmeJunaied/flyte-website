"use client";
import React from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import ProjectCards from "./HomeSubComponents.tsx/ProjectCards";
import ProjectCardsMobile from "./HomeSubComponents.tsx/ProjectCardsMobile";
import { useGetCategoryBasedCaseStudiesQuery } from "@/redux/api/caseStudiesApi";

const ProjectSection: React.FC = () => {
  const { data: caseStudies, isLoading } = useGetCategoryBasedCaseStudiesQuery("");

  if (isLoading) {
    return "loading...";
  }

  console.log("case studies", caseStudies?.data?.data);

  return (
    <div className="relative overflow-hidden bg-white px-5 py-4 lg:py-6">
      <div className="container mb-3 lg:mb-6">
        <Subtitle Subtitle="Case Studies" />
        <Title fontColor="" title="Driving Success Through Proven SOlutions" width="full" />
      </div>

      <div className="hidden lg:block">
        <ProjectCards projectData={caseStudies?.data?.data || []} />
      </div>
      <div className="block lg:hidden">
        <ProjectCardsMobile projectData={caseStudies?.data?.data || []} />
      </div>
    </div>
  );
};

export default ProjectSection;
