import Image from "next/image";
import React from "react";
import drumImage from "@/assets/svgs/drumImage_dark.svg";
import { Col, Row } from "antd";
import Button from "../button/button";

export const ContactBanner = () => {
  return (
    <section className="bg-[#0E0E0E] border relative border-off-white rounded-3xl p-14 flex flex-col md:flex-row items-start justify-between overflow-hidden">
      {/* Left Text */}
      <div className="max-w-md space-y-5 z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-light-brown leading-tight">
          Couldn’t find a package that suits your event?
        </h2>
        <p className="text-white text-xl">
          Contact me and let’s create a special one for you
        </p>
        <div className="w-1/2">
          <Button variant="filled" widthFull text="Contact me" size="large" />
        </div>
      </div>

      {/* Right Images */}
      <div className="absolute bottom-0 right-14  h-full pt-10">
        <Row gutter={20} className="h-full relative">
          <Col xs={8}>
            <span className="absolute -bottom-3 ">
              <Image src={drumImage}  className="grayscale" alt="drum image" />
            </span>
          </Col>
          <Col xs={8}>
            <div className="flex flex-col gap-4">
              <span>
                <Image src={drumImage} className="grayscale" alt="drum image" />
              </span>
              <span>
                <Image src={drumImage} className="grayscale" alt="drum image" />
              </span>
            </div>
          </Col>
          <Col xs={8}>
            <div className="flex flex-col gap-7 mt-6">
              <span>
                <Image src={drumImage} className="grayscale" alt="drum image" />
              </span>
              <span>
                <Image src={drumImage} className="grayscale" alt="drum image" />
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
