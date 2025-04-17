import Image from "next/image";
import React from "react";

export const ServiceWrapperCard = ({text, icon} : {text: string; icon: string}) => {
  return (
    <div className="border border-off-white px-8 py-10 w-[400px] rounded-3xl">
        <span>
            <Image src={icon} className="w-7 h-7" alt="icon" />
        </span>
      <p className="text-5xl text-white w-1/2">{text}</p>
    </div>
  );
};
