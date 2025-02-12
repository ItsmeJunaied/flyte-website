import { caseStudyData } from '@/api/Dummy';
import React from 'react';
import HeroBanner from '../Common/HeroBanner';
import StepCard from '../Common/StepCard';
import FeaturesCard from '../Common/FeaturesCard';

type ParamProps = {
  params: string;
};

const CaseDetailsOverview: React.FC<ParamProps> = ({ params }) => {
  const caseData = Object.values(caseStudyData).find((item) => item.caseStudyLinkName === params);

  if (!caseData) return <p className="text-center text-red-500">Data not found</p>;
  return (
    <div>
      <HeroBanner bannerData={caseData} />
      {caseData?.hireProcess && <StepCard data={caseData.hireProcess} />}
      <FeaturesCard data={caseData?.featuresData} Width="w-full sm:w-[200px]" />
    </div>
  );
};

export default CaseDetailsOverview;