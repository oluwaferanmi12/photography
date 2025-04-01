"use client";

import servicesArrow from "@/assets/svgs/services-right-arrow.svg";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export const ServicesAccordian = ({
  num,
  serviceTitle,
  mediaSrc,
  isVideo,
  onHover,
}: {
  num: string;
  serviceTitle: string;
  mediaSrc: StaticImageData;
  isVideo: boolean;
  onHover: (src: string, isVideo: boolean) => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex justify-between cursor-pointer items-center border-b border-[#CFCFCF] mb-5 pb-4 relative"
      onMouseEnter={() => {
        onHover(mediaSrc, isVideo);
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex gap-5 items-center">
        <span className="text-[#635E5E] text-xl">{num}</span>
        <p className="text-[#74787A] text-4xl font-grotesk-medium">{serviceTitle}</p>
      </div>
      <div>
        {hovered ? (
          <p className="text-[#FB5711] text-xl font-semibold">
            {isVideo ? "View Video" : "View Photos"}
          </p>
        ) : (
          <Image src={servicesArrow} alt="arrow" />
        )}
      </div>
    </div>
  );
};
