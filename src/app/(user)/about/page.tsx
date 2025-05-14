"use client";

import React, { useEffect, useRef, useState } from "react";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import Image from "next/image";
import short_img from "@/assets/svgs/about_short-img.svg";
import headerImage from "../../../../public/header_img.jpg";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import { Col, Modal, Row } from "antd";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";
import { ContactBanner } from "@/components/banner/contact-banner";
import { ContactFrom } from "@/components/contact-form/contact-form";
import victoria from "../../../../public/victoria.jpeg";
import clientImage1 from "@/assets/images/about_marq/img1.jpg";
import clientImage2 from "@/assets/images/about_marq/img2.jpg";
import clientImage3 from "@/assets/images/about_marq/img3.jpg";
import clientImage4 from "@/assets/images/about_marq/img4.jpg";
import clientImage5 from "@/assets/images/about_marq/img5.jpg";
import expect_cloud from "@/assets/svgs/about_img/expect_cloud.svg";
import expect_camera from "@/assets/svgs/about_img/expect_camera.svg";
import expect_tree from "@/assets/svgs/about_img/expect_tree.svg";
import expect_spread from "@/assets/svgs/about_img/expect_spread.svg";
import { Banner } from "@/components/banner/banner";
import { FallingTag } from "@/components/animattions/animation-fall/falling-card";

const expectationData = [
  {
    icon: expect_cloud,
    title: "A calm, guided experience",
    description:
      "The most iconic sight of the festival is the sea of pink blossoms that blanket the trees.",
  },
  {
    icon: expect_cloud,
    title: "A personal connection",
    description:
      "The most iconic sight of the festival is the sea of pink blossoms that blanket the trees.",
  },
  {
    icon: expect_camera,
    title: "Support with styling",
    description:
      "Experiment with different angles and perspectives to capture the beauty of the cherry blossoms in a unique way.",
  },
  {
    icon: expect_tree,
    title: "A session that feels effortless",
    description:
      "One of the most popular activities during Hanami is to have a picnic under the cherry blossom trees.",
  },
  {
    icon: expect_tree,
    title: "Thoughtfully edited images",
    description:
      "The most iconic sight of the festival is the sea of pink blossoms that blanket the trees.",
  },
  {
    icon: expect_spread,
    title: "A story that stays with you",
    description:
      "While the cherry blossoms are undoubtedly the stars of the show, don't forget to capture the people who come to admire them.",
  },
];

