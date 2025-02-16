import { industrydata } from "@/api/Dummy";
import React from "react";
import HeroBanner from "../Common/HeroBanner";
import OurExpertise from "./OurExpertise";
import IndustryAdvantages from "./IndustryAdvantages";
import FeaturesCard from "../Common/FeaturesCard";
import IndustryTrendStep from "./IndustryTrendStep";

type OverviewProps = {
  params: string;
};

const IndustryOverview = ({ params }: OverviewProps) => {
  const industry = industrydata?.industries?.find((item) => item?.industryLinkName === params);
  if (!industry) return null;
  return (
    <div>
      <HeroBanner bannerData={industry} />
      <IndustryAdvantages data={industry?.industryAdvantages} />
      <OurExpertise data={industry?.features} />
      <IndustryTrendStep data={industry?.trendSteps}/>
      <FeaturesCard data={industry?.industrySolution} Width="w-full sm:w-[330px]" />
    </div>
  );
};

export default IndustryOverview;
