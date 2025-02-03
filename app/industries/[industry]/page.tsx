import React from "react";
import IndustryDetailsBanner from "@/component/Industries/IndustryDetailsBanner";
import { industrydata } from "../../../api/Dummy";

export function generateStaticParams() {
  return industrydata?.industries?.map((item) => ({
    industry: item?.industryLinkName,
  }));
}

type PageProps = {
  params: Promise<{ industry: string }>;
};

const Industry = async ({ params }: PageProps) => {
  const { industry } = await params;
  return (
    <div className="my-16 lg:my-28">
      <IndustryDetailsBanner params={industry} />
    </div>
  );
};

export default Industry;
