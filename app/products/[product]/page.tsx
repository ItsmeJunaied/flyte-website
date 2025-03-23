import React from "react";
import ProductHeader from "@/component/Products/ProductHeader";
import ProductGalleryAndTech from "@/component/Products/ProductGalleryAndTech";
import { ProductCardsData } from "@/api/Dummy";
import SuccessStories from "@/component/Common/SuccessStories";
import TrustedIndustry from "@/component/Common/TrustedIndustry";
import Contact from "@/component/Contact/Contact";
import BoosterCard from "@/component/Common/BoosterCard";
import ProductBenefits from "@/component/Products/ProductBenefits";
import ProductIntegrations from "@/component/Products/ProductIntegrations";

export const metadata = {
  title: "Proudct-details | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};

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

  return (
    <div>
      <ProductHeader params={product} />
      <ProductGalleryAndTech params={product} />
      <ProductBenefits params={product}/>
      <ProductIntegrations/>
      <TrustedIndustry />
      <BoosterCard />
      <SuccessStories bgColor="bg-white" />
      <Contact />
    </div>
  );
};

export default Page;