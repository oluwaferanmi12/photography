import { GlassNavbar } from "@/components/nav/studio-nav";
import { Col, Row } from "antd";
import React from "react";
import Image from "next/image";
import arrowRightBg from "@/assets/svgs/arrow-right-bg.svg";
import ScrollDownCard from "@/components/nuggets/scroll-down";
import dotIcon from "@/assets/svgs/rounded-dot.svg";

function Studio() {
  return (
    <section className="bg-[#EAEAEA] min-h-screen h-full">
      <GlassNavbar />
      <div className="h-screen w-full p-4">
        <div className="studio-bg h-full flex justify-between items-end w-full rounded-3xl overflow-hidden">
          <Row justify={"center"} className="w-full pb-12">
            <Col xs={18}>
              <Row>
                <Col xs={12}>
                  <div className="flex mb-4">
                    <div className="flex  items-center gap-2 navBg rounded-full p-3">
                      <Image src={dotIcon} alt="" />
                      <span>Welcome to shotbyportable</span>
                    </div>
                  </div>

                  <p className="text-[62px] font-manrope leading-18">
                    The Perfect Studio in Toronto. Anytime, Anywhere.
                  </p>
                </Col>
                <Col xs={12} className="">
                  <div className="flex justify-end">
                    <ScrollDownCard />
                  </div>
                  <p className="w-4/5 font-manrope ml-auto text-base text-right my-6">
                    The Mivara offers a refined escape where luxury meets
                    comfort and tranquility. Every detail is crafted to provide
                    a peaceful stay with personalized service and elegant
                    spaces.
                  </p>
                  <div className="flex justify-end">
                    <div className="h-11 px-5 rounded-full bg-white text-[#0D150B] font-medium inline-flex items-center gap-2 shadow-sm">
                      <p className="text-[#1B1810] font-grotesk-semi-bold">
                        Book a studio
                      </p>
                      <span className="grid place-items-center w-6 h-6 rounded-full bg-[#7B6043] text-white text-xs">
                        <Image src={arrowRightBg} alt="" />
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}

export default Studio;
