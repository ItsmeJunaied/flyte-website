import React from "react";
import CaseStudies from "../../component/CaseStudies/CaseStudies";
import CaseStudiesCards from "../../component/CaseStudies/CaseStudiesCards";
import Contact from "@/component/Contact/Contact";
// import SuccessStories from '@/component/Common/SuccessStories';

export const metadata = {
  title: "Case Studies | Flyte Solutions Ltd.",
  description:
    "See how Flyte Solutions Ltd. helps clients succeed through real-world software solutions. Our case studies showcase impactful results in web, mobile, and AI projects.",
  keywords: [
    "Flyte Solutions case studies",
    "Software success stories",
    "Web development case studies",
    "Mobile app case studies",
    "AI project case studies",
    "Client success stories",
    "Tech solutions in Bangladesh"
  ],
  openGraph: {
    title: "Real Results: Case Studies | Flyte Solutions Ltd.",
    description:
      "Explore our portfolio of case studies and discover how Flyte Solutions Ltd. delivers measurable results with modern technology.",
    url: "https://flytesolutions.com/case-studies",
    siteName: "Flyte Solutions Ltd.",
    images: [
      {
        url: "https://flytesolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Flyte Solutions Ltd. - Case Studies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Flyte Solutions Ltd.",
    description:
      "Discover real-world case studies of how Flyte Solutions Ltd. delivers success through web, mobile, and AI-powered solutions.",
    images: ["https://flytesolutions.com/logo.png"],
  },
};

const page = () => {
  return (
    <div className="lg:mt-24">
      <CaseStudies />
      <CaseStudiesCards />
      {/* <SuccessStories /> */}
      <Contact />
    </div>
  );
};

export default page;
