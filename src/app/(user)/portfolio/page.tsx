"use client";

import React from "react";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import { Banner } from "@/components/banner/banner";
import Image from "next/image";
import Button from "@/components/button/button";
import HS4 from "@/assets/images/HS4.png";
import jorImage from "@/assets/images/jorImage.jpeg";
import HS3 from "@/assets/images/HS3.png";
import HS6 from "@/assets/images/HS6.png";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import bg_image from "@/assets/images/body_background.png";

const Portfolio = () => {
  const services = [
    {
      title: "Weddings",
      image: HS4,
      bg: "#EFFBF9",
      description:
        "Elegant and timeless wedding photography that captures the love, joy, and unforgettable moments of your special day.",
      cta: "View Weddings",
    },
    {
      title: "Birthdays",
      image: HS3,
      bg: "#FFF5E5",
      description:
        "Celebrate another trip around the sun with vibrant, fun, and candid shots that showcase the energy and excitement of the moment.",
      cta: "View Birthdays",
    },
    {
      title: "Lifestyle and Others",
      image: HS3,
      bg: "#F0F9FF",
      description:
        "From stylish lifestyle shoots to creative concepts, I bring ideas to life with depth, color, and meaning.",
      cta: "View Lifestyle",
    },
    {
      title: "Kids",
      image: jorImage,
      bg: "#F5F0FF",
      description:
        "Playful and tender portraits of your little ones — capturing their personalities and milestones as they grow.",
      cta: "View Kids",
    },
    {
      title: "Videography",
      image: HS6,
      bg: "#F0F9FF",
      description:
        "From stylish lifestyle shoots to creative concepts, I bring ideas to life with depth, color, and meaning.",
      cta: "View Lifestyle",
    },
    {
      title: "Makeup and Gele",
      image: HS3,
      bg: "#F0F9FF",
      description:
        "From stylish lifestyle shoots to creative concepts, I bring ideas to life with depth, color, and meaning.",
      cta: "View Lifestyle",
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="px-5 lg:px-14 3xl:px-28">
          <div className="flex flex-col mt-28 lg:mt-48 lg:flex-row lg:justify-between items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-7xl">Explore my</h2>
              <div className="flex gap-5 items-center">
                <span>
                  <Image
                    src={HS4}
                    className="rounded-full object-cover w-[200px] h-[100px]"
                    alt="img"
                  />
                </span>
                <h2 className=" italic text-7xl ">Portfolio</h2>
              </div>
            </div>
            <span className="hidden lg:flex">
              <Image src={rollingImage} className="imageRotate"  alt="rollingImage" />
            </span>
          </div>
          <div className="my-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                {services
                  .filter((_, i) => i % 2 === 0)
                  .map((service, i) => (
                    <div
                      key={`left-${i}`}
                      className="flex flex-col justify-between rounded-xl shadow-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-[1.01] h-[400px] w-full"
                      style={{ backgroundColor: service.bg }}
                    >
                      <span className="w-full overflow-hidden rounded-xl mb-4">
                        <Image
                          src={service.image}
                          alt={service.title}
                          className="w-full object-cover"
                        />
                      </span>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-xl font-semibold text-black">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-800 mt-2 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <Button variant="filled" text={service.cta} />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Column 2 with mt-20 */}
              <div className="flex flex-col gap-6 lg:mt-20">
                {services
                  .filter((_, i) => i % 2 !== 0)
                  .map((service, i) => (
                    <div
                      key={`right-${i}`}
                      className="flex flex-col justify-between rounded-xl shadow-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-[1.01] h-[400px] w-full"
                      style={{ backgroundColor: service.bg }}
                    >
                      <div className="w-full overflow-hidden rounded-xl mb-4">
                        <Image
                          src={service.image}
                          alt={service.title}
                          className="w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-xl font-semibold text-black">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-800 mt-2 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <Button variant="filled" text={service.cta} />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/*  */}
          </div>

          {/* text */}
          <div className="flex flex-col w-full lg:flex-row justify-between ">
            <div>
              <h3 className="text-5xl 3xl:text-8xl text-white lg:w-1/2">
                100% Satisfaction
              </h3>
            </div>
            <div>
              <h3 className="text-5xl 3xl:text-8xl text-white ">
                Seamless Booking
              </h3>
            </div>
          </div>
          {/* BANNER */}
          <div className="my-36">
            <Banner />
          </div>
        </div>
      </div>

      <GalleryBox />
      <Footer />
    </div>
  );
};

export default Portfolio;
