import React from "react";
import FeaturesCard from "../Common/FeaturesCard";
import { customSoftwareData } from "@/api/Dummy";


const CustomSoftware = () => {
  return (
    <div>
      <FeaturesCard data={customSoftwareData} Width="w-full sm:w-[200px]" />
    </div>
  );
};

export default CustomSoftware;
