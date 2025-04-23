import React from "react";
import SuccessStories from "@/component/Common/SuccessStories";
import TrustedIndustry from "@/component/Common/TrustedIndustry";
import Contact from "@/component/Contact/Contact";
import BoosterCard from "@/component/Common/BoosterCard";
import { Metadata } from "next";
import ProductOverview from "@/component/Products/ProductOverview";

type PageProps = {
  params: Promise<{ product: string }>;
};

const fetchProduct = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`);
  if (!res.ok) return null;
  return res.json();
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product } = await params;
  const products = await fetchProduct(product);
  const { meta_title, meta_description } = products?.data || {};

  return {
    title: meta_title || "products Details | Flyte Solutions Ltd.",
    description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    openGraph: {
      title: meta_title || "products Details | Flyte Solutions Ltd.",
      description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    },
  };
}

// Generate static paths for all products
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
  if (!res.ok) return [];

  const products = await res.json();
  return products.data.data.map((product: { slug: string }) => ({
    product: product.slug,
  }));
}


const Page = async ({ params }: PageProps) => {
  const { product } = await params; 

  return (
    <div>
      <ProductOverview params={product}/>
      <TrustedIndustry />
      <BoosterCard />
      <SuccessStories bgColor="bg-white" />
      <Contact />
    </div>
  );
};

export default Page;