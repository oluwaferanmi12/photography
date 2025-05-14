"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
import victoria2 from "@/assets/images/victoriaPics/slide2.jpg";
import victoria3 from "@/assets/images/victoriaPics/slide3.jpg";
import { Footer } from "@/components/footer/footer";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import ImageMasonry from "@/components/imageMasonry/imageMasonry";
import { Banner } from "@/components/banner/banner";
import { ServiceWrapperCard } from "@/components/services/ServiceWrapperCard";
import { FourthSectionScroll } from "@/components/scrollingSection/home-fourth-section";
import Link from "next/link";
import { FadeInAnimate } from "@/animation/reveal/fade-in";
import { AnimatedCard } from "@/animation/animated-card";
import { MainCard } from "@/components/cascade-card/cascade-card";
import cascadeImage1 from "@/assets/svgs/masonryImages/mobile/card1.svg";
import cascadeImage2 from "@/assets/svgs/masonryImages/mobile/card2.svg";
import cascadeImage3 from "@/assets/svgs/masonryImages/mobile/card3.svg";
import cascadeImage4 from "@/assets/svgs/masonryImages/mobile/card4.svg";
import scrollDown from "@/assets/svgs/scroll-down-icon.svg";
import { AnimatedTestimonial } from "@/components/animated-testimonials/animated-testimonial";
import { Compare } from "@/components/ui/compare";
import TextReveal from "@/components/animattions/animated-text-reveal";
import Button from "@/components/button/button";
import beforeImage from "@/assets/images/beforeImage.jpg";
import afterImage from "@/assets/images/afterImage.jpg";
import headerImg1 from "@/assets/images/home_header/img1.jpg"
import headerImg2 from "@/assets/images/home_header/img2.jpg"
import headerImg3 from "@/assets/images/home_header/img3.jpg"
import headerImg4 from "@/assets/images/home_header/img4.jpg"
import headerImg5 from "@/assets/images/home_header/img5.jpg"

