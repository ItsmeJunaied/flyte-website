import React from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import ProductMarquee from "./HomeSubComponents.tsx/ProductMarquee";

const ProductsHomeComp:React.FC = () => {
  return (
    <div className="container -mt-5">
      <Subtitle Subtitle="Our Products" />
      <Title
        padding="px-0"
        title={
          "Bringing Your Ideas To Life With a Diverse Range Of Innovative Products."
        }
      />

      <div className="mt-8 flex flex-row">
        <ProductMarquee />
      </div>
    </div>
  );
};

export default ProductsHomeComp;
