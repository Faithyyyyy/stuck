import NotificationBell from "@/components/notificationBell";
import Sidebar from "@/layout/dashboardLayout";
import TopBar from "@/layout/navbar";

import { DataTable } from "@/components/tables/supplierTable";

export const data: {
  orderId: string;
  generalInformation: { name: string; image: string };
  product: string;
  contactNumber: string;
  email: string;
  type: "Taking Return" | "Not Taking Return";
  onTheWay: string | number;
}[] = [
  {
    orderId: "1",
    generalInformation: {
      name: "Richard Martin",
      image: "/images/richard.png",
    },
    product: "Kit Kat",
    contactNumber: "7687764556",
    email: "richard@gmail.com",
    type: "Taking Return",
    onTheWay: 13,
  },
  {
    orderId: "2",
    generalInformation: {
      name: "Tom Homan",
      image: "/images/tomhoman.png",
    },
    product: "Maaza",
    contactNumber: "9867545368",
    email: "tomhoman@gmail.com",
    type: "Taking Return",
    onTheWay: "-",
  },
  {
    orderId: "3",
    generalInformation: {
      name: "Veandir",
      image: "/images/veandir.png",
    },
    product: "Dairy Milk",
    contactNumber: "9867545566",
    email: "veandier@gmail.com",
    type: "Not Taking Return",
    onTheWay: "-",
  },
  {
    orderId: "4",
    generalInformation: {
      name: "Charin",
      image: "/images/charin.png",
    },
    product: "Tomato",
    contactNumber: "9267545457",
    email: "charin@gmail.com",
    type: "Taking Return",
    onTheWay: 12,
  },
  {
    orderId: "5",
    generalInformation: {
      name: "Hoffman",
      image: "/images/hoffman.png",
    },
    product: "Milk Bikis",
    contactNumber: "9367546531",
    email: "hoffman@gmail.com",
    type: "Taking Return",
    onTheWay: "-",
  },
  {
    orderId: "6",
    generalInformation: {
      name: "Fainden Juke",
      image: "/images/fainden.png",
    },
    product: "Marie Gold",
    contactNumber: "9667545982",
    email: "fainden@gmail.com",
    type: "Not Taking Return",
    onTheWay: 9,
  },
  {
    orderId: "7",
    generalInformation: {
      name: "Martin",
      image: "/images/martin.png",
    },
    product: "Saffola",
    contactNumber: "9867545457",
    email: "martin@gmail.com",
    type: "Taking Return",
    onTheWay: "-",
  },
  {
    orderId: "8",
    generalInformation: {
      name: "Joe Nike",
      image: "/images/joe.png",
    },
    product: "Good day",
    contactNumber: "9567545769",
    email: "joenike@gmail.com",
    type: "Taking Return",
    onTheWay: "-",
  },
  {
    orderId: "9",
    generalInformation: {
      name: "Dender Luke",
      image: "/images/dender.png",
    },
    product: "Apple",
    contactNumber: "9667545980",
    email: "dender@gmail.com",
    type: "Not Taking Return",
    onTheWay: 7,
  },
  {
    orderId: "10",
    generalInformation: {
      name: "Joe Nike",
      image: "/images/joe.png",
    },
    product: "Good day",
    contactNumber: "9567545769",
    email: "joenike@gmail.com",
    type: "Taking Return",
    onTheWay: "-",
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
        <div className="px-4 pt-5 pb-6.5 w-full max-w-[1126px] bg-white rounded-md">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
