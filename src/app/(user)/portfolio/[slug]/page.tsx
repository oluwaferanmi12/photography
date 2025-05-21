"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HS1 from "@/assets/images/wedding/card1.jpg";
import HS2 from "@/assets/images/wedding/card2.jpg";
import HS3 from "@/assets/images/wedding/card3.jpg";
import HS4 from "@/assets/images/wedding/card4.jpg";
import HS5 from "@/assets/images/wedding/card5.jpg";
import HS6 from "@/assets/images/wedding/card6.jpg";
import HS7 from "@/assets/images/wedding/card7.jpg";
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

export default SinglePackages;
