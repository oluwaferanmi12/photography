"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HS4 from "@/assets/images/HS4.png";
import { PlanCards } from "@/components/plans-card/PlanCards";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import Button from "@/components/button/button";

const SingleGallery = () => {
  const { slug } = useParams();

  const images = ["galleryBg", "galleryBg", "galleryBg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <div className="flex flex-col gap-14 justify-center items-center">
        <div className="flex flex-col gap-28 w-full px-5 lg:p-14 3xl:!p-7">
          {/* Header Section */}
          <div
            className={`${images[currentIndex]} relative border-4 border-light-brown w-full flex items-center transition-all duration-700`}
          >
            <div className="mx-14 text-white flex flex-col gap-5 font-grotesk-regular">
              <p className="capitalize text-6xl lg:text-8xl  ">{slug}</p>
              <p className="text-xl text-white">From polished headshots to soulful lifestyle captures, I craft images that do more than just “look good” . They speak volumes. Whether for personal branding, professional needs, or intimate memories, every photo session is a curated experience.</p>
              <div className="flex gap-5">
                <Button variant="filled" text="Book a wedding session" />
                <Button variant="bordered" text="See pricing" />
              </div>
            </div>

            <span className="absolute right-0 -bottom-10 lg:-bottom-15">
              <Image src={rollingImage} className="imageRotate" alt="img" />
            </span>

            {/* Carousel buttons */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-6 h-1 rounded-full cursor-pointer transition-all duration-300 ${
                    currentIndex === i ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-4">
                <Image
                  src={HS4}
                  className="w-full h-[300px] object-cover rounded-3xl"
                  alt="img"
                />
                <Image
                  src={HS4}
                  className="w-full h-[300px] object-cover rounded-3xl"
                  alt="img"
                />
              </div>
              <div>
                <Image
                  src={HS4}
                  className="w-full h-[624px] object-cover rounded-3xl"
                  alt="img"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Image
                  src={HS4}
                  className="w-full h-[300px] object-cover rounded-3xl"
                  alt="img"
                />
                <Image
                  src={HS4}
                  className="w-full h-[300px] object-cover rounded-3xl"
                  alt="img"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src={HS4}
                className="w-full h-[300px] object-cover rounded-3xl"
                alt="img"
              />
              <Image
                src={HS4}
                className="w-full h-[300px] object-cover rounded-3xl"
                alt="img"
              />
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
