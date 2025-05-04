"use client";
import { Col, Row } from "antd";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { motion, useTransform } from "framer-motion";

export const MainCard = ({
  currentIndex,
  range,
  targetScale,
  progress,
  imgSrc,
  skewDeg,
}: {
  currentIndex: number;
  range: number[];
  targetScale: number;
  progress: any;
  imgSrc: StaticImageData;
  skewDeg: number;
}) => {
  const container = useRef(null);

  const newScale = useTransform(progress, range, [1, targetScale]);

  const transformValue = useTransform(
    progress,
    range,
    [
      `scale(1) skewX(${skewDeg}deg)`,
      `scale(${targetScale}) skewX(${skewDeg}deg)`,
    ]
  );
  

  return (
    <div
      ref={container}
      className="h-screen overflow-hidden flex items-center justify-center cursor-pointer"
      style={{
        position: "sticky",
        top: "0px",
      }}
    >
      <Row justify={"center"}>
        <Col xs={22} md={18} lg={16}>
          <motion.div
            className="rounded-lg  px-6 min-w-full bg-white py-4 my-8 "
            style={{
              scale: newScale,
              position: "relative",
              top: `calc(-5vh + ${currentIndex * 25}px)`,
              transform: transformValue,
            }}
          >
             {/* Prevent image from inheriting skew */}
             <motion.div style={{ skewX: "0deg" }}>
              <Image
                src={imgSrc}
                className="max-h-[300px] object-cover"
                alt=""
              />
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};
