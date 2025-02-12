import { caseStudyData } from '@/api/Dummy';
import React from 'react';
import HeroBanner from '../Common/HeroBanner';
import StepCard from '../Common/StepCard';
import FeaturesCard from '../Common/FeaturesCard';
import CaseInfo from './CaseInfo';
import EverythingSection from './EverythingSection ';
import TechnologyStack from './TechnologyStack';

type ParamProps = {
  params: string;
};

const CaseDetailsOverview: React.FC<ParamProps> = ({ params }) => {
  const caseData = caseStudyData.find((item) => item.caseStudyLinkName === params);

  if (!caseData) return <p className="text-center text-red-500">Data not found</p>;
  return (
    <div>
      <HeroBanner bannerData={caseData} />
      <CaseInfo data={caseData?.caseInfo}/>
      <StepCard data={caseData.hireProcess} />
      <EverythingSection/>
      <TechnologyStack/>
      <FeaturesCard data={caseData?.featuresData} Width="w-full sm:w-[200px]" />
    </div>
  );
};

export default CaseDetailsOverview;