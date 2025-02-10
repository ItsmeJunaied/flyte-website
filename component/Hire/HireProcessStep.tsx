import React from "react";
import StepCard from "../Common/StepCard";
import { techData } from "@/api/Dummy";
import { ParamProps } from "@/app/hire/[hire]/page";

const HireProcessStep = ({ params }: ParamProps) => {
  const tech = Object.values(techData).find((item) => item.hireLinkName === params);
  const hireProcessData = tech?.hireProcess || {};
  return (
    <div>
      <StepCard data={hireProcessData} />
    </div>
  );
};

export default HireProcessStep;
