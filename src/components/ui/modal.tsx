"use client";

import React from "react";

interface IModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  cb?: () => void;
  children: React.ReactNode;
}

const Modal = ({ show, setShow, cb, children }: IModalProps) => {
  if (!show) return null;

  const handleCloseModal = () => {
    setShow(false);
    cb && cb();
  };

  const preventClosingModal = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => e.stopPropagation();

  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
    >
      <div
        onClick={(e) => preventClosingModal(e)}
        className="p-4 border w-2/4 shadow-lg rounded-md bg-white"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
