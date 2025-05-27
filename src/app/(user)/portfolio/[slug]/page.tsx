"use client";

import React from "react";
import { useParams } from "next/navigation";
import { PlanCards } from "@/components/plans-card/PlanCards";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import InfiniteCarousel from "@/components/unending-carousel/unending-carousel";
import { Banner } from "@/components/banner/banner";
import Button from "@/components/button/button";
import Image from "next/image";
import rollingImage from "@/assets/svgs/rollingImage.svg";



const SinglePackages = () => {
  const { slug } = useParams();

  return (
    <div>
      <div className="px-5 pt-36  lg:px-14 3xl:!px-28">
        <div>
          <p className="text-[#FBFAF7] font-playfair text-5xl lg:text-6xl"> {slug} </p>
          <p className="text-[#C3C3C2] text-base lg:text-lg w-full md:!w-[90%] 3xl:!w-1/2">
            From polished headshots to soulful lifestyle captures, I craft
            images that do more than just “look good” . They speak volumes.
            Whether for personal branding, professional needs, or intimate
            memories, every photo session is a curated experience.
          </p>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div className="flex flex-wrap gap-y-5 gap-3">
            <Button variant="filled"  text={`Book a ${slug} session`} />
            <Button variant="bordered" size={'medium'}  textColor="text-white" borderVariant="light" text={`See pricing`} />
          </div>
          <span className="hidden lg:flex">
            <Image
              src={rollingImage}
              className="imageRotate"
              alt="rollingImage"
            />
          </span>
        </div>
      </div>
      <div className="pb-28">
        <InfiniteCarousel />
      </div>
      <div className="p-5 lg:p-14 3xl:!px-28">
        <Banner />
      </div>

      <div className="flex flex-col gap-14 justify-center items-center">
        <div className="flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28">
          {/* Package Section */}
          <div>
            <h3 className=" text-5xl lg:text-7xl capitalize ">
              {slug} Packages
            </h3>
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

export default SinglePackages;
