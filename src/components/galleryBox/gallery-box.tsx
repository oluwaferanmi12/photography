"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Col, Row } from "antd";
import Image from "next/image";
import sixthImage1 from "@/assets/images/sixth-section-image1.png";
import sixthImage2 from "@/assets/images/sixth-section-image2.png";
import sixthImage3 from "@/assets/images/sixth-section-image3.png";
import sixthImage4 from "@/assets/images/sixth-section-image3.png";
import sixthImage5 from "@/assets/images/sixth-section-image5.png";
import sixthImage6 from "@/assets/images/sixth-section-image6.png";

const ParallaxImage = ({ src, alt, position, index }) => {
  // Different multipliers for each image to create parallax effect
  const multipliers = [0.03, 0.05, 0.04, 0.06, 0.02, 0.05];
  const multiplier = multipliers[index % multipliers.length];
  
  return (
    <motion.div
      animate={{
        x: position.x * multiplier,
        y: position.y * multiplier
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="cursor-pointer"
      style={{ willChange: 'transform' }}
    >
      <Image className="w-full object-cover" src={src} alt={alt} />
    </motion.div>
  );
};

export const GalleryBox = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;
    
    // Calculate position relative to container center
    const relX = e.clientX - centerX;
    const relY = e.clientY - centerY;
    
    setCursorPosition({ x: relX, y: relY });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="px-7 pt-7 my-20 bg-[#0A0909] overflow-hidden cursor-default"
    >
      <Row justify="center" gutter={[32, 32]}>
        <Col xs={6}>
          <div className="grid grid-cols-2 gap-4 pb-7 relative">
            <ParallaxImage src={sixthImage1} alt="" position={cursorPosition} index={0} />
            <div></div>
            <div></div>
            <ParallaxImage src={sixthImage2} alt="" position={cursorPosition} index={1} />
            <ParallaxImage src={sixthImage3} alt="" position={cursorPosition} index={2} />
            <div></div>
            <div></div>
            <ParallaxImage src={sixthImage4} alt="" position={cursorPosition} index={3} />
          </div>
        </Col>
        <Col xs={12} className="relative">
          <div className="flex items-center justify-center">
            <span>
              <ParallaxImage src={sixthImage5} alt="" position={cursorPosition} index={4} />
            </span>
          </div>
          <div className="flex justify-center items-end xl:mt-10 relative z-10">
            <div>
              <div className="text-4xl lg:text-5xl font-valentiamo-reg text-center text-white">
                <p>Wherever You Go, I'll Be</p>
                <p className="my-3">There to Shoot!</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="absolute bottom-0">
              <ParallaxImage src={sixthImage6} alt="" position={cursorPosition} index={5} />
            </span>
          </div>
        </Col>
        <Col xs={6}>
          <div className="grid grid-cols-2 gap-4 pb-7 relative">
            <div></div>
            <ParallaxImage src={sixthImage1} alt="" position={cursorPosition} index={0} />
            <ParallaxImage src={sixthImage2} alt="" position={cursorPosition} index={1} />
            <div></div>
            <div></div>
            <ParallaxImage src={sixthImage3} alt="" position={cursorPosition} index={2} />
            <ParallaxImage src={sixthImage4} alt="" position={cursorPosition} index={3} />
            <div></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};