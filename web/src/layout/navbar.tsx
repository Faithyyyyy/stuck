"use client";
import React, { type ReactElement } from "react";
import Search from "@/assets/Search.svg";
import Image from "next/image";
type TopBarType = {
  notificationCount?: number | string;
  className?: string;
  leftSide?: ReactElement;
  rightSide?: ReactElement;
};

export default function TopBar({ rightSide, leftSide }: TopBarType) {
  return (
    <div className="h-19.25 fixed top-0 z-50 lg:left-49.5 w-full lg:w-[calc(100%-12.375rem)] bg-white px-8 py-1.5 flex items-center justify-between">
      {leftSide ? (
        leftSide
      ) : (
        <div className="">
          <label className="relative block">
            <span className="sr-only">Search articles</span>
            <input
              placeholder="Search product, supplier, order"
              className=" pl-10 bg-white/95 w-[440px] border border-[#E6E5E4] rounded-sm px-4 py-3 text-sm placeholder:text-[#B6B2AE] focus:outline-none "
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black  p-1">
              <Image
                src={Search}
                alt="Araafit logo"
                width={20}
                height={26}
                className=""
                priority
              />
            </span>
          </label>
        </div>
      )}

      {rightSide && (
        <div className="lg:flex hidden items-center gap-6">{rightSide}</div>
      )}
    </div>
  );
}
