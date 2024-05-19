import React from "react";
import Modal from "../ui/modal";
import { useBike } from "@/hooks/useBike";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

const BikeDetailModal = () => {
  const {
    selectedBike,
    setSelectedBike,
    showBikeDetailModal,
    setShowBikeDetailModal,
  } = useBike();
  if (!showBikeDetailModal) return null;

  const removeBikeDetail = () => setSelectedBike(null);

  const handleCloseModal = () => {
    setShowBikeDetailModal(false);
    removeBikeDetail();
  };

  const detailClass = "flex items-center gap-2";

  return (
    <Modal
      show={showBikeDetailModal}
      setShow={setShowBikeDetailModal}
      cb={removeBikeDetail}
    >
      <div className="flex items-center justify-between text-2xl border-b pb-2">
        <h1>Bike Details</h1>
        <CgClose onClick={handleCloseModal} className="hover:cursor-pointer" />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className={detailClass}>
          <span className="font-semibold">Bike ID:</span>
          <span className="text-sm">{selectedBike?.bike_id}</span>
        </div>
        <div className={detailClass}>
          <span className="font-semibold">Reservation Status:</span>
          <span className="relative text-sm">
            {selectedBike?.is_reserved ? "Not Available" : "Available"}
            <span
              className={`absolute -right-3.5 rounded-[50%] -translate-y-1/2  top-1/4 w-2 h-2 ${
                selectedBike?.is_reserved ? "bg-red-600" : "bg-green-600"
              }`}
            ></span>
          </span>
        </div>
        <div className={detailClass}>
          <span className="font-semibold">Bike Type:</span>
          <span className="text-sm">{selectedBike?.vehicle_type}</span>
        </div>
        <div className={detailClass}>
          <span className="font-semibold">
            Total Bookings of Selected Bike:
          </span>
          <span className="text-sm">{selectedBike?.total_bookings}</span>
        </div>
        <div className={detailClass}>
          <span className="font-semibold">Is Available for Reservation?:</span>
          <span className="text-sm">
            {selectedBike?.is_disabled === 0 ||
            selectedBike?.is_disabled === false
              ? "Disabled"
              : "Active"}
          </span>
        </div>
        <div className={detailClass}>
          <span className="font-semibold">Coordinates:</span>
          <span className="text-sm">
            {selectedBike?.lat} x {selectedBike?.lon}
          </span>
        </div>
        <div className={detailClass}>
          <span className="font-semibold">Android URL:</span>
          <Link
            target="_blank"
            href={selectedBike?.android ? selectedBike?.android : ""}
            className="text-sm text-blue-500"
          >
            {selectedBike?.android}
          </Link>
        </div>
        <div className={detailClass}>
          <span className="font-semibold">iOS URL:</span>
          <Link
            target="_blank"
            href={selectedBike?.ios ? selectedBike?.ios : ""}
            className="text-sm text-blue-500"
          >
            {selectedBike?.ios}
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default BikeDetailModal;
