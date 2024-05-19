import React, { ChangeEvent } from "react";
import Input from "../ui/input";
import Select from "../ui/select";
import { selectOptions } from "@/shared/constants";
import { useBike } from "@/hooks/useBike";
import { useCreateQueryString } from "@/hooks/useCreateQueryString";
import { IBikeListQuery } from "@/shared/types";
import useDebounce from "@/hooks/useDebounce";
import { useRemoveQueryString } from "@/hooks/useRemoveQueryString";

interface BikeListFiltersProps {
  setRefetchApi: (value: boolean) => void;
  disableFilters: boolean;
}

const BikeListFilters: React.FC<BikeListFiltersProps> = ({
  setRefetchApi,
  disableFilters,
}) => {
  const { bikeQuery, setBikeQuery } = useBike();
  const { createQueryString } = useCreateQueryString({
    setRefetchApi,
  });
  const { removeQueryString } = useRemoveQueryString({ setRefetchApi });

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBikeQuery((prev: IBikeListQuery) => {
      return {
        ...prev,
        vehicle_type: e.target.value,
      };
    });
    createQueryString("vehicle_type", e.target.value);
  };

  const handleSearch = useDebounce((term: string) => {
    if (term.length > 0) {
      createQueryString("bike_id", term);
    } else {
      removeQueryString("bike_id");
    }
  }, 350);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBikeQuery((prev: IBikeListQuery) => {
      return {
        ...prev,
        bike_id: value,
      };
    });
    handleSearch(value);
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Search by bike_id"
        name="id"
        value={bikeQuery.bike_id}
        onChange={handleInputChange}
        disabled={disableFilters}
      />
      <Select
        name="select"
        options={selectOptions}
        onChange={handleSelectChange}
        value={bikeQuery.vehicle_type}
        disabled={disableFilters}
      />
    </div>
  );
};

export default BikeListFilters;
