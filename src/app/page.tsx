"use client";

import { useEffect, useMemo, useState } from "react";
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
import victoria from "@/assets/images/victoria.jpeg";
import victoria2 from "@/assets/images/about-secondImg.png";
import victoria3 from "@/assets/images/landingImage.jpeg";
import { Footer } from "@/components/footer/footer";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import ImageMasonry from "@/components/imageMasonry/imageMasonry";
import { Banner } from "@/components/banner/banner";
import { ServiceWrapperCard } from "@/components/services/ServiceWrapperCard";
import { FourthSectionScroll } from "@/components/scrollingSection/home-fourth-section";
import Link from "next/link";
import { FadeInAnimate } from "@/animation/reveal/fade-in";
import { HomeNav } from "@/components/nav/home-nav";
import bg_image from "@/assets/images/body_background.png";
import { AnimatedCard } from "@/animation/animated-card";








export default function Home() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const [currentBg, setCurrentBg] = useState(bgImage3);
  const [currentProfileImg, setCurrentProfileImg] = useState(0);

  // Memoize imageMap to prevent unnecessary recreations
  const imageMap = useMemo(
    () => [
      { thumbnail: image5, background: bgImage1 },
      { thumbnail: image2, background: bgImage2 },
      { thumbnail: image3, background: bgImage3 },
      { thumbnail: image4, background: bgImage4 },
      { thumbnail: image5, background: bgImage5 },
    ],
    []
  );

  // Auto-rotate background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % imageMap.length;
      setCurrentBg(imageMap[nextIndex].background);
      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, imageMap]);

  // Listen for scroll changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  const handleImageClick = (bgImg: StaticImageData, index: number) => {
    setCurrentBg(bgImg);
    setActiveIndex(index);
  };

  const images = [victoria, victoria2, victoria3];

  const goToSlide = (index: number) => {
    setCurrentProfileImg(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfileImg((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-[150px] z-[-1] pointer-events-none">
        <Image
          src={bg_image}
          alt="Top Background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <HomeNav />
      <motion.div
        className="h-screen min-h-screen relative top-0 z-50 transition-all w-full"
        animate={{
          padding: scrolled
            ? window.innerWidth < 1024
              ? "5px"
              : "28px"
            : "0px",
        }}
      >
        <motion.div
          className="h-full min-h-full w-full z-50 landingBg flex justify-center items-center relative"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          animate={{
            borderRadius: scrolled ? "32px" : "0px",
            border: scrolled ? "2px solid #D9C9AE82" : "none",
          }}
        >
          <div
            className={`absolute inset-0 z-0 `}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${currentBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(90%) contrast(1.0)",
              transition: "opacity 500ms ease-in-out",
              borderRadius: scrolled ? "32px" : "0px",
            }}
          />

          {/* Content (unaffected by filter) */}
          <div className="relative z-10 w-full">
            <Row className="w-full px-5 lg:px-20">
              <Col xs={24} xl={12}>
                <div>
                  <div className="flex items-center gap-2">
                    {imageMap.map((img, index) => (
                      <div
                        key={index}
                        className={`p-1 ${
                          activeIndex === index
                            ? "border-2 border-light-brown"
                            : "border-2 border-transparent"
                        } rounded-full transition-all`}
                      >
                        <Image
                          src={img.thumbnail}
                          alt=""
                          onClick={() =>
                            handleImageClick(img.background, index)
                          }
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                          width={65}
                          height={65}
                          style={{ filter: "none" }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="my-6 text-white text-5xl lg:text-8xl flex flex-col gap-5 font-grotesk-regular">
                    <p>Picture Perfect.</p>
                    <p>Shotbyportable.</p>
                  </div>
                  <div className="mt-12">
                    <p className="text-[#E6EAEE] text-xl font-grotesk-regular lg:w-3/4 min[1400px]-[60%]">
                      Hey, I’m Victoria Ajala. A luxury lifestyle and portrait
                      photographer based in Barrie, Ontario. I tell compelling
                      visual stories through every frame.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <FadeInAnimate transitionDuration={15}>
            <Link href="/">
              <span className="absolute right-14 bottom-14 3xl:right-28 3xl:bottom-28">
                <Image className="imageRotate" src={rollingImage} alt="image" />
              </span>
            </Link>
          </FadeInAnimate>
          {/* <span className="absolute right-14 bottom-14 3xl:right-28 3xl:bottom-28">
            <Image src={rollingImage} alt="img" />
          </span> */}
        </motion.div>
      </motion.div>

      <div className="flex flex-col gap-28 pt-28 pb-56 ">
        {/* Second section  */}
        <div className="flex flex-col gap-10 lg:justify-center lg:items-center px-5 lg:px-0">
          <h3 className="lg:text-center w-full lg:w-1/2 lg:leading-20 text-white text-5xl lg:text-8xl ">
            Photography that leaves a lasting impression
          </h3>
          <p className="lg:text-center text-light-brown text-lg lg:w-1/2 3xl:w-[30%]">
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
        <FourthSectionScroll />

        {/* FIFTH SECTION */}
        <div className="p-5 lg:p-14 3xl:px-28">
          <Banner />
        </div>

        {/* SIXTH SECTION */}
        <div className="flex flex-col px-5 lg:px-0 gap-28 justify-center items-center w-full">
          <div className="text-white relative flex flex-col gap-10 lg:justify-center lg:items-center lg:text-center">
            <h2 className="text-5xl lg:text-6xl">Meet Victoria</h2>

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
              {/* <Image
                src={victoria}
                className="lg:w-[450px] z-1 lg:h-[350px] w-full h-auto rounded-2xl lg:object-cover relative"
                alt="victoria"
              /> */}
            </div>

            <p className="lg:w-[450px] text-light-brown text-2xl">
              From polished headshots to soulful lifestyle captures, I craft
              images that do more than just “look good”. They speak volumes.
              Whether for personal branding, professional needs, or intimate
              memories, every photo session is a curated experience.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-10 w-full">
              <div className="flex flex-col gap-4 w-full">
                <AnimatedCard from="top-left">
                  <ServiceWrapperCard
                    size="sm"
                    text="5 years+ Experience"
                    topArea={{ icon: briefIcon }}
                  />
                </AnimatedCard>

                <AnimatedCard from="bottom-left" delay={0.2}>
                  <ServiceWrapperCard
                    size="sm"
                    text="300+ Clientele"
                    topArea={{ btn: true }}
                  />
                </AnimatedCard>
              </div>

              <div className="flex flex-col gap-4 w-full lg:mt-6">
                <AnimatedCard from="top-right" delay={0.4}>
                  <ServiceWrapperCard
                    size="sm"
                    text="100% Satisfaction"
                    topArea={{ icon: briefIcon }}
                  />
                </AnimatedCard>

                <AnimatedCard from="bottom-right" delay={0.6}>
                  <ServiceWrapperCard
                    size="sm"
                    text="Humber certified!"
                    topArea={{ icon: humerCertified }}
                  />
                </AnimatedCard>
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
