import React from "react";

type MissionVision = {
  mission: string;
  vision: string;
};

const MissionVision: React.FC<{ mission_vision: MissionVision }> = ({ mission_vision }) => {
  return (
    <div className="container flex flex-col md:flex-row justify-center gap-6 my-5 md:my-10">
      <div className="lg:w-[540px] max-h-[233px] p-5 md:p-10 bg-[#f4f2f0] flex-col justify-start items-center gap-3 md:gap-6 inline-flex">
        <span className="text-xl md:text-3xl">
          <i className="fa-solid fa-bullseye"></i>
        </span>
        <h4 className="text-center md:text-xl font-bold">Our Mission</h4>
        <p className="max-w-[460px] text-center text-black/70 text-sm">
          {mission_vision?.mission}
        </p>
      </div>

      <div className="lg:w-[540px] max-h-[233px] p-5 md:p-10 bg-[#f4f2f0] flex-col justify-start items-center gap-3 md:gap-6 inline-flex">
        <span className="text-xl md:text-3xl">
          <i className="fa-solid fa-compass"></i>
        </span>
        <h4 className="text-center md:text-xl font-bold">Our Vision</h4>
        <p className="max-w-[460px] text-center text-black/70 text-sm">
          {mission_vision?.vision}
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
