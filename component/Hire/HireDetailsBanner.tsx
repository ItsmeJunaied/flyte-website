import React from "react";
import { techData } from "../../api/Dummy";
import HeroBanner from "../Common/HeroBanner";
import { ParamProps } from "@/app/hire/[hire]/page";

// type HeroBannerProps = {
//   params: string;
// };

const HireDetailsBanner = ({ params }: ParamProps) => {
  const tech = Object.values(techData).find((item) => item.hireLinkName === params);
  return (
    <div>
      {tech ? (
        <HeroBanner bannerData={tech} />
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
};

export default HireDetailsBanner;
