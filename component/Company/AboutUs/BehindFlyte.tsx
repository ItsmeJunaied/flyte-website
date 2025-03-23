import Title from "@/component/Common/Title";
import React from "react";

const behindFlyteData = {
  title: "The Faces Behind Flyte Solutions",
  info: "A glimpse of the passionate people driving innovation every day.",
  image1: "https://i.ibb.co.com/42nSZrf/Frame-5662.png",
  image2: "https://i.ibb.co.com/fSSYthm/Frame-5662-1.png",
  image3: "https://i.ibb.co.com/jRGqQQ8/Frame-5662-2.png",
};

const BehindFlyte = () => {
  return (
    <div className="lg:mb-8">
      <span className="flex flex-col items-center my-2 md:my-7">
        <Title title={behindFlyteData?.title} width="full" fontSize="text-lg lg:text-4xl" />
        <p className="text-center text-[#afadb5] text-xs md:text-sm md:mt-2">{behindFlyteData?.info}</p>
      </span>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-4">
        <div className="md:w-[540px] md:h-[640px] p-4 bg-white rounded-lg shadow-[0px_0px_10px_10px_rgba(233,233,233,0.25)]">
          <img className="md:h-[608px] relative rounded-lg" src={behindFlyteData.image1} />
        </div>
        <div className="space-y-4">
          <div className="md:w-[540px] md:h-[312px] p-4 bg-white rounded-lg shadow-[0px_0px_10px_10px_rgba(233,233,233,0.25)]">
            <img className="md:h-[280px] relative rounded-lg" src={behindFlyteData.image2} />
          </div>
          <div className="md:w-[540px] md:h-[312px] p-4 bg-white rounded-lg shadow-[0px_0px_10px_10px_rgba(233,233,233,0.25)]">
            <img className="md:h-[280px] relative rounded-lg" src={behindFlyteData.image3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehindFlyte;
