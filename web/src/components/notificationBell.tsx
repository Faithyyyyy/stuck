"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import Image from "next/image";
import Bell from "@/assets/bell.svg";

import { ArrowRightIcon, XIcon } from "@phosphor-icons/react";

const NotificationBell = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="size-10  flex items-center justify-center hover:cursor-pointer">
          <Image
            src={Bell}
            alt="Bell Icon"
            width={20}
            height={26}
            className=""
            priority
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-100 flex items-start gap-4">
        <div>
          <h3 className="font-inter text-[#3D3D3D]">You’ve got a new order!</h3>
          <p className="text-[#4F4F4F] text-sm mt-1">
            You’ve just received a new order — view details to start processing.
          </p>
          <div className="flex items-center gap-2 text-sm text-[#9A6C50] cursor-pointer mt-2">
            <span>View Order</span>
            <ArrowRightIcon />
          </div>
        </div>
        <PopoverClose asChild>
          <XIcon color="#fb2c36" size={30} />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationBell;
