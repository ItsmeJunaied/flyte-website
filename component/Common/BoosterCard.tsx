import React from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";
import { boosterData } from "@/api/Dummy";

const BoosterCard = () => {
  return (
    <div className="bg-white py-5 lg:py-8">
      <div className="container">
        <Subtitle Subtitle="Use Cases" />
        <Title title="Boost Efficiency Across Industries" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 lg:mt-6">
          {boosterData?.map((item, index) => (
            <div key={index} className="p-6 bg-[#F9FAFB] hover:bg-blue-100 transition duration-500 rounded-xl space-y-2.5 max-h-[325px] overflow-hidden group">
              <i className={`group-hover:rotate-[360deg] group-hover:scale-125 transition duration-1000 fa-2x text-[#5856D6] fa-solid ${item?.icon}`}></i>
              <h2 className="text-gray-800 text-base lg:text-xl font-semibold transition-transform transform origin-left group-hover:scale-x-110 duration-1000">{item?.name}</h2>
              <p className="text-gray-600 text-sm h-[60px] line-clamp-3">{item?.description}</p>
              {item?.features?.map((feature, featureIdx) => (
                <div key={featureIdx} className="flex items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M12.3333 21.373C17.3038 21.373 21.3333 17.3436 21.3333 12.373C21.3333 7.40248 17.3038 3.37305 12.3333 3.37305C7.36269 3.37305 3.33325 7.40248 3.33325 12.373C3.33325 17.3436 7.36269 21.373 12.3333 21.373Z"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <path
                      d="M8.33325 12.373L11.3333 15.373L16.3333 9.37305"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="text-[#3b3c4a] text-sm ">{feature}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoosterCard;
