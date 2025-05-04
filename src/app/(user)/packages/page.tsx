"use client";

import React, { useRef, useState } from "react";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import Image from "next/image";
import HS4 from "@/assets/images/HS4.png";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import { Modal} from "antd";
import wedding_icon from "@/assets/svgs/wedding_icon.svg";
import kids_icon from "@/assets/svgs/kids_icon.svg";
import lifestyle_icon from "@/assets/svgs/lifestyle_icon.svg";
import videography_icon from "@/assets/svgs/videography_icon.svg";
import makeup_icon from "@/assets/svgs/makeup_icon.svg";
import birthday_icon from "@/assets/svgs/birthday_icon.svg";
import family_icon from "@/assets/svgs/makeup_icon.svg";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";
import { PlanCards } from "@/components/plans-card/PlanCards";
import { ContactBanner } from "@/components/banner/contact-banner";
import { ContactFrom } from "@/components/contact-form/contact-form";

const Portfolio = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
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

  const services = [
    { label: "Weddings", value: "wedding" },
    { label: "Birthdays", value: "birthday" },
    { label: "Videography", value: "videography" },
    { label: "Kids & infants", value: "kids" },
    { label: "Lifestyle & events", value: "lifestyle" },
    { label: "Make up & Gele", value: "makeup" },
    { label: "Family", value: "family" },
  ];

  const packages = [
    { label: "Basic", value: "Basic ($400 plus tax)" },
    { label: "Premium", value: "Premium ($900 plus tax)" },
    { label: "Pro+", value: "Pro+ ($1500 plus tax)" },
  ];

  // Submit form onClick
  const handleReserveSpot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSessionFormModalOpen(false);
    setIsThankYouModalOpen(true); // Open the thank you modal
    // setTimeout(() => {
    //   setIsThankYouModalOpen(false);
    // }, 3000);
  };

  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="px-5 lg:px-14 3xl:!px-28">
          <div className="flex flex-col mt-28 lg:mt-48 gap-8 lg:gap-0 lg:flex-row justify-between w-full lg:items-center">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <h2 className="text-7xl">Explore my</h2>
              <div className="flex gap-5 items-center">
                <span>
                  <Image
                    src={HS4}
                    className="rounded-full object-cover w-[150px] h-[80px]"
                    alt="img"
                  />
                </span>
                <h2 className=" italic text-7xl ">Packages</h2>
              </div>
            </div>
            <div className="lg:w-[70%] text-xl text-light-brown">
              <p>
                From polished headshots to soulful lifestyle captures, I craft
                images that do more than just “look good” . They speak volumes.
                Whether for personal branding, professional needs, or intimate
                memories, every photo session is a curated experience.
              </p>
            </div>
          </div>
          <div className="scroller !py-28" ref={scrollerRef}>
            <ul className={`scroller__inner ${isSessionFormModalOpen || isThankYouModalOpen ? "pause-scroll" : ""}`}>
              <li
                onClick={() => showModal("wedding")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image className="w-full h-full" src={wedding_icon} alt="" />
                </span>
                <p className="text-white-100 text-xl">Weddings</p>
              </li>
              <li
                onClick={() => showModal("birthday")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image className="w-full h-full" src={birthday_icon} alt="" />
                </span>
                <p className="text-white-100 text-xl">Birthdays</p>
              </li>
              <li
                onClick={() => showModal("videography")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image
                    className="w-full h-full"
                    src={videography_icon}
                    alt=""
                  />
                </span>
                <p className="text-white-100 text-xl">Videography</p>
              </li>
              <li
                onClick={() => showModal("kids")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image className="w-full h-full" src={kids_icon} alt="" />
                </span>
                <p className="text-white-100 text-xl">Kids & infants</p>
              </li>
              <li
                onClick={() => showModal("lifestyle")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image
                    className="w-full h-full"
                    src={lifestyle_icon}
                    alt=""
                  />
                </span>
                <p className="text-white-100 text-xl">Lifestyle & events</p>
              </li>
              <li
                onClick={() => showModal("makeup")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image className="w-full h-full" src={makeup_icon} alt="" />
                </span>
                <p className="text-white-100 text-xl">Make up & Gele</p>
              </li>
              <li
                onClick={() => showModal("family")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image className="w-full h-full" src={family_icon} alt="" />
                </span>
                <p className="text-white-100 text-xl">Family</p>
              </li>

              <li
                onClick={() => showModal("wedding")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image className="w-full h-full" src={wedding_icon} alt="" />
                </span>
                <p className="text-white-100 text-xl">Weddings</p>
              </li>
              <li
                onClick={() => showModal("birthday")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image className="w-full h-full" src={birthday_icon} alt="" />
                </span>
                <p className="text-white-100 text-xl">Birthdays</p>
              </li>
              <li
                onClick={() => showModal("videography")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image
                    className="w-full h-full"
                    src={videography_icon}
                    alt=""
                  />
                </span>
                <p className="text-white-100 text-xl">Videography</p>
              </li>
              <li
                onClick={() => showModal("kids")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image className="w-full h-full" src={kids_icon} alt="" />
                </span>
                <p className="text-white-100 text-xl">Kids & infants</p>
              </li>
              <li
                onClick={() => showModal("lifestyle")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image
                    className="w-full h-full"
                    src={lifestyle_icon}
                    alt=""
                  />
                </span>
                <p className="text-white-100 text-xl">Lifestyle & events</p>
              </li>
              <li
                onClick={() => showModal("makeup")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image className="w-full h-full" src={makeup_icon} alt="" />
                </span>
                <p className="text-white-100 text-xl">Make up & Gele</p>
              </li>
              <li
                onClick={() => showModal("family")}
                className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center "
              >
                <span>
                  <Image className="w-full h-full" src={family_icon} alt="" />
                </span>
                <p className="text-white-100 text-xl">Family</p>
              </li>
            </ul>
          </div>

          {/* Third section */}
          <div className="pb-36 flex flex-col gap-20">
            <div>
              <h3 className="lg:w-[25%] text-6xl lg:text-7xl">Weddings</h3>
              <div className="mt-10">
                <PlanCards />
              </div>
            </div>
            <div>
              <h3 className="lg:w-[25%] text-6xl lg:text-7xl">Birthdays</h3>
              <div className="mt-10">
                <PlanCards />
              </div>
            </div>
            <div>
              <h3 className="lg:w-[25%] text-6xl lg:text-7xl">
                Kids & infants
              </h3>
              <div className="mt-10">
                <PlanCards />
              </div>
            </div>
            <div>
              <h3 className="lg:w-[25%] text-6xl lg:text-7xl">
                Kids & infants
              </h3>
              <div className="mt-10">
                <PlanCards />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-14 3xl:!px-28">
        {/* contact banner */}
        <ContactBanner />
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

export default Portfolio;
