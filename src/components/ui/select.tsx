"use client";

import React from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: { label: string; value: string }[];
}

const Select = ({ options, ...props }: IProps) => {
  return (
    <select
      className="border shadow-lg rounded-md w-24 disabled:cursor-not-allowed"
      {...props}
    >
      <option value="" disabled selected>
        Select
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
