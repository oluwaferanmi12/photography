"use client"
import React, { useState } from "react";
import mail from "@/assets/svgs/mail.svg";
import arrowRight from "@/assets/svgs/footer-send-arrow.svg";
import footerBrand from "@/assets/svgs/footer-brand-icon.svg";
import Image from "next/image";
import { Col, Modal, Row } from "antd";
import youtubeIcon from "@/assets/svgs/youtubeIcon.svg";
import tiktokIcon from "@/assets/svgs/tiktokIcon.svg";
import linkedinIcon from "@/assets/svgs/linkedinIcon.svg";
import instagramIcon from "@/assets/svgs/instagramIcon.svg";
import facebookIcon from "@/assets/svgs/facebookIcon.svg";
import Link from "next/link";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";

const footerLinks = [
  {
    title: "Company",
    linksProps: [
      {
        footNavTitle: "Home",
        footNavLink: "/",
      },
      {
        footNavTitle: "About us",
        footNavLink: "/about",
      },
      {
        footNavTitle: "Porfolio",
        footNavLink: "/portfolio",
      },
      {
        footNavTitle: "Packages",
        footNavLink: "/packages",
      },
      {
        footNavTitle: "Book a session",
        footNavLink: "/session",
      },
    ],
  },
  {
    title: "Support",
    linksProps: [
      {
        footNavTitle: "Contact us",
        footNavLink: "mailto:bookings@shotbyportable.com",
      },
      {
        footNavTitle: "Terms and condition",
        footNavLink: "",
      },
    ],
  },
];

export const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  return (
    <>
      <Modal
        open={showTerms}
        onCancel={() => setShowTerms(false)}
        footer={null}
        className="sessionForm_modal"
        closeIcon={null}
        width={600}
        centered
      >
        <div className="py-8 px-10 w-full">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-2">
              <span>
                <Image src={bas_thanks} alt="bas" />
              </span>
              <h3 className="font-playfair text-5xl text-white">
                Terms and Condition
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <p className="text-white"> 1 Booking and Image Delivery</p>
            <p className="text-sm text-light-brown">
              - Edited high-resolution images will be delivered within 7 to 10
              business days after you have completed your image selection.
            </p>
            <p className="text-sm text-light-brown">
              - This timeline begins from the date your selections are received.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <p className="text-white"> 2 Cancellations</p>
            <p className="text-sm text-light-brown">
              - To avoid a cancellation fee, clients must notify us at least 48
              hours in advance if they wish to cancel a session.
            </p>
            <p className="text-sm text-light-brown">
              - If full payment has already been made and cancellation occurs
              with less than 48 hours’ notice, a cancellation fee may apply.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <p className="text-white"> 3 Deposits</p>
            <p className="text-sm text-light-brown">
              - All deposits are non-refundable and non-transferable, regardless
              of circumstances
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <p className="text-white"> 4 Late arrivals</p>
            <p className="text-sm text-light-brown">
              - Clients are allowed a 15-minute grace period after the scheduled
              start time.
            </p>
            <p className="text-sm text-light-brown">
              - A late fee of $20 will be added to your total if you arrive more
              than 15 minutes late.
            </p>
            <p className="text-sm text-light-brown">
              - Sessions will be automatically cancelled after 30 minutes of
              no-show, and the deposit
            </p>
          </div>

          <div className="mt-3">
            <p className="text-light-brown text-sm">yours sincerely</p>
            <p className="text-[#5A5A50] text-sm font-valentiamo-reg">
              shotbyportable
            </p>
          </div>
        </div>
      </Modal>
      <div className="bg-[#282824] w-full  px-5 lg:px-20 py-20">
        <div className="flex flex-col gap-6 lg:flex-row justify-between">
          <div className="flex 3xl:w-1/2 flex-col gap-3">
            <h3 className="text-5xl font-normal">Your moment, forever </h3>
            <p className="text-base text-white/60">
              From first call to final gallery, I’m here to make it easy and
              meaningful.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#FFF8F2] tracking-wide text-xl font-semibold">
              Subscribe to our newletter
            </p>
            <div className="w-full items-center flex gap-4 border-b-2 border-bayfi-grey pb-3">
              <div className="flex gap-3 w-full items-center">
                <span>
                  <Image src={mail} className="w-4 h-4" alt="mail" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border-0 focus:border-0 text-[#FFF8F2] text-xl placeholder:text-[#FFF8F2] focus:outline-none bg-transparent"
                />
              </div>

              <span>
                <Image
                  src={arrowRight}
                  className="cursor-pointer hover:border-4 hover:border-light-brown rounded-full"
                  alt="arrowRight"
                />
              </span>
            </div>
          </div>
        </div>
        <hr className="border-white/10 my-16" />
        <Row gutter={[32, 32]}>
          <Col xs={24} lg={10}>
            <div className="pt-10 flex flex-col gap-4">
              <span>
                <Image src={footerBrand} alt="brand_logo" />
              </span>
              <p className="text-white/60 text-lg w-[80%]">
                For those who want more than just a photo. I help you pause
                time, preserve your story and remember how it felt.
              </p>
            </div>
          </Col>
          <Col xs={24} lg={14}>
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-wrap gap-5 lg:gap-0  w-full justify-between pt-10 text-[#3C3C3B]">
                {footerLinks.map((section, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <h2 className="text-[#FFF8F2] uppercase font-semibold text-xl   ">
                      {" "}
                      {section.title}{" "}
                    </h2>
                    {section.linksProps.map((footerItems, idx) => (
                      <span key={idx}>
                        {footerItems.footNavTitle.includes("contact") ? (
                          <a href="mailto:bookings@shotbyportable.com">
                            {footerItems.footNavTitle}
                          </a>
                        ) : footerItems.footNavTitle
                            .toLowerCase()
                            .includes("condition") ? (
                          <div
                            onClick={() => {
                              setShowTerms(true);
                            }}
                            className="!text-white/60 text-base cursor-pointer"
                          >
                            {footerItems.footNavTitle}
                          </div>
                        ) : (
                          <Link
                            className="!text-white/60 text-base"
                            href={`${footerItems.footNavLink}`}
                          >
                            {footerItems.footNavTitle}
                          </Link>
                        )}
                      </span>
                    ))}
                  </div>
                ))}
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#FFF8F2] font-semibold text-xl   ">
                    Follow us
                  </h2>
                  <div className="flex gap-3 items-center">
                    <Link href="https://www.youtube.com/@Shotbyportable">
                      <Image
                        className="cursor-pointer"
                        src={youtubeIcon}
                        alt="social_links"
                      />
                    </Link>
                    <Link href="https://www.tiktok.com/@shotbyportable">
                      <Image
                        className="cursor-pointer"
                        src={tiktokIcon}
                        alt="social_links"
                      />
                    </Link>
                    <Link href="https://www.linkedin.com/in/victoria-akinade-402944175/">
                      <Image
                        className="cursor-pointer"
                        src={linkedinIcon}
                        alt="social_links"
                      />
                    </Link>
                    <Link href="https://www.instagram.com/shotbyportable/">
                      <Image
                        className="cursor-pointer"
                        src={instagramIcon}
                        alt="social_links"
                      />
                    </Link>
                    <Link href="https://www.facebook.com/victhoria.hajarlah">
                      <Image
                        className="cursor-pointer"
                        src={facebookIcon}
                        alt="social_links"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
