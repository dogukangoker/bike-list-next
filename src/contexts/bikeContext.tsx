import { IBikeListProps, IBikeListQuery } from "@/shared/types";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IBikeProvider {
  children: ReactNode;
}

interface BikeContextData {
  bikeQuery: IBikeListQuery;
  setBikeQuery: Dispatch<SetStateAction<IBikeListQuery>>;
  selectedBike: IBikeListProps | null;
  setSelectedBike: Dispatch<SetStateAction<IBikeListProps>> | any;
  showBikeDetailModal: boolean;
  setShowBikeDetailModal: Dispatch<SetStateAction<boolean>>;
}

export const BikeContext = createContext({
  bikeQuery: {},
  setBikeQuery: (query) => {},
  selectedBike: {},
  setSelectedBike: () => {},
  showBikeDetailModal: false,
  setShowBikeDetailModal: (show: boolean) => {},
} as BikeContextData);

export const BikeProvider = ({ children }: IBikeProvider) => {
  const [bikeQuery, setBikeQuery] = useState<IBikeListQuery>({
    page: 1,
    bike_id: "",
    vehicle_type: "",
  });
  const [selectedBike, setSelectedBike] = useState<IBikeListProps | null>(null);
  const [showBikeDetailModal, setShowBikeDetailModal] =
    useState<boolean>(false);

  return (
    <BikeContext.Provider
      value={{
        bikeQuery,
        setBikeQuery,
        selectedBike,
        setSelectedBike,
        showBikeDetailModal,
        setShowBikeDetailModal,
      }}
    >
      {children}
    </BikeContext.Provider>
  );
};
