"use client";

import { useState } from "react";
import { Row, Col } from "antd";
import Image, { StaticImageData } from "next/image";
import image2 from "@/assets/svgs/home-image-2.svg";
import image3 from "@/assets/svgs/home-image-3.svg";
import image4 from "@/assets/svgs/home-image-4.svg";
import image5 from "@/assets/svgs/home-image-5.svg";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import briefIcon from "@/assets/svgs/briefcaseIcon.svg";
import humerCertified from "@/assets/svgs/humer-certified.svg";
import circleIcon from "@/assets/svgs/circle-stroke.svg";
import bgImage1 from "@/assets/images/portfolioBig1.png";
import bgImage2 from "@/assets/images/about-secondImg--cropped.png";
import bgImage3 from "@/assets/images/homeHeaderImage--cropped.jpeg";
import bgImage4 from "@/assets/images/about-page-img1.png";
import bgImage5 from "@/assets/images/catalogue-header.jpeg";
import HS4 from "@/assets/images/HS4.png";
import HS1 from "@/assets/images/HS1.png";
import HS6 from "@/assets/images/HS6.png";
import victoria from "@/assets/images/victoria.jpeg";
import { Footer } from "@/components/footer/footer";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import ImageMasonry from "@/components/imageMasonry/imageMasonry";
import Button from "@/components/button/button";
import { Banner } from "@/components/banner/banner";
import { ServiceWrapperCard } from "@/components/services/ServiceWrapperCard";

