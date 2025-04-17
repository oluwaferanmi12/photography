import Image from "next/image";
import React from "react";
import HS4 from "@/assets/images/HS4.png";
import { PlanCards } from "@/components/plans-card/PlanCards";

const Gallery = () => {

  return (
    <div>
      <div className="flex flex-col gap-14 justify-center items-center mt-32">
        <div className="max-w-[1350px] flex flex-col  gap-14 w-full p-14">
          <div className="galleryBg border-4 border-light-brown w-full flex items-center">
            <div className="my-6 text-white text-8xl flex flex-col gap-5 font-grotesk-regular">
              <p>Weddings</p>
            </div>
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
            <PlanCards />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
