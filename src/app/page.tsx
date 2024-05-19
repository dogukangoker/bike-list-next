"use client";

import BikeDetailModal from "@/components/bikeList/bikeDetailModal";
import { BikeList } from "@/components/bikeList/bikeList";
import BikeListFilters from "@/components/bikeList/bikeListFilters";
import BikeListInfo from "@/components/bikeList/bikeListInfo";
import { TablePagination } from "@/components/ui/pagination";
import { useBike } from "@/hooks/useBike";
import { useFetchTTL } from "@/hooks/useFetch";
import { baseURL } from "@/shared/constants";

export default function Page() {
  const { data, ttl, loading, setRefetchApi, error } = useFetchTTL(baseURL);
  const { bikeQuery } = useBike();

  return (
    <div className="max-w-5xl mx-auto mt-20">
      <div className="flex items-center justify-between dark:bg-gray-800 p-3 ">
        <BikeListFilters
          setRefetchApi={setRefetchApi}
          disableFilters={error ? true : false}
        />
        <BikeListInfo
          totalCount={data.total_count!}
          ttl={ttl!}
          isLoading={loading}
        />
      </div>
      <div className="relative overflow-x-auto flex flex-col">
        <BikeList
          result={data}
          isLoading={loading}
          error={error ? true : false}
        />
        <TablePagination
          page={bikeQuery.page}
          limit={10}
          setRefetchApi={setRefetchApi}
          total={data.total_count!}
          disableFilters={error ? true : false}
        />
      </div>
      <BikeDetailModal />
    </div>
  );
}
