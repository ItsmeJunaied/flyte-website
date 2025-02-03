import React from "react";
import ProductHeader from "@/component/Products/ProductHeader";
import ProductGalleryAndTech from "@/component/Products/ProductGalleryAndTech";
import { ProductCardsData } from "@/api/Dummy";

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
    </div>
  );
};

export default Page;