const About = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isSessionFormModalOpen, setIsSessionFormModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [currentProfileImg, setCurrentProfileImg] = useState(0);

  const images = [headerImage, victoria, headerImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfileImg((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

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
    setIsThankYouModalOpen(true);
  };

  const fallingTags = [
    "Amazing Wife & Mom",
    "Truth Capturer",
    "Storyteller",
    "Memory Keeper",
    "Detail Lover",
    "Visual Poet",
  ];

  console.log("Image pathhhhhhhhhh:", images[currentProfileImg]);

  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="">
          <div className="px-5 lg:px-14 3xl:!px-28 flex  flex-col mt-28 lg:mt-48 gap-8 lg:gap-0 lg:flex-row justify-between w-full lg:items-center">
            <div className="flex flex-col gap-2 lg:gap-8 lg:w-1/2">
              <h2 className="text-4xl lg:text-7xl">I Started with Beauty.</h2>
              <div className="flex gap-5 items-center">
                <span>
                  <Image
                    src={short_img}
                    className="rounded-full object-cover w-[150px] h-[80px]"
                    alt="img"
                  />
                </span>
                <h2 className=" italic text-3xl lg:text-7xl ">
                  Now I Capture It.
                </h2>
              </div>
            </div>
          </div>
          <div className="pb-28 pt-48 px-5 lg:px-14 3xl:!px-28">
            <div className="w-full relative">
              {/* Falling Tags */}
              <div className="w-full flex justify-center gap-4 flex-wrap relative">
                {fallingTags.map((text, i) => (
                  <FallingTag key={i} text={text} index={i} />
                ))}
              </div>
              {/* Image + Falling Tags */}
              <div className="relative w-full overflow-hidden rounded-2xl">
                {/* Background Image Div */}
                <div
                  style={{
                    backgroundImage: `url(${images[currentProfileImg].src})`, // Note the .src
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    border: "2px solid red",
                  }}
                  className="w-full h-[500px] lg:h-[500px] bg-cover bg-center rounded-2xl"
                  aria-label={`victoria-${currentProfileImg}`}
                />

                {/* Dots */}
                <div className="flex justify-center items-center">
                  <div className="absolute bottom-8 bg-white/25 backdrop-blur-3xl rounded-full p-2">
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
            {/*  */}
            <div className="flex flex-col lg:flex-row relative w-full items-start mt-14">
              <div className="lg:w-1/2">
                <p className="w-full text-5xl font-bold text-neutral-light">
                  My Journey
                </p>
              </div>
              <div className="lg:w-1/2 text-[#C1BFBF] text-2xl">
                <p>
                  My journey began as a makeup artist, where I mastered the art
                  of enhancing beauty and paying attention to the smallest
                  details. But I didn’t just want to prepare moments. I wanted
                  to hold onto them. To freeze emotion in its purest form. That
                  desire to do more led me to pick up a camera and everything
                  changed. What started as passion became purpose. As a graduate
                  of Humber College in Photography with over five years of
                  experience, I’ve transformed instinct into craft. My approach
                  blends creativity, emotion, and technical precision to tell
                  stories that go beyond the surface. Every session is
                  intentional. Every frame is a reflection of something real. I
                  don’t just take photos. I create powerful visual experiences.
                  Because beauty deserves to be seen. And moments deserve to be
                  remembered.
                </p>
              </div>
            </div>
          </div>

          {/* common spacing */}
          <div className="flex flex-col gap-32">
            {/*  */}
            <div className="scroller about-scroller !py-28" ref={scrollerRef}>
              <ul className={`scroller__inner`}>
                <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
                  <div className="relative w-[100%] h-[500px] shrink-0">
                    <Image
                      src={clientImage1}
                      className="h-[350px] w-[500px] object-cover max-h-[350px]"
                      alt="owner_img"
                    />
                  </div>
                </li>
                <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
                  <div className="relative w-[100%] h-[500px] shrink-0">
                    <Image
                      src={clientImage2}
                      className="h-[350px] w-[500px] object-cover max-h-[350px]"
                      alt="owner_img"
                    />
                  </div>
                </li>
                <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
                  <div className="relative w-[100%] h-[500px] shrink-0">
                    <Image
                      src={clientImage3}
                      className="h-[350px] w-[500px] object-cover max-h-[350px]"
                      alt="owner_img"
                    />
                  </div>
                </li>
                <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
                  <div className="relative w-[100%] h-[500px] shrink-0">
                    <Image
                      src={clientImage4}
                      className="h-[350px] w-[500px] object-cover max-h-[350px]"
                      alt="owner_img"
                    />
                  </div>
                </li>
                <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
                  <div className="relative w-[100%] h-[500px] shrink-0">
                    <Image
                      src={clientImage5}
                      className="h-[350px] w-[500px] object-cover max-h-[350px]"
                      alt="owner_img"
                    />
                  </div>
                </li>
                <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
                  <div className="relative w-[100%] h-[500px] shrink-0">
                    <Image
                      src={clientImage1}
                      className="h-[350px] w-[500px] object-cover max-h-[350px]"
                      alt="owner_img"
                    />
                  </div>
                </li>
                <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
                  <div className="relative w-[100%] h-[500px] shrink-0">
                    <Image
                      src={clientImage2}
                      className="h-[350px] w-[500px] object-cover max-h-[350px]"
                      alt="owner_img"
                    />
                  </div>
                </li>
                <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
                  <div className="relative w-[100%] h-[500px] shrink-0">
                    <Image
                      src={clientImage3}
                      className="h-[350px] w-[500px] object-cover max-h-[350px]"
                      alt="owner_img"
                    />
                  </div>
                </li>
                <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
                  <div className="relative w-[100%] h-[500px] shrink-0">
                    <Image
                      src={clientImage4}
                      className="h-[350px] w-[500px] object-cover max-h-[350px]"
                      alt="owner_img"
                    />
                  </div>
                </li>
                <li className="rounded-3xl w-full cursor-pointer flex gap-3 items-center ">
                  <div className="relative w-[100%] h-[500px] shrink-0">
                    <Image
                      src={clientImage5}
                      className="h-[350px] w-[500px] object-cover max-h-[350px]"
                      alt="owner_img"
                    />
                  </div>
                </li>
              </ul>
            </div>

            {/*  */}
            <div className="flex flex-col lg:flex-row relative w-full items-start px-5 lg:px-14 3xl:!px-28">
              <div className="lg:w-1/2">
                <p className="w-full text-5xl font-bold text-neutral-light">
                  My Philosophy
                </p>
              </div>
              <div className="lg:w-1/2 text-[#C1BFBF] text-2xl">
                <p>
                  I believe photography is not about perfection but presence — a
                  quiet way of honoring the moments that shape us with intention
                  empathy and timeless beauty.
                </p>
              </div>
            </div>

            {/*  */}
            <div className="px-5 lg:px-14 3xl:!px-28">
              <div>
                <h3 className="text-neutral-light font-medium text-3xl">
                  What to expect:
                </h3>
              </div>
              <div className="mt-8">
                <Row gutter={[32, 96]}>
                  {expectationData.map((item, index) => (
                    <Col xs={12} lg={8} key={index}>
                      <div className="flex flex-col gap-4">
                        <div>
                          <Image src={item.icon} alt="icon" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-neutral-light text-base">
                            {" "}
                            {item.title}{" "}
                          </h3>
                          <p className="text-base text-[#666666]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
            <div className="px-5 lg:px-14 3xl:!px-28">
              <Banner />
            </div>
            <div className="px-5 lg:px-14 3xl:!px-28">
              <ContactBanner />
            </div>
            {/*  */}
          </div>
        </div>
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
