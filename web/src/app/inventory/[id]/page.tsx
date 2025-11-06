"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { TableButton } from "@/components/ui/button";
import NotificationBell from "@/components/notificationBell";
import Sidebar from "@/layout/dashboardLayout";
import TopBar from "@/layout/navbar";
import { ArrowLeft } from "lucide-react";
import { PencilSimpleIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function InventoryItemDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const product = {
    id: id,
    name: "Blue Cotton T-Shirt",
    sku: "TSHIRT-001",
    category: "Apparel",
    brand: "Urban Threads",
    price: "₦7,500",
    quantity: 42,
    status: "In Stock",
    description:
      "Soft cotton t-shirt in blue with a relaxed fit. Suitable for casual wear.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
    dateAdded: "2025-11-01",
    lastUpdated: "2025-11-05",
  };

  const statusColor =
    product.status === "In Stock"
      ? "text-[#16A34A] bg-[#F0FDF5]"
      : product.status === "Out of Stock"
      ? "text-[#DC2626] bg-[#FEF2F2]"
      : "text-[#E19133] bg-[#FFF8E1]";

  return (
    <div className="relative bg-[#F0F1F3] h-screen pt-28  pb-14">
      {" "}
      <div className="pl-49.5">
        <Sidebar />
        <TopBar
          rightSide={
            <>
              <NotificationBell />
            </>
          }
        />
      </div>
      {/*  */}
      <div className=" lg:flex gap-14 pl w-full pl-[232px]">
        {/* <div className="bg-white rounded-md w-full max-w-[1126px] p-6 ">
          <section className="w-full flex items-center justify-between mb-10">
            <div className="flex items-center gap-2 ">
              <div
                className="flex items-center gap-2"
                onClick={() => router.push("/inventory")}
              >
                <ArrowLeft className="w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold">Product Details</h1>
            </div>
            <TableButton
              variant="outline"
              className="border border-gray-300 text-gray-700 w-[90px] rounded-sm hover:bg-gray-100 shadow-none h-9"
            >
              <PencilSimpleIcon /> Edit
            </TableButton>
          </section>
        </div> */}
        <div className="bg-white rounded-md w-full max-w-[1126px] p-6">
          {/* Top Bar */}
          <section className="w-full flex items-center justify-between mb-10">
            <div className="flex items-center gap-2 ">
              <div
                className="flex items-center gap-2"
                onClick={() => router.push("/inventory")}
              >
                <ArrowLeft className="w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold">{product.name}</h1>
            </div>
            <TableButton
              variant="outline"
              className="border border-gray-300 text-gray-700 w-[90px] rounded-sm hover:bg-gray-100 shadow-none h-9"
            >
              <PencilSimpleIcon /> Edit
            </TableButton>
          </section>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Product Image */}
            <div className="w-full flex justify-center">
              <div className="relative w-48 h-48 rounded-md overflow-hidden border">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="col-span-2 flex flex-col gap-4 text-sm text-gray-700">
              <div>
                <p className="text-gray-500 text-xs uppercase mb-1">
                  Product Name
                </p>
                <p className="font-medium">{product.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">SKU</p>
                  <p>{product.sku}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">
                    Category
                  </p>
                  <p>{product.category}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Brand</p>
                  <p>{product.brand}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Price</p>
                  <p className="font-medium">{product.price}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">
                    Stock Qty
                  </p>
                  <p>{product.quantity}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Status</p>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}
                  >
                    {product.status}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase mb-1">
                  Description
                </p>
                <p className="leading-relaxed">{product.description}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <p className="text-xs text-gray-500">
                  Added:{" "}
                  <span className="text-gray-700">{product.dateAdded}</span>
                </p>
                <p className="text-xs text-gray-500">
                  Last Updated:{" "}
                  <span className="text-gray-700">{product.lastUpdated}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
