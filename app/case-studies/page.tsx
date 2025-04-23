import React from 'react';
import CaseStudies from '../../component/CaseStudies/CaseStudies';
import CaseStudiesCards from '../../component/CaseStudies/CaseStudiesCards';
import Contact from '@/component/Contact/Contact';
import SuccessStories from '@/component/Common/SuccessStories';
export const metadata = {
    title: "Case Studies | Flyte Solutions Ltd.",
    description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
  };
const page = () => {
    
    return (
        <div className='lg:mt-24'>
            <CaseStudies/>
            <CaseStudiesCards />
            <SuccessStories />
            <Contact />
        </div>
    );
};

export default page;