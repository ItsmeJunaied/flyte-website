import React from "react";
import ProductGallery from "./ProductGallery";
import ProductTechOverview from "./ProductTechOverview";
import { productData } from "./ProductCards";
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
    </div>
  );
};

export default ProductGalleryAndTech;
