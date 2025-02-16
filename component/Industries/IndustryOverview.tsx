import { industrydata } from "@/api/Dummy";
import React from "react";
import HeroBanner from "../Common/HeroBanner";
import OurExpertise from "./OurExpertise";
import IndustryAdvantages from "./IndustryAdvantages";

type OverviewProps = {
  params: string;
};

const IndustryOverview = ({ params }: OverviewProps) => {
  const industry = industrydata?.industries?.find((item) => item?.industryLinkName === params);
  if (!industry) return null;
  return (
    <div>
      <HeroBanner bannerData={industry} />
      <IndustryAdvantages data={industry.industryAdvantages} />
      <OurExpertise data={industry.features} />
    </div>
  );
};

export default IndustryOverview;
