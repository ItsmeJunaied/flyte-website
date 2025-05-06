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
import ClientFeedback from "./ClientFeedback";

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
    title:heroTitle,
    short_title:heroSubtitle,
    short_description:heroDesctiption,
    image:heroImage,
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
      <HeroBanner bannerData={{ heroTitle, heroSubtitle, heroDesctiption, heroImage }} />
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
      <KeyAchievement data={impactful} title={heroTitle}/>
      <FeaturesCard Width="w-full sm:w-[200px]" />
      <ClientFeedback/>
    </div>
  );
};

export default CaseDetailsOverview;
