import React from "react";
import TrustedIndustry from "@/component/Common/TrustedIndustry";
import Contact from "@/component/Contact/Contact";
import BoosterCard from "@/component/Common/BoosterCard";
import { Metadata } from "next";
import ProductOverview from "@/component/Products/ProductOverview";
import ClutchSuccessStories from "@/component/Common/ClutchSuccessStories";

type PageProps = {
  params: Promise<{ product: string }>;
};

const fetchProduct = async (slug: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product } = await params;
  const products = await fetchProduct(product);
  const { meta_title, meta_description } = products?.data || {};

  return {
    title: meta_title || "Products Details | Flyte Solutions Ltd.",
    description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    openGraph: {
      title: meta_title || "Products Details | Flyte Solutions Ltd.",
      description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    },
  };
}

// Generate static paths for all products
export async function generateStaticParams() {
   try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    if (!res.ok) return [];

    const products = await res.json();

    // Ensure that we return all product slugs
    return products.data.data.map((product: { slug: string }) => ({
      product: product.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

const Page = async ({ params }: PageProps) => {
  const { product } = await params;

  return (
    <div>
      <ProductOverview params={product} />
      <TrustedIndustry />
      <BoosterCard />
      <div className="bg-white">
        <ClutchSuccessStories />
      </div>
      <Contact />
    </div>
  );
};

export default Page;
