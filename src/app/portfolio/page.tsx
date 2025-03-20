"use client";

import React, { useState } from "react";
import { HeaderWrapper } from "@/components/headerWrapper/header-wrapper";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import { Col, Row } from "antd";
import Button from "@/components/button/button";
import Image from "next/image";
import imgBig from "@/assets/images/portfolioBig1.png";
import portfolioImage1 from "@/assets/images/thumbnail1.png";
import portfolioImage2 from "@/assets/images/thumbnail2.png";
import portfolioImage3 from "@/assets/images/thumbnail6.png";
import portfolioImage4 from "@/assets/images/thumbnail3.png";
import portfolioImage5 from "@/assets/images/thumbnail4.png";
import portfolioImage6 from "@/assets/images/thumbnail5.png";

const Portfolio = () => {
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  const portfolioData = [
    {
      portfolioName: "Wedding",
      portfolioDescription:
        "There’s something peaceful about hitting the waves and getting away from the screen. There’s something peaceful about hitting the waves and getting away from the screen.",
    },
    {
      portfolioName: "Ceremony",
      portfolioDescription:
        "There’s something peaceful about hitting the waves and getting away from the screen. There’s something peaceful about hitting the waves and getting away from the screen.",
    },
    {
      portfolioName: "Events",
      portfolioDescription:
        "There’s something peaceful about hitting the waves and getting away from the screen. There’s something peaceful about hitting the waves and getting away from the screen.",
    },
    {
      portfolioName: "Engagement",
      portfolioDescription:
        "There’s something peaceful about hitting the waves and getting away from the screen. There’s something peaceful about hitting the waves and getting away from the screen.",
    },
    {
      portfolioName: "Branding",
      portfolioDescription:
        "There’s something peaceful about hitting the waves and getting away from the screen. There’s something peaceful about hitting the waves and getting away from the screen.",
    },
  ];

  return (
    <div>
      <HeaderWrapper headerTitle="Portfolio" landingBg="catalogueBG" />
      <div className="p-7">
        <Row justify={"center"}>
          <Col xs={18}>
            <Row justify={"center"} align={"middle"}>
              <Col xs={12}>
                <div className="flex items-stretch  gap-8">
                  <div className="flex flex-col gap-2">
                    {portfolioData.map((_, index) => (
                      <div
                        key={index}
                        className={`w-1 h-10 rounded-lg cursor-pointer ${
                          portfolioIndex === index
                            ? "bg-[#FB5711]"
                            : "bg-[#DCDCDC] "
                        } `}
                        onClick={() => setPortfolioIndex(index)}
                      ></div>
                    ))}
                  </div>
                  <div className="flex gap-8 flex-col">
                    <h3 className="text-4xl font-semibold text-[#FB5711]">
                      {portfolioData[portfolioIndex].portfolioName}
                    </h3>
                    <p className="text-[#3C3C3B] text-xl">
                      {portfolioData[portfolioIndex].portfolioDescription}
                    </p>
                    <div>
                      <Button variant="filled" size="medium">
                        View Catalogue
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="w-full">
                  <div className="w-full bg-yellow-800">
                    <Image src={imgBig} className="w-full" alt="portfolioImg" />
                  </div>
                  <div className="flex mt-5 justify-between ">
                    <Image src={portfolioImage1} alt="portfolioImg" />
                    <Image src={portfolioImage2} alt="portfolioImg" />
                    <Image src={portfolioImage3} alt="portfolioImg" />
                    <Image src={portfolioImage4} alt="portfolioImg" />
                    <Image src={portfolioImage5} alt="portfolioImg" />
                    <Image src={portfolioImage6} alt="portfolioImg" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <GalleryBox />
      <Footer />
    </div>
  );
};

export default Portfolio;
