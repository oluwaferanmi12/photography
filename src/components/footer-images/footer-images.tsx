"use client";
import React from "react";
import Image from "next/image";
import instagramIcon from "@/assets/svgs/white-instagram.svg";
import image1 from "@/assets/images/victoria.jpeg";
import image2 from "@/assets/images/about-secondImg.png";
import image3 from "@/assets/images/victoriaPics/slide2.jpg";
import image4 from "@/assets/images/victoriaPics/slide3.jpg";

// Sample images array
const images = [image1, image2, image3, image4];

export const FooterImages = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4 min-w-max px-4 py-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-[320px] h-[320px] shrink-0 group"
          >
            <Image
              src={src}
              alt={`image-${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Image
                src={instagramIcon}
                alt="Instagram Icon"
                width={40}
                height={40}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
