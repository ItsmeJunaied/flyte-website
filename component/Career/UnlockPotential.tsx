import React from "react";
import PotentialShowcase from "./PotentialShowcase";
import { careerShowcaseData } from "../../api/Dummy";
import PotentialBusiness from "./PotentialBusiness";
import PotentialTech from "./PotentialTech";

const UnlockPotential = () => {
  const { designShowcase, businessShowcase, softwareShowcase, technologyShowcase } = careerShowcaseData || {};
  return (
    <div className="container space-y-5 mb-10 md:mb-16">
      <h2 className="text-center text-xl md:text-3xl font-semibold">
        Unlock Your <span className="text-[#5856d6]">Potential</span> in Various Sectors
      </h2>
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
          <PotentialBusiness businessShowcase={businessShowcase} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className="col-span-1">
          <PotentialTech technologyShowcase={technologyShowcase} />
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
