import React from "react";

type Process = {
  serialNo: string;
  icon: string;
  stepName: string;
  description: string;
};

const ProcessCard: React.FC<{ process: Process }> = ({ process }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="w-[66px] text-center text-2xl lg:text-5xl font-semibold lg:-mb-[7px] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFF] to-[#6C63FF]">
          {process?.serialNo}
        </span>
        <div className="w-[51px] lg:w-[100px] h-[51px] lg:h-[100px] bg-white rounded-full flex justify-center items-center shadow-[0px_0px_0px_6px_rgba(255,255,255,0.1)] lg:shadow-[0px_0px_0px_15px_rgba(255,255,255,0.1)]">
          <i className={`text-xl lg:text-[40px] fa-solid text-[#5856d6] ${process?.icon}`}></i>
        </div>
      </div>
      <h4 className="text-center text-white text-sm font-semibold mt-3 lg:mt-8">{process?.stepName}</h4>
      <p className="w-[220px] text-white text-center text-xs mt-1 lg:mt-4">{process?.description}</p>
    </div>
  );
};

export default ProcessCard;
