import React from 'react';
import { Col, Row } from "antd";
import Image from "next/image";
import sixthImage1 from "@/assets/images/sixth-section-image1.png";
import sixthImage2 from "@/assets/images/sixth-section-image2.png";
import sixthImage3 from "@/assets/images/sixth-section-image3.png";
import sixthImage4 from "@/assets/images/sixth-section-image3.png";
import sixthImage5 from "@/assets/images/sixth-section-image5.png";
import sixthImage6 from "@/assets/images/sixth-section-image6.png";

export const GalleryBox = () => {
  return (
   <>
     <div className="px-7 pt-7 my-20 bg-[#0A0909]">
        <Row justify={"center"} gutter={[32, 32]}>
          <Col xs={6}>
            <div className="grid grid-cols-2 gap-4 pb-7">
              <Image className="w-full object-cover" src={sixthImage1} alt="" />
              <div></div>
              <div></div>
              <Image className="w-full object-cover" src={sixthImage2} alt="" />
              <Image className="w-full object-cover" src={sixthImage3} alt="" />
              <div></div>
              <div></div>
              <Image className="w-full object-cover" src={sixthImage4} alt="" />
            </div>
          </Col>
          <Col xs={12} className="relative">
            <div className="flex items-center justify-center">
              <span>
                <Image
                  className="w-full h-[200px] object-cover"
                  src={sixthImage5}

                  alt=""
                />
              </span>
            </div>

            <div className="flex justify-center items-end xl:mt-10">
              <div>
                <div className="text-4xl lg:text-5xl text-center text-white ">
                  <p>Wherever You Go, I’ll Be</p>{" "}
                  <p className="my-3"> There to Shoot!</p>{" "}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <span className="absolute bottom-0 ">
                <Image
                  className="w-full object-cover h-auto"
                  src={sixthImage6}
                  alt=""
                />
              </span>
            </div>
          </Col>
          <Col xs={6}>
            <div className="grid grid-cols-2 gap-4 pb-7">
              <div></div>
              <Image className="w-full object-cover" src={sixthImage1} alt="" />
              <Image className="w-full object-cover" src={sixthImage2} alt="" />
              <div></div>
              <div></div>
              <Image className="w-full object-cover" src={sixthImage3} alt="" />
              <Image className="w-full object-cover" src={sixthImage4} alt="" />
              <div></div>
            </div>
          </Col>
        </Row>
      </div>
   </>
  )
}
