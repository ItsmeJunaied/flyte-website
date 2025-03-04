import Link from "next/link";
import React from "react";
import { Opportunity } from "./CareerOpportunities";

const OpportunityCard: React.FC<{ opportunity: Opportunity }> = ({ opportunity }) => {
  return (
    <div className="px-8 py-6 space-y-4 md:space-y-6 bg-white hover:bg-[#f0f4fd] transition duration-500 rounded-[20px] shadow-[0px_0px_10px_10px_rgba(245,245,245,1.00)] hover:shadow-[0px_0px_5px_2px_rgba(88,86,214,0.5)]">
      <div>
        <h2 className="text-lg md:text-2xl font-medium truncate">{opportunity?.title}</h2>
        <small className="text-[#aaaaaa] text-sm">{opportunity?.company_name}</small>
      </div>
      <p className="text-[#838383] text-sm line-clamp-2">{opportunity?.short_description}</p>

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 text-nowrap">
        <div className="inline-flex justify-start items-center gap-2.5">
          <i className="text-xl text-[#62ae86] fa-solid fa-location-dot"></i>
          <span className="text-[#62ae86] text-sm font-medium">{opportunity?.location?.toUpperCase()}</span>
        </div>
        <div className="inline-flex justify-start items-center gap-2.5">
          <i className="text-xl text-[#62ae86] fa-solid fa-briefcase"></i>
          <span className="text-[#62ae86] text-sm font-medium">{opportunity?.employment_status?.toUpperCase()}</span>
        </div>
      </div>

      <Link
        href={opportunity?.apply_link}
        className="px-8 py-3 bg-[#191919] hover:bg-[#5856d6] transition duration-300 border rounded-md text-white text-sm font-semibold block mx-auto w-fit"
      >
        View Job Details
      </Link>
    </div>
  );
};

export default OpportunityCard;
