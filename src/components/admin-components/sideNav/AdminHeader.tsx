import React from "react";
import notificationIcon from "@/assets/svgs/notification.svg";
import addLine from "@/assets/svgs/add_line.svg";
import Image from "next/image";

export const AdminHeader = ({
  dashTitle,
  dashDescription,
  buttonTitle,
}: {
  dashTitle: string;
  dashDescription: string;
  buttonTitle: string;
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <p className="text-[#101010] text-2xl font-mono-medium">
            {dashTitle}
          </p>
          <p className="text-[#615F5F] font-mono-regular w-1/2 mt-1 ">
            {dashDescription}
          </p>
        </div>
        <div className="flex gap-6 items-stretch ">
          <span className="p-4 border cursor-pointer rounded-lg border-[#EFEEEE] flex justify-center items-center">
            <Image src={notificationIcon} alt="notification" />
          </span>
          <button className="flex items-center gap-2 bg-[#101010] py-3 px-4 rounded-lg">
            <Image src={addLine} alt="" />
            <p className="text-sm font-mono-regular">{buttonTitle}</p>
          </button>
        </div>
      </div>
    </>
  );
};
