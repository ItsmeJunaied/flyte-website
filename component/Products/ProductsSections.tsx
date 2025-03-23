import React from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import ProductCards from "./ProductCards";

const ProductsSections = () => {
 
  return (
    <div>
      <div className="flex-col gap-2 w-full flex justify-center items-center my-8  ">
        <Subtitle Subtitle={"Our Products"} />
        <Title
          width={"lg:w-full"}
          fontSize={" text-lg lg:text-3xl"}
          title={"Smart Solutions That Simplify Your Operations"}
        />
      </div>

      <div className="container">
        <ProductCards />
      </div>
    </div>
  );
};

export default ProductsSections;
