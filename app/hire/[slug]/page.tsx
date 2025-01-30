import HireDetailsHero from '@/component/Hire/HireDetailsHero';
import WhyChoose from '@/component/Hire/WhyChoose';
import React from 'react';

const page = () => {
  return (
    <div className='lg:mt-24'>
      <HireDetailsHero/>
      <WhyChoose/>
    </div>
  );
};

export default page;