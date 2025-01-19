import React from "react";

const UnlockPotential = () => {
  return (
    <div className="container h-[518px] flex gap-8 mb-10">
      <div className="px-3 md:px-6 py-3 md:py-7 w-[805px] h-[518px] relative bg-gradient-to-b from-[#651fff] to-[#f8bbd0] rounded-3xl">
        <h2 className=" text-white text-xl md:text-4xl font-bold">Designs</h2>
        <p className="text-white text-sm md:text-lg font-normal mt-1">
          Creating visually stunning and user-centric designs.
        </p>
        <img
          className="w-[460px] h-[326.92px] left-0 top-[192px] absolute"
          src="https://i.ibb.co.com/JdJTbWn/about-3d-2x.png"
        />

        <div className="w-[404px] h-[273px] left-[354px] top-[199px] absolute grid grid-cols-2">
          <div className="w-[190px] h-[124px] bg-[#311b92]/50 backdrop-blur-md relative rounded-xl">
            <p className="absolute bottom-5 left-10 w-full text-white text-sm font-semibold">
              Logo & Branding
            </p>
          </div>
          <div className="w-[190px] h-[124px] bg-[#311b92]/50 backdrop-blur-md relative rounded-xl">
            <p className="absolute bottom-5 left-10 w-full text-white text-sm font-semibold">
            Apps Design
            </p>
          </div>
          <div className="w-[190px] h-[124px] bg-[#311b92]/50 backdrop-blur-md relative rounded-xl">
            <p className="absolute bottom-5 left-10 w-full text-white text-sm font-semibold">
            Graphic Design
            </p>
          </div>
          <div className="w-[190px] h-[124px] bg-[#311b92]/50 backdrop-blur-md relative rounded-xl">
            <p className="absolute bottom-5 left-10 w-full text-white text-sm font-semibold">
            Website Design
            </p>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-6 py-3 md:py-7 w-[400px] h-[518px] relative bg-gradient-to-br from-[#b2ebf2] via-[#d1c4e9] to-[#f8bbd0] rounded-3xl">
        <h2 className="text-black/90 text-xl md:text-4xl font-bold">Business Solutions</h2>
        <p className="text-black/90 text-sm md:text-base mt-2">
          Transforming businesses with innovative software solutions.
        </p>

        <div className="grid grid-cols-2 gap-x-3 gap-y-4 absolute bottom-14">
          <div className="w-[170px] h-[124px] bg-white/50 rounded-xl flex justify-center items-end">
            <p className="text-sm text-black font-semibold mb-5">ERP Systems</p>
          </div>
          <div className="w-[170px] h-[124px] bg-white/50 rounded-xl flex justify-center items-end">
            <p className="text-sm text-black font-semibold mb-5">CRM Development</p>
          </div>
          <div className="w-[170px] h-[124px] bg-white/50 rounded-xl flex justify-center items-end">
            <p className="text-sm text-black font-semibold mb-5">Data Visualization</p>
          </div>
          <div className="w-[170px] h-[124px] bg-white/50 rounded-xl flex justify-center items-end">
            <p className="text-sm text-black font-semibold mb-5">Workflow Automation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockPotential;
