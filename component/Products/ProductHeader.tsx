import React from "react";
import Title from "../Common/Title";
import { productData } from "./ProductCards";

const ProductHeader: React.FC<{ data: productData }> = ({ data }) => {
  return (
    <div className="container mt-20 md:mt-36 mb-3 space-y-2 md:space-y-4">
      <div className="flex flex-wrap gap-2 md:gap-5">
        {data?.tags?.map((tag, index) => (
          <span key={index} className="px-3 py-1.5 bg-[#5856d6] rounded-md text-white text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
      <Title title={data?.productTitle} />
      <p className="text-[#696a75] text-xs">
        Effortlessly track employee attendance and work hours in real time
      </p>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-600">
          <span className="text-[#696a75] font-semibold">Version:</span>
          {data?.version}
        </p>
        <div className="w-5 h-px bg-[#696a75]" />
        <time dateTime={data.releaseDate} className="text-xs text-gray-600">
          <span className="text-[#696a75] font-semibold">Released:</span> {data.releaseDate}
        </time>
      </div>
    </div>
  );
};

export default ProductHeader;
