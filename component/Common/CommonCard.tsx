import React from "react";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const CommonCard: React.FC<{ data: CardProps }> = ({ data }) => {
  const { icon, title, description } = data || {};
  return (
    <div className="p-6 w-full lg:h-[185px] bg-gray-200 rounded-xl flex flex-col gap-3">
      <i className={`text-xl lg:text-3xl text-[#5856d6] fa-solid ${icon}`}></i>
      <h2 className="text-gray-800 text-xl font-semibold lg:h-14">{title}</h2>
      <p className="text-gray-600 text-sm h-10 line-clamp-2 lg:h-10">{description}</p>
    </div>
  );
};

export default CommonCard;
