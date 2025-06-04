"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import headerImg1 from "@/assets/images/home_header/img1.svg";
import headerImg2 from "@/assets/images/home_header/img2.svg";
import headerImg3 from "@/assets/images/home_header/img3.svg";
import headerImg4 from "@/assets/images/home_header/img4.svg";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "antd"; // Or your grid system
import scrollDown from "@/assets/svgs/scroll-down-icon.svg";
import brandLogo from "@/assets/svgs/hero-logo.svg";
import { FadeInAnimate } from "@/animation/reveal/fade-in";
import rollingImage from "@/assets/svgs/rollingImage.svg";

export function ImagesSliderDemo() {
  const images = [
    headerImg1.src,
    headerImg2.src,
    headerImg3.src,
    headerImg4.src,
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll({ target: container });

  // Detect scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  // Detect screen size
  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // Scroll to next section
  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="h-screen hidden lg:block min-h-screen relative top-0 z-[1] transition-all w-full"
        animate={{
          padding: isDesktop && scrolled ? "28px" : "0px",
        }}
        ref={container}
      >
        <motion.div
          className="h-full min-h-full w-full z-50 flex justify-center lg:items-center relative overflow-hidden"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          animate={{
            borderRadius: isDesktop && scrolled ? "32px" : "0px",
            border: isDesktop && scrolled ? "3px solid #d9c9ae" : "0px",
          }}
        >
          {/* Carousel background */}
          <ImagesSlider
            className="absolute inset-0 h-full w-full z-0"
            images={images}
          >
            {/* Children content to overlay on the image slider */}
            <div className="absolute bottom-14 3xl:!bottom-28 w-full  z-50 px-5 lg:px-14  3xl:!px-28 ">
              <div className="flex justify-between items-center">
                <div className="bg-black/30 shadow-md lg:max-w-[500px] rounded-xl py-8 px-5">
                  <span>
                    <Image src={brandLogo} className="" alt="brand_logo" />
                  </span>
                  <div className="mt-5">
                    <p className="text-[#E6EAEE] text-xl font-grotesk-regular">
                      Whether you’re stepping in front of the lens for the first
                      time or your fiftieth, I’ll help you look and feel your
                      absolute best.
                    </p>
                  </div>
                  <motion.div
                    className="flex lg:hidden justify-center items-center mt-24 cursor-pointer"
                    onClick={handleScroll}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <span>
                      <Image src={scrollDown} alt="arrow down" />
                    </span>
                  </motion.div>
                </div>
                {/* Floating Rotating Image */}
                <FadeInAnimate transitionDuration={15}>
                  <Link href="/">
                    <span className="">
                      <Image
                        className="imageRotate h-24 w-24 md:h-auto md:w-auto"
                        src={rollingImage}
                        alt="image"
                      />
                    </span>
                  </Link>
                </FadeInAnimate>
              </div>
            </div>
          </ImagesSlider>
        </motion.div>
      </motion.div>
    </>
  );
}
