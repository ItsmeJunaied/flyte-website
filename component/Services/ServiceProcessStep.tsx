import React from "react";
// import StepCard from "../Common/StepCard";
import { serviceData } from "@/api/Dummy";
import StepCard from "../Common/StepCard";

type ServiceBannerProps = {
  params: string;
};

const ServiceProcessStep = ({ params }: ServiceBannerProps) => {
  const service = serviceData?.find((item) => item?.serviceLinkName === params);
  return <div>{service && <StepCard data={service?.steps} />}</div>;
};

export default ServiceProcessStep;
