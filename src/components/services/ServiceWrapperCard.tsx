import Image from "next/image";
import React from "react";

export const ServiceWrapperCard = ({text, icon} : {text: string; icon: string}) => {
  return (
    <div className="border p-5">
        <span>
            <Image src={icon} alt="icon" />
        </span>
      <p className="text-5xl">{text}</p>
    </div>
  );
};
