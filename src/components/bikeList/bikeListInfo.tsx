import React from "react";

interface IBikeListInfoProps {
  ttl: number;
  totalCount: number;
  isLoading: boolean;
}

const BikeListInfo = ({ ttl, totalCount, isLoading }: IBikeListInfoProps) => {
  if (isLoading)
    return (
      <div className="flex flex-col gap-2">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="w-20 text-gray-900 dark:text-white">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-auto mb-1"></div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="flex flex-col gap-1 text-gray-700">
      <div className="text-sm text-gray-700 dark:text-gray-400">
        {ttl && (
          <div className="flex gap-1">
            Will refresh in:{" "}
            <div className="text-gray-900 font-semibold dark:text-white">
              {ttl}
            </div>{" "}
            seconds.
          </div>
        )}
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-400">
        {totalCount && (
          <div className="flex gap-1">
            Total data of listed bikes:{" "}
            <div className="text-gray-900 font-semibold dark:text-white">
              {totalCount}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BikeListInfo;
