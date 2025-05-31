"use client";

import React, { useEffect, useRef, useState } from "react";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
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
import { PlanCards } from "@/components/plans-card/PlanCards";
import { ContactBanner } from "@/components/banner/contact-banner";
import { ContactFrom } from "@/components/contact-form/contact-form";
import { PlanCardProps } from "@/components/plans-card/PlanCardProps";
import { apiCall } from "@/axios/axios";
import { PackagesNewCard } from "@/components/packages-new-card/packages-new-card";
import { Trail } from "@/components/packages-new-card/trail";

interface PackageOption {
  name: string;
  price: string;
  description: string;
}

interface Service {
  id: string;
  serviceName: string;
  packages: PackageOption[];
  status: boolean;
  lastUpdated: string;
  description: string;
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

  const packages = [
    {
      name: "Basic",
      price: 600,
    },
    {
      name: "Classic",
      price: 600,
    },
    {
      name: "Premium",
      price: 600,
    },
  ];

  const planBenefit = [
    "Consultation call",
    "60 min. session",
    "1 - 2 outfit",
    "max 4 people",
    "10 images professional edited and delivered in an online gallery",
    "$20 per additional image",
    "$50 per additional person",
    "$125 per additional hour",
  ];

  // Fetch services and their packages
  const fetchServices = async () => {
    try {
      const serviceRes = await apiCall("get", "/Admin/Services");
      const servicesData = serviceRes.data;

      console.log("I am service data loooking for service", servicesData);

      // Fetch packages for all services concurrently
      const enrichedServices = await Promise.all(
        servicesData.map(async (service: any) => {
          try {
            const packageRes = await apiCall(
              "get",
              `/Admin/Services/packages/${service.id}`
            );

            const packages = packageRes?.data?.data?.packages || [];

            return {
              id: service.id,
              serviceName: service.title,
              description: service.description,
              packages: packages.map((pkg: any) => ({
                name: pkg.title,
                price: pkg.price,
                description: pkg.description,
              })),
              status: true, // Or derive from API if available
              lastUpdated: new Date(service.lastModified).toDateString(),
            };
          } catch (err) {
            console.error("Error fetching packages:", err);
            return {
              id: service.id,
              serviceName: service.title,
              description: service.description,
              packages: [],
              status: true,
              lastUpdated: new Date(service.lastModified).toDateString(),
            };
          }
        })
      );

      setServices(enrichedServices);
    } catch (error) {
      console.error("Error fetching services:", error);
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
            <ul
              className={`scroller__inner ${
                isSessionFormModalOpen || isThankYouModalOpen
                  ? "pause-scroll"
                  : ""
              }`}
            >
              {[...services, ...services].map((service, index) => {
                const iconKey = service.serviceName.toLowerCase();
                const icon = serviceIcons[iconKey];

                return (
                  <li
                    key={`${service.serviceName}-${index}`}
                    onClick={() => showModal(service.serviceName)}
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
                    <p className="text-white-100 text-xl">
                      {service.serviceName}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* NEW CARDS */}
          <div className="py-36 flex flex-col gap-20">
            {/* <PackagesNewCard /> */}
            <Trail />
          </div>

          {/* Third section */}
          {/* <div className="pb-36 flex flex-col gap-20">
            {services.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-6xl lg:text-7xl">{item.serviceName}</h3>
                <div className="mt-10">
                  <Row gutter={[32, 32]}>
                    {item.packages.map((pkg: any, idx: number) => (
                      <Col key={idx} xs={24} md={12} lg={8}>
                        <PlanCardProps
                          variant="user"
                          planType={pkg.name}
                          planAmount={pkg.price}
                          planDescription={pkg.description}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            ))}
          </div> */}
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
