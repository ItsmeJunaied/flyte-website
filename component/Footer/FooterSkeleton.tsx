import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const FooterSkeleton = () => {
  return (
    <div className="py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
      <div className="space-y-4">
        <Skeleton className="w-28 h-10 bg-gray-400" />
        <Skeleton className="w-40 h-4 bg-gray-400" />
        <Skeleton className="w-28 h-4 bg-gray-400" />
        <Skeleton className="w-full h-4 bg-gray-400" />
        <Skeleton className="w-full h-4 bg-gray-400" />
        <Skeleton className="w-full h-4 bg-gray-400" />
      </div>
      <div className="space-y-11">
        <Skeleton className="w-40 h-4 bg-gray-400" />
        <div className="space-y-5">
          <Skeleton className="w-40 h-4 bg-gray-400" />
          <div className="pt-5 space-y-5">
            <Skeleton className="w-full h-4 bg-gray-400" />
            <Skeleton className="w-full h-4 bg-gray-400" />
            <Skeleton className="w-full h-4 bg-gray-400" />
          </div>
        </div>
      </div>
      <div className="space-y-11">
        <Skeleton className="w-40 h-4 bg-gray-400" />
        <div className="space-y-5">
          <Skeleton className="w-40 h-4 bg-gray-400" />
          <div className="pt-5 space-y-5">
            <Skeleton className="w-full h-4 bg-gray-400" />
            <Skeleton className="w-full h-4 bg-gray-400" />
            <Skeleton className="w-full h-4 bg-gray-400" />
          </div>
        </div>
      </div>
      <div className="space-y-11">
        <Skeleton className="w-40 h-4 bg-gray-400" />
        <div className="space-y-5">
          <Skeleton className="w-40 h-4 bg-gray-400" />
          <div className="pt-5 space-y-5">
            <Skeleton className="w-full h-4 bg-gray-400" />
            <Skeleton className="w-full h-4 bg-gray-400" />
            <Skeleton className="w-full h-4 bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSkeleton;
