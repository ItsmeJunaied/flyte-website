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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 content-center  mt-10">
          {products?.data?.data?.map((product: productData, index: number) => (
            <React.Fragment key={index}>
              <Link href={`/products/${product?.slug}`} className="w-full flex justify-center">
                <div className="relative w-full py-8 lg:py-14 px-8 lg:px-16 flex justify-center items-center  bg-none rounded-md overflow-hidden group">
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-[#fff] top-[150px] transition-all duration-500 ease-in-out group-hover:top-0 z-0"></div>

                  {/* Card Content */}
                  <div className="relative grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex z-10">
                    <img
                      className="w-full h-[200px] object-cover rounded-t-md"
                      src={product?.image}
                      alt={product?.title}
                    />
                    {/* Product Title */}
                    <div className="self-stretch h-[58px] p-2.5 border-b border-[#d6d6d6] justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-[#bc986b] text-sm font-medium font-['Noto Sans'] leading-normal">
                        {product?.title}
                      </div>
                    </div>
                    {/* Product Tags */}
                    <div className="self-stretch justify-between items-start flex-wrap gap-2 inline-flex">
                      {product?.tag?.map((tagItem, tagIndex: number) => (
                        <div
                          key={tagIndex}
                          className="px-2 py-[6.36px] bg-[#d0d0d0]/20 rounded-[3.18px] backdrop-blur-[9.55px] flex-col justify-center items-center gap-2 inline-flex"
                        >
                          <div className="text-[#373737] text-xs font-normal font-['Noto Sans']">
                            {tagItem}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Product Description */}
                    <div className="self-stretch px-2 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-[#373737] text-xs font-light font-['Noto Sans']">
                        {product?.short_description}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Insert ProductPageContactUS at the second position */}
              {index === 1 && (
                <div className="w-full flex justify-center items-center">
                  <ProductPageContactUS />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCards;
