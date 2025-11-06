import NotificationBell from "@/components/notificationBell";
import Sidebar from "@/layout/dashboardLayout";
import TopBar from "@/layout/navbar";
import Sales from "@/assets/sales/Sales.svg";
import Revenue from "@/assets/sales/Revenue.png";
import Profit from "@/assets/sales/Profit.svg";
import Cost from "@/assets/sales/Cost.svg";
import Qih from "@/assets/inventory/Quantity.svg";
import Otw from "@/assets/inventory/On the way.svg";
import PurchaseCost from "@/assets/purchase/Cost.svg";
import Cancel from "@/assets/purchase/Cancel.svg";
import PurchaseProfit from "@/assets/purchase/Profit.svg";
import Purchase from "@/assets/purchase/Purchase.svg";
import Suppliers from "@/assets/product/Suppliers.svg";
import Category from "@/assets/product/Categories.svg";

import Image from "next/image";
import SalesPurchaseChart from "@/components/salesNpurchase";
import OrdersDeliveredChart from "@/components/ordersSummary";
import TopSellingStock from "@/components/topSellingStock";
import LowQuantityStock from "@/components/lowQuantityStock";

const salesOverviewData = [
  {
    id: 1,
    amount: "832",
    label: "Sales",
    icon: Sales,
  },
  {
    id: 2,
    amount: "18,300",
    label: "Revenue",
    icon: Revenue,
  },
  {
    id: 3,
    amount: "868",
    label: "Profit",
    icon: Profit,
  },
  {
    id: 4,
    amount: "17,432",
    label: "Cost",
    icon: Cost,
  },
];
const inveentorysOverviewData = [
  {
    id: 1,
    amount: "868",
    label: "Quantity in Hand",
    icon: Qih,
  },
  {
    id: 2,
    amount: "200",
    label: "To be received",
    icon: Otw,
  },
];
const purchaseOverviewData = [
  {
    id: 1,
    amount: "82",
    label: "Purchase",
    icon: Purchase,
  },
  {
    id: 2,
    amount: "$18,300",
    label: "Cost",
    icon: PurchaseCost,
  },
  {
    id: 3,
    amount: "8",
    label: "Cancel",
    icon: Cancel,
  },
  {
    id: 4,
    amount: "$17,432",
    label: "Return",
    icon: PurchaseProfit,
  },
];
const ProductsOverviewData = [
  {
    id: 1,
    amount: "31",
    label: "Number of Suppliers",
    icon: Suppliers,
  },
  {
    id: 2,
    amount: "21",
    label: "To be received",
    icon: Category,
  },
];
const Home = () => {
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
        <div className="px-4 pt-5 pb-6.5 w-[690px] bg-white rounded-md">
          <h2 className="text-lg font-medium text-[#383E49]">Sales Overview</h2>
          <div className="mt-5.5 flex">
            {salesOverviewData.map((item, index) => (
              <div
                key={item.id}
                className={` px-[22px] flex flex-col ${
                  index !== salesOverviewData.length - 1 ? "border-r" : ""
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={30}
                  height={30}
                  className="self-center"
                  priority
                />

                <div className="flex justify-between items-center mt-3 w-full gap-5">
                  <p className="font-semibold text-[#5D6679]">
                    $ {item.amount}
                  </p>
                  <h3 className="text-[#667085]">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 pt-5 pb-6.5 w-[384px] bg-white rounded-md">
          <h2 className="text-lg font-medium text-[#383E49]">
            Inventory Summary
          </h2>
          <div className="mt-5.5 flex">
            {inveentorysOverviewData.map((item, index) => (
              <div
                key={item.id}
                className={` px-[22px] flex flex-col ${
                  index !== inveentorysOverviewData.length - 1 ? "border-r" : ""
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={30}
                  height={30}
                  className="self-center"
                  priority
                />

                <div className="flex flex-col justify-between items-center mt-3 w-full">
                  <p className="font-semibold text-[#5D6679]">{item.amount}</p>
                  <h3 className="text-[#667085]">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" lg:flex gap-14 pl w-full pl-[232px] mt-10">
        <div className="px-4 pt-5 pb-6.5 w-[690px] bg-white rounded-md">
          <h2 className="text-lg font-medium text-[#383E49]">
            Purchase Overview
          </h2>
          <div className="mt-5.5 flex">
            {purchaseOverviewData.map((item, index) => (
              <div
                key={item.id}
                className={` px-[22px] w-[200px] flex flex-col ${
                  index !== salesOverviewData.length - 1 ? "border-r" : ""
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={30}
                  height={30}
                  className="self-center"
                  priority
                />

                <div className="flex justify-between items-center mt-3 w-full gap-5">
                  <p className="font-semibold text-[#5D6679]">{item.amount}</p>
                  <h3 className="text-[#667085]">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 pt-5 pb-6.5 w-[384px] bg-white rounded-md">
          <h2 className="text-lg font-medium text-[#383E49]">
            Product Summary
          </h2>
          <div className="mt-5.5 flex">
            {ProductsOverviewData.map((item, index) => (
              <div
                key={item.id}
                className={` px-[22px] flex flex-col ${
                  index !== inveentorysOverviewData.length - 1 ? "border-r" : ""
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={30}
                  height={30}
                  className="self-center"
                  priority
                />

                <div className="flex flex-col justify-between items-center mt-3 w-full">
                  <p className="font-semibold text-[#5D6679]">{item.amount}</p>
                  <h3 className="text-[#667085]">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" lg:flex  gap-14  w-full pl-[232px] mt-10">
        <div>
          <SalesPurchaseChart />
        </div>
        <div>
          <OrdersDeliveredChart />
        </div>
      </div>
      {/*  */}
      <div className=" lg:flex  gap-14  w-full pl-[232px] mt-10">
        <div>
          <TopSellingStock />
        </div>
        <div>
          <LowQuantityStock />
        </div>
      </div>
    </div>
  );
};

export default Home;
