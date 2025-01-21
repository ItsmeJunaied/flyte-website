import React from "react";
import OpportunityCard from "./OpportunityCard";

const CareerOpportunities = () => {
  return (
    <div className="container mb-10 md:mb-16">
      <h2 className="w-full md:w-[613px] md:text-center text-lg md:text-[32px] font-semibold mx-auto md:leading-10">
        Explore Exciting <span className="text-[#5856d6]">Career</span> Opportunities -
        <span className="text-[#5856d6]"> Join</span> Our Team Today!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
      </div>
    </div>
  );
};

export default CareerOpportunities;
