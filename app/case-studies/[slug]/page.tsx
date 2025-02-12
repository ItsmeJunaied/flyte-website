import { caseStudyData } from '@/api/Dummy';
import CaseDetailsOverview from '@/component/CaseStudies/CaseDetailsOverview';
import React from 'react';

export const metadata = {
  title: "Case Studies Details | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

// Convert techData into an array before mapping
export function generateStaticParams() {
  return caseStudyData.map((tech) => ({
    slug: tech.hireLinkName,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};


const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  return (
    <div>
      <CaseDetailsOverview params={slug}/>
    </div>
  );
};

export default page;