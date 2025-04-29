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
}

const CustomSelect: React.FC<CustomSelectProps> = ({
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

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border cursor-pointer border-[#575252] text-left text-[#BABABA] px-5 py-2 rounded-xl bg-transparent flex justify-between items-center"
      >
        {selectedLabel}
        <Image src={select_arrow} className="cursor-pointer w-4 h-4" alt="arrow_icon" />
      </button>

      {isOpen && (
        <ul className="absolute z-50 w-full mt-1 bg-[#282824] border border-[#575252] rounded-xl shadow-lg">
          {selectData.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="px-5 py-2 text-[#BABABA] cursor-pointer hover:text-black hover:bg-light-brown"
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