export default function Home() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const [currentBg, setCurrentBg] = useState(bgImage3);

  // Listen for scroll changes and update state
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10); // Apply padding on first scroll
  });

  // CAROUSEL
  // Map thumbnails to background images
  const imageMap = [
    { thumbnail: image5, background: bgImage1 },
    { thumbnail: image2, background: bgImage2 },
    { thumbnail: image3, background: bgImage3 },
    { thumbnail: image4, background: bgImage4 },
    { thumbnail: image5, background: bgImage5 },
  ];

  const handleImageClick = (bgImg: StaticImageData, index: number) => {
    setCurrentBg(bgImg);
    setActiveIndex(index);
  };

  const services = [
    {
      title: "Weddings",
      image: HS4,
      bg: "#EFFBF9",
      description:
        "Elegant and timeless wedding photography that captures the love, joy, and unforgettable moments of your special day.",
      cta: "View Weddings",
    },
    {
      title: "Birthdays",
      image: HS1,
      bg: "#FFF5E5",
      description:
        "Celebrate another trip around the sun with vibrant, fun, and candid shots that showcase the energy and excitement of the moment.",
      cta: "View Birthdays",
    },
    {
      title: "Kids",
      image: HS6,
      bg: "#F5F0FF",
      description:
        "Playful and tender portraits of your little ones — capturing their personalities and milestones as they grow.",
      cta: "View Kids",
    },
    {
      title: "Lifestyle and Others",
      image: HS6,
      bg: "#F0F9FF",
      description:
        "From stylish lifestyle shoots to creative concepts, I bring ideas to life with depth, color, and meaning.",
      cta: "View Lifestyle",
    },
  ];

  return (
    <div>
      <motion.div
        className="h-screen min-h-screen transition-all"
        animate={{
          padding: scrolled ? "28px" : "0px",
        }}
      >
        <motion.div
          className="h-full min-h-full landingBg flex justify-center items-center relative"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          animate={{
            borderRadius: scrolled ? "32px" : "0px",
            border: scrolled ? "2px solid #D9C9AE82" : "none",
          }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${currentBg.src})`,
            backgroundSize: "center",
          }}
        >
          <Row className="w-full px-20">
            <Col xs={22} xl={12}>
              <div>
                <div className="flex items-center gap-2">
                  {imageMap.map((img, index) => (
                    <div
                      key={index}
                      className={`p-1 ${
                        activeIndex === index
                          ? "border-2 border-primary-orange"
                          : "border-2 border-transparent"
                      } rounded-full transition-all`}
                    >
                      <Image
                        src={img.thumbnail}
                        alt=""
                        onClick={() => handleImageClick(img.background, index)}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                        width={50}
                        height={50}
                      />
                    </div>
                  ))}
                </div>
                <div className="my-6 text-white text-8xl flex flex-col gap-5 font-grotesk-regular">
                  <p>Picture Perfect.</p>
                  <p>Shotbyportable.</p>
                </div>
                <div className="mt-12">
                  <p className="text-[#E6EAEE] text-xl font-grotesk-regular w-3/4 min[1400px]-[60%]">
                    Hey, I’m Victoria Ajala. A luxury lifestyle and portrait
                    photographer based in Barrie, Ontario. I tell compelling
                    visual stories through every frame.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <span className="absolute right-14 bottom-14 3xl:right-28 3xl:bottom-28">
            <Image src={rollingImage} alt="img" />
          </span>
        </motion.div>
      </motion.div>

      <div className="flex flex-col gap-28 pt-28 pb-56">
        {/* Second section  */}
        <div className="flex flex-col gap-10 justify-center items-center">
          <h3 className="text-center w-1/2  leading-20 text-white text-8xl ">
            Photography that leaves a lasting impression
          </h3>
          <p className="text-center text-light-brown text-lg w-1/2 3xl:w-[30%]">
            From polished headshots to soulful lifestyle captures, I craft
            images that do more than just “look good” . They speak volumes.
            Whether for personal branding, professional needs, or intimate
            memories, every photo session is a curated experience.
          </p>
        </div>

        {/* THIRD SECTION */}
        <div>
          <ImageMasonry />
        </div>

        {/* FOURTH SECTION */}
        <div className="flex items-center justify-between pl-14 3xl:pl-28 py-10  mx-auto w-full">
          {/* Title */}
          <h2 className="text-6xl font-grotesk-bold font-semibold text-white whitespace-nowrap pr-6">
            My Services
          </h2>

          {/* Scrollable cards */}
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 min-w-max pl-6 pr-0">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="min-w-[260px] md:min-w-[280px] lg:min-w-[280px] max-w-[500px] 3xl:w-full  flex-shrink-0 p-4 flex flex-col gap-6 justify-between rounded-3xl shadow-md"
                  style={{ backgroundColor: service.bg }}
                >
                  <span className="">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="rounded-full h-[130px] w-[80%] object-cover"
                    />
                  </span>
                  <div>
                    <h3 className="text-4xl font-playfair font-light text-darker-grey">{service.title}</h3>
                    <p className="font-grotesk-medium text-lg mt-2 text-dark-grey leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <Button variant="filled" text={service.cta} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FIFTH SECTION */}
        <Banner />

        {/* SIXTH SECTION */}
        <div className="flex flex-col gap-28 justify-center items-center">
          <div className="text-white relative flex flex-col gap-10 justify-center items-center text-center">
            <h2 className="text-6xl">Meet Victoria</h2>

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
              <Image
                src={victoria}
                className="w-[450px] h-[350px] rounded-2xl object-cover relative z-10"
                alt="victoria"
              />
            </div>

            <p className="w-[450px] text-light-brown text-2xl">
              From polished headshots to soulful lifestyle captures, I craft
              images that do more than just “look good”. They speak volumes.
              Whether for personal branding, professional needs, or intimate
              memories, every photo session is a curated experience.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 px-10">
              <div className="flex flex-col gap-4 w-full ">
                <ServiceWrapperCard
                  text="5 years+ Experience"
                  topArea={{ icon: briefIcon }}
                />
                <ServiceWrapperCard text="300+ Clientele"
                 topArea={{btn: true }} />
              </div>
              {/*  */}
              <div className="flex flex-col gap-4 w-full mt-6 ">
                <ServiceWrapperCard text="100% Satisfaction"  topArea={{ icon: briefIcon }} />
                <ServiceWrapperCard text="Humber certified!" topArea={{ icon: humerCertified }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Section */}
      <GalleryBox />
      <Footer />
    </div>
  );
}