export default function Home() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const [currentBg, setCurrentBg] = useState(headerImg1);
  const [currentProfileImg, setCurrentProfileImg] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  // SCROLLING EFFECT ON HEADER
  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop(); // set initial value on mount

    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // SCROLL TO NEXT SECTION FOR MOBILE
  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // CASCADE CARDS
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });


  const cardData = [cascadeImage1, cascadeImage2, cascadeImage3, cascadeImage4];

  // Memoize imageMap to prevent unnecessary recreations
  const imageMap = useMemo(
    () => [
      { thumbnail: image5, background: headerImg1 },
      { thumbnail: image2, background: headerImg2 },
      { thumbnail: image3, background: headerImg3 },
      { thumbnail: image4, background: headerImg4 },
      { thumbnail: image5, background: headerImg5 },
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
    <div className="relative w-full">
      <motion.div
        className="h-screen min-h-screen relative top-0 z-[1] transition-all w-full"
        animate={{
          padding: isDesktop && scrolled ? "28px" : "0px",
        }}
      >
        <motion.div
          className="h-full min-h-full w-full z-50 landingBg flex justify-center lg:items-center relative"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          animate={{
            borderRadius: isDesktop && scrolled ? "32px" : "0px",
            // border: isDesktop && scrolled ? "2px solid #D9C9AE82" : "none",
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
              borderRadius: isDesktop && scrolled ? "32px" : "0px",
            }}
          />

          {/* Content (unaffected by filter) */}
          <div className="relative z-10 mt-48 lg:mt-0 w-full">
            <Row className="w-full px-5 lg:px-20">
              <Col xs={24} xl={12}>
                <div>
                  <div className="hidden lg:flex items-center gap-2">
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
                  <div className="lg:my-6 text-white text-5xl lg:text-8xl flex flex-col gap-5 font-grotesk-regular">
                    <p>Timeless Looks.</p>
                    <p>Lasting Emotions.</p>
                  </div>
                  <div className="mt-12">
                    <p className="text-[#E6EAEE] text-xl font-grotesk-regular lg:w-3/4 min[1400px]-[60%]">
                      Whether you’re stepping in front of the lens for the first
                      time or your fiftieth I’ll help you look and feel your
                      absolute best
                    </p>
                  </div>
                  <motion.div
                    className="flex lg:hidden justify-center items-center mt-24 cursor-pointer"
                    onClick={handleScroll}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <span>
                      <Image src={scrollDown} alt="arrow down" />
                    </span>
                  </motion.div>
                </div>
              </Col>
            </Row>
          </div>
          <FadeInAnimate transitionDuration={15}>
            <Link href="/">
              <span className="absolute right-5 lg:right-14 bottom-14 3xl:!right-28 3xl:!bottom-28">
                <Image
                  className="imageRotate h-24 w-24 md:h-auto md:w-auto"
                  src={rollingImage}
                  alt="image"
                />
              </span>
            </Link>
          </FadeInAnimate>
        </motion.div>
      </motion.div>

      <div className="flex flex-col pt-28 pb-56">
        {/* Second section  */}
        <div
          ref={nextSectionRef}
          className="flex flex-col gap-10 lg:justify-center lg:items-center px-5 lg:px-0"
        >
          {/* <h3 className="lg:text-center w-full lg:w-1/2 lg:leading-20 text-white text-5xl lg:text-8xl ">
            Photography that leaves a lasting impression
          </h3> */}

          <div className="flex flex-col items-center justify-center">
            <TextReveal>Photography that leaves a</TextReveal>
            <TextReveal>lasting impression</TextReveal>
          </div>

          <p className="lg:text-center text-light-brown text-lg lg:w-1/2 3xl:w-[30%]">
            From polished headshots to soulful lifestyle captures I craft images
            that do more than just look good. They speak volumes and turn
            personal branding or intimate moments into a curated experience.
          </p>
        </div>

        

        {/* THIRD SECTION */}
        <div className="hidden lg:block">
          <ImageMasonry />
        </div>

        {/* FOURTH SECTION */}
        <FourthSectionScroll />

        {/* FIFTH SECTION */}
        <div className="p-5 lg:p-14 3xl:!px-28">
          <Banner />
        </div>

        {/* Card cascade   */}
        <div className="lg:hidden">
          {cardData.map((item, index) => {
            const targetScale = 1 - (cardData.length - index) * 0.05;
            return (
              <MainCard
                key={index}
                currentIndex={index}
                range={[index * 0.333, 1]}
                targetScale={targetScale}
                progress={scrollYProgress}
                imgSrc={item}
              />
            );
          })}
        </div>

        {/* SIXTH SECTION */}
        <div className="flex flex-col mt-20 mx-5 lg:px-0 gap-28 lg:justify-center lg:items-center">
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
            </div>

            <p className="lg:w-[450px] text-light-brown text-2xl">
              From polished headshots to soulful lifestyle captures, I craft
              images that do more than just “look good”. They speak volumes.
              Whether for personal branding, professional needs, or intimate
              memories, every photo session is a curated experience.
            </p>
            <Button text="Read my story" variant="filled" link="/about" />
          </div>
          <div className=" lg:w-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-10 w-full">
              <div className="flex flex-col gap-4 w-full">
                <div className="relative overflow-hidden">
                  <AnimatedCard from="top-left">
                    <ServiceWrapperCard
                      size="sm"
                      text="5 years+ Experience"
                      topArea={{ icon: briefIcon }}
                    />
                  </AnimatedCard>
                </div>

                <div className="relative overflow-hidden">
                  <AnimatedCard from="bottom-left" delay={0.2}>
                    <ServiceWrapperCard
                      size="sm"
                      text="300+ Clientele"
                      topArea={{ btn: true }}
                    />
                  </AnimatedCard>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full lg:mt-14">
                <div className="relative overflow-hidden">
                  <AnimatedCard from="top-right" delay={0.4}>
                    <ServiceWrapperCard
                      size="sm"
                      text="100% Satisfaction"
                      topArea={{ icon: briefIcon }}
                    />
                  </AnimatedCard>
                </div>

                <div className="relative overflow-hidden">
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
          {/*  */}
          <div className="flex flex-col mx-5 lg:px-0 lg:justify-center lg:items-center mt-28">
            <h3 className="text-4xl lg:text-6xl">Playground</h3>
            <p className="text-light-brown text-2xl">
              Swipe to see before & after magic
            </p>
            <div className="p-4 border mt-14 rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
              <Compare
                firstImage={beforeImage}
                secondImage={afterImage}
                firstImageClassName="object-cover object-left-top w-full"
                secondImageClassname="object-cover object-left-top w-full"
                className="h-[250px] w-full md:h-[500px] md:w-[500px] lg:h-[500px] lg:w-[800px]"
                slideMode="hover"
              />
            </div>
          </div>
        </div>

        {/* Sixth Section */}
       <div className="flex flex-col mx-5 lg:px-0 lg:justify-center lg:items-center mt-28">
          <h3 className="text-4xl lg:text-5xl lg:text-center">
            Words from my clients
          </h3>
          <AnimatedTestimonial />
        </div>
      </div>

      {/* Seventh Section */}
      <GalleryBox />
      <Footer />
    </div>
  );
}
