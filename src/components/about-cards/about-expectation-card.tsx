"use client";

import React, { useRef } from "react";
import arrowRight from "@/assets/svgs/black-top-arrow.svg";
import globe from "@/assets/svgs/globe-black-bg.svg";
import Image from "next/image";
import { Col, Row } from "antd";
import clientImage1 from "@/assets/svgs/about-expect1.svg";
import clientImage2 from "@/assets/svgs/about-expect2.svg";
import clientImage3 from "@/assets/svgs/about-expect3.svg";
import clientImage4 from "@/assets/images/victoriaPics/victoria.jpeg";


import Link from "next/link";

export const AboutExpectationCard = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="p-5 lg:p-14 rounded-3xl bg-light-brown">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-darker-grey font-playfair text-3xl lg:text-5xl lg:w-[75%] lg:leading-relaxed lg:-tracking-wider">
            What to expect when you work with me
          </p>
          {/* <p className="text-darker-grey font-playfair text-3xl lg:text-5xl lg:leading-relaxed lg:-tracking-wider">
            work with me
          </p> */}
        </div>
        <Link href={'/portfolio'}>
          <Image className="hidden lg:block" src={arrowRight} alt="arrow" />
        </Link>
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
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage1}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage2}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage3}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage4}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage1}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage2}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage3}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage4}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage1}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage2}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage3}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage4}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage1}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage2}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage3}
                  className="h-[350px] w-full object-contain max-h-[350px]"
                  alt="owner_img"
                />
              </div>
            </li>
            <li className="rounded-3xl cursor-pointer flex gap-3 items-center ">
              <div className="relative">
                <Image
                  src={clientImage4}
                  className="h-[350px] w-full object-contain max-h-[350px]"
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
