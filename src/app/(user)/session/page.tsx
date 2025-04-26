"use client";

import Image from "next/image";
import React from "react";
import HS4 from "@/assets/images/HS4.png";
import calendar from "@/assets/svgs/calendar_template.svg";
import { Col, Row } from "antd";
import { ContactFrom } from "@/components/contact-form/contact-form";
import { ContactBanner } from "@/components/banner/contact-banner";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";

const SessionPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="px-5 lg:px-14 3xl:!px-28 flex flex-col gap-14">
          <div className="flex flex-col mt-28 lg:mt-48 gap-8 lg:gap-0 lg:flex-row justify-between w-full lg:items-center">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <h2 className="text-7xl">Book a</h2>
              <div className="flex gap-5 items-center">
                <span>
                  <Image
                    src={HS4}
                    className="rounded-full object-cover w-[150px] h-[80px]"
                    alt="img"
                  />
                </span>
                <h2 className=" italic text-7xl ">session</h2>
              </div>
            </div>
            <div className="lg:w-[70%] text-xl text-light-brown">
              <p>
                From polished headshots to soulful lifestyle captures, I craft
                images that do more than just “look good” . They speak volumes.
                Whether for personal branding, professional needs, or intimate
                memories, every photo session is a curated experience.
              </p>
            </div>
          </div>

          {/* Next Section */}
          <Row className="mb-14">
            <Col xs={24} md={12}>
              <span>
                <Image src={calendar} className="w-[80%]" alt="calendar template" />
              </span>
            </Col>
            <Col xs={24} md={12}>
              <ContactFrom />
            </Col>
          </Row>

          {/* Next Section */}
          <ContactBanner />
        </div>
      </div>
      <GalleryBox />
      <Footer />
    </div>
  );
};

export default SessionPage;
