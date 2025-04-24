"use client";

import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import HS4 from "@/assets/images/HS4.png";
import { PlanCards } from "@/components/plans-card/PlanCards";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import rollingImage from "@/assets/svgs/rollingImage.svg";


const SingleGallery = () => {
  const { slug } = useParams();


  return (
    <div>
      <div className="flex flex-col gap-14 justify-center items-center">
        <div className="flex flex-col gap-28 w-full px-5 lg:p-14 3xl:!p-7">
          {/* Header Section */}
          <div className="galleryBg relative border-4 border-light-brown w-full flex items-center">
            <div className="mx-14 text-white text-6xl lg:text-8xl flex flex-col gap-5 font-grotesk-regular">
              <p className="capitalize ">{slug}</p>
            </div>
            <span className="absolute right-0 -bottom-10 lg:-bottom-15">
              <Image src={rollingImage} className="imageRotate" alt="img" />
            </span>
          </div>

          {/* Image Grid Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-4">
                <Image src={HS4} className="w-full h-[300px] object-cover rounded-3xl" alt="img" />
                <Image src={HS4} className="w-full h-[300px] object-cover rounded-3xl" alt="img" />
              </div>
              <div>
                <Image src={HS4} className="w-full h-[624px] object-cover rounded-3xl" alt="img" />
              </div>
              <div className="flex flex-col gap-4">
                <Image src={HS4} className="w-full h-[300px] object-cover rounded-3xl" alt="img" />
                <Image src={HS4} className="w-full h-[300px] object-cover rounded-3xl" alt="img" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image src={HS4} className="w-full h-[300px] object-cover rounded-3xl" alt="img" />
              <Image src={HS4} className="w-full h-[300px] object-cover rounded-3xl" alt="img" />
            </div>
          </div>

          {/* Package Section */}
          <div>
            <h3 className="text-7xl capitalize ">{slug} Packages</h3>
            <div className="mt-10">
              <PlanCards />
            </div>
          </div>
        </div>
      </div>
      <GalleryBox />
      <Footer />
    </div>
  );
};

export default SingleGallery;
