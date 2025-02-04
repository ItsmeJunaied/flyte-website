import React from "react";
import IndustryDetailsBanner from "@/component/Industries/IndustryDetailsBanner";
import { industrydata } from "../../../api/Dummy";
import OurExpertise from "@/component/Industries/OurExpertise";
import BookConsultation from "@/component/Common/BookConsultation";

export function generateStaticParams() {
  return industrydata?.industries?.map((item) => ({
    industry: item?.industryLinkName,
  }));
}

type PageProps = {
  params: Promise<{ industry: string }>;
};

const page = async ({ params }: PageProps) => {
  const { industry } = await params;
  return (
    <div>
      <IndustryDetailsBanner params={industry} />
      <OurExpertise params={industry}/>
      <BookConsultation />
    </div>
  );
};

export default page;
