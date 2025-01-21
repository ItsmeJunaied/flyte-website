import React from "react";

type Culture = {
  title: string;
  description: string;
  icon: string;
};

const CultureCard: React.FC<{ culture: Culture }> = ({ culture }) => {
  return (
    <div>
      <div className="flex items-center gap-3 md:gap-6 mb-2 md:mb-4">
        <i className={`fa-solid text-white bg-[#5856D6] p-2 ${culture?.icon}`}></i>
        <h4 className="text-base font-semibold">{culture?.title}</h4>
      </div>
      <p className="text-xs md:text-sm">{culture?.description}</p>
    </div>
  );
};

export default CultureCard;
