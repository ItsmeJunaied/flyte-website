import React from "react";
import { missionVisionData } from "../../../api/Dummy";

const MissionVision = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-center gap-6 my-5 md:my-10">
      <div className="md:max-w-[540px] max-h-[233px] p-5 md:p-10 bg-[#f4f2f0] flex-col justify-start items-center gap-3 md:gap-6 inline-flex">
        <span className="text-xl md:text-3xl">
          <i className={missionVisionData?.missionIcon}></i>
        </span>
        <h4 className="text-center md:text-xl font-bold">{missionVisionData?.missionTitle}</h4>
        <p className="max-w-[460px] text-center text-black/70 text-sm">
          {missionVisionData?.missionDescription}
        </p>
      </div>

      <div className="md:max-w-[540px] max-h-[233px] p-5 md:p-10 bg-[#f4f2f0] flex-col justify-start items-center gap-3 md:gap-6 inline-flex">
        <span className="text-xl md:text-3xl">
          <i className={missionVisionData?.visionIcon}></i>
        </span>
        <h4 className="text-center md:text-xl font-bold">{missionVisionData?.visionTitle}</h4>
        <p className="max-w-[460px] text-center text-black/70 text-sm">
          {missionVisionData?.visionDescription}
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
