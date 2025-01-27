import React from "react";
import { singleProduct } from "../../../api/Dummy";
import ProductHeader from "@/component/Products/ProductHeader";
import ProductGalleryAndTech from "@/component/Products/ProductGalleryAndTech";

type PageProps = {
  params: {
    id: string;
  };
};

const page: React.FC<PageProps> = ({ params }) => {
  console.log("params", params);
  console.log("singleProduct", singleProduct);
  return (
    <div>
      <ProductHeader data={singleProduct} />
      <ProductGalleryAndTech data={singleProduct}/>
    </div>
  );
};

export default page;
