import { Banner } from "@/components/banner/banner";
import Image from "next/image";
import React from "react";
import HS4 from "@/assets/images/HS4.png";

const Gallery = () => {
  const images = [HS4, HS4, HS4, HS4, HS4, HS4, HS4];

  return (
    <div>
      <div className="flex flex-col  gap-14 justify-center items-center mt-32">
        <div className="max-w-[1350px] flex flex-col  gap-14 w-full">
          <div className="galleryBg border-4 border-light-brown w-full flex items-center">
            <div className="my-6 text-white text-8xl flex flex-col gap-5 font-grotesk-regular">
              <p>Weddings</p>
            </div>
          </div>

          <div className="bg-black p-4 rounded-lg max-w-6xl mx-auto">
            <div className="grid grid-cols-3 grid-rows-4 gap-3">
              {/* Top-left */}
              <div className="row-span-1 col-span-1 rounded-lg overflow-hidden">
                <Image
                  src={images[0]}
                  alt="img1"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Center large image */}
              <div className="row-span-2 col-span-2 rounded-lg overflow-hidden">
                <Image
                  src={images[1]}
                  alt="img2"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Top-right */}
              <div className="row-start-1 col-start-3 row-span-1 col-span-1 rounded-lg overflow-hidden">
                <Image
                  src={images[2]}
                  alt="img3"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Right-middle */}
              <div className="row-start-2 col-start-3 row-span-1 col-span-1 rounded-lg overflow-hidden">
                <Image
                  src={images[3]}
                  alt="img4"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Bottom-right */}
              <div className="row-start-3 col-start-3 row-span-1 col-span-1 rounded-lg overflow-hidden">
                <Image
                  src={images[4]}
                  alt="img5"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Bottom-middle-left */}
              <div className="row-start-3 col-start-2 row-span-1 col-span-1 rounded-lg overflow-hidden">
                <Image
                  src={images[5]}
                  alt="img6"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Bottom-left */}
              <div className="row-start-3 col-start-1 row-span-1 col-span-1 rounded-lg overflow-hidden">
                <Image
                  src={images[6]}
                  alt="img7"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Bottom full image (beneath large image) */}
              <div className="row-start-4 col-span-3 rounded-lg overflow-hidden">
                <Image
                  src={images[7]}
                  alt="img8"
                  width={1500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
