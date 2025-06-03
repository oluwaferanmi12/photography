"use client";

import Image from "next/image";
import React from "react";
import icon from "@/assets/svgs/plans-icons.svg";
import arrowRight from "@/assets/svgs/right_arrow.svg";
import { Switch } from "antd";
import stoneDot from "@/assets/svgs/stone-dots.svg";

type planCardInterface = {
  planType?: string;
  planAmount?: number;
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
  return (
    <div>
      <div
        className={` py-2 px-6  border border-off-white  rounded-3xl ${
          variant === "user"
            ? "text-[#999999] bg-[#F8F8F805] w-full max-w-[500px]"
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
        <p
          className={`mt-3 ${
            variant === "user" ? "text-[#F8F8F8F2]/95" : ""
          } text-xl text-white`}
        >
          {planType}
        </p>
        {planAmount && (
          <div
            className={`flex items-center text-5xl p-6 rounded-xl ${
              variant === "user"
                ? "border-0 text-[#EAECF0] font-light"
                : "border border-[#E9EBF8] mt-5"
            }  `}
          >
            $ {planAmount}
            {variant === "user" ? "/ hr" : ""}
          </div>
        )}

        <div className="">
          {variant === "user" ? (
            <>
              {planDescription?.split("*").map((item, index) => (
                <div className="flex gap-2 items-center" key={index}>
                  <span>
                    <Image src={stoneDot} alt="stoneDot" />
                  </span>
                  <p className="text-[#F8F8F880] text-base font-normal">
                    {item.trim()}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <ul className={`list-disc pl-6 my-4 text-[#F5F5F5]`}>
              {planDescription?.split("*").map((item, index) => (
                <li className="text-base  font-normal" key={index}>
                  {item.trim()}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Ending Buttons */}
        {variant === "user" ? (
          <div className="relative mt-5 inline-block p-[1.5px] rounded-full bg-gradient-to-br from-white/40 via-white/5 to-white/10 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.06)]">
            <button className="px-6 py-2 rounded-full bg-black/30 backdrop-blur-md text-white font-semibold h-full">
              Get started
            </button>
          </div>
        ) : (
          <button className="rounded-full cursor-pointer mt-5 text-[#BABABA]  border  border-off-white py-2 px-6 flex justify-center items-center gap-3">
            <p>Edit package</p>
            <span>
              <Image src={arrowRight} alt="arrow-icon" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
