import React from 'react';
import CareerBanner from '@/component/Career/CareerBanner';
// import UnlockPotential from '@/component/Career/UnlockPotential';
import WorkCulture from '@/component/Career/WorkCulture';
import TopBrands from '@/component/Career/TopBrands';
import HiringProcess from '@/component/Career/HiringProcess';
import CareerOpportunities from '@/component/Career/CareerOpportunities';

export const metadata = {
  title: "Career Opportunities | Flyte Solutions Ltd.",
  description: "Grow your career with Flyte Solutions Ltd. We’re hiring passionate professionals in web, mobile, AI, DevOps, and more. Join our innovative team and make an impact.",
  keywords: [
    "Flyte Solutions careers",
    "Tech jobs Bangladesh",
    "Software company hiring",
    "Web developer jobs",
    "AI and ML careers",
    "Mobile app development jobs",
    "DevOps engineer jobs"
  ],
  openGraph: {
    title: "Career at Flyte Solutions Ltd. | Join Our Team",
    description: "Explore current job openings at Flyte Solutions Ltd. We're looking for skilled individuals to join our growing tech team.",
    url: "https://flytesolutions.com/career",
    siteName: "Flyte Solutions Ltd.",
    images: [
      {
        url: "https://flytesolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Flyte Solutions Ltd. - Career Opportunities",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career at Flyte Solutions Ltd. | Join Our Team",
    description: "Find exciting career opportunities in software, web, mobile, AI, and more at Flyte Solutions Ltd. Apply today.",
    images: ["https://flytesolutions.com/logo.png"],
  },
};


const page = () => {
    return (
        <div>
            <CareerBanner/>
            <TopBrands/>
            <WorkCulture/>
            {/* <UnlockPotential/> */}
            <HiringProcess/>
            <CareerOpportunities/>
        </div>
    );
};

export default page;