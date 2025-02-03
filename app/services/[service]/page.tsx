import React from "react";
import { serviceData } from "../../../api/Dummy";
import ServiceDetailsBanner from "@/component/Services/ServiceDetailsBanner";

export function generateStaticParams() {
  return serviceData?.map((item) => ({
    service: item?.serviceLinkName,
  }));
}

type PageProps = {
  params: Promise<{ service: string }>;
};

const page = async ({ params }: PageProps) => {
  const { service } = await params;
  return (
    <div className="my-16 lg:my-28">
      <ServiceDetailsBanner params={service} />
    </div>
  );
};

export default page;
