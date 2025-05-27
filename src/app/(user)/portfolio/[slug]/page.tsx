"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { PlanCards } from "@/components/plans-card/PlanCards";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import InfiniteCarousel from "@/components/unending-carousel/unending-carousel";
import { Banner } from "@/components/banner/banner";
import Button from "@/components/button/button";
import Image from "next/image";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import { Modal } from "antd";
import { ContactFrom } from "@/components/contact-form/contact-form";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";

const SinglePackages = () => {
  const { slug } = useParams();
  const [isSessionFormModalOpen, setIsSessionFormModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const showModal = (service) => {
    setSelectedService(service);
    setIsSessionFormModalOpen(true);
  };

  const handleCancel = () => {
    setIsSessionFormModalOpen(false);
  };
  // Submit form onClick
  const handleReserveSpot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSessionFormModalOpen(false);
    setIsThankYouModalOpen(true); // Open the thank you modal
  };

  return (
    <div>
      <div className="px-5 pt-36  lg:px-14 3xl:!px-28">
        <div>
          <p className="text-[#FBFAF7] capitalize font-playfair text-5xl lg:text-6xl">
            {" "}
            {slug}{" "}
          </p>
          <p className="text-[#C3C3C2] text-base lg:text-lg w-full md:!w-[90%] 3xl:!w-1/2">
            From polished headshots to soulful lifestyle captures, I craft
            images that do more than just “look good” . They speak volumes.
            Whether for personal branding, professional needs, or intimate
            memories, every photo session is a curated experience.
          </p>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div className="flex flex-wrap gap-y-5 gap-3">
            <Button
              variant="filled"
              onClick={() => showModal(`${slug}`)}
              text={`Book a ${slug} session`}
            />
            <Button
              variant="bordered"
              size={"medium"}
              textColor="text-white"
              borderVariant="light"
              text={`See pricing`}
            />
          </div>
          <span className="hidden lg:flex">
            <Image
              src={rollingImage}
              className="imageRotate"
              alt="rollingImage"
            />
          </span>
        </div>
      </div>
      <div className="pb-28">
        <InfiniteCarousel />
      </div>
      <div className="p-5 lg:p-14 3xl:!px-28">
        <Banner />
      </div>

      <div className="flex flex-col gap-14 justify-center items-center">
        <div className="flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28">
          {/* Package Section */}
          <div>
            <h3 className=" text-5xl lg:text-7xl capitalize ">
              {slug} Packages
            </h3>
            <div className="mt-10">
              <PlanCards />
            </div>
          </div>
        </div>
      </div>

      <GalleryBox />
      <Footer />

      {/* MODAL */}
      <Modal
        open={isSessionFormModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="sessionForm_modal"
        closeIcon={null}
        width={800}
        centered
      >
        <ContactFrom
          onSubmit={handleReserveSpot}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </Modal>
      {/* AFTER FORM FILLING MODAL */}
      <Modal
        open={isThankYouModalOpen}
        onCancel={() => setIsThankYouModalOpen(false)}
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
                Thank you for your reservation
              </h3>
            </div>
            <span>
              <Image
                src={rollingImage}
                className="w-28 h-28"
                alt="rollingImage"
              />
            </span>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <p className="text-sm text-light-brown">
              Thank you for reserving a spot with me, I will check my
              availability and respond to your booking in less than 24hrs, If
              confirmed you will receive a payment link and a confirmation email
              from me, Please watch out for your junks and texts.
            </p>
            <div>
              <p className="text-light-brown text-sm">yours sincerely</p>
              <p className="text-[#5A5A50] text-sm font-valentiamo-reg">
                shotbyportable
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SinglePackages;
