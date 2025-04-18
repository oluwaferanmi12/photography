"use client";

import React from "react";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import Image from "next/image";
import HS4 from "@/assets/images/HS4.png";
// import rollingImage from "@/assets/svgs/rollingImage.svg";
import { Col, Row } from "antd";
import { ServiceWrapperCard } from "@/components/services/ServiceWrapperCard";
import briefIcon from "@/assets/svgs/briefcaseIcon.svg";
import { PlanCards } from "@/components/plans-card/PlanCards";

const Portfolio = () => {
  return (
    <div>
      <div className=" mt-48">
        <div className="px-14 3xl:px-28">
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col gap-8 w-1/2">
              <h2 className="text-7xl">Explore my</h2>
              <div className="flex gap-5 items-center">
                <span>
                  <Image
                    src={HS4}
                    className="rounded-full object-cover w-[150px] h-[80px]"
                    alt="img"
                  />
                </span>
                <h2 className=" italic text-7xl ">Portfolio</h2>
              </div>
            </div>
            <div className="w-1/2 text-light-brown">
              <p>
                From polished headshots to soulful lifestyle captures, I craft
                images that do more than just “look good” . They speak volumes.
                Whether for personal branding, professional needs, or intimate
                memories, every photo session is a curated experience.
              </p>
            </div>
            {/* <span>
              <Image src={rollingImage} alt="rollingImage" />
            </span> */}
          </div>

          {/* Third section */}
          <div className="my-28">
            <Row gutter={[32, 32]}>
              <Col xs={8}>
                <ServiceWrapperCard
                  text="Weddings"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
              <Col xs={8}>
                <ServiceWrapperCard
                  text="Birthdays"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
              <Col xs={8}>
                <ServiceWrapperCard
                  text="Lifestyle"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
              <Col xs={8}>
                <ServiceWrapperCard
                  text="Weddings"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
              <Col xs={8}>
                <ServiceWrapperCard
                  text="Birthdays"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
              <Col xs={8}>
                <ServiceWrapperCard
                  text="Lifestyle"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
            </Row>
          </div>

          {/* Third section */}
          <div className="pb-36">
            <h3 className="w-[25%] text-7xl">Wedding Packages</h3>
            <div className="mt-10">
              <PlanCards />
            </div>
          </div>
        </div>
      </div>

      <GalleryBox />
      <Footer />
    </div>
  );
};

export default Portfolio;
