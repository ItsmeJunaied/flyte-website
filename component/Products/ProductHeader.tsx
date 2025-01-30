import React from "react";
import Title from "../Common/Title";
import { ProductCardsData } from "@/api/Dummy";

export type Images = {
  id: number;
  url: string;
  status: string;
};

export type productData = {
  id: number;
  productImg: string;
  productTitle: string;
  productLinkName: string;
  ProductDetails: string;
  tags: string[];
  version: string;
  releaseDate: string;
  images: Images[];
  features: string[];
  featureImage: string;
  technicalSpecifications: {
    technologyStack: string[];
    integrationsAvailable: string[];
  };
};

export type ProductHeaderProps = {
  params: string; 
};

const ProductHeader: React.FC<ProductHeaderProps> = ({ params }) => {
  // Find the product that matches the params
  const product = ProductCardsData.find(
    (item) => item.productLinkName === params
  );

  // If no matching product, return null or a message
  if (!product) {
    return <p className="text-center text-gray-600">Product not found.</p>;
  }

  return (
    <div className="container mt-20 md:mt-36 mb-3 space-y-2 md:space-y-4">
      <div className="flex flex-wrap gap-2 md:gap-5">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-[#5856d6] rounded-md text-white text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <Title title={product.productTitle} />
      <p className="text-[#696a75] text-xs">
        Effortlessly track employee attendance and work hours in real time
      </p>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-600">
          <span className="text-[#696a75] font-semibold">Version:</span>{" "}
          {product.version}
        </p>
        <div className="w-5 h-px bg-[#696a75]" />
        <time dateTime={product.releaseDate} className="text-xs text-gray-600">
          <span className="text-[#696a75] font-semibold">Released:</span>{" "}
          {product.releaseDate}
        </time>
      </div>
    </div>
  );
};

export default ProductHeader;
