"use client";

import React, { useEffect, useRef } from "react";
import rightArrow from "@/assets/svgs/black-top-arrow.svg";
import Image from "next/image";
import Link from "next/link";



export const ParallaxScrollax = () => {

  return (
    // <div className="parallaxBg w-full z-10 flex items-center justify-center p-5 lg:p-24">
    //   <div className="w-full flex flex-col gap-3 items-center justify-center">
    //     <p className="text-white text-center font-semibold text-5xl uppercase">
    //       Moments fade.
    //     </p>
    //     <p className="text-white text-center font-semibold text-5xl uppercase">
    //       Memories don’t.
    //     </p>
    //     <p className="text-[#C5B79E] text-xl text-center lg:text-left font-semibold uppercase">
    //       Let’s create images you’ll love — with care every step of the way.
    //     </p>
    //     <div className="mt-8">
    //       <Link href="/session">
    //         <button className="group relative overflow-hidden flex justify-center text-[#222222] text-lg gap-3 items-center bg-white cursor-pointer rounded-full py-3 lg:py-5 px-8 z-10">
    //           <span className="absolute left-0 top-0 h-full w-0 bg-light-brown transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
    //           <span className="relative z-10 flex items-center gap-3 group-hover:text-black">
    //             Book a session now
    //             <Image className="w-3 h-3" src={rightArrow} alt="icon" />
    //           </span>
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="parallaxBg w-full">
      <div className="parallax-content w-full z-10 flex items-center justify-center p-5 lg:p-24">
        <div className="w-full flex flex-col gap-3 items-center justify-center">
          <p className="text-white text-center font-semibold text-5xl uppercase">
            Moments fade.
          </p>
          <p className="text-white text-center font-semibold text-5xl uppercase">
            Memories don’t.
          </p>
          <p className="text-[#C5B79E] text-xl text-center lg:text-left font-semibold uppercase">
            Let’s create images you’ll love — with care every step of the way.
          </p>
          <div className="mt-8">
            <Link href="/session">
              <button className="group relative overflow-hidden flex justify-center text-[#222222] text-lg gap-3 items-center bg-white cursor-pointer rounded-full py-3 lg:py-5 px-8 z-10">
                <span className="absolute left-0 top-0 h-full w-0 bg-light-brown transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
                <span className="relative z-10 flex items-center gap-3 group-hover:text-black">
                  Book a session now
                  <Image className="w-3 h-3" src={rightArrow} alt="icon" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
