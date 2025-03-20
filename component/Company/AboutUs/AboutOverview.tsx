"use client";
import React from "react";
import AboutBanner from "./AboutBanner";
import MissionVision from "./MissionVision";
import { useGetAboutUsQuery } from "@/redux/api/aboutUsApi";
import { Skeleton } from "@/components/ui/skeleton";

const AboutOverview = () => {
  const { data: aboutus, isLoading } = useGetAboutUsQuery({});

  console.log("aboutus", aboutus?.data);
  const {title, description, image, mission_vision} = aboutus?.data || {};
  return (
    <div>
      {isLoading ? (
        <div className="mt-5 lg:mt-40 space-y-4">
          <Skeleton className="w-40 h-4 mx-auto" />
          <Skeleton className="w-60 lg:w-80 h-4 mx-auto" />
          <Skeleton className="w-full h-[450px] " />
        </div>
      ) : (
        <div>
          <AboutBanner title={title} description={description} image={image}/>
          <MissionVision mission_vision={mission_vision}/>
        </div>
      )}
    </div>
  );
};

export default AboutOverview;
