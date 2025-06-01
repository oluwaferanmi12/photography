"use client";

import Image from "next/image";
import React from "react";
// import rollingImage from "@/assets/svgs/rollingImage.svg";
import card1 from "@/assets/images/gallery/card1.jpg";
import card2 from "@/assets/images/gallery/card2.jpg";
import card3 from "@/assets/images/gallery/card3.jpg";
import card4 from "@/assets/images/gallery/card4.jpg";
import card5 from "@/assets/images/gallery/card5.jpg";
import card6 from "@/assets/images/gallery/card6.jpg";
import card7 from "@/assets/images/gallery/card7.jpg";
import card8 from "@/assets/images/gallery/card8.jpg";
import card9 from "@/assets/images/gallery/card9.jpg";
import { Row, Col } from "antd";
import { GalleryCard } from "@/components/gallery-card/gallery-card";
import Pagination from "@/components/pagination/pagination";
import { ParallaxScrollax } from "@/components/parallax-scrollax-banner/parallax-scrollax";
import { FooterImages } from "@/components/footer-images/footer-images";
import { Footer } from "@/components/footer/footer";

const Gallery = () => {
  const galleryData = [
    {
      imgSrc: card1,
      galleryTitle: "Desire's deciation",
      date: "April 15 2025",
      noOfPhoto: 150,
    },
    {
      imgSrc: card2,
      galleryTitle: "Desire's deciation",
      date: "April 15 2025",
      noOfPhoto: 150,
    },
    {
      imgSrc: card3,
      galleryTitle: "Desire's deciation",
      date: "April 15 2025",
      noOfPhoto: 150,
    },
    {
      imgSrc: card4,
      galleryTitle: "Desire's deciation",
      date: "April 15 2025",
      noOfPhoto: 150,
    },
    {
      imgSrc: card5,
      galleryTitle: "Desire's deciation",
      date: "April 15 2025",
      noOfPhoto: 150,
    },
    {
      imgSrc: card6,
      galleryTitle: "Desire's deciation",
      date: "April 15 2025",
      noOfPhoto: 150,
    },
    {
      imgSrc: card7,
      galleryTitle: "Desire's deciation",
      date: "April 15 2025",
      noOfPhoto: 150,
    },
    {
      imgSrc: card8,
      galleryTitle: "Desire's deciation",
      date: "April 15 2025",
      noOfPhoto: 150,
    },
    {
      imgSrc: card9,
      galleryTitle: "Desire's deciation",
      date: "April 15 2025",
      noOfPhoto: 150,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-14 justify-center items-center ">
        <div className=" flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28">
          <div className="galleryBg mt-28 lg:mt-48 relative border-[5px]  border-light-brown w-full flex items-center">
            <div className="mx-14 text-white flex flex-col gap-5 font-grotesk-regular">
              <p className="text-6xl lg:text-8xl font-playfair ">
                Client’s Gallery
              </p>
              <p className="text-white text-xl lg:max-w-1/2">
                From polished headshots to soulful lifestyle captures, I craft
                images that do more than just “look good” . They speak volumes.
                Whether for personal branding, professional needs, or intimate
                memories, every photo session is a curated experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SECONF SECTION */}
      <section className="bg-[#F4F3EA] mt-28 flex flex-col gap-14 justify-center items-center px-5 lg:px-14 3xl:!px-28  pt-20 pb-32">
        <div>
          <Row gutter={[32, 32]}>
            {galleryData.map((item, index) => (
              <Col key={index} xs={24} md={8}>
                <GalleryCard
                  imgSrc={item.imgSrc}
                  no_of_photos={item.noOfPhoto}
                  cardTitle={item.galleryTitle}
                  photoDate={item.date}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <Pagination
            currentPage={1}
            totalPages={7}
            onPageChange={(page) => console.log("Go to page:", page)}
          />
        </div>
      </section>
      <ParallaxScrollax />
      <FooterImages />
      <Footer />
      <Footer />
    </div>
  );
};

export default Gallery;
