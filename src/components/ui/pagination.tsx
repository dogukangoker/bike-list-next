"use client";

import { useBike } from "@/hooks/useBike";
import { useCreateQueryString } from "@/hooks/useCreateQueryString";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type TablePaginationProps = {
  page: number;
  limit: number;
  total: number;
  setRefetchApi: (value: boolean) => void;
  disableFilters: boolean;
};

export const TablePagination = ({
  page,
  setRefetchApi,
  limit,
  total,
  disableFilters,
}: TablePaginationProps) => {
  const { bikeQuery, setBikeQuery } = useBike();
  const { createQueryString } = useCreateQueryString({ setRefetchApi });

  const handleNextPage = () => {
    setBikeQuery({ ...bikeQuery, page: page + 1 });
    createQueryString("page", String(page + 1));
  };
  const handlePreviousPage = () => {
    setBikeQuery({ ...bikeQuery, page: page - 1 });
    createQueryString("page", String(page - 1));
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 py-4">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {page}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {limit}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {total}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1 || disableFilters}
          className="flex items-center gap-2 justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
        >
          <FaArrowLeftLong />
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={Math.ceil(total / limit) === page || disableFilters}
          className="flex items-center gap-2 justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
        >
          Next
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};
