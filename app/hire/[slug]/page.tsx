import HireDetailsHero from '@/component/Hire/HireDetailsHero';
import WhyChoose from '@/component/Hire/WhyChoose';
import React from 'react';

export const metadata = {
  title: "Hire Details | Flyte Solutions Ltd.",
  description:
    "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

const page = async ({ params }) => {
  const { slug } = await params; // Awaiting isn't necessary here

  console.log("params:", slug); // frontend-developer
  return (
    <div className='lg:mt-24'>
      <HireDetailsHero/>
      <WhyChoose/>
    </div>
  );
};

export default page;