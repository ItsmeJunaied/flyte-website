import React from "react";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const CommonCard: React.FC<{ data: CardProps; bgColor?: string }> = ({ data, bgColor }) => {
  const { icon, title, description } = data || {};
  return (
    <div className={`p-6 w-full lg:h-[170px] rounded-xl space-y-3 group hover:bg-blue-100 transition duration-500 ${bgColor || "bg-gray-200"}`}>
      <i
        className={`transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid ${icon}`}
      ></i>
      <h2 className="text-gray-800 text-lg font-semibold leading-5 h-10 flex items-center transition-transform transform origin-left group-hover:scale-x-110 duration-500">
        {title}
      </h2>
      <p className="text-gray-600 text-sm line-clamp-2 h-10 overflow-hidden">{description}</p>
    </div>
  );
};

export default CommonCard;
