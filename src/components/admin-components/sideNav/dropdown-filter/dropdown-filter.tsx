"use client";

import Image from "next/image";
import React, { useState } from "react";
import dropdownBottom from "@/assets/svgs/Admin_svgs/dropdown-bottom.svg";

export const DropdownFilter = ({
  dropdownName,
  dropdownList,
}: {
  dropdownName: string;
  dropdownList: string[];
}) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  return (
    <div className="relative z-50">
      <div className="border border-admin-light-50 py-2 px-3 rounded-lg ">
        <div className="flex gap-3 items-center justify-center">
          <div>
            <p className="text-[#615F5F]">{dropdownName} : </p>
          </div>

          <div
            className="flex gap-3 justify-center items-center cursor-pointer"
            onClick={() => setDropdownOpened(!dropdownOpened)}
          >
            <p className="text-[#101010] font-semibold text-sm">
              {" "}
              {dropdownList[selectedOptionIndex]}{" "}
            </p>
            <span>
              <Image src={dropdownBottom} alt="dropdown_icon" />
            </span>
          </div>
        </div>
      </div>
      {dropdownOpened && (
        <div className=" absolute top-full z-50 gap-4 py-2 w-full border text-[#101010] bg-white ">
          {dropdownList.map((item, index) => (
            <p
              key={index}
              className="hover:bg-[#EFF8FF] py-2 px-3 cursor-pointer"
              onClick={() => {
                setSelectedOptionIndex(index);
                setDropdownOpened(false);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
