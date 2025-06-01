import React from "react";
import rightArrow from "@/assets/svgs/black-top-arrow.svg";
import Image from "next/image";

export const ParallaxScrollax = () => {
  return (
    <div className="parallaxBg w-full flex items-center justify-center p-5 lg:p-24">
      <div className="w-full flex flex-col gap-3 items-center justify-center">
        <p className="text-white font-semibold text-5xl uppercase">
          Moments fade.
        </p>
        <p className="text-white font-semibold text-5xl uppercase">
          Memories don’t.
        </p>
        <p className="text-[#C5B79E] text-xl text-center lg:text-left font-semibold uppercase">
          Let’s create images you’ll love — with care every step of the way.
        </p>
        <div className="mt-8">
          <button className="flex justify-center text-[#222222] text-lg gap-3 items-center bg-white rounded-full py-5 px-8">
            Book a session now
            <span>
              <Image className="w-3 h-3" src={rightArrow} alt="icon" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
