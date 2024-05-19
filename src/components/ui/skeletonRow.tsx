"use client";

type SkeletonRowProps = {
  limit: number;
};

export const SkeletonRow = ({ limit }: SkeletonRowProps) => {
  return (
    <>
      {[...Array(limit)].map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          {[...Array(6)].map((_, columnIndex) => (
            <td
              key={columnIndex}
              className="px-8 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-auto mb-1"></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
