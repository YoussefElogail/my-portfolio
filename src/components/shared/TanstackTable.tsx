"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import TableHeader from "./TableHeader";
import MyDialog from "./shadcn/MyDialog";

type TanstackTableProps<T> = {
  data: T[];
  columnDef: ColumnDef<T>[];
  title: string;
  canCreate?: boolean;
  formComponent?: React.ReactNode;
};

const TanstackTable = <T,>({
  data,
  columnDef,
  title,
  canCreate = false,
  formComponent,
}: TanstackTableProps<T>) => {
  const memoizedData = useMemo(() => data, [data]);
  const memoizedColumns = useMemo(() => columnDef, [columnDef]); // هذا السطر يتم تحديد نوع columnDef بشكل صحيح الآن
  const [showCreate, setShowCreate] = useState(false);
  const { getHeaderGroups, getRowModel } = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <TableHeader
          title={title}
          handleShowCreate={setShowCreate}
          canCreate={canCreate}
          children={formComponent}
        />
        <table>
          <thead className="table-auto w-full border">
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border p-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TanstackTable;
