import React from "react";
import ProductGallery from "./ProductGallery";
import ProductTechOverview from "./ProductTechOverview";
import { productData } from "./ProductCards";

const ProductGalleryAndTech: React.FC<{ data: productData }> = ({ data }) => {
  console.log("data", data)
  const {images} = data || {}
  return (
    <div className="container mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ProductGallery galleryImages={images} />
        <ProductTechOverview />
      </div>
    </div>
  );
};

export default ProductGalleryAndTech;
