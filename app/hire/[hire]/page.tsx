import HireDetailsHero from '@/component/Hire/HireDetailsHero';
import WhyChoose from '@/component/Hire/WhyChoose';
import React from 'react';
import { techData } from "../../../api/Dummy";

export const metadata = {
  title: "Hire Details | Flyte Solutions Ltd.",
  description:
    "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

// Convert techData into an array before mapping
export function generateStaticParams() {
  return Object.values(techData).map((tech) => ({
    hire: tech.hireLinkName,
  }));
}

type PageProps = {
  params: { hire: string };
};

const page = async ({ params }: PageProps) => {
  const { hire } = params;

  console.log("params:", hire); // frontend-developer
  return (
    <div className='lg:mt-24'>
      <HireDetailsHero/>
      <WhyChoose/>
    </div>
  );
};

export default page;