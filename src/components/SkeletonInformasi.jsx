import React from "react";
import Skeleton from "./Skeleton";


const SkeletonInformasi = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 mt-4">
      {/* Kolom utama */}
      <div className="md:col-span-2 grid gap-8">
        {/* Search Bar */}
        <div className="relative w-full max-w-full">
          <Skeleton className="h-10 w-full rounded" />
        </div>

        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-row gap-4">
            <Skeleton className="w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-52 lg:h-40 rounded" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
          </div>
        ))}
      </div>

      {/* Baca Juga Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-2/3" />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonInformasi;
