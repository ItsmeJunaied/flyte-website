// import SuccessStories from "@/component/Common/SuccessStories";
import ClutchSuccessStories from "@/component/Common/ClutchSuccessStories";
import AboutOverview from "@/component/Company/AboutUs/AboutOverview";
import BehindFlyte from "@/component/Company/AboutUs/BehindFlyte";
import Roadmap from "@/component/Company/AboutUs/Roadmap";
import Contact from "@/component/Contact/Contact";
import React from "react";

export const metadata = {
  title: "About Us | Flyte Solutions Ltd.",
  description: "Learn about Flyte Solutions Ltd.—a passionate team of tech experts delivering innovative web, mobile, and AI solutions. Discover our mission, vision, and the people behind our success.",
  keywords: [
    "About Flyte Solutions",
    "Software company Bangladesh",
    "Tech team",
    "IT company mission",
    "Web and mobile experts",
    "AI development team",
    "Software innovation"
  ],
  openGraph: {
    title: "Who We Are | Flyte Solutions Ltd.",
    description: "Flyte Solutions Ltd. is a forward-thinking software company focused on delivering high-quality web, mobile, and AI-based solutions. Meet our team and explore our journey.",
    url: "https://flytesolutions.com/about-us",
    siteName: "Flyte Solutions Ltd.",
    images: [
      {
        url: "https://flytesolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Flyte Solutions Ltd. - About Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Flyte Solutions Ltd.",
    description: "Get to know the people, values, and vision driving Flyte Solutions Ltd., a leading software company in Bangladesh.",
    images: ["https://flytesolutions.com/logo.png"],
  },
};


const page = () => {
  return (
    <div>
      <AboutOverview />
      <Roadmap/>
      <BehindFlyte/>
      {/* <SuccessStories /> */}
      <ClutchSuccessStories/>
      <Contact />
    </div>
  );
};

export default page;
