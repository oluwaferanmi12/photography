"use client";

import Image from "next/image";
import React, { useState } from "react";
import HS4 from "@/assets/images/HS4.png";
import calendar from "@/assets/svgs/calendar_template.svg";
import { Col, Modal, Row } from "antd";
import { ContactFrom } from "@/components/contact-form/contact-form";
import { ContactBanner } from "@/components/banner/contact-banner";
import { Footer } from "@/components/footer/footer";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";
import { ParallaxScrollax } from "@/components/parallax-scrollax-banner/parallax-scrollax";
import { FooterImages } from "@/components/footer-images/footer-images";

const SessionPage = () => {
  const [selectedService, setSelectedService] = useState("");
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const handleReserveSpot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsThankYouModalOpen(true); // Open the thank you modal
  };

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
          <Row gutter={[24, 24]} className="mb-14">
            <Col xs={24} md={12}>
              <span>
                <Image
                  src={calendar}
                  className="w-full lg:w-[90%]"
                  alt="calendar template"
                />
              </span>
            </Col>
            <Col xs={24} md={12}>
              <ContactFrom
                selectedService={selectedService}
                setSelectedService={() => setSelectedService("")}
                onSubmit={handleReserveSpot}
              />
            </Col>
          </Row>

          {/* Next Section */}
          <ContactBanner />
        </div>
      </div>
      <ParallaxScrollax />
      <FooterImages />
      <Footer />
      {/* AFTER FORM FILLING MODAL */}
      <Modal
        open={isThankYouModalOpen}
        onCancel={() => setIsThankYouModalOpen(false)}
        footer={null}
        className="sessionForm_modal"
        closeIcon={null}
        width={600}
        centered
      >
        <div className="py-8 px-10 w-full">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-2">
              <span>
                <Image src={bas_thanks} alt="bas" />
              </span>
              <h3 className="font-playfair text-5xl text-white">
                Thank you for your reservation
              </h3>
            </div>
            <span>
              <Image
                src={rollingImage}
                className="w-28 h-28"
                alt="rollingImage"
              />
            </span>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <p className="text-sm text-light-brown">
              Thank you for reserving a spot with me, I will check my
              availability and respond to your booking in less than 24hrs, If
              confirmed you will receive a payment link and a confirmation email
              from me, Please watch out for your junks and texts.
            </p>
            <div>
              <p className="text-light-brown text-sm">yours sincerely</p>
              <p className="text-[#5A5A50] text-sm font-valentiamo-reg">
                shotbyportable
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SessionPage;
