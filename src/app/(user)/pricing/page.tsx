"use client";

import React, { useRef } from "react";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import Image from "next/image";
import HS4 from "@/assets/images/HS4.png";
// import rollingImage from "@/assets/svgs/rollingImage.svg";
import { Col, Row } from "antd";
import { ServiceWrapperCard } from "@/components/services/ServiceWrapperCard";
import briefIcon from "@/assets/svgs/briefcaseIcon.svg";
import icon1 from "@/assets/svgs/kids.svg";
import { PlanCards } from "@/components/plans-card/PlanCards";

const Portfolio = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="px-5 lg:px-14 3xl:!px-28">
          <div className="flex flex-col mt-28 lg:mt-48 gap-8 lg:gap-0 lg:flex-row justify-between w-full lg:items-center">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <h2 className="text-7xl">Explore my</h2>
              <div className="flex gap-5 items-center">
                <span>
                  <Image
                    src={HS4}
                    className="rounded-full object-cover w-[150px] h-[80px]"
                    alt="img"
                  />
                </span>
                <h2 className=" italic text-7xl ">Packages</h2>
              </div>
            </div>
            <div className="lg:w-[70%] text-xl text-light-brown">
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
          <div className="scroller px-28" ref={scrollerRef}>
            <ul className="scroller__inner">
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>

              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
              <li className="w-[120px] rounded-3xl border border-off-white py-3 px-5 min-w-[120px] lg:w-[200px] lg:min-w-[200px] flex gap-3 items-center ">
                <span>
                  <Image className="w-full h-full" src={icon1} alt="" />
                </span>
                <p className="text-white-100">Weddings</p>
              </li>
            </ul>
          </div>

          {/* Third section */}
          <div className="my-28">
            <Row gutter={[32, 32]}>
              <Col xs={24} lg={8}>
                <ServiceWrapperCard
                  text="Weddings"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
              <Col xs={24} lg={8}>
                <ServiceWrapperCard
                  text="Birthdays"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
              <Col xs={24} lg={8}>
                <ServiceWrapperCard
                  text="Lifestyle"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
              <Col xs={24} lg={8}>
                <ServiceWrapperCard
                  text="Weddings"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
              <Col xs={24} lg={8}>
                <ServiceWrapperCard
                  text="Birthdays"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
              <Col xs={24} lg={8}>
                <ServiceWrapperCard
                  text="Lifestyle"
                  topArea={{ icon: briefIcon }}
                />
              </Col>
            </Row>
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

      <GalleryBox />
      <Footer />
    </div>
  );
};

export default Portfolio;
