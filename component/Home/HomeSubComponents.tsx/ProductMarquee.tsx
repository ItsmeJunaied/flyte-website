"use client";
import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useGetAllProductsQuery } from "@/redux/api/productsApi";
import { Skeleton } from "@/components/ui/skeleton";

type Product = {
  image: string;
  title: string;
  slug: string;
};

const ProductMarquee: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { data: products, isLoading } = useGetAllProductsQuery({});

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skeletonArray = new Array(12).fill(null);

  return (
    <div>
      <Marquee pauseOnHover gradient={!isSmallScreen} gradientWidth={150}>
        {isLoading
          ? skeletonArray.map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-3 mx-4"
              >
                <Skeleton className="w-[200px] h-[150px] lg:w-[260px] lg:h-[190px] rounded-[20px]" />
                <Skeleton className="w-32 h-4 rounded" />
              </div>
            ))
          : products?.data?.data?.map((product: Product, index: number) => (
              <Link
                href={`/products/${product?.slug}`}
                key={index}
                className="flex flex-col justify-center items-center gap-3 mx-4 group"
              >
                <img
                  className="w-[200px] h-[150px] lg:w-[260px] lg:h-[190px] rounded-[20px] object-cover group-hover:scale-110 transition-all duration-500"
                  src={product?.image}
                  alt={product?.title}
                />
                <p className="text-center text-black text-sm font-bold">
                  {product?.title}
                </p>
              </Link>
            ))}
      </Marquee>
    </div>
  );
};

export default ProductMarquee;
