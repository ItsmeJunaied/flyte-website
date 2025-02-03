import React from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import IdustrySectionCard from "./IdustrySectionCard";
import { IndustriesCardsData } from "@/api/Dummy";

const IndustryPageSection: React.FC = () => {
  const industriesCardsData = IndustriesCardsData;
  // console.log(industriesCardsData);
  return (
    <div>
      {/* <div className=" flex-col gap-2 w-full flex justify-center items-center my-8  ">
        <Subtitle Subtitle={"Our Industries"} />
        <Title
          width={"lg:w-full"}
          fontSize={" text-lg lg:text-3xl"}
          title={"Revolutionizing Industries with Smart Solutions"}
        />
      </div> */}

      <div className=" ">
        <IdustrySectionCard IndustriesCardsData={industriesCardsData} />
      </div>

    </div>
  );
};

export default IndustryPageSection;
