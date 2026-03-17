"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HS4 from "@/assets/images/HS4.png";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import { Col, Modal, Row } from "antd";
import wedding_icon from "@/assets/svgs/wedding_icon.svg";
import kids_icon from "@/assets/svgs/kids_icon.svg";
import lifestyle_icon from "@/assets/svgs/lifestyle_icon.svg";
import videography_icon from "@/assets/svgs/videography_icon.svg";
import makeup_icon from "@/assets/svgs/makeup_icon.svg";
import birthday_icon from "@/assets/svgs/birthday_icon.svg";
import family_icon from "@/assets/svgs/makeup_icon.svg";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";
import { ContactBanner } from "@/components/banner/contact-banner";
import { ContactFrom } from "@/components/contact-form/contact-form";
import { apiCall } from "@/axios/axios";
import {
  PackageCardWithOneImage,
  PackageCardWithMultipleImages,
} from "@/components/packages-new-card/packages-new-card";
import { ParallaxScrollax } from "@/components/parallax-scrollax-banner/parallax-scrollax";
import { FooterImages } from "@/components/footer-images/footer-images";
import { Footer } from "@/components/footer/footer";
import { ServiceCard } from "@/components/cascade-card/service-card";
import { NewServiceCard } from "@/components/packages-new-card/service-card";

interface PackageOption {
  name: string;
  price: number;
  description: string;
}

interface ImageType {
  serviceId: string;
  imageUrl: string;
  id: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string;
  lastModified: string;
  imageCount: number;
  images: ImageType[];
}

const Portfolio = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isSessionFormModalOpen, setIsSessionFormModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const serviceIcons: { [key: string]: any } = {
    wedding: wedding_icon,
    birthday: birthday_icon,
    videography: videography_icon,
    kids: kids_icon,
    lifestyle: lifestyle_icon,
    makeup: makeup_icon,
    family: family_icon,
  };

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
    // setTimeout(() => {
    //   setIsThankYouModalOpen(false);
    // }, 3000);
  };

  const fetchServices = async () => {
    try {
      const serviceRes = await apiCall("get", "/Admin/Services");
      const servicesData = serviceRes.data;
      console.log(servicesData, "Services data here");
      // Reorder based on priority
      const order = [ 'wedding' ,"portrait", "maternity", "kids", "event", "brand"];

      const orderedServices = servicesData.sort((a, b) => {
        const aIndex = order.indexOf(a.tags.toLowerCase());
        const bIndex = order.indexOf(b.tags.toLowerCase());

        // If both tags exist in the order, sort by their position in the order
        if (aIndex !== -1 && bIndex !== -1) {
          return aIndex - bIndex;
        }

        // If one or both tags are not found, move them to the end
        if (aIndex === -1 && bIndex !== -1) {
          return 1;
        } else if (aIndex !== -1 && bIndex === -1) {
          return -1;
        }

        return 0; // If both are not in the order, leave them as is
      });
      setServices(orderedServices);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="px-5 lg:px-14 3xl:px-28!">
          <div className="flex flex-col mt-28 lg:mt-48 gap-8 lg:gap-0 lg:flex-row justify-between w-full lg:items-center">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <h2 className="text-5xl lg:text-7xl">Explore my</h2>
              <div className="flex gap-5 items-center">
                <span>
                  <Image
                    src={HS4}
                    className="rounded-full object-cover object-top w-37.5 h-20"
                    alt="img"
                  />
                </span>
                <h2 className=" italic text-5xl lg:text-7xl ">Packages</h2>
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
          <div className="scroller !py-14 lg:!py-28" ref={scrollerRef}>
            <ul
              className={` scroller__inner ${
                isSessionFormModalOpen || isThankYouModalOpen
                  ? "pause-scroll"
                  : ""
              }`}
            >
              {[
                ...services,
                ...services,
                ...services,
                ...services,
                ...services,
                ...services,
                ...services,
                ...services,
              ].map((service, index) => {
                const iconKey = service.title.toLowerCase();
                const icon = serviceIcons[iconKey];

                return (
                  <li
                    key={`${service.title}-${index}`}
                    onClick={() => showModal(service.title)}
                    className="rounded-3xl cursor-pointer border border-off-white py-3 px-6 flex gap-3 items-center"
                  >
                    {icon && (
                      <span>
                        <Image
                          className="w-6 h-6"
                          src={icon}
                          alt={`${iconKey}_icon`}
                        />
                      </span>
                    )}
                    <p className="text-white-100 text-xl">{service.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* NEW CARDS */}
          <div className="pb-20 lg:pb-36 flex flex-col gap-20 ">
            <Row gutter={12}>
              {services.map((item) => {
                return (
                  <Col key={item.id} xs={24} lg={12}>
                    <NewServiceCard item={item} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
      <ParallaxScrollax />
      <FooterImages />
      <Footer />
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
