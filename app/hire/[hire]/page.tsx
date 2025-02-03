import WhyChoose from "@/component/Hire/WhyChoose";
import React from "react";
import { techData } from "../../../api/Dummy";
import HireDetailsBanner from "@/component/Hire/HireDetailsBanner";

export const metadata = {
  title: "Hire Details | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
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
  return (
    <div className="mt-16 lg:mt-28">
      <HireDetailsBanner params={hire} />
      <WhyChoose />
    </div>
  );
};

export default page;
