import { Col, Row } from "antd";
import React from "react";
import MI6 from "@/assets/images/about_testifierCard2.jpg";
import Image from "next/image";


export const AboutPortfolioCard = () => {
  return (
    <div className="px-5 lg:px-14 p-5 lg:py-28 bg-[#222222] ">
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <div className="flex flex-col gap-10 lg:justify-between lg:h-[350px]">
            <p className="text-[#EAE5DC] text-2xl lg:text-3xl 3xl:w-[90%]">
              “<span className="font-semibold">Hello, Madam Portable</span> —
              this is a job well done. Every minute of the event was beautifully
              captured. I could feel the whole day again just by watching. Great
              job!”.
            </p>
            <p className="font-playfair uppercase text-lg">Happy client</p>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="overflow-hidden h-full  max-h-[350px] w-full">
           <Image src={MI6} className="w-full object-cover object-top" alt="testifier" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
