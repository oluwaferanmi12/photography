"use client";
import { Col, Row } from "antd";
import Image from "next/image";
import React, { useRef } from "react";
import { motion,  useTransform } from "framer-motion";

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
  imgSrc: string;
}) => {
  const container = useRef(null);
  
  const newScale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center cursor-pointer"
      style={{
        position: "sticky",
        top: "0px",
      }}
    >
      <Row justify={"center"}>
        <Col xs={22} md={18} lg={16}>
          <motion.div
            className="rounded-lg px-8 min-w-full py-10 my-8  min-h-[500px]"
            style={{
              scale: newScale,
              position: "relative",
              top: `calc(-5vh + ${currentIndex * 25}px)`,
            }}
          >
            <Image src={imgSrc} alt="" />
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};
