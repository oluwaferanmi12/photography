"use client";

import React, { useRef } from "react";
import arrowRight from "@/assets/svgs/black-top-arrow.svg";
import globe from "@/assets/svgs/globe-black-bg.svg";
import Image from "next/image";
import { Col, Row } from "antd";
import clientImage1 from "@/assets/images/about_marq/img1.jpg";
import clientImage2 from "@/assets/images/about_marq/img2.jpg";
import clientImage3 from "@/assets/images/about_marq/img3.jpg";
import clientImage4 from "@/assets/images/about_marq/img4.jpg";
import clientImage5 from "@/assets/images/about_marq/img5.jpg";

export const AboutExpectationCard = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="p-5 lg:p-14 rounded-3xl bg-light-brown">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-darker-grey font-playfair text-3xl lg:text-5xl lg:leading-relaxed lg:-tracking-wider">
            What to expect when you
          </p>
          <p className="text-darker-grey font-playfair text-3xl lg:text-5xl lg:leading-relaxed lg:-tracking-wider">
            work with me
          </p>
        </div>
        <span>
          <Image className="hidden lg:block" src={arrowRight} alt="arrow" />
        </span>
      </div>
      <div className="mt-10">
        <Row>
          <Col xs={24} lg={8}>
            <div className="flex flex-col gap-6 justify-center items-center">
              <span>
                <Image src={globe} alt="globe" />
              </span>
              <div className="flex flex-col gap-3">
                <p className="text-off-white font-semibold text-xl text-center">
                  A calm, guided experience
                </p>
                <p className="text-off-white text-lg text-center">
                  Quickly create & train your AI models for various tasks.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="flex flex-col gap-5 justify-center items-center">
              <span>
                <Image src={globe} alt="globe" />
              </span>
              <div className="flex flex-col gap-3">
                <p className="text-off-white font-semibold text-xl text-center">
                  A session that feels effortless
                </p>
                <p className="text-off-white text-lg text-center">
                  Quickly create & train your AI models for various tasks.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="flex flex-col gap-5 justify-center items-center">
              <span>
                <Image src={globe} alt="globe" />
              </span>
              <div className="flex flex-col gap-3">
                <p className="text-off-white font-semibold text-xl text-center">
                  Support with styling
                </p>
                <p className="text-off-white text-lg text-center">
                  Quickly create & train your AI models for various tasks.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* IMAGE SCROLLER */}
      <div>
        <div
          className="scroller newAbout_scroller mt-28"
          ref={scrollerRef}
        >
          <ul className={`scroller__inner`}>
            <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
              <div className="relative w-full shrink-0">
                <Image
                  src={clientImage1}
                  className="h-[350px] w-[600px] object-cover max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
              <div className="relative w-full shrink-0">
                <Image
                  src={clientImage2}
                  className="h-[350px] w-[600px] object-cover max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
              <div className="relative w-full shrink-0">
                <Image
                  src={clientImage3}
                  className="h-[350px] w-[600px] object-cover max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
              <div className="relative w-full shrink-0">
                <Image
                  src={clientImage4}
                  className="h-[350px] w-[600px] object-cover max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
              <div className="relative w-full shrink-0">
                <Image
                  src={clientImage5}
                  className="h-[350px] w-[600px] object-cover max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
              <div className="relative w-full shrink-0">
                <Image
                  src={clientImage1}
                  className="h-[350px] w-[600px] object-cover max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
              <div className="relative w-full shrink-0">
                <Image
                  src={clientImage2}
                  className="h-[350px] w-[600px] object-cover max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
              <div className="relative w-full shrink-0">
                <Image
                  src={clientImage3}
                  className="h-[350px] w-[600px] object-cover max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
              <div className="relative w-full shrink-0">
                <Image
                  src={clientImage4}
                  className="h-[350px] w-[600px] object-cover max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
              <div className="relative w-full shrink-0">
                <Image
                  src={clientImage5}
                  className="h-[350px] w-[600px] object-cover max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
