import React from "react";
import WhyChoose from "./WhyChoose";
import OurTechnologies from "./OurTechnologies";
import HireMoreDevelopers from "./HireMoreDevelopers";
import OurExpertiseDeveloper from "./OurExpertiseDeveloper";
import { techData } from "@/api/Dummy";
import HeroBanner from "../Common/HeroBanner";
import StepCard from "../Common/StepCard";

type ParamProps = {
  params: string;
};

const HireOverview: React.FC<ParamProps> = ({ params }) => {
  const tech = Object.values(techData).find((item) => item.hireLinkName === params);

  if (!tech) return <p className="text-center text-red-500">Data not found</p>;

  return (
    <div>
      <HeroBanner bannerData={tech} />
      <WhyChoose data={tech} />
      {tech?.technologies?.length ? <OurTechnologies data={tech} /> : null}
      {tech?.exploreMoreDevelopers?.length ? <HireMoreDevelopers data={tech} /> : null}
      {tech?.hireProcess && <StepCard data={tech.hireProcess} />}
      {tech?.developerExpertises?.length ? <OurExpertiseDeveloper data={tech} /> : null}
    </div>
  );
};

export default HireOverview;
