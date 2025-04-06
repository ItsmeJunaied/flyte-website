import React from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import ProductMarquee from "./HomeSubComponents.tsx/ProductMarquee";

const ProductsHomeComp:React.FC = () => {
  return (
    <div className="container ">
      <Subtitle Subtitle="Our Products" />
      <Title
        padding="px-0"
        title={
          "Bringing your ideas to life with a diverse range of innovative products."
        }
      />

      <div className="mt-8 flex flex-row">
        <ProductMarquee />
      </div>
    </div>
  );
};

export default ProductsHomeComp;
