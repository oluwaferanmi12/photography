import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import brandLogo from "@/assets/svgs/footer-brand-logo.svg";
import youtubeIcon from "@/assets/svgs/youtubeIcon.svg";
import tiktokIcon from "@/assets/svgs/tiktokIcon.svg";
import linkedinIcon from "@/assets/svgs/linkedinIcon.svg";
import instagramIcon from "@/assets/svgs/instagramIcon.svg";
import facebookIcon from "@/assets/svgs/facebookIcon.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full px-7 pt-20 bg-[#D9C9AE] text-[#3C3C3B] h-full">
      <Row>
        <Col xs={24}>
          <h3 className="text-center text-6xl pb-12 border-b border-[#EDEDED66]  ">
            hello@Shotbyportable.com
          </h3>
        </Col>
        <Col xs={12}>
          <div className="pt-10">
            <span>
              <Image src={brandLogo} alt="brand_logo" />
            </span>
            <p>475 Cherry Dr, Troy, Michigan Onatario, Canada</p>
            <p>(248) 823-3200</p>
            <div className="flex gap-3 items-center">
              <span>
                <Image src={youtubeIcon} alt="social_links" />
              </span>
              <span>
                <Image src={tiktokIcon} alt="social_links" />
              </span>
              <span>
                <Image src={linkedinIcon} alt="social_links" />
              </span>
              <span>
                <Image src={instagramIcon} alt="social_links" />
              </span>
              <span>
                <Image src={facebookIcon} alt="social_links" />
              </span>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className="flex justify-between pt-10 text-[#3C3C3B]">
            <div className="flex flex-col gap-4">
              <span>
                <Link href={"/"}>Company</Link>
              </span>
              <span>
                <Link href={"/"}>Features</Link>
              </span>
              <span>
                <Link href={"/"}>Pricing</Link>
              </span>
              <span>
                <Link href={"/"}>About Us</Link>
              </span>
              <span>
                <Link href={"/"}>Contact</Link>
              </span>
              <span>
                <Link href={"/"}>Pricing</Link>
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span>
                <Link href={"/"}>Resource</Link>
              </span>
              <span>
                <Link href={"/"}>Blog</Link>
              </span>
              <span>
                <Link href={"/"}>Customer Stories</Link>
              </span>
              <span>
                <Link href={"/"}>Information</Link>
              </span>
              <span>
                <Link href={"/"}>Legal</Link>
              </span>
              <span>
                <Link href={"/"}>Payments</Link>
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span>
                <Link href={"/"}>Help</Link>
              </span>
              <span>
                <Link href={"/"}>FAQ</Link>
              </span>
              <span>
                <Link href={"/"}>Help Center</Link>
              </span>
              <span>
                <Link href={"/"}>Supoort</Link>
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24}>
          <p className="text-white/30 text-9xl py-12 border-b border-[#EDEDED66]">
            ©Shotbyportable
          </p>
        </Col>
       
      </Row>
      <div className="flex justify-between py-5 text-base items-center">
          <p>© Copyright 2025, All Rights Reserved</p>
          <div className="flex gap-5 items-center">
            <p>Term of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
    </div>
  );
};
