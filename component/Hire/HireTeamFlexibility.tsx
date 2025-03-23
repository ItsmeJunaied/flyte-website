import React from "react";

const HireTeamFlexibility = () => {
  return (
    <div className="container my-6 lg:my-10">
      <div className="mb-5 lg:mb-[72px] lg:text-center">
        <h4 className="opacity-70 text-[#3b3c4e] text-base mb-2">Custom Team</h4>
        <h2 className="text-[#3b3c4e] text-xl lg:text-3xl font-bold">Flexible Team Sizes for Every Project</h2>
      </div>
      <div className="flex justify-center">
        <div className="bg-white rounded-xl inline-flex flex-col justify-center lg:flex-row">
          {/* card-1  */}
          <div className="p-5 lg:p-12 w-full lg:w-[300px] lg:h-[450px] flex-col justify-start items-start gap-6 inline-flex">
            <i className="text-3xl text-[#5856d6] fa-solid fa-people-group"></i>
            <h2 className="text-[#221c4e] text-2xl font-semibold">Team Size Options</h2>
            <p className="text-[#3b3c4e] text-sm">
              Scale your team from one developer to a full team, tailored to your project’s needs.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <span className="relative bg-[#EBEBFF] rounded-full w-6 h-6 flex justify-center items-center">
                  <i className="fa-solid text-[#5856d6] fa-check"></i>
                  <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[70%] h-1 bg-white"></div>
                </span>
                <span className="text-[#666666] text-sm">Individual Developers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative bg-[#EBEBFF] rounded-full w-6 h-6 flex justify-center items-center">
                  <i className="fa-solid text-[#5856d6] fa-check"></i>
                  <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[70%] h-1 bg-white"></div>
                </span>
                <span className="text-[#666666] text-sm">Dedicated Teams</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative bg-[#EBEBFF] rounded-full w-6 h-6 flex justify-center items-center">
                  <i className="fa-solid text-[#5856d6] fa-check"></i>
                  <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[70%] h-1 bg-white"></div>
                </span>
                <span className="text-[#666666] text-sm">Scalable Solutions</span>
              </div>
            </div>
          </div>

          {/* card-2  */}
          <div className="p-5 lg:p-8 w-full lg:w-[300px] min-h-[400px] lg:h-[450px] my-5 lg:my-0 relative lg:-top-12 flex-col justify-start items-start gap-6 inline-flex bg-gradient-to-b from-[#8c8aff] to-[#5856d6] rounded-[28.90px]">
            <span className="px-5 py-1.5 text-[11px] text-white bg-[#092998] font-semibold absolute right-5 top-5 rounded-full">
              MOST POPULAR
            </span>
            <i className="text-white text-3xl fa-solid fa-gear"></i>
            <h2 className="text-white text-2xl font-semibold">Customizable Teams</h2>
            <p className="text-white text-sm">
              Mix and match developers of different experience levels to create a team that fits your budget
              and project complexity.
            </p>
            <img
              className="absolute -top-10 -right-14"
              src="https://i.ibb.co.com/qMMNygnq/Group-30.png"
              alt=""
            />
          </div>

          {/* card-3  */}
          <div className="p-5 lg:p-12 w-full lg:w-[300px] lg:h-[450px] flex-col justify-start items-start gap-6 inline-flex">
            <i className="text-[#5856d6] text-3xl fa-solid fa-graduation-cap"></i>
            <h2 className="text-[#221c4e] text-2xl font-semibold">Experience Levels</h2>
            <p className="text-[#3b3c4e] text-sm">
            Select junior, mid-level, or senior developers for the perfect mix of skill and affordability.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <span className="relative bg-[#EBEBFF] rounded-full w-6 h-6 flex justify-center items-center">
                  <i className="fa-solid text-[#5856d6] fa-check"></i>
                  <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[70%] h-1 bg-white"></div>
                </span>
                <span className="text-[#666666] text-sm">Junior Developers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative bg-[#EBEBFF] rounded-full w-6 h-6 flex justify-center items-center">
                  <i className="fa-solid text-[#5856d6] fa-check"></i>
                  <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[70%] h-1 bg-white"></div>
                </span>
                <span className="text-[#666666] text-sm">Mid-Level Developers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative bg-[#EBEBFF] rounded-full w-6 h-6 flex justify-center items-center">
                  <i className="fa-solid text-[#5856d6] fa-check"></i>
                  <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[70%] h-1 bg-white"></div>
                </span>
                <span className="text-[#666666] text-sm">Senior Developers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireTeamFlexibility;
