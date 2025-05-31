import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import dummyIcon from "@/assets/svgs/dummy-packages-icon.svg";
import stoneDot from "@/assets/svgs/stone-dots.svg";

export const PackagesNewCard = () => {
  return (
    <div className="linear_bg  w-full bg-[#18181833]/20 relative rounded-4xl p-4">
      <div className="rounded-4xl w-full p-[1.5px] bg-[#282828CC]/80 relative inline-block bg-gradient-to-br from-white/50 via-white/5 to-white/10 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.08)]">
        <div className="rounded-4xl bg-[#282828CC]/80 p-6 backdrop-blur-md text-white font-semibold w-full h-full">
          <Row>
            <Col xs={24} lg={12}>
              <div>
                <span>
                  <Image src={dummyIcon} alt="dummy_icon" />
                </span>
                <p>Portraits</p>
                <p>
                  Whether you&apos;re booking for a birthday, a family session,
                  or something more personal, each package is built to give you
                  images that feel like you.
                </p>
                <p>$350</p>
                <div className="bg-[#F8F8F805]/2 p-4 rounded-xl flex flex-col gap-5">
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

                  {/* <div>
                  <button className="gradient-border-button blur-lg backdrop-blur-lg bg-[#282828B2]/6 px-4 py-2 text-[#F8F8F8B2]/70">
                    Get started
                  </button>
                </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
