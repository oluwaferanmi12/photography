import { HeaderWrapper } from "@/components/headerWrapper/header-wrapper";
import { Col, Row } from "antd";
import React from "react";
import Image from "next/image";
import aboutPageImg from "@/assets/images/about-page-img1.png";
import image2 from "@/assets/images/about-secondImg.png";
import image3 from "@/assets/images/about-thirdImg.png";
import customersIcon from "@/assets/svgs/customers-icon.svg";
import webIcon from "@/assets/svgs/satisfaction-icon.svg";
import experienceIcon from "@/assets/svgs/experience-icon.svg";
import { AboutCards } from "@/components/about-cards/aboutCards";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";

const page = () => {
  return (
    <div>
      <HeaderWrapper headerTitle="About Portable hub" />
      {/* SECOND SECTION */}
      <div>
        <Row>
          <Col xs={24}>
            <div className="flex flex-col justify-center items-center">
              <div className="lg:w-[30%] flex flex-col gap-5 justify-center items-center">
                <p className="text-4xl font-grotesk-medium text-center">
                  Where Passion Meets Perfection Through the Lens
                </p>
                <span>
                  <Image src={aboutPageImg} height={300} alt="about_img" />
                </span>
                <p className="text-2xl font-grotesk-medium text-center">
                  At ShotByPortable, storytelling is at the heart of everything
                  we do. With a decade of experience in photography and
                  cinematography, we craft visuals that captivate, inspire, and
                  leave a lasting impact.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* THIRD SECTION */}
      <div className="p-7 py-12">
        <div>
          <div className="flex justify-between items-stretch gap-4">
            {/* Large Image */}
            <span className="w-[75%]">
              <Image
                src={image2}
                alt="img"
                className="w-full max-h-[600px] object-cover"
              />
            </span>

            {/* Smaller Stacked Images */}
            <div className="flex flex-col gap-5">
              <span className="w-full">
                <Image
                  src={image3}
                  alt="img"
                  className="w-full max-h-[290px] object-contain"
                />
              </span>
              <span className="w-full">
                <Image
                  src={image3}
                  alt="img"
                  className="w-full max-h-[290px] object-contain"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FOURTH SECTION */}
      <div className="p-7 py-28   ">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-7xl w-1/2 uppercase">
              Key Reasons to Work with me
            </p>
          </div>

          <span className="text-[#6B7280]">
            <p className="text-xl">
              Whatever your customers&apos; payment preferences
            </p>
            <p className="text-xl">
              we’ll help you find the right solution for{" "}
            </p>
            <p className="text-xl">your business.</p>
          </span>
        </div>
      </div>

      {/* FIFTH SECTION */}
      <div className="p-7 flex justify-between items-start">
        <AboutCards
          tagText="Customers"
          iconSrc={customersIcon}
          numberCount="20K"
          numberAttribute="+"
          cardText="In 38 countries, we work as one global team to help clients"
        />

        <AboutCards
          tagText="Satisfaction"
          iconSrc={webIcon}
          numberCount="98"
          numberAttribute="%"
          cardText="In 38 countries, we work as one global team to help clients"
        />

        <AboutCards
          tagText="Experience"
          iconSrc={experienceIcon}
          numberCount="89"
          numberAttribute="%"
          cardText="We started with a ebellious mindset and set ourselves the challange"
        />
      </div>

      {/* SIXTH SECTION */}
      <GalleryBox />
      <Footer />
    </div>
  );
};

export default page;
