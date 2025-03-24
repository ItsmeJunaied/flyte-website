"use client";
import React from "react";
import ProductHeader from "./ProductHeader";
import ProductGalleryAndTech from "./ProductGalleryAndTech";
import ProductBenefits from "./ProductBenefits";
import { useGetProductQuery } from "@/redux/api/productsApi";
import ProductSkeleton from "./ProductSkeleton";
import ProductIntegrations from "./ProductIntegrations";

export type Tech = {
  id: number;
  name: string;
  logo: string;
};

export type Images = {
  id: number;
  url: string;
  status: string;
};

type Section = {
  title: string;
  short_description: string;
  description: string;
  image: string;
};

type Sections = {
  id: number;
  section: Section;
};

export type productData = {
  title: string;
  tag: string[];
  version: string;
  release_date: string;
  images: Images[];
  image: string;
  image_one: string;
  work_flow_image: string;
  video: string;
  demo_link: string;
  short_description: string;
  description: string;
  technology: Tech[];
  integrations: Tech[];
  sections: Sections[];
  productivity_title: string;
  productivity_short_title: string;
  productivity_image: string;
  productivity_description: string;
  productivity_link: string;
};

const ProductOverview: React.FC<{ params: string }> = ({ params }) => {
  const { data, isLoading } = useGetProductQuery(params);

  return (
    <div>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <div>
          <ProductHeader product={data?.data} />
          <ProductGalleryAndTech product={data?.data} />
          <ProductBenefits product={data?.data} />
          <ProductIntegrations product={data?.data}/>
        </div>
      )}
    </div>
  );
};

export default ProductOverview;
