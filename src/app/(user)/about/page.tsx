"use client";

import React, { useRef, useState } from "react";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import Image from "next/image";
import short_img from "@/assets/svgs/about_short-img.svg";
import headerImage from "@/assets/svgs/about_img/header_img.svg";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import { Modal } from "antd";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";
import { PlanCards } from "@/components/plans-card/PlanCards";
import { ContactBanner } from "@/components/banner/contact-banner";
import { ContactFrom } from "@/components/contact-form/contact-form";
import circleIcon from "@/assets/svgs/circle-stroke.svg";
import victoria from "@/assets/images/victoria.jpeg";


const About = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isSessionFormModalOpen, setIsSessionFormModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [currentProfileImg, setCurrentProfileImg] = useState(0);

  const images = [headerImage, victoria, headerImage];

  const goToSlide = (index: number) => {
    setCurrentProfileImg(index);
  };


  const handleCancel = () => {
    setIsSessionFormModalOpen(false);
  };

  // Submit form onClick
  const handleReserveSpot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSessionFormModalOpen(false);
    setIsThankYouModalOpen(true); // Open the thank you modal
    // setTimeout(() => {
    //   setIsThankYouModalOpen(false);
    // }, 3000);
  };

  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="px-5 lg:px-14 3xl:!px-28">
          <div className="flex flex-col mt-28 lg:mt-48 gap-8 lg:gap-0 lg:flex-row justify-between w-full lg:items-center">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <h2 className="text-7xl">I Started with Beauty.</h2>
              <div className="flex gap-5 items-center">
                <span>
                  <Image
                    src={short_img}
                    className="rounded-full object-cover w-[150px] h-[80px]"
                    alt="img"
                  />
                </span>
                <h2 className=" italic text-7xl ">Now I Capture It.</h2>
              </div>
            </div>
          </div>
          <div className="py-28">
            <div className="relative">
              {/* Circle Background */}
              <span className="absolute -left-40 top-0 -z-10">
                <Image
                  src={circleIcon}
                  alt="circle-stroke"
                  className="w-[300px] h-[350px] opacity-60"
                />
              </span>

              {/* Main Image */}
              <div className="w-full max-w-sm mx-auto">
                <div className="realtive w-full overflow-hidden rounded-2xl">
                  <Image
                    src={images[currentProfileImg]}
                    alt={`victoria-${currentProfileImg}`}
                    className="w-full relative transition-all duration-300 h-[300px] min-w-[400px] lg:h-[350px] object-cover rounded-2xl"
                  />

                  {/* Dots */}
                  <div className="flex justify-center items-center">
                    <div className="absolute bottom-8 bg-white/25 backdrop-blur-3xl rounded-full p-2 ">
                      <div className="flex justify-center items-center gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 cursor-pointer rounded-full transition-all duration-300 ${
                              currentProfileImg === index
                                ? "bg-black"
                                : "bg-black/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third section */}
          <div className="pb-36 flex flex-col gap-20">
            <div>
              <h3 className="lg:w-[25%] text-6xl lg:text-7xl">Weddings</h3>
              <div className="mt-10">
                <PlanCards />
              </div>
            </div>
            <div>
              <h3 className="lg:w-[25%] text-6xl lg:text-7xl">Birthdays</h3>
              <div className="mt-10">
                <PlanCards />
              </div>
            </div>
            <div>
              <h3 className="lg:w-[25%] text-6xl lg:text-7xl">
                Kids & infants
              </h3>
              <div className="mt-10">
                <PlanCards />
              </div>
            </div>
            <div>
              <h3 className="lg:w-[25%] text-6xl lg:text-7xl">
                Kids & infants
              </h3>
              <div className="mt-10">
                <PlanCards />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-14 3xl:!px-28">
        {/* contact banner */}
        <ContactBanner />
      </div>

      <GalleryBox />
      <Footer />

      {/* MODAL */}
      <Modal
        open={isSessionFormModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="sessionForm_modal"
        closeIcon={null}
        width={800}
        centered
      >
        <ContactFrom
          onSubmit={handleReserveSpot}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </Modal>
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

export default About;
