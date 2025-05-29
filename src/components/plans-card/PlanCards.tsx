import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import icon from "@/assets/svgs/plans-icons.svg";
import arrowRight from "@/assets/svgs/right_arrow.svg";

export const PlanCards = () => {
  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={8}>
          <div className="p-6 border border-off-white bg-[#0E0E0E] rounded-3xl">
            <span>
              <Image src={icon} className=" " alt="icon" />
            </span>
            <p className="mt-3 text-xl">Basic</p>
            <div className="flex  my-5 items-center text-5xl border border-off-white/50 p-6 rounded-xl ">
              $ 600 / hr
            </div>
            <div className="">
              <ul className="list-disc pl-6 marker:text-grey text-grey">
                <li>Consultation call</li>
                <li>60 min. session</li>
                <li>1 - 2 outfit</li>
                <li>max 4 people</li>
                <li>
                  10 images professional edited and delivered in an online
                  gallery
                </li>
                <li>$20 per additional image</li>
                <li>$50 per additional person</li>
                <li>$125 per additional hour</li>
                {/* Consultation call, 60 min. session, 1 - 2 outfit, max 4 people,
                10 images professional edited and delivered in an online gallery
                , $20 per additional image, $50 per additional person, $125 per
                additional hour. */}
              </ul>
            </div>

            <button className="rounded-full mt-5 text-[#BABABA]  border  border-off-white py-2 px-6 flex justify-center items-center gap-3">
              <p>Book now</p>
              <span>
                <Image src={arrowRight} alt="arrow-icon" />
              </span>
            </button>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <div className="bg-[#0E0E0E] p-6 border border-off-white rounded-3xl">
            <span>
              <Image src={icon} className=" " alt="icon" />
            </span>
            <p className="mt-3 text-xl">Basic</p>
            <div className="flex  my-5 items-center text-5xl border border-off-white/50 p-6 rounded-xl ">
              $ 600 / hr
            </div>
            <div className="">
              <ul className="list-disc pl-6 marker:text-grey text-grey">
                <li>Consultation call</li>
                <li>60 min. session</li>
                <li>1 - 2 outfit</li>
                <li>max 4 people</li>
                <li>
                  10 images professional edited and delivered in an online
                  gallery
                </li>
                <li>$20 per additional image</li>
                <li>$50 per additional person</li>
                <li>$125 per additional hour</li>
              </ul>
            </div>

            <button className="rounded-full mt-5 text-[#BABABA] border border-off-white py-2 px-6 flex justify-center items-center gap-3">
              <p>Book now</p>
              <span>
                <Image src={arrowRight} alt="arrow-icon" />
              </span>
            </button>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <div className="bg-[#0E0E0E] p-6 border border-off-white rounded-3xl">
            <span>
              <Image src={icon} className=" " alt="icon" />
            </span>
            <p className="mt-3 text-xl">Basic</p>
            <div className="flex  my-5 items-center text-5xl border border-off-white/50 p-6 rounded-xl ">
              $ 600 / hr
            </div>
            <div className="">
              <ul className="list-disc pl-6 marker:text-grey text-grey">
                <li>Consultation call</li>
                <li>60 min. session</li>
                <li>1 - 2 outfit</li>
                <li>max 4 people</li>
                <li>
                  10 images professional edited and delivered in an online
                  gallery
                </li>
                <li>$20 per additional image</li>
                <li>$50 per additional person</li>
                <li>$125 per additional hour</li>
              </ul>
            </div>

            <button className="rounded-full mt-5 text-[#BABABA] border border-off-white py-2 px-6 flex justify-center items-center gap-3">
              <p>Book now</p>
              <span>
                <Image src={arrowRight} alt="arrow-icon" />
              </span>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
