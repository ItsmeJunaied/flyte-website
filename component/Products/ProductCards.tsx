"use client";
import React from "react";
import ProductPageContactUS from "./ProductPageContactUS";
import Link from "next/link";
import { useGetAllProductsQuery } from "@/redux/api/productsApi";
import { Skeleton } from "@/components/ui/skeleton";

export type productData = {
  title: string;
  slug: string;
  image: string;
  short_description: string;
  tag: string[];
};

const ProductCards = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});

  return (
    <div>
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Skeleton className="w-full lg:w-[400px] h-[300px] lg:h-[400px]" />
          <Skeleton className="w-full lg:w-[400px] h-[300px] lg:h-[400px]" />
          <Skeleton className="w-full lg:w-[400px] h-[300px] lg:h-[400px]" />
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 content-center mt-10">
          {products?.data?.data?.map((product: productData, index: number) => (
            <React.Fragment key={index}>
              <Link href={`/products/${product?.slug}`} className="">
                <div className="px-6 lg:px-12 py-5 w-full h-[430px] relative flex justify-center items-center bg-none rounded-md overflow-hidden group">
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-[#fff] top-[150px] transition-all duration-500 ease-in-out group-hover:top-0 z-0"></div>

                  {/* Card Content */}
                  <div className="relative flex-col justify-start items-start gap-4 inline-flex z-10">
                    <div className="overflow-hidden rounded-t-md w-full lg:w-[360px] h-[200px]">
                      <img
                        className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                        src={product?.image}
                        alt={product?.title}
                      />
                    </div>
                    {/* Product Title */}
                    <div className="self-stretch px-1.5 py-2.5 border-b border-[#d6d6d6]">
                      <div className="text-[#bc986b] h-[22px] text-sm font-medium ">{product?.title}</div>
                    </div>
                    {/* Product Tags */}
                    <div className="h-7 mt-2 overflow-hidden line-clamp-1 items-start flex-wrap gap-2 inline-flex">
                      {product?.tag?.map((tagItem, tagIndex: number) => (
                        <div
                          key={tagIndex}
                          className="px-2 py-1.5 bg-[#d0d0d0]/20 rounded-[3.18px] backdrop-blur-[9.55px] flex-col justify-center items-center gap-2 inline-flex"
                        >
                          <div className="text-[#373737] text-[10px]">{tagItem}</div>
                        </div>
                      ))}
                    </div>
                    {/* Product Description */}
                    <div className="px-1.5 text-[#373737] text-xs font-light h-8 overflow-hidden line-clamp-2 mb-2">
                      {product?.short_description}
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))}

          {/* Insert ProductPageContactUS based on number of products */}
          {(() => {
            const length = products?.data?.data?.length || 0;
            const positionClass = "w-full flex justify-center items-center";
            if (length === 0 || length === 1 || length >= 2) {
              return (
                <div className={positionClass}>
                  <ProductPageContactUS />
                </div>
              );
            }
            return null;
          })()}
        </div>
      )}
    </div>
  );
};

export default ProductCards;
