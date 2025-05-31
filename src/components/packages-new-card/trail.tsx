import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import dummyIcon from "@/assets/svgs/dummy-packages-icon.svg";
import stoneDot from "@/assets/svgs/stone-dots.svg";
import image1 from "@/assets/svgs/newPackages/birthday.svg";

export const Trail = () => {
  return (
    <div className="relative w-full border-[1.5px] border-white/10 rounded-[48px] p-4 overflow-hidden">
      {/* Top-left partial gradient overlay */}
      <div className="absolute top-0 left-0 w-[90%] h-[45%] pointer-events-none z-0  overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-[#9E2FFF80] via-[#2B6AFF50] to-transparent blur-xl" />
      </div>

      {/* Base dark semi-transparent background */}
      <div className="absolute inset-0 bg-[#181818]/20 z-0" />

      {/* Inner content */}
      <div className="relative z-10">
        <div className="rounded-4xl w-full p-[1.5px] relative inline-block bg-gradient-to-br from-white/40 via-white/5 to-white/10 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.08)]">
          <div className="rounded-4xl bg-[#282828CC] p-3 backdrop-blur-md text-white font-semibold w-full h-full">
            <Row gutter={[32, 32]}>
              <Col xs={24} lg={12}>
                <div>
                  <div className="p-6">
                    <span>
                      <Image src={dummyIcon} alt="dummy_icon" />
                    </span>
                    <p className="text-5xl font-bold mt-4 text-[#F8F8F8F2]/95">
                      Portraits
                    </p>
                    <p className="text-sm text-[#F8F8F8B2]/70 my-2">
                      Whether you&apos;re booking for a birthday, a family
                      session, or something more personal, each package is built
                      to give you images that feel like you.
                    </p>
                    <p className="text-5xl text-[#D9C9AE] font-light mb-4">
                      $350
                    </p>
                  </div>

                  <div className="bg-[#F8F8F805] p-6 rounded-xl flex flex-col gap-5">
                    <div>
                      <div className="flex gap-2">
                        <span>
                          <Image src={stoneDot} alt="stoneDot" />
                        </span>
                        <p>Consultation call</p>
                      </div>
                      <div className="flex gap-2">
                        <span>
                          <Image src={stoneDot} alt="stoneDot" />
                        </span>
                        <p>Consultation call</p>
                      </div>
                      <div className="flex gap-2">
                        <span>
                          <Image src={stoneDot} alt="stoneDot" />
                        </span>
                        <p>Consultation call</p>
                      </div>
                      <div className="flex gap-2">
                        <span>
                          <Image src={stoneDot} alt="stoneDot" />
                        </span>
                        <p>Consultation call</p>
                      </div>
                      <div className="flex gap-2">
                        <span>
                          <Image src={stoneDot} alt="stoneDot" />
                        </span>
                        <p>Consultation call</p>
                      </div>
                      <div className="flex gap-2">
                        <span>
                          <Image src={stoneDot} alt="stoneDot" />
                        </span>
                        <p>Consultation call</p>
                      </div>
                      <div className="flex gap-2">
                        <span>
                          <Image src={stoneDot} alt="stoneDot" />
                        </span>
                        <p>Consultation call</p>
                      </div>
                    </div>
                    <div className="w-40">
                      <div className="relative inline-block p-[1.5px] rounded-full bg-gradient-to-br from-white/40 via-white/5 to-white/10 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.06)]">
                        <button className="px-6 py-2 rounded-full bg-black/30 backdrop-blur-md text-white font-semibold h-full">
                          Get started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="overflow-hidden">
                  <Image
                    src={image1}
                    className="w-full h-auto object-cover"
                    alt="image"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
