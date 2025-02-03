import React from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import ProductCards from "./ProductCards";
import { ProductCardsData } from "@/api/Dummy";

// Define the type for the images array
type Images = {
  id: number;
  url: string;
  status: string;
};

// Define the type for technical specifications
type TechnicalSpecifications = {
  technologyStack: string[];
  integrationsAvailable: string[];
};

// Define the type for a single product
type ProductData = {
  id: number;
  productImg: string;
  productTitle: string;
  productLinkName: string;
  ProductDetails: string;
  tags: string[];
  version: string;
  releaseDate: string;
  images: Images[]; // Use the Images type here
  features: string[];
  featureImage: string;
  technicalSpecifications: TechnicalSpecifications;
};

// Define the type for the props of ProductCards component
type ProductCardsDataProps = {
  data: ProductData[];
};

const ProductsSections: React.FC = () => {
    // const productCardsData= ProductCardsData;
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
      <ProductCards data={ProductCardsData}/>
      </div>
    </div>
  );
};

export default ProductsSections;
