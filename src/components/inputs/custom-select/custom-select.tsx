import React, { useState, useRef, useEffect } from 'react';
import select_arrow from "@/assets/svgs/select_arrow.svg";
import Image from 'next/image';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  selectData: Option[];
  defaultOption: string;
  selectValue: string;
  setSelectedValue: (value: string) => void;
  variant: "user" | "admin"
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  variant,
  selectData,
  defaultOption,
  selectValue,
  setSelectedValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const selectedLabel = selectData.find((item) => item.value === selectValue)?.label || defaultOption;

  const userStyle = "w-full border cursor-pointer border-[#575252] text-left text-[#BABABA] px-5 py-2 rounded-xl bg-transparent flex justify-between items-center"
 
  const adminStyle = "bg-bayfi-grey-300 border-bayfi-grey text-[#868D96] placeholder:text-[#868D96] border py-4 px-3 rounded-lg flex justify-between items-center w-full"
  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={ `${variant === "user" ? userStyle : adminStyle} cursor-pointer`}
      >
        {selectedLabel}
        <Image src={select_arrow} className="cursor-pointer w-4 h-4" alt="arrow_icon" />
      </button>

      {isOpen && (
        <ul className={`absolute ${variant === "user" ? "bg-[#282824] border-[#575252] " : "bg-bayfi-grey-300 border-bayfi-grey "} z-50 w-full mt-1  border rounded-xl shadow-lg`}>
          {selectData.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`${variant === "user" ? "text-[#BABABA] hover:text-black hover:bg-light-brown " : "text-grayish-500 hover:rounded-xl  hover:text-black hover:bg-blue-300 "}  px-5 py-2 cursor-pointer `}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
