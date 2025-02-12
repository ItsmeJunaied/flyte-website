import Link from "next/link";
import React from "react";

const everythingData = [
  {
    id: 1,
    title: "Dynamic Queue Prioritization",
    descrption: "Tempor laoreet augue undo ultrice in lacusq luctus feugiat",
    image: "https://i.ibb.co.com/Wp2yjdrN/f-05-png.png",
  },
  {
    id: 2,
    title: "Real-Time Ride Matching",
    descrption: "Luctus augue undo ultrice aliquam in lacus congue dapibus",
    image: "https://i.ibb.co.com/Zp05pCNT/f-01-png.png",
  },
  {
    id: 3,
    title: "Intelligent Load Balancing",
    descrption: "Egestas luctus augue undo aliquam in lacus feugiat cursus",
    image: "https://i.ibb.co.com/jkFhjKvw/f-02-png.png",
  },
  {
    id: 4,
    title: "Smart Route Optimization",
    descrption: "Tempor laoreet augue undo ultrice in lacusq luctus feugiat",
    image: "https://i.ibb.co.com/KjzxfKKG/f-05-png-1.png",
  },
  {
    id: 5,
    title: "Advanced Analytics & Insights",
    descrption: "Luctus egestas augue undo aliquam in lacus congue dapibus",
    image: "https://i.ibb.co.com/NdkSdFxs/f-01-png-1.png",
  },
  {
    id: 6,
    title: "System Integration",
    descrption: "Egestas luctus augue undo ultrice in lacus feugiat cursus",
    image: "https://i.ibb.co.com/jktRhRw1/f-05-png-2.png",
  },
];

const EverythingSection = () => {
  return (
    <div className="bg-white py-5 lg:py-10">
      <div className="pb-5 lg:pb-10">
        <h4 className="text-center text-[#6e51e0] text-sm">Solution</h4>
        <h1 className="text-center text-[#3b3c4e] text-xl lg:text-3xl font-bold ">Everything in One Place</h1>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-0">
        {everythingData?.map((item, index) => (
          <div
            key={index}
            className={`p-5 lg:p-10 flex flex-col gap-5 lg:gap-10 bg-gradient-to-b from-[#f4f4f9] to-white 
            ${index === 0 || index === 3 ? "lg:rounded-tl-xl" : ""} 
            ${index === 2 || index === 5 ? "lg:rounded-tr-xl" : ""}`}
          >
            <img className="w-[292.22px] h-[194.81px]" src={item?.image} />
            <div className="text-center">
              <h2 className="text-[#353f4f] text-xl font-bold">{item?.title}</h2>
              <p className="opacity-90 text-[#3b3c4e] max-w-[279px]">{item?.descrption}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        className="px-8 py-3 mt-6 ml-5 bg-[#5856d6] hover:bg-[#4a46bc] rounded-md text-white w-fit lg:mx-auto block"
        href=""
      >
        Request A Demo
      </Link>
    </div>
  );
};

export default EverythingSection;
