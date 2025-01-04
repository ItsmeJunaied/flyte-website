import React from 'react';
import CaseStudies from '../component/CaseStudies/CaseStudies';
import CaseStudiesCards from '../component/CaseStudies/CaseStudiesCards';
import { caseStudyData } from '@/api/Dummy';
import Corevalues from '../component/CaseStudies/Corevalues';

const page = () => {
    return (
        <div className=' '>
            <CaseStudies/>
            <CaseStudiesCards caseStudyData={caseStudyData} />
            <Corevalues/>
        </div>
    );
};

export default page;