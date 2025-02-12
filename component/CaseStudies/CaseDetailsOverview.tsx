import { caseStudyData } from '@/api/Dummy';
import React from 'react';
import HeroBanner from '../Common/HeroBanner';

type ParamProps = {
  params: string;
};

const CaseDetailsOverview: React.FC<ParamProps> = ({ params }) => {
  const caseData = Object.values(caseStudyData).find((item) => item.hireLinkName === params);

  if (!caseData) return <p className="text-center text-red-500">Data not found</p>;
  return (
    <div>
      <HeroBanner bannerData={caseData} />
    </div>
  );
};

export default CaseDetailsOverview;