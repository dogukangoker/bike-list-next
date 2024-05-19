import { BikeContext } from "@/contexts/bikeContext";
import { useContext } from "react";

export const useBike = () => {
  const context = useContext(BikeContext);

  if (!context) {
    throw new Error("useBike must be used within a BikeProvider");
  }

  return context;
};
