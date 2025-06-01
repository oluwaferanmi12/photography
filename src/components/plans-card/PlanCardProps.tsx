"use client";

import Image from "next/image";
import React from "react";
import icon from "@/assets/svgs/plans-icons.svg";
import arrowRight from "@/assets/svgs/right_arrow.svg";
import { Switch } from "antd";
import { useRouter } from "next/navigation";

type planCardInterface = {
  planType: "";
  planAmount: number;
  planDescription?: string;
  variant?: "user" | "admin";
  planActiveness?: boolean;
};

export const PlanCardProps: React.FC<planCardInterface> = ({
  planType,
  planAmount,
  planDescription,
  planActiveness,
  variant = "user",
}) => {
  const router = useRouter();

  return (
    <div>
      <div
        className={`p-6 border border-off-white  rounded-3xl ${
          variant === "user"
            ? "text-[#999999] bg-[#F8F8F805]"
            : "text-[#F5F5F5] bg-[#0E0E0E]"
        }`}
      >
        {variant === "admin" && (
          <div className="flex justify-between items-center">
            <span>
              <Image src={icon} className=" " alt="icon" />
            </span>
            <div className="flex items-center gap-4">
              <p>{planActiveness ? "Active" : "Inactive"}</p>
              <Switch
                defaultChecked={planActiveness}
                checked={planActiveness}
                // onChange={() => setIsPlanActive(!isPlanActive)}
                className="custom_switch"
              />
            </div>
          </div>
        )}

        <p className={`mt-3 ${variant === "user" ? "text-[#F8F8F8F2]/95" : ""} text-xl text-white`}>{planType}</p>
        <div
          className={`flex  my-5 items-center text-5xl border p-6 rounded-xl ${
            variant === "user"
              ? " border-off-white/50 text-white"
              : "border-[#E9EBF8]"
          }  `}
        >
          $ {planAmount}
          {variant === "user" ? "/ hr" : ""}
        </div>
        <div className="">
          {planDescription && (
            <ul
              className={`list-disc pl-6 mb-4 ${
                variant === "user"
                  ? "marker:text-[#999999] text-[#999999]"
                  : "text-[#F5F5F5]"
              }`}
            >
              {planDescription.split("*").map((item, index) => (
                <li className="text-base" key={index}>
                  {item.trim()}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={() => router.push(variant === "user" ? "/session" : "/")}
          className="rounded-full cursor-pointer mt-5 text-[#BABABA]  border  border-off-white py-2 px-6 flex justify-center items-center gap-3"
        >
          {variant === "user" ? <p>Book your session</p> : <p>Edit package</p>}
          <span>
            <Image src={arrowRight} alt="arrow-icon" />
          </span>
        </button>
      </div>
    </div>
  );
};
