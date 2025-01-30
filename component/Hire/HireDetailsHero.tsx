import React from "react";
import Title from "../Common/Title";
import Subtitle from "../Common/Subtitle";

const HireDetailsHero = () => {
  return (
    <div className="container pt-5 lg:pt-7 flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div className="w-full lg:w-[40%] flex flex-col justify-between">
        <div>
          <Subtitle Subtitle="HIRE FRONTEND DEVELOPERS" />
          <Title width="full" title="Hire Dedicated Frontend Developers for Seamless User Experiences" />
        </div>
        <p className="text-[#12094a] text-sm py-5 lg:py-7">
          Build responsive, interactive, and high-performing web applications with our expert frontend
          developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized
          performance for fast, scalable, and visually stunning interfaces.
        </p>
        <button className="w-fit px-8 py-1.5 bg-[#5856d6] rounded-md text-white text-base font-semibold">
          Hire Frontend Developers Now
        </button>
      </div>
      <div className="w-full lg:w-[60%]">
        <img
          className="w-full max-h-[400px] object-cover rounded-2xl"
          src="https://i.ibb.co.com/xKxpBqsk/ss.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HireDetailsHero;
