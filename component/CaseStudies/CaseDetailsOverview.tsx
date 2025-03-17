"use client";
import React from "react";
import HeroBanner from "../Common/HeroBanner";
import StepCard from "../Common/StepCard";
import FeaturesCard from "../Common/FeaturesCard";
import CaseInfo from "./CaseInfo";
import EverythingSection from "./EverythingSection ";
import TechnologyStack from "./TechnologyStack";
import KeyAchievement from "./KeyAchievement";
import { useGetSpecificCaseStudyQuery } from "@/redux/api/caseStudiesApi";

type ParamProps = {
  params: string;
};

const CaseDetailsOverview: React.FC<ParamProps> = ({ params }) => {
  const { data: caseStudies, isLoading } = useGetSpecificCaseStudyQuery(params);

  if (isLoading)
    return (
      <p className="text-center bg-slate-600 h-[400px] text-blue-500 flex justify-center items-center">
        Loading...
      </p>
    );

  const {
    title,
    short_title,
    short_description,
    image,
    location,
    category,
    service,
    partnership,
    developing_title,
    developing_short_description,
    developing_short_title,
    developing_image,
    developing_step,
    services,
    apps_list,
    impactful,
  } = caseStudies?.data || {};

  return (
    <div>
      <HeroBanner bannerData={{ title, short_title, short_description, image }} />
      <CaseInfo data={{ location, category, service, partnership }} />
      <StepCard
        data={{
          developing_title,
          developing_short_description,
          developing_short_title,
          developing_image,
          developing_step,
          button_path: "",
          button_name: "",
        }}
      />
      <EverythingSection data={services} />
      <TechnologyStack data={apps_list} />
      <KeyAchievement data={impactful} />
      <FeaturesCard Width="w-full sm:w-[200px]" />
    </div>
  );
};

export default CaseDetailsOverview;
