import React from "react";
import Title from "../Common/Title";
import { productData } from "./ProductOverview";

const ProductHeader: React.FC<{ product: productData }> = ({ product }) => {
  if (!product) {
    return <p className="text-center text-gray-600">Product not found.</p>;
  }

  return (
    <div className="container pt-5 lg:pt-40 mb-3 space-y-2 md:space-y-4">
      <div className="flex flex-wrap gap-2 md:gap-5">
        {product?.tag?.map((tagItem: string, index: number) => (
          <span key={index} className="px-3 py-1.5 bg-[#5856d6] rounded-md text-white text-sm font-medium">
            {tagItem}
          </span>
        ))}
      </div>
      <Title title={product?.title} />
      <p className="text-[#696a75] text-xs">
        Effortlessly track employee attendance and work hours in real time
      </p>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-600">
          <span className="text-[#696a75] font-semibold">Version:</span> {product.version}
        </p>
        <div className="w-5 h-px bg-[#696a75]" />
        <time dateTime={product.release_date} className="text-xs text-gray-600">
          <span className="text-[#696a75] font-semibold">Released:</span> {product.release_date}
        </time>
      </div>
    </div>
  );
};

export default ProductHeader;
