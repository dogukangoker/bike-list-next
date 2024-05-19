import { IBikeListProps, ResponseType } from "@/shared/types";
import { Table, TableBody, TableHeader } from "../ui/table";
import { TableColumns } from "@/shared/constants";
import { useBike } from "@/hooks/useBike";

interface IProps {
  result: ResponseType;
  isLoading: boolean;
  error: boolean;
}

export const BikeList = ({ result, isLoading, error }: IProps) => {
  const { setShowBikeDetailModal, setSelectedBike } = useBike();

  const handleSelectBikeDetail = (bike: IBikeListProps) => {
    setSelectedBike(bike);
    setShowBikeDetailModal(true);
  };

  return (
    <Table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <TableHeader
        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        renderHeader={() => (
          <tr>
            {TableColumns.map((column) => (
              <th key={column.id} className="px-6 py-3">
                {column.name}
              </th>
            ))}
          </tr>
        )}
      />
      <TableBody
        limit={10}
        loading={isLoading}
        data={result?.data?.bikes}
        error={error ? true : false}
        renderRow={(item: IBikeListProps, index) => {
          return (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-3">{item?.bike_id}</td>
              <td className="px-6 py-3">
                {item?.lat} x {item?.lon}
              </td>
              <td className="px-6 py-3">
                {item?.is_reserved ? "Not Available" : "Available"}
              </td>
              <td className="px-6 py-3">{item?.vehicle_type}</td>
              <td className="px-6 py-3">{item?.total_bookings}</td>
              <td
                onClick={() => handleSelectBikeDetail(item)}
                className="px-6 py-3 hover:cursor-pointer"
              >
                Detail
              </td>
            </tr>
          );
        }}
      />
    </Table>
  );
};
