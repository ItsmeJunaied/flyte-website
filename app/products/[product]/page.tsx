import React from "react";
import ProductHeader from "@/component/Products/ProductHeader";
import ProductGalleryAndTech from "@/component/Products/ProductGalleryAndTech";
import { ProductCardsData } from "@/api/Dummy";
import SuccessStories from "@/component/Common/SuccessStories";
import TrustedIndustry from "@/component/Common/TrustedIndustry";
import Contact from "@/component/Contact/Contact";
import BoosterCard from "@/component/Common/BoosterCard";
import ProductBenefits from "@/component/Products/ProductBenefits";

type PageProps = {
  params: Promise<{ product: string }>;
};


export function generateStaticParams() {
  return ProductCardsData.map((blog) => ({
    product: blog.productLinkName,
  }));
}

// Fetch the resolved value before rendering
const Page = async ({ params }: PageProps) => {
  const { product } = await params; 

  console.log("params", product);

  return (
    <div>
      <ProductHeader params={product} />
      <ProductGalleryAndTech params={product} />
      <ProductBenefits params={product}/>
      <TrustedIndustry />
      <BoosterCard />
      <SuccessStories bgColor="bg-white" />
      <Contact />
    </div>
  );
};

export default Page;