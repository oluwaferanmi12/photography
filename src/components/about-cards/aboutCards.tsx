import Image from "next/image";
import React from "react";

interface AboutCardsProps {
  iconSrc: string;
  tagText: string;
  numberCount: string;
  cardText: string;
}

export const AboutCards = ({ iconSrc, tagText, numberCount, cardText }: AboutCardsProps) => {
  return (
    <>
      <div className="bg-white  rounded-lg p-4 ">
        <div className="flex gap-4 bg-[#FF5F5F14] text-[#FF5F5F] text-base">
          <span>
            <Image src={iconSrc} alt="img" />
          </span>
          <span> {tagText}</span>
        </div>
        <div>
          <span>
            <p>{numberCount}</p>
            <p></p>
          </span>
          <span>
            <p>{cardText}</p>
          </span>
        </div>
      </div>
    </>
  );
};
