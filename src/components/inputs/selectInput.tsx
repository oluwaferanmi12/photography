import Image from "next/image";
import React from "react";
import select_arrow from "@/assets/svgs/select_arrow.svg";

type SelectDataType = {
  value: string;
  label: string;
};

interface SelectInputProps {
  selectValue: string;
  setSelectedValue: (val: string) => void;
  defaultOption: string;
  selectData: SelectDataType[];
}

export const SelectInput = ({
  selectValue,
  setSelectedValue,
  defaultOption,
  selectData,
}: SelectInputProps) => {
  return (
    <div className="border-[#575252] placeholder:text-[#BABABA] border px-5 py-2 rounded-xl flex items-center relative">
      <select
        value={selectValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className="appearance-none bg-transparent outline-none w-full text-[#BABABA]"
      >
        <option value="">{defaultOption}</option>
        {selectData.map((service) => (
          <option key={service?.value} value={service?.value}>
            {service?.label}
          </option>
        ))}
      </select>

      <span className="absolute right-5 pointer-events-none">
        <Image src={select_arrow} className="cursor-pointer" alt="arrow_icon" />
      </span>
    </div>
  );
};
