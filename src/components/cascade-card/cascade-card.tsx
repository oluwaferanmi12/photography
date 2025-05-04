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
}: {
  currentIndex: number;
  range: number[];
  targetScale: number;
  progress: any;
  imgSrc: StaticImageData;
}) => {
  const container = useRef(null);

  const newScale = useTransform(progress, range, [1, targetScale]);

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
            className="rounded-lg  px-6 min-w-full  py-4 my-8 "
            style={{
              scale: newScale,
              position: "relative",
              top: `calc(-5vh + ${currentIndex * 25}px)`,
            }}
          >
            <Image src={imgSrc}  alt="" />
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};
