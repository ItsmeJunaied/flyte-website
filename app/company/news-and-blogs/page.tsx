import { NewsBlogsBannerData } from "@/api/Dummy";
import BlogGlimpsSection from "@/component/Blogs/BlogGlimpsSection";
import CommonBanner from "@/component/Common/CommonBanner";
import Contact from "@/component/Contact/Contact";
import BlogSection from "@/component/Home/BlogSection";
import React from "react";

export const metadata = {
  title: "News & Blogs | Flyte Solutions Ltd.",
  description: "Stay updated with the latest tech trends, company news, and expert insights from the team at Flyte Solutions Ltd. Explore blogs on web, mobile, AI, DevOps, and more.",
  keywords: [
    "Flyte Solutions blog",
    "Tech news",
    "Web development articles",
    "Mobile app development tips",
    "AI and ML blogs",
    "DevOps insights",
    "Software industry updates"
  ],
  openGraph: {
    title: "Tech Insights & Updates | News & Blogs | Flyte Solutions Ltd.",
    description: "Explore expert-written blogs and company news from Flyte Solutions Ltd. covering web, mobile, AI, and DevOps technologies.",
    url: "https://flytesolutions.com/news-and-blogs",
    siteName: "Flyte Solutions Ltd.",
    images: [
      {
        url: "https://flytesolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Flyte Solutions Ltd. - News & Blogs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Blogs | Flyte Solutions Ltd.",
    description: "Read the latest blogs and news from Flyte Solutions Ltd. for insights on software development, AI, DevOps, and tech trends.",
    images: ["https://flytesolutions.com/logo.png"],
  },
};


const page = () => {
  const bannerData = NewsBlogsBannerData;
  return (
    <div>
      <CommonBanner bannerData={bannerData} />
      <div className="container py-10">
        <BlogGlimpsSection />
      </div>
      <BlogSection />
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default page;
