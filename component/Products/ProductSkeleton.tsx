import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="container pt-5 lg:pt-40">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2 md:gap-5">
          <Skeleton className="w-[90%] lg:w-36 h-7" />
          <Skeleton className="w-[80%] lg:w-36 h-7" />
          <Skeleton className="w-[70%] lg:w-36 h-7" />
        </div>
        <Skeleton className="w-36 h-9" />
        <Skeleton className="w-full lg:w-80 h-3" />
        <Skeleton className="w-full lg:w-64 h-3" />
        <div className="flex flex-col lg:flex-row gap-5">
          <Skeleton className="w-full h-[300px]" />
          <Skeleton className="w-full h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
