"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Col, Row } from "antd";
import Image, { StaticImageData } from "next/image";
import sixthImage1 from "@/assets/svgs/gallery-svg/img1.svg";
import sixthImage2 from "@/assets/svgs/gallery-svg/img02.svg";
import sixthImage3 from "@/assets/svgs/gallery-svg/img03.svg";
import sixthImage4 from "@/assets/svgs/gallery-svg/img04.svg";
import sixthImage5 from "@/assets/svgs/gallery-svg/img05.svg";
import sixthImage6 from "@/assets/svgs/gallery-svg/bottom_big.svg";
import sixthImage7 from "@/assets/svgs/gallery-svg/img06.svg";
import sixthImage8 from "@/assets/svgs/gallery-svg/img08.svg";
import sixthImage9 from "@/assets/svgs/gallery-svg/img07.svg";
import sixthImage10 from "@/assets/svgs/gallery-svg/img09.svg";

interface ParallaxImageProps {
  src: StaticImageData;
  alt: string;
  position: { x: number; y: number };
  index: number;
  isVisible: boolean;
}

const ParallaxImage = ({
  src,
  alt,
  position,
  index,
  isVisible,
}: ParallaxImageProps) => {
  const multipliers = [0.03, 0.05, 0.04, 0.06, 0.02, 0.05];
  const multiplier = multipliers[index % multipliers.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        x: position.x * multiplier,
        y: position.y * multiplier,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      }}
      className="cursor-pointer"
      style={{ willChange: "transform" }}
    >
      <Image className="w-full h-auto object-cover" src={src} alt={alt} />
    </motion.div>
  );
};

export const GalleryBox = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imagesVisible, setImagesVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // Container width animation (80% to 100%)
  const containerWidth = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["80%", "100%"]
  );

  // Controls when images start appearing (after container expansion)
  const imageAppearProgress = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const relX = e.clientX - centerX;
    const relY = e.clientY - centerY;

    setCursorPosition({ x: relX, y: relY });
  };

  useEffect(() => {
    const unsubscribe = imageAppearProgress.on("change", (value) => {
      setImagesVisible(value > 0.5);
    });
    return () => unsubscribe();
  }, [imageAppearProgress]);

  return (
    <div ref={scrollRef} className="flex justify-center mt-20 overflow-hidden">
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{ width: containerWidth }}
        className="bg-[#0A0909] px-7 pt-7 overflow-hidden cursor-default"
      >
        <Row gutter={[32, 32]}>
          <Col xs={6}>
            <div className="grid grid-cols-2 gap-4 pb-7 relative">
              <ParallaxImage
                src={sixthImage1}
                alt=""
                position={cursorPosition}
                index={0}
                isVisible={imagesVisible}
              />
              <div></div>
              <div></div>
              <ParallaxImage
                src={sixthImage2}
                alt=""
                position={cursorPosition}
                index={1}
                isVisible={imagesVisible}
              />
              <ParallaxImage
                src={sixthImage3}
                alt=""
                position={cursorPosition}
                index={2}
                isVisible={imagesVisible}
              />
              <div></div>
              <div></div>
              <ParallaxImage
                src={sixthImage4}
                alt=""
                position={cursorPosition}
                index={3}
                isVisible={imagesVisible}
              />
            </div>
          </Col>
          <Col xs={12}>
            <div className="relative h-full flex flex-col justify-center items-center">
              <span className="absolute top-0 h-[80px] max-h-[80px]">
                <ParallaxImage
                  src={sixthImage5}
                  alt=""
                  position={cursorPosition}
                  index={4}
                  isVisible={imagesVisible}
                />
              </span>
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: imagesVisible ? 1 : 0,
                  y: imagesVisible ? 0 : 20,
                }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-4xl -mt-8 lg:text-6xl font-valentiamo-reg text-center text-white">
                  <p>Wherever You Go, I&apos;ll Be</p>
                  <p className="my-3">There to Shoot!</p>
                </div>
              </motion.div>
              <span className="absolute bottom-0 max-h-[250px]">
                <ParallaxImage
                  src={sixthImage6}
                  alt=""
                  position={cursorPosition}
                  index={5}
                  isVisible={imagesVisible}
                />
              </span>
            </div>
            {/* <div className="flex items-center justify-center">
              <span>
                <ParallaxImage 
                  src={sixthImage5} 
                  alt="" 
                  position={cursorPosition} 
                  index={4} 
                  isVisible={imagesVisible}
                />
              </span>
            </div> */}
            {/* <div className="flex justify-center items-end relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: imagesVisible ? 1 : 0,
                  y: imagesVisible ? 0 : 20,
                }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-4xl lg:text-5xl font-valentiamo-reg text-center text-white">
                  <p>Wherever You Go, I&apos;ll Be</p>
                  <p className="my-3">There to Shoot!</p>
                </div>
              </motion.div>
            </div> */}
            {/* <div className="flex justify-center">
              <span className="absolute bottom-0">
                <ParallaxImage
                  src={sixthImage6}
                  alt=""
                  position={cursorPosition}
                  index={5}
                  isVisible={imagesVisible}
                />
              </span>
            </div> */}
          </Col>
          <Col xs={6}>
            <div className="grid grid-cols-2 gap-4 pb-7 relative">
              <div></div>
              <ParallaxImage
                src={sixthImage7}
                alt=""
                position={cursorPosition}
                index={0}
                isVisible={imagesVisible}
              />
              <ParallaxImage
                src={sixthImage8}
                alt=""
                position={cursorPosition}
                index={1}
                isVisible={imagesVisible}
              />
              <div></div>
              <div></div>
              <ParallaxImage
                src={sixthImage9}
                alt=""
                position={cursorPosition}
                index={2}
                isVisible={imagesVisible}
              />
              <ParallaxImage
                src={sixthImage10}
                alt=""
                position={cursorPosition}
                index={3}
                isVisible={imagesVisible}
              />
              <div></div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};
