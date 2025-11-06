import NotificationBell from "@/components/notificationBell";
import Sidebar from "@/layout/dashboardLayout";
import TopBar from "@/layout/navbar";

import { DataTable } from "@/components/tables/inventoryTable";

const inventoryData = [
  {
    title: "Categories",
    color: "#1570EF",
    values: [{ label: "14", sub: "Last 7 days" }],
  },
  {
    title: "Total Products",
    color: "#E19133",
    values: [
      { label: "868", sub: "Last 7 days" },
      { label: "$25000", sub: "Revenue" },
    ],
  },
  {
    title: "Top Selling",
    color: "#845EBC",
    values: [
      { label: "5", sub: "Last 7 days" },
      { label: "$2500", sub: "Cost" },
    ],
  },
  {
    title: "Low Stocks",
    color: "#F36960",
    values: [
      { label: "12", sub: "Ordered" },
      { label: "2", sub: "Not in stock" },
    ],
  },
];
export const data = [
  {
    orderId: "1",
    generalInformation: {
      name: "Maggi",
      image: "/images/maggi.png",
    },
    Price: "430",
    quantity: "43 Packets",
    thresholdValue: "12 Packets",
    expiryDate: "11/12/22",
    status: "In-stock",
    stock: 43,
  },
  {
    orderId: "2",
    generalInformation: {
      name: "Bru",
      image: "/images/bru.png",
    },
    Price: "257",
    quantity: "22 Packets",
    thresholdValue: "12 Packets",
    expiryDate: "21/12/22",
    status: "Out of stock",
    stock: 22,
  },
  {
    orderId: "3",
    generalInformation: {
      name: "Red Bull",
      image: "/images/redbull.png",
    },
    Price: "405",
    quantity: "36 Packets",
    thresholdValue: "9 Packets",
    expiryDate: "5/12/22",
    status: "In-stock",
    stock: 36,
  },
  {
    orderId: "4",
    generalInformation: {
      name: "Bourn Vita",
      image: "/images/bournvita.png",
    },
    Price: "502",
    quantity: "14 Packets",
    thresholdValue: "6 Packets",
    expiryDate: "8/12/22",
    status: "Out of stock",
    stock: 14,
  },
  {
    orderId: "5",
    generalInformation: {
      name: "Horlicks",
      image: "/images/horlicks.png",
    },
    Price: "530",
    quantity: "5 Packets",
    thresholdValue: "5 Packets",
    expiryDate: "9/1/23",
    status: "In-stock",
    stock: 5,
  },
  {
    orderId: "6",
    generalInformation: {
      name: "Harpic",
      image: "/images/harpic.png",
    },
    Price: "605",
    quantity: "10 Packets",
    thresholdValue: "5 Packets",
    expiryDate: "9/1/23",
    status: "In-stock",
    stock: 10,
  },
  {
    orderId: "7",
    generalInformation: {
      name: "Ariel",
      image: "/images/ariel.png",
    },
    Price: "408",
    quantity: "23 Packets",
    thresholdValue: "7 Packets",
    expiryDate: "15/12/23",
    status: "Out of stock",
    stock: 23,
  },
  {
    orderId: "8",
    generalInformation: {
      name: "Scotch Brite",
      image: "/images/scotchbrite.png",
    },
    Price: "359",
    quantity: "43 Packets",
    thresholdValue: "8 Packets",
    expiryDate: "6/6/23",
    status: "In-stock",
    stock: 43,
  },
  {
    orderId: "9",
    generalInformation: {
      name: "Coca Cola",
      image: "/images/cocacola.png",
    },
    Price: "205",
    quantity: "41 Packets",
    thresholdValue: "10 Packets",
    expiryDate: "11/11/22",
    status: "Low stock",
    stock: 41,
  },
  {
    orderId: "10",
    generalInformation: {
      name: "Coca Cola",
      image: "/images/cocacola.png",
    },
    Price: "205",
    quantity: "41 Packets",
    thresholdValue: "10 Packets",
    expiryDate: "11/11/22",
    status: "Low stock",
    stock: 41,
  },
  {
    orderId: "11",
    generalInformation: {
      name: "Coca Cola",
      image: "/images/cocacola.png",
    },
    Price: "205",
    quantity: "41 Packets",
    thresholdValue: "10 Packets",
    expiryDate: "11/11/22",
    status: "Low stock",
    stock: 41,
  },
  {
    orderId: "12",
    generalInformation: {
      name: "Coca Cola",
      image: "/images/cocacola.png",
      category: "fabric",
      ProductDescription: "Soft drink bottle",
    },
    Price: "205",
    quantity: "41 Packets",
    thresholdValue: "10 Packets",
    expiryDate: "11/11/22",
    status: "Low stock",
    stock: 41,
  },
];

const Inventory = () => {
  return (
    <div className="relative bg-[#F0F1F3]  pt-28  pb-14">
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
      <div className=" lg:flex gap-14 pl w-full pl-[232px]">
        <div className="bg-white rounded-md w-full max-w-[1126px] p-6 ">
          <h2 className="text-lg font-medium text-[#383E49]">
            Overall Inventory
          </h2>

          <div className="flex justify-between items-stretch divide-x divide-gray-200  border-gray-200 py-4">
            {inventoryData.map((item, index) => (
              <div
                key={index}
                className={`flex-1 ${index !== 0 ? "px-6 " : ""}`}
              >
                <h3
                  className={`font-semibold mb-3 text-${item.color}`}
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>

                <div className="flex justify-between gap-8">
                  {item.values.map((v, i) => (
                    <div key={i}>
                      <p className="text-xl font-semibold text-gray-900">
                        {v.label}
                      </p>
                      <p className="text-sm text-gray-400 mt-3">{v.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" lg:flex gap-14 pl w-full pl-[232px] mt-10">
        <div className="px-4 pt-5 pb-6.5 w-full max-w-[1126px] bg-white rounded-md">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
