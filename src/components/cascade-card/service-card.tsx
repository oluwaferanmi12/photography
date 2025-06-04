"use client";
import { Col, Row } from "antd";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/button/button";
import { CreateSlug } from "@/lib/create-slug";

export const ServiceCard = ({
  currentIndex,
  range,
  targetScale,
  progress,
  service,
}: {
  currentIndex: number;
  range: number[];
  targetScale: number;
  progress: any;
  service: {
    id: string;
    title: string;
    image: string;
    description: string;
  };
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
        <Col xs={24} md={18} lg={16}>
          <motion.div
            className="rounded-lg  px-8 min-w-full py-10 my-8  min-h-[500px]"
            style={{
              scale: newScale,
              position: "relative",
              top: `calc(-5vh + ${currentIndex * 25}px)`,
            }}
          >
            <div className="w-full md:min-w-[280px] bg-white lg:min-w-[280px] max-w-[500px] 3xl:w-full  flex-shrink-0 p-4 flex flex-col gap-6 justify-between rounded-3xl shadow-md">
              <span className="">
                <img
                  src={`https://olaitanakinlade.com/${service.image}`}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="rounded-[20px] h-[196px] w-full object-cover"
                />
              </span>
              <div>
                <h3 className="text-4xl font-playfair font-light text-darker-grey">
                  {service.title}
                </h3>
                <p className="font-grotesk-medium text-lg mt-2 text-dark-grey leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div>
                <Button
                  variant="filled"
                  text={service.title}
                  link={`portfolio/${CreateSlug(service.title)}`}
                />
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};
