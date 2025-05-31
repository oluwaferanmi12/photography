import { Col, Row } from "antd";
import React from "react";
import headerImage from "@/assets/images/about__header.jpg";
import Image from "next/image";
import { AboutExpectationCard } from "@/components/about-cards/about-expectation-card";
import { ParallaxScrollax } from "@/components/parallax-scrollax-banner/parallax-scrollax";
import { FooterImages } from "@/components/footer-images/footer-images";
import { Footer } from "@/components/footer/footer";
import { AboutPortfolioCard } from "@/components/about-cards/about-portfolio-card";

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="">
          <div className="px-5 lg:px-14 3xl:!px-28 flex flex-col mt-28 lg:mt-48 gap-8">
            <div className="w-full">
              <Row align={"middle"} gutter={[32, 32]}>
                <Col xs={24} lg={12}>
                  <div className="flex flex-col gap-10">
                    <div className="bg-[#282824] w-40 rounded-lg flex items-center justify-center py-2 px-8">
                      <p className=" text-[#F3EEE6] ">About me</p>
                    </div>
                    <h3 className="uppercase text-5xl ">Victoria akinade</h3>
                    <div className="flex flex-col gap-4">
                      <p className="text-xl text-white/80">
                        I’m a proud wife, a mother to three amazing girls, and a
                        portrait and lifestyle photographer based in Toronto,
                        Ontario.
                      </p>
                      <p className="text-[#4C4C4CCC]/80 text-xl">
                        I love capturing love, family, and the everyday moments
                        that make life special — from growing bellies and
                        birthdays to graduations and weddings. My style is warm
                        and natural. I focus on real emotions and genuine
                        connections. Whether it&apos;s a quiet glance or a big
                        laugh, I want you to have photos that feel like you.
                      </p>
                      <p className="text-[#4C4C4CCC]/80 text-xl">
                        I don’t just take pictures. I help you hold on to
                        memories.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div className="overflow-hidden flex justify-end rounded-xl w-full">
                    <Image
                      src={headerImage}
                      className="object-cover rounded-xl h-full"
                      alt="owner"
                    />
                  </div>
                </Col>
              </Row>
            </div>

            {/* VIDEO AREA */}
            <div className="w-full">
              <Row gutter={[32, 32]}>
                <Col xs={24} lg={12}>
                  <div className="overflow-hidden rounded-xl w-full">
                    <Image
                      src={headerImage}
                      className="object-cover rounded-xl h-full"
                      alt="owner"
                    />
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div className="flex flex-col gap-10">
                    <h3 className="uppercase text-5xl ">My journey</h3>
                    <div className="flex flex-col gap-4">
                      <p className="text-xl text-white/80">
                        I’m a proud wife, a mother to three amazing girls, and a
                        portrait and lifestyle photographer based in Toronto,
                        Ontario.My journey began as a makeup artist, where I
                        mastered the art of enhancing beauty and paying
                        attention to the smallest details.
                      </p>
                      <p className="text-[#4C4C4CCC]/80 text-xl">
                        But I didn’t just want to prepare moments. I wanted to
                        hold onto them. To freeze emotion in its purest form.
                        That desire to do more led me to pick up a camera and
                        everything changed. What started as passion became
                        purpose.
                      </p>
                      <p className="text-[#4C4C4CCC]/80 text-xl">
                        As a graduate of Humber College in Photography with over
                        five years of experience, I’ve transformed instinct into
                        craft. My approach blends creativity, emotion, and
                        technical precision to tell stories that go beyond the
                        surface. Every session is intentional. Every frame is a
                        reflection of something real. I don’t just take photos.
                        I create powerful visual experiences. Because beauty
                        deserves to be seen. And moments deserve to be
                        remembered.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            {/*  */}
            <AboutExpectationCard />
          </div>
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

export default page;
