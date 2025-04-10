import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const ServiceStepSkeleton = () => {
  return (
    <div className='space-y-4'>
      <div className="flex items-center space-x-4 justify-center">
        <Skeleton className="w-6 h-6 rounded-lg"/>
        <Skeleton className="w-[204px] h-4"/>
      </div>
      <div className="flex items-center space-x-4 justify-center">
        <Skeleton className="w-6 h-6 rounded-lg"/>
        <Skeleton className="w-[204px] h-4"/>
      </div>
      <div className="flex items-center space-x-4 justify-center">
        <Skeleton className="w-6 h-6 rounded-lg"/>
        <Skeleton className="w-[204px] h-4"/>
      </div>
      <div className="flex items-center space-x-4 justify-center">
        <Skeleton className="w-6 h-6 rounded-lg"/>
        <Skeleton className="w-[204px] h-4"/>
      </div>
      <div className="flex items-center space-x-4 justify-center">
        <Skeleton className="w-6 h-6 rounded-lg"/>
        <Skeleton className="w-[204px] h-4"/>
      </div>
      <div className="flex items-center space-x-4 justify-center">
        <Skeleton className="w-6 h-6 rounded-lg"/>
        <Skeleton className="w-[204px] h-4"/>
      </div>
      <div className="flex items-center space-x-4 justify-center">
        <Skeleton className="w-6 h-6 rounded-lg"/>
        <Skeleton className="w-[204px] h-4"/>
      </div>
    </div>
  );
};

export default ServiceStepSkeleton;