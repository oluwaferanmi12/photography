"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Col, Row } from "antd";
import Image from "next/image";
import sixthImage1 from "@/assets/images/sixth-section-image1.png";
import sixthImage2 from "@/assets/images/sixth-section-image2.png";
import sixthImage3 from "@/assets/images/sixth-section-image3.png";
import sixthImage4 from "@/assets/images/sixth-section-image3.png";
import sixthImage5 from "@/assets/images/sixth-section-image5.png";
import sixthImage6 from "@/assets/images/sixth-section-image6.png";

const HoverEffectImage = ({ src, alt }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: (clientX - window.innerWidth / 2) * 0.05, y: (clientY - window.innerHeight / 2) * 0.05 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="cursor-pointer"
    >
      <Image className="w-full object-cover" src={src} alt={alt} />
    </motion.div>
  );
};

export const GalleryBox = () => {
  return (
    <div className="px-7 pt-7 my-20 bg-[#0A0909]">
      <Row justify="center" gutter={[32, 32]}>
        <Col xs={6}>
          <div className="grid grid-cols-2 gap-4 pb-7 relative">
            <HoverEffectImage src={sixthImage1} alt="" />
            <div></div>
            <div></div>
            <HoverEffectImage src={sixthImage2} alt="" />
            <HoverEffectImage src={sixthImage3} alt="" />
            <div></div>
            <div></div>
            <HoverEffectImage src={sixthImage4} alt="" />
          </div>
        </Col>
        <Col xs={12} className="relative">
          <div className="flex items-center justify-center">
            <span>
              <HoverEffectImage src={sixthImage5} alt="" />
            </span>
          </div>
          <div className="flex justify-center items-end xl:mt-10">
            <div>
              <div className="text-4xl lg:text-5xl font-valentiamo-reg text-center text-white">
                <p>Wherever You Go, I’ll Be</p>
                <p className="my-3">There to Shoot!</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="absolute bottom-0">
              <HoverEffectImage src={sixthImage6} alt="" />
            </span>
          </div>
        </Col>
        <Col xs={6}>
          <div className="grid grid-cols-2 gap-4 pb-7 relative">
            <div></div>
            <HoverEffectImage src={sixthImage1} alt="" />
            <HoverEffectImage src={sixthImage2} alt="" />
            <div></div>
            <div></div>
            <HoverEffectImage src={sixthImage3} alt="" />
            <HoverEffectImage src={sixthImage4} alt="" />
            <div></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
