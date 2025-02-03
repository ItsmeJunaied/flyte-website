import React from 'react';
import { industrydata } from "../../api/Dummy";
import HeroBanner from '../Common/HeroBanner';

type IndustryBannerProps = {
  params?: string;
};

const IndustryDetailsBanner = ({ params }: IndustryBannerProps) => {
  const industry = industrydata?.industries?.find((item) => item?.industryLinkName === params);
  console.log("industry", industry)
  return (
    <div>
      {industry ? (
        <HeroBanner bannerData={industry} />
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
};

export default IndustryDetailsBanner;