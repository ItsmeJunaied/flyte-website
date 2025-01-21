import React from "react";
import PotentialShowcase from "./PotentialShowcase";
import PotentialSideCard from "./PotentialSideCard";
import { careerShowcaseData } from "../../api/Dummy";

const UnlockPotential = () => {
  const { designShowcase, businessShowcase, softwareShowcase, technologyShowcase } = careerShowcaseData || {};
  return (
    <div className="container space-y-5 mb-10 md:mb-16">
      {/* flex flex-col md:flex-row gap-4 md:gap-8 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className="col-span-2">
          <PotentialShowcase
            direction="left"
            fromColor="#651fff"
            toColor="#f8bbd0"
            showCase={designShowcase}
          />
        </div>
        <div className="col-span-1">
          <PotentialSideCard
            fromColor="#b2ebf2"
            toColor="#f8bbd0"
            showCase={businessShowcase}
            columns={2}
            paddingTop="pt-[76px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className="col-span-1">
          <PotentialSideCard
            fromColor="#84ffff"
            toColor="#d5d5d3"
            showCase={technologyShowcase}
            columns={1}
            paddingTop="pt-12"
          />
        </div>
        <div className="col-span-2">
          <PotentialShowcase
            direction="right"
            fromColor="#651fff"
            toColor="#00bcd4"
            showCase={softwareShowcase}
          />
        </div>
      </div>
    </div>
  );
};

export default UnlockPotential;
