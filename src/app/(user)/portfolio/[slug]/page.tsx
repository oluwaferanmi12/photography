"use client";

import React from "react";
import { useParams } from "next/navigation";
import { PlanCards } from "@/components/plans-card/PlanCards";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import InfiniteCarousel from "@/components/unending-carousel/unending-carousel";

const SinglePackages = () => {
  const { slug } = useParams();

  return (
    <div>
      
      <div className="pt-20 pb-28">
        <InfiniteCarousel />
      </div>
      <div className="flex flex-col gap-14 justify-center items-center">
        <div className="flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28">
          {/* Package Section */}
          <div>
            <h3 className=" text-5xl lg:text-7xl capitalize ">{slug} Packages</h3>
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
