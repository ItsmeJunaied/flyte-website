import React from 'react';
import CaseStudies from '../../component/CaseStudies/CaseStudies';
import CaseStudiesCards from '../../component/CaseStudies/CaseStudiesCards';
import Corevalues from '../../component/CaseStudies/Corevalues';
export const metadata = {
    title: "Case Studies | Flyte Solutions Ltd.",
    description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
  };
const page = () => {
    
    return (
        <div className='lg:mt-24'>
            <CaseStudies/>
            <CaseStudiesCards />
            <Corevalues/>
        </div>
    );
};

export default page;