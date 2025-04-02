"use client";

import { Row, Col } from "antd";
import Image from "next/image";
import image1 from "@/assets/svgs/home-image-1.svg";
import image2 from "@/assets/svgs/home-image-2.svg";
import image3 from "@/assets/svgs/home-image-3.svg";
import image4 from "@/assets/svgs/home-image-4.svg";
import image5 from "@/assets/svgs/home-image-5.svg";
import framedImage from "@/assets/images/home-framed-image.png";
import underlayImg from "@/assets/svgs/third-section-icon1.svg";
import { ServicesAccordian } from "@/components/services/services-accordian";
import fifthSectionImg from "@/assets/images/fifthSectionImg.png";
import placeholderImg from "@/assets/images/placeholderImg.png";
import { Footer } from "@/components/footer/footer";
import Button from "@/components/button/button";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HomeSecondSection from "@/components/home-section/secondSection";
import hoverEffectImg from "@/assets/images/hoverEffectPic.png";

const servicesData = [
  {
    num: "01",
    title: "Wedding Photography",
    media: hoverEffectImg,
    isVideo: false,
  },
  {
    num: "02",
    title: "Lifestyle Photography",
    media: hoverEffectImg,
    isVideo: false,
  },
  {
    num: "03",
    title: "Videography",
    media: hoverEffectImg,
    isVideo: false,
  },
  {
    num: "04",
    title: "Birthdays",
    media: hoverEffectImg,
    isVideo: false,
  },
  {
    num: "05",
    title: "Professional Shoots",
    media: hoverEffectImg,
    isVideo: false,
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll changes and update state
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10); // Apply padding on first scroll
  });

  // THIRD SECTION

  const [hoveredMedia, setHoveredMedia] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState(false);

  const handleHover = (mediaSrc: string, isVideo: boolean) => {
    setHoveredMedia(mediaSrc);
    setIsVideo(isVideo);
  };

  // Seventh Section - Event Videos with Parallax
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [sectionOffset, setSectionOffset] = useState(0);

  // Set up transform hooks unconditionally
  const contentY = useTransform(
    scrollY,
    [sectionOffset, sectionOffset + window.innerHeight],
    [0, -100] // Adjust these values for stronger/weaker parallax
  );

  // Track when section enters viewport and get its offset
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      // Set the initial offset
      setSectionOffset(sectionRef.current.offsetTop);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Update offset on resize
  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        setSectionOffset(sectionRef.current.offsetTop);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <motion.div
        className="h-screen min-h-screen transition-all"
        animate={{
          padding: scrolled ? "28px" : "0px", // p-7 = 1.75rem
        }}
      >
        <motion.div
          className="h-full min-h-full landingBg  flex justify-center items-center"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          animate={{
            borderRadius: scrolled ? "32px" : "0px",
          }}
        >
          <Row className="w-full px-20">
            <Col xs={12}>
              <div>
                <div className="flex items-center gap-2">
                  <Image src={image1} alt="" />
                  <Image src={image2} alt="" />
                  <Image src={image3} alt="" />
                  <Image src={image4} alt="" />
                  <Image src={image5} alt="" />
                </div>
                <div className="my-6 text-white text-8xl font-grotesk-regular">
                  <p>Picture Perfect</p>
                  <p>Shotbyportable</p>
                </div>
                <div className="mt-12">
                  <p className="text-[#E6EAEE] text-xl font-grotesk-regular w-4/5">
                    Hey, I’m Victoria Akinade — a passionate photographer based
                    in Barrie, Ontario. 📸
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </motion.div>
      {/* Second section  */}
      <HomeSecondSection />
      {/* <div className="mt-20 pt-7 px-7 h-[125vh] min-h-screen relative">
        <Row justify={"center"} align={"middle"} className="">
          <Col xs={6}>
            <div>
              <Image src={sImage1} alt="" />
              <Image src={sImage2} alt="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className="flex justify-center">
              <div>
                <div className="text-4xl text-center text-[#635E5E] ">
                  <p>BRANDING PHOTOS</p>{" "}
                  <p className="my-3">
                    {" "}
                    AND HEADSHOTS TO HELP{" "}
                    <span className="text-[#FB5711]">STAND OUT</span>
                  </p>{" "}
                  <p>FROM THE CROWD</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="z-50">
              <Image src={sImage3} alt="" />
              <Image src={sImage4} alt="" />
            </div>
          </Col>
        </Row>
        <span className="absolute bottom-0 left-7 z-10">
          <Image src={photography} className="w-40" alt="icon" />
        </span>
        <span className="absolute bottom-0 right-7 z-10">
          <Image src={photography2} className="w-40" alt="icon" />
        </span>
      </div> */}

      {/* third section  */}
      <div className="bg-[#FAF3E9] py-12 px-7 relative">
        <Row justify={"center"}>
          <Col xs={18}>
            <Row justify={"center"} gutter={[42, 42]}>
              <Col xs={22} md={12}>
                <span>
                  <Image src={framedImage} alt="" />
                </span>
              </Col>

              <Col xs={22} md={12}>
                <div className="text-center relative z-50 md:text-left">
                  <h3 className="font-grotesk-medium text-4xl mb-10">
                    BASED IN ONTARIO
                  </h3>
                  <p className="text-lg  leading-relaxed text-[#3C3C3B] ">
                    Hey, I’m Victoria Akinade —a passionate photographer based
                    in Ontario. 📸 From capturing raw emotions to creating
                    stunning brand visuals, I believe every shot should tell a
                    story. Whether it’s a dreamy portrait, a bold commercial
                    shoot, or a candid moment, I make sure each frame reflects
                    your unique vibe.
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-[#3C3C3B]">
                    With years of experience behind the lens, I bring
                    creativity, precision, and a touch of fun to every session.
                    Let’s turn moments into timeless memories. 💡 Ready to
                    create magic? Let’s shoot!
                  </p>
                  {/* <div className="mt-6">
                    <Button variant="filled" size="small">
                      Book a session
                    </Button>
                  </div> */}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <span className="absolute bottom-0 right-0">
          <Image src={underlayImg} alt="img" />
        </span>
      </div>

      {/* fourth section */}
      <div className="p-7 my-20">
        <div>
          <h2 className="text-center text-5xl text-[#3C3C3B] font-valentiamo-reg ">
            My services
          </h2>
        </div>
        <div className="py-10 relative">
          {servicesData.map((service) => (
            <ServicesAccordian
              key={service.num}
              num={service.num}
              serviceTitle={service.title}
              mediaSrc={service.media}
              isVideo={service.isVideo}
              onHover={handleHover}
            />
          ))}

          {/* Media Display */}
          {hoveredMedia ? (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300">
              {isVideo ? (
                <video
                  autoPlay
                  loop
                  muted
                  className="w-60 rounded-lg shadow-lg"
                >
                  <source src={hoveredMedia} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={hoveredMedia}
                  width={240}
                  height={360}
                  className="rounded-lg shadow-lg"
                  alt="service preview"
                />
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-center mb-5">
          <Button variant="bordered" size="large" borderVariant="light">
            View all work
          </Button>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="p-7 my-20">
        <Row>
          <Col xs={24}>
            <Row align={"middle"} justify={"center"} gutter={[42, 42]}>
              <Col xs={12}>
                <div className="flex flex-col gap-10 ">
                  <h2 className="text-7xl  tracking-[-3%]">
                    Wherever You Go, I’ll Be There to{" "}
                    <span className="text-[#734004]">Shoot!</span>{" "}
                  </h2>
                  <p className="text-xl text-[#3C3C3B]">
                    From the bustling streets of Canada to breathtaking
                    destinations across the globe, I go where your story takes
                    me. I’m ready always to capture every moment with artistry
                    and passion.
                  </p>
                  {/* <div className="flex justify-normal my-5">
                    <Button
                      variant="bordered"
                      size="medium"
                      borderVariant="dark"
                    >
                      {" "}
                      Book your session
                    </Button>
                  </div> */}
                </div>
              </Col>
              <Col xs={12}>
                <Image src={fifthSectionImg} className="" alt="img" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Sixth Section */}
      <GalleryBox />

      {/* Seventh Section */}
      <div
        ref={sectionRef}
        className="relative overflow-x-hidden"
        id="event-videos-section"
      >
        {/* Content with parallax effect */}
        <motion.div
          className="w-full min-h-[500px] flex items-center justify-center relative"
          style={{ y: contentY }}
        >
          <div className="p-7 w-full">
            <Row align="middle" justify="center" gutter={[42, 42]}>
              <Col xs={24} md={12}>
                <Image
                  src={placeholderImg}
                  alt="Event video"
                  className="w-full h-auto rounded-lg"
                />
              </Col>
              <Col xs={24} md={12}>
                <div className="flex flex-col gap-6 lg:gap-10">
                  <h2 className="text-4xl md:text-6xl font-valentiamo-reg tracking-tight">
                    Event videos
                  </h2>
                  <p className="text-lg text-[#583101]">
                    We capture the best moments of your events with stunning
                    visuals and storytelling. Whether it's a corporate
                    gathering, wedding, concert, or cultural event, we create
                    videos that bring your memories to life.
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="bordered"
                      size="medium"
                      borderVariant="dark"
                    >
                      Book a video session
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="relative z-20 w-full h-[100vh]">
          <Footer />
        </div>
      </div>

      {/* <div className="p-7 my-20 parallax-container ">
        <Row>
          <Col xs={24}>
            <Row align={"middle"} justify={"center"} gutter={[42, 42]}>
              <Col xs={12}>
                <Image src={placeholderImg} className="" alt="img" />
              </Col>
              <Col xs={12}>
                <div className="flex flex-col gap-10 ">
                  <h2 className="text-[64px] font-valentiamo-reg tracking-[-3%]">
                    Event videos
                  </h2>
                  <p className="text-xl text-[#583101]">
                    We capture the best moments of your events with stunning
                    visuals and storytelling. Whether it’s a corporate
                    gathering, wedding, concert, or cultural event, we create
                    videos that bring your memories to life.
                  </p>
                  <div className="flex justify-normal my-5 ">
                    <Button
                      variant="bordered"
                      size="medium"
                      borderVariant="dark"
                    >
                      {" "}
                      Book a video session
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer /> */}
    </div>
  );
}
