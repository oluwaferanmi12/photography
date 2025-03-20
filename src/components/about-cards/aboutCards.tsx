import Image from "next/image";
import React from "react";

interface AboutCardsProps {
  iconSrc: string;
  tagText: string;
  numberCount: string;
  cardText: string;
  numberAttribute: "+" | "%";
}

export const AboutCards = ({ iconSrc, tagText, numberCount, cardText, numberAttribute }: AboutCardsProps) => {
  return (
    <>
      <div className="bg-white rounded-lg p-5 w-[400px] h-[250px] ">
        <div className="flex gap-3 items-center px-5 py-2 w-40 bg-[#FF5F5F14] text-[#FF5F5F] text-base rounded-lg font-bold">
          <span>
            <Image src={iconSrc} alt="img" />
          </span>
          <span> {tagText}</span>
        </div>
        <div>
          <div className="flex gap-2 items-center ">
            <p className="text-[#1F2937] text-8xl font-bold">{numberCount}</p>
            <p className="text-4xl font-bold">{numberAttribute}</p>
          </div>
          <div className="text-[#6B7280] mt-5 text-lg">
            <p>{cardText}</p>
          </div>
        </div>
      </div>
    </>
  );
};
