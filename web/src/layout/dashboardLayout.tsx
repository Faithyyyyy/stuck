"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Logo.svg";
import { usePathname } from "next/navigation";
import { createElement, type ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";
import {
  TrolleyIcon,
  HouseIcon,
  ChartBarIcon,
  GearIcon,
  SignOutIcon,
  UserIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const navMenu: {
  name: string;
  link: string;
  icon: ComponentType<IconProps>;
}[] = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: HouseIcon,
  },
  { name: "Inventory", link: "/inventory", icon: TrolleyIcon },

  {
    name: "suppliers",
    link: "/suppliers",
    icon: UserCircleIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = pathname === "/settings";
  const iconSize = 20;

  return (
    <div className="w-49.5  h-screen hidden lg:block fixed left-0 top-0 border-r  bg-white">
      <div className="w-full h-[80%]  flex flex-col pt-4">
        <Link
          href="/"
          className=" mb-7 flex items-center justify-center mt-5 gap-2 w-[130px] mx-auto"
        >
          <Image
            src={logo}
            alt="Araafit logo"
            width={90}
            height={36}
            className="w-12 h-auto"
            priority
          />
          <span className="text-[#1570EF] font-semibold">KANBAN</span>
        </Link>

        <div className="flex flex-col  gap-4 w-[130px] mx-auto">
          {navMenu.map((item, idx) => {
            const isActive =
              pathname === item.link || pathname.startsWith(item.link + "/");
            return (
              <Link
                key={idx}
                href={item.link}
                className={`px py-3 transition
                    ${isActive ? "text-[#1570EF]" : "text-[#5D6679] "}`}
              >
                <div className="flex items-center gap-4 text-sm hover:text-[#1570EF]">
                  {createElement(item.icon ?? "a", { size: iconSize })}
                  <span className="capitalize font-medium">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className=" text-[#5D6679] w-[130px] mx-auto  cursor-pointer">
        <Link
          href="/settings"
          className={`px py-3 transition
                    ${isActive ? "text-[#1570EF]" : "text-[#5D6679] "}`}
        >
          {" "}
          <div className="flex items-center gap-4 h-14 text-sm hover:text-[#1570EF]">
            {" "}
            {createElement(GearIcon ?? "a", { size: iconSize })}
            <span>Setting</span>
          </div>
        </Link>
        <Dialog>
          <DialogTrigger>
            {" "}
            <div className="flex items-center gap-4 h-14 text-sm hover:text-[#1570EF]">
              {" "}
              {createElement(SignOutIcon ?? "a", { size: iconSize })}
              <span>Logout</span>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure you want to log out?</DialogTitle>
              <DialogDescription className="py-3">
                Are you sure you want to log out? You will be signed out of your
                account, but your data will remain safe. You can log back in
                anytime.
              </DialogDescription>
              <div className="flex justify-end gap-3 mt-6">
                {/* Cancel Button */}
                <DialogClose asChild>
                  <button className="px-6 py-2 rounded-md border border-brown-600 text-brown-600 font-medium hover:bg-brown-50 transition">
                    Cancel
                  </button>
                </DialogClose>

                {/* Delete Button */}
                <button
                  title="Delete"
                  className={`px-6 py-2 self-end w-auto rounded-md text-white font-medium bg-red-600 hover:bg-red-700
      `}
                >
                  {"Logout"}
                </button>
                {/* <DialogClose asChild>
                  <button ref={closeRef} className="hidden" />
                </DialogClose> */}
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
