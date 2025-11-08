"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import NotificationBell from "@/components/notificationBell";
import Sidebar from "@/layout/dashboardLayout";
import TopBar from "@/layout/navbar";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { EditSuppliers } from "@/components/editSuppliers";
import { TableButton } from "@/components/ui/button";

export default function InventoryItemDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const supplierDetails = {
    id: "SUP-0023",
    name: "Martin Distributors Ltd.",
    type: "Taking Return",
    logo: "/images/suppliers/martin.png", // Optional logo URL
    contact: {
      phone: "+234 801 234 5678",
      email: "contact@martindistributors.com",
      website: "https://www.martindistributors.com",
      address: "45 Industrial Avenue, Lagos, Nigeria",
    },
    joinedDate: "2023-10-05",
    performance: {
      totalOrdersFulfilled: 26,
      lastDeliveryDate: "2025-11-02",
      reliabilityRating: 4.5, // 1-5 scale
      preferredSupplier: true,
    },
    products: [
      {
        id: "PRD-001",
        name: "Maaza Juice",
        category: "Beverage",
        quantity: 120,
        unit: "Crates",
        buyingPrice: 5000,
        expiryDate: "2026-02-01",
        thresholdValue: 20,
      },
      {
        id: "PRD-002",
        name: "Fanta Soda",
        category: "Beverage",
        quantity: 200,
        unit: "Crates",
        buyingPrice: 4500,
        expiryDate: "2026-01-15",
        thresholdValue: 30,
      },
    ],
    documents: [
      { name: "Business Certificate", url: "/docs/business-cert.pdf" },
      { name: "Sample Invoice", url: "/docs/invoice-sample.pdf" },
    ],
    analytics: {
      monthlyDeliveryTrend: [12, 20, 18, 25, 22, 30],
      activityTimeline: [
        { date: "2025-11-05", activity: "Delivered 23 crates of Maaza" },
        { date: "2025-11-02", activity: "Delivered 50 crates of Fanta" },
      ],
    },
  };

  //   const statusColor =
  //     product.status === "In Stock"
  //       ? "text-[#16A34A] bg-[#F0FDF5]"
  //       : product.status === "Out of Stock"
  //       ? "text-[#DC2626] bg-[#FEF2F2]"
  //       : "text-[#E19133] bg-[#FFF8E1]";

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
        <div className="bg-white rounded-md w-full max-w-[1126px] p-6">
          {/* Top Bar */}
          <section className="w-full flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/suppliers")}
              >
                <ArrowLeft className="w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold">{supplierDetails.name}</h1>
            </div>
            <div className="flex items-center gap-3">
              <EditSuppliers />
              <TableButton
                variant="outline"
                className="border bg-red-800 cursor-pointer border-gray-300 text-white  h-9"
              >
                Delete Supplier
              </TableButton>
            </div>
          </section>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Supplier Logo */}
            <div className="w-full flex justify-center">
              <div className="relative w-48 h-48 rounded-md overflow-hidden border">
                <Image
                  src={supplierDetails.logo || "/placeholder.png"}
                  alt={supplierDetails.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right: Supplier Details */}
            <div className="col-span-2 flex flex-col gap-4 text-sm text-gray-700">
              {/* Basic Info */}
              <div className="mb-5">
                <p className="text-gray-500 text-xs uppercase mb-1">
                  Supplier Name
                </p>
                <p className="font-medium">{supplierDetails.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">
                    Supplier ID
                  </p>
                  <p>{supplierDetails.id}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Type</p>
                  <p>{supplierDetails.type}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Email</p>
                  <p>{supplierDetails.contact.email}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Phone</p>
                  <p>{supplierDetails.contact.phone}</p>
                </div>

                {/* Performance */}
                <div className="mt-5">
                  <p className="text-gray-500 text-xs uppercase mb-1">
                    Performance
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <p className="text-gray-700 font-medium">
                        {supplierDetails.performance.totalOrdersFulfilled}
                      </p>
                      <p className="text-gray-500 text-xs">Total Orders</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        {supplierDetails.performance.reliabilityRating} ⭐
                      </p>
                      <p className="text-gray-500 text-xs">Reliability</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Products Table */}
              <div className="mt-5 block">
                <p className="text-gray-500 text-xs uppercase mb-2">
                  Products Supplied
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white shadow rounded">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left">Product Name</th>
                        <th className="px-4 py-2 text-left">Product ID</th>
                        <th className="px-4 py-2 text-left">Category</th>
                        <th className="px-4 py-2 text-left">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplierDetails.products.map((prod, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-2">{prod.name}</td>
                          <td className="px-4 py-2">{prod.id}</td>
                          <td className="px-4 py-2">{prod.category}</td>
                          <td className="px-4 py-2">{prod.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
