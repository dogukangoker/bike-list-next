"use client";

import React from "react";
import { SkeletonRow } from "./skeletonRow";

type TableProps = React.HTMLAttributes<HTMLTableElement> & {
  children: React.ReactNode;
};

export const Table = ({ children, ...props }: TableProps) => {
  return <table {...props}>{children}</table>;
};

type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  renderHeader: () => React.ReactNode;
};

export const TableHeader = ({ renderHeader, ...props }: TableHeaderProps) => {
  return <thead {...props}>{renderHeader()}</thead>;
};

Table.TableHeader = TableHeader;

type TableBodyProps<T> = {
  loading?: boolean;
  data?: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
  limit: number;
  error: boolean;
};

export const TableBody = <T extends unknown>({
  loading,
  data,
  renderRow,
  limit,
  error,
}: TableBodyProps<T>) => {
  const rows = data?.map((item, index) => renderRow(item, index));

  const renderBody = () => {
    if (error || !rows)
      return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="px-6 py-3 text-center text-3xl" colSpan={6}>
            No data found.
          </td>
        </tr>
      );

    if (loading) return <SkeletonRow limit={limit} />;

    return rows;
  };

  return <tbody>{renderBody()}</tbody>;
};

Table.TBody = TableBody;
