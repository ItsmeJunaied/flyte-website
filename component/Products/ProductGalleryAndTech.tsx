import React from "react";
import ProductGallery from "./ProductGallery";
import ProductTechOverview from "./ProductTechOverview";
import { ProductHeaderProps } from "./ProductHeader";
import { ProductCardsData } from "@/api/Dummy";

const ProductGalleryAndTech: React.FC<ProductHeaderProps> = ({ params }) => {
  // Find the product that matches the params
  const product = ProductCardsData.find(
    (item) => item.productLinkName === params
  );

  console.log("product",params)
  // If no matching product, return null or a fallback message
  if (!product) {
    return <p className="text-center text-gray-600">Product details not found.</p>;
  }

  const { images } = product;

  return (
    <div className="container mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        {/* Pass images to ProductGallery */}
        <ProductGallery galleryImages={images} />
        {/* Render ProductTechOverview */}
        <ProductTechOverview />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="flex flex-col justify-between gap-5">
          <p className="text-[#3b3c4a] text-base lg:text-xl">
            Cloud ClockIn is a digital attendance management solution designed to simplify employee time
            tracking and ensure compliance with company policies. It provides real-time insights, automated
            reporting, and seamless integration with HR systems.
          </p>

          <div>
            <h4 className="text-[#181a2a] text-xl lg:text-2xl font-semibold">Key Features</h4>
            <p className="flex items-center gap-2 lg:gap-4 mt-4 text-sm lg:text-base">
              <i className="fa-regular fa-circle-check text-base lg:text-2xl"></i> Real-time employee
              attendance tracking.
            </p>
            <p className="flex items-center gap-2 lg:gap-4 mt-4 text-sm lg:text-base">
              <i className="fa-regular fa-circle-check text-base lg:text-2xl"></i> Real-time employee
              attendance tracking.
            </p>
            <p className="flex items-center gap-2 lg:gap-4 mt-4 text-sm lg:text-base">
              <i className="fa-regular fa-circle-check text-base lg:text-2xl"></i> Real-time employee
              attendance tracking.
            </p>
          </div>
          <button className="px-3 lg:px-6 py-2 lg:py-4 bg-black text-white text-base font-bold capitalize w-fit">
            Try Demo <i className="fa-solid fa-angle-right text-sm lg:text-base pl-2"></i>
          </button>
        </div>
        <div>
          <img
            className="w-full max-h-[400px] object-cover"
            src="https://i.ibb.co.com/rwLMFcg/Frame-48095769.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGalleryAndTech;
