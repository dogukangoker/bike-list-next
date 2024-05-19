"use client";

import React, { InputHTMLAttributes } from "react";
import { BiSearch } from "react-icons/bi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <label className="relative">
      <BiSearch
        role="img"
        className="absolute left-2 top-1/2 -translate-y-1/2 fill-black"
      />
      <input
        className="border shadow-lg h-8 rounded-md pl-6 pr-2 placeholder:text-black disabled:cursor-not-allowed"
        {...props}
      />
    </label>
  );
};

export default Input;
