import Image from "next/image";
import React from "react";
import HS4 from "@/assets/images/HS4.png";
import { PlanCards } from "@/components/plans-card/PlanCards";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import rollingImage from "@/assets/svgs/rollingImage.svg";


const Gallery = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 justify-center items-center mt-28 lg:mt-32">
        <div className=" flex flex-col gap-28 w-full px-5 lg:p-14 3xl:p-28">
          <div className="galleryBg relative border-4 border-light-brown w-full flex items-center">
            <div className="mx-14 text-white text-6xl lg:text-8xl flex flex-col gap-5 font-grotesk-regular">
              <p>Weddings</p>
            </div>
            <span className="absolute right-0 -bottom-10 lg:-right-10 lg:-bottom-10 ">
            <Image src={rollingImage} alt="img" />
          </span>
          </div>

          <div className="space-y-4">
            {/* Top Section */}
            <div className="grid grid-cols-3 gap-4">
              {/* Left column (2 small stacked images) */}
              <div className="flex flex-col gap-4">
                <span>
                  <Image
                    src={HS4}
                    className="w-full h-[300px] object-cover rounded-3xl"
                    alt="img"
                  />
                </span>
                <span>
                  <Image
                    src={HS4}
                    className="w-full h-[300px] object-cover rounded-3xl"
                    alt="img"
                  />
                </span>
              </div>

              {/* Middle column (1 tall image) */}
              <div>
                <Image
                  src={HS4}
                  className="w-full h-[624px] object-cover rounded-3xl"
                  alt="img"
                />
              </div>

              {/* Right column (2 small stacked images) */}
              <div className="flex flex-col gap-4">
                <span>
                  <Image
                    src={HS4}
                    className="w-full h-[300px] object-cover rounded-3xl"
                    alt="img"
                  />
                </span>
                <span>
                  <Image
                    src={HS4}
                    className="w-full h-[300px] object-cover rounded-3xl"
                    alt="img"
                  />
                </span>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  src={HS4}
                  className="w-full h-[300px] object-cover rounded-3xl"
                  alt="img"
                />
              </div>
              <div>
                <Image
                  src={HS4}
                  className="w-full h-[300px] object-cover rounded-3xl"
                  alt="img"
                />
              </div>
            </div>
          </div>

          {/* SECOND SECTION */}
          <div>
            <h3 className="w-[25%] text-7xl">Wedding Packages</h3>
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

export default Gallery;
