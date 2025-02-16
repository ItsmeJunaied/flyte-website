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
  return (
    <div>
      {industry ? <HeroBanner bannerData={industry} /> : null}
      {industry ? <IndustryAdvantages data={industry?.industryAdvantages} /> : null}
      {industry ? <OurExpertise data={industry?.features} /> : null}
    </div>
  );
};

export default IndustryOverview;
