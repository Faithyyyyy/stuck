// @react-compiler-ignore
"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove } from "@dnd-kit/sortable";
import type { ColumnDef } from "@tanstack/react-table";
import {
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { z } from "zod";
import { TableButton } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmptyState from "@/components/emptycart";
import cart from "@/assets/emptyCart.png";
import { FunnelSimpleIcon, DownloadSimpleIcon } from "@phosphor-icons/react";
import Button from "@/components/button";
import * as XLSX from "xlsx";
import { supplierSchema } from "@/schema/suppliersSchema";
import type { FilterFn } from "@tanstack/react-table";
import { AddSuppliers } from "../addSuppliers";

type InventoryItem = z.infer<typeof supplierSchema>;

const equalsIgnoreCase: FilterFn<InventoryItem> = (
  row,
  columnId,
  filterValue
) => {
  const v = String(row.getValue<string>(columnId) ?? "");
  const f = String(filterValue ?? "");
  return v.localeCompare(f, undefined, { sensitivity: "accent" }) === 0;
};

// -------------------- Columns --------------------
const columns: ColumnDef<z.infer<typeof supplierSchema>>[] = [
  {
    accessorKey: "generalInformation.name",
    header: "Supplier Name",
    cell: ({ row }) => {
      const info = row.original.generalInformation;
      const name = info?.name ?? "Unnamed";
      //   const img = info?.image ?? "/images/placeholder.png";
      return (
        <div className="flex items-center gap-3">
          {/* <div className="relative w-8 h-8 rounded-md overflow-hidden">
            <Image
              src={img}
              alt={name}
              width={32}
              height={32}
              unoptimized
              className="object-cover"
            />
          </div> */}
          <span className="whitespace-nowrap max-w-40 overflow-hidden text-ellipsis">
            {name}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },

  {
    accessorKey: "product",
    header: "Product",
    cell: ({ getValue }) => {
      const product = (getValue() as string) || "-";
      return <div className="max-w-[180px] truncate">{product}</div>;
    },
    filterFn: equalsIgnoreCase,
  },

  {
    accessorKey: "contactNumber",
    header: "Contact Number",
    cell: ({ getValue }) => {
      const num = (getValue() as string) || "-";
      return (
        <a
          className="text-sm text-[#0F172A] hover:underline"
          href={`tel:${num}`}
        >
          {num}
        </a>
      );
    },
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => {
      const email = (getValue() as string) || "-";
      return (
        <a
          className="text-sm text-[#0F172A] hover:underline"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      );
    },
  },

  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => {
      const t = (getValue() as string) || "-";
      const isTakingReturn = t.trim().toLowerCase() === "taking return";

      const textColor = isTakingReturn ? "text-[#36C045]" : "text-[#DA3E33]";
      return (
        <div
          className={`px-2 py-0.5 text-xs font-medium rounded-full ${textColor} `}
        >
          {t}
        </div>
      );
    },
  },

  {
    accessorKey: "onTheWay",
    header: "On the way",
    cell: ({ getValue }) => {
      const val = getValue() as string | number | null | undefined;
      if (val === "-" || val == null || val === "") {
        return <div className="text-sm text-gray-500">-</div>;
      }
      return <div className="text-sm">{String(val)}</div>;
    },
  },
];

// -------------------- Table Component --------------------
export function DataTable({
  data: initialData,
}: {
  data: z.infer<typeof supplierSchema>[];
}) {
  const router = useRouter();
  const [data, setData] = React.useState(() => initialData);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const sortableId = React.useId();
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data?.map(({ orderId }) => orderId) || [],
    [data]
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
      globalFilter,
    },
    filterFns: {
      equalsIgnoreCase,
    },
    getRowId: (row) => row.orderId.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }
  }

  // -------------------- Export to Excel --------------------
  function exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(
      table.getFilteredRowModel().rows.map((r) => r.original)
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(workbook, "orders.xlsx");
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Search , Filters , Export */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-[#383E49]">Suppliers</h2>

        <div className="flex items-center justify-between gap-3">
          {/* Search */}
          <AddSuppliers />
          {/* Filter by Status */}
          <DropdownMenu>
            <DropdownMenuTrigger className="py-[18px]" asChild>
              <TableButton
                variant="outline"
                size="sm"
                className="flex items-center shadow-none text-[#3D3D3D] font-light border-[#E8E8E8] gap-2"
              >
                Filter by
                <FunnelSimpleIcon size={16} />
              </TableButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {Array.from(
                new Set(
                  table
                    .getPreFilteredRowModel()
                    .flatRows.map((r) => r.original.type)
                    .filter(Boolean) as string[]
                )
              ).map((type) => {
                const formatted =
                  type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

                return (
                  <DropdownMenuItem
                    key={type}
                    onClick={() =>
                      setColumnFilters([
                        {
                          id: "type", // must match accessorKey in your columns
                          value: type,
                        },
                      ])
                    }
                    className="w-full"
                  >
                    {formatted}
                  </DropdownMenuItem>
                );
              })}

              <DropdownMenuItem onClick={() => setColumnFilters([])}>
                Clear Filters
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Export */}
          <Button
            type="button"
            text="Export"
            variant="clear"
            icon={<DownloadSimpleIcon size={16} />}
            onClick={exportToExcel}
            className="text-[#3D3D3D] border h-[37px] font-light text-sm border-[#E7E7E7] "
          />
        </div>
      </div>

      {/* Table */}
      <div className="w-full">
        <div className="relative flex flex-col gap-4 overflow-auto">
          <div className="overflow-hidden rounded-lg  ">
            <DndContext
              collisionDetection={closestCenter}
              modifiers={[restrictToVerticalAxis]}
              onDragEnd={handleDragEnd}
              sensors={sensors}
              id={sortableId}
            >
              <Table>
                <TableHeader className="sticky top-0 z-10 h-11 bg-white ">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                      key={headerGroup.id}
                      className="border-0 `border-b-0!"
                    >
                      {headerGroup.headers.map((header) => (
                        <TableHead
                          className="text-[#667085] font-medium"
                          key={header.id}
                          colSpan={header.colSpan}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => {
                      //   const bgClass = row.getIsSelected()
                      //     ? "bg-muted/50"
                      //     : idx % 2 === 0
                      //     ? "bg-[#F9FAFB]"
                      //     : "bg-white";

                      return (
                        <TableRow
                          key={row.id}
                          className={`border-0 border-b text-sm font-medium text-[#48505E] transition-colors cursor-pointer `}
                          onClick={() => {
                            const productId = row.original.orderId;
                            router.push(`/suppliers/${productId}`);
                          }}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id} className="h-12">
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        <EmptyState
                          image={cart}
                          alt="Empty cart"
                          message="Your inventory is currently empty. Get started by adding your first item — it’s quick and easy!"
                        />
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </DndContext>
          </div>
        </div>
      </div>
    </div>
  );
}
