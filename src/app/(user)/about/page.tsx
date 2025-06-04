"use client";

import { Col, Row } from "antd";
import React, { useEffect, useRef } from "react";
import headerImage from "@/assets/images/about__header.jpg";
import Image from "next/image";
import { AboutExpectationCard } from "@/components/about-cards/about-expectation-card";
import { ParallaxScrollax } from "@/components/parallax-scrollax-banner/parallax-scrollax";
import { FooterImages } from "@/components/footer-images/footer-images";
import { Footer } from "@/components/footer/footer";
import { AboutPortfolioCard } from "@/components/about-cards/about-portfolio-card";
import starIcon from "@/assets/svgs/star-icon.svg";
import { motion, useScroll, useTransform as transform } from "framer-motion";
import facebookIcon from "@/assets/svgs/about-Facebook.svg"
import InstagramIcon from "@/assets/svgs/about-Instagram.svg"
import youtubeIcon from "@/assets/svgs/about-Youtube.svg"
import Xicon from "@/assets/svgs/about-X.svg"

const About = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const defaultColor = "#2A2A2A80";
  const changeColor = "#FFFFFFCC";

  const { scrollYProgress } = useScroll({
    target: containerRef, // Ref to the scrollable container
    offset: ["start end", "end start"], // This helps map scroll from start to end
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log("Current scrollYProgress:", latest);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="">
          <div className="px-5 lg:px-14 3xl:!px-28 flex flex-col mt-32 lg:mt-48 gap-8">
            <div className="w-full">
              <Row align={"middle"} gutter={[32, 32]}>
                <Col xs={24} lg={12}>
                  <div className="flex flex-col gap-4 lg:gap-10">
                    <div className="bg-[#282824] w-40 rounded-lg flex items-center justify-center py-2 px-8">
                      <p className=" text-[#F3EEE6] ">About me</p>
                    </div>
                    <h3 className="uppercase text-3xl lg:text-5xl ">
                      Victoria akinade
                    </h3>
                    <div ref={containerRef} className="flex flex-col gap-4">
                      <motion.div className="text-lg lg:text-xl">
                        {`I’m a proud wife, a mother to three amazing girls, and a
                        portrait and lifestyle photographer based in Toronto,
                        Ontario. I love capturing love, family, and the everyday moments
                        that make life special — from growing bellies and
                        birthdays to graduations and weddings. My style is warm
                        and natural. I focus on real emotions and genuine
                        connections. Whether it&apos;s a quiet glance or a big
                        laugh, I want you to have photos that feel like you.  I don’t just take pictures. I help you hold on to
                        memories.`
                          .split("")
                          .map((item, index, root) => {
                            const color = transform(
                              scrollYProgress,
                              [0, (index + 1) / root.length],
                              [changeColor, changeColor]
                            );
                            return (
                              <motion.span key={index} style={{ color }}>
                                {item}
                              </motion.span>
                            );
                          })}
                      </motion.div>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        <Image src={facebookIcon} alt="social_icon" />
                      </span>
                      <span>
                        <Image src={InstagramIcon} alt="social_icon" />
                      </span>
                      <span>
                        <Image src={youtubeIcon} alt="social_icon" />
                      </span>
                      <span>
                        <Image src={Xicon} alt="social_icon" />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div className="overflow-hidden lg:h-[700px] flex justify-end rounded-xl w-full">
                    <Image
                      src={headerImage}
                      className="object-cover rounded-xl w-full"
                      alt="owner"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className=" py-6 lg:py-10 px-6 bg-light-brown flex justify-center  w-full my-14">
            <div
              style={{ width: "100vw" }}
              className="scroller w-full"
              ref={scrollerRef}
            >
              <ul className={`scroller__inner`}>
                <li className="rounded-3xl flex justify-between  w-[400px] cursor-pointer  px-6  gap-3 items-center  ">
                  <p className="text-2xl text-[#3C3C3B] ">Perfect Memories</p>
                  <Image src={starIcon} alt="" />
                </li>
                <li className="rounded-3xl flex justify-between  w-[400px] cursor-pointer  px-6  gap-3 items-center  ">
                  <p className="text-2xl text-[#3C3C3B] ">
                    Expressing Emotions
                  </p>
                  <Image src={starIcon} alt="" />
                </li>
                <li className="rounded-3xl flex justify-between  w-[400px] cursor-pointer  px-6  gap-3 items-center  ">
                  <p className="text-2xl text-[#3C3C3B] ">Elegant Portraits</p>
                  <Image src={starIcon} alt="" />
                </li>
                <li className="rounded-3xl flex justify-between  w-[400px] cursor-pointer  px-6  gap-3 items-center  ">
                  <p className="text-2xl text-[#3C3C3B] ">
                    Lasting Impressions
                  </p>
                  <Image src={starIcon} alt="" />
                </li>
                <li className="rounded-3xl flex justify-between  w-[400px] cursor-pointer  px-6  gap-3 items-center  ">
                  <p className="text-2xl text-[#3C3C3B] ">Perfect Memories</p>
                  <Image src={starIcon} alt="" />
                </li>
                <li className="rounded-3xl flex justify-between  w-[400px] cursor-pointer  px-6  gap-3 items-center  ">
                  <p className="text-2xl text-[#3C3C3B] ">
                    Expressing Emotions
                  </p>
                  <Image src={starIcon} alt="" />
                </li>
                <li className="rounded-3xl flex justify-between  w-[400px] cursor-pointer  px-6  gap-3 items-center  ">
                  <p className="text-2xl text-[#3C3C3B] ">Elegant Portraits</p>
                  <Image src={starIcon} alt="" />
                </li>
                <li className="rounded-3xl flex justify-between  w-[400px] cursor-pointer  px-6  gap-3 items-center  ">
                  <p className="text-2xl text-[#3C3C3B] ">
                    Lasting Impressions
                  </p>
                  <Image src={starIcon} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="px-5 lg:px-14 3xl:!px-28 flex flex-col gap-20 lg:gap-36 lg:my-14">
            {/* VIDEO AREA */}
            <div className="w-full">
              <Row gutter={[32, 32]}>
                <Col xs={24} lg={12}>
                  <div className="overflow-hidden lg:h-[700px] flex justify-end rounded-xl w-full">
                    <Image
                      src={headerImage}
                      className="object-cover rounded-xl w-full"
                      alt="owner"
                    />
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div className="flex flex-col gap-4 lg:gap-10">
                    <h3 className="uppercase text-3xl lg:text-5xl ">
                      My journey
                    </h3>
                    <div ref={containerRef} className="flex flex-col gap-4">
                      <motion.div className="text-lg lg:text-xl leading-relaxed">
                        {`My journey began as a makeup artist, where I mastered
                        the art of enhancing beauty and paying attention to the
                        smallest details But I didn’t just want to prepare moments. I wanted to
                        hold onto them. To freeze emotion in its purest form.
                        That desire to do more led me to pick up a camera and
                        everything changed. What started as passion became
                        purpose. As a graduate of Humber College in Photography
                        with over five years of experience, I’ve transformed
                        instinct into craft. My approach blends creativity,
                        emotion, and technical precision to tell stories that go
                        beyond the surface. Every session is intentional. Every
                        frame is a reflection of something real. I don’t just
                        take photos. I create powerful visual experiences.
                        Because beauty deserves to be seen. And moments deserve
                        to be remembered.`
                          .split("")
                          .map((item, index, root) => {
                            const color = transform(
                              scrollYProgress,
                              [0, (index + 1) / root.length],
                              [defaultColor, changeColor]
                            );
                            return (
                              <motion.span key={index} style={{ color }}>
                                {item}
                              </motion.span>
                            );
                          })}
                      </motion.div>
                      {/* <p className=" text-lg lg:text-xl text-white/80">
                        My journey began as a makeup artist, where I mastered
                        the art of enhancing beauty and paying attention to the
                        smallest details
                      </p>
                      <p className="text-[#4C4C4CCC]/80  text-lg lg:text-xl">
                        But I didn’t just want to prepare moments. I wanted to
                        hold onto them. To freeze emotion in its purest form.
                        That desire to do more led me to pick up a camera and
                        everything changed. What started as passion became
                        purpose. As a graduate of Humber College in Photography
                        with over five years of experience, I’ve transformed
                        instinct into craft. My approach blends creativity,
                        emotion, and technical precision to tell stories that go
                        beyond the surface. Every session is intentional. Every
                        frame is a reflection of something real. I don’t just
                        take photos. I create powerful visual experiences.
                        Because beauty deserves to be seen. And moments deserve
                        to be remembered.
                      </p> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            {/*  */}
            <AboutExpectationCard />
          </div>
          {/* closing  */}
        </div>
      </div>

      {/* full widths */}
      <div className="py-28">
        <AboutPortfolioCard />
      </div>
      <ParallaxScrollax />
      <FooterImages />
      <Footer />
    </div>
  );
};

export default About;
