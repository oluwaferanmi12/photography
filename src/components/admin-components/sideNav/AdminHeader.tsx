import React from "react";
import notificationIcon from "@/assets/svgs/notification.svg";
import addLine from "@/assets/svgs/add_line.svg";
import Image from "next/image";
import breadcrumbHome from "@/assets/svgs/Admin_svgs/breadcrumb_home.svg";
import chevron_right from "@/assets/svgs/Admin_svgs/chevron_right.svg";
import { useRouter } from "next/navigation";

export const AdminHeader = ({
  dashTitle,
  dashDescription,
  showDescript = true,
  buttonTitle,
  buttonOnClick,
}: {
  dashTitle: string;
  dashDescription?: string;
  showDescript?: boolean;
  buttonTitle: string;
  buttonOnClick: () => void;
}) => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <p className="text-[#101010] text-2xl font-mono-medium">
            {dashTitle}
          </p>
          {showDescript ? (
            <p className="text-[#615F5F] font-mono-regular w-1/2 mt-1 ">
              {dashDescription ?? ""}
            </p>
          ) : (
            <div className="flex gap-5 items-center mt-3">
              <span>
                <Image className="cursor-pointer" onClick={() => router.push("/admin-packages")} src={breadcrumbHome} alt="breadcrumb" />
              </span>
              <span>
                <Image src={chevron_right} alt="chevron_right" />
              </span>
              <div className=" rounded-lg bg-[#F2F2F2] text-[#131313] py-2 px-3 text-base font-semibold flex justify-center items-center">
                Packages
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-6 items-stretch ">
          <span className="p-3 border cursor-pointer rounded-lg border-[#EFEEEE] flex justify-center items-center">
            <Image src={notificationIcon} alt="notification" />
          </span>
          <button
            onClick={buttonOnClick}
            className="flex cursor-pointer items-center gap-2 bg-[#101010] py-3 px-4 rounded-lg"
          >
            <Image src={addLine} alt="" />
            <p className="text-sm font-mono-regular">{buttonTitle}</p>
          </button>
        </div>
      </div>
    </>
  );
};
