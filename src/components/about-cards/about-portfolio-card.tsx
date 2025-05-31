import { Col, Row } from "antd";
import React from "react";
import MI6 from "@/assets/images/about_testifierCard2.jpg";
import Image from "next/image";


export const AboutPortfolioCard = () => {
  return (
    <div className="px-14 py-28 bg-[#222222] ">
      <Row>
        <Col xs={24} lg={12}>
          <div className="flex flex-col justify-between h-[550px]">
            <p className="text-[#EAE5DC] text-4xl w-[80%] ">
              “<span className="font-semibold">Hello, Madam Portable</span> —
              this is a job well done. Every minute of the event was beautifully
              captured. I could feel the whole day again just by watching. Great
              job!”.
            </p>
            <p className="font-playfair uppercase text-lg">Happy client</p>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="overflow-hidden h-[550px] w-full">
           <Image src={MI6} className="w-full object-cover" alt="testifier" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
