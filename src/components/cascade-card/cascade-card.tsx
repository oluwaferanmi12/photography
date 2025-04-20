"use client";
import { Col, Row } from "antd";
import Image from "next/image";
import React, {  useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

export const MainCard = ({
  currentIndex,
  range,
  targetScale,
  progress,
  showComingSoon = false,
  hideGoTo = false,
  imgSrc,
}: {
  currentIndex: number;
  range: any;
  targetScale: any;
  progress: any;
  showComingSoon?: boolean;
  hideGoTo?: boolean;
  imgSrc: string;
}) => {
  const router = useRouter();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
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
