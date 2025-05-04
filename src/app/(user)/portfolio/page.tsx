"use client";

import React, { useRef } from "react";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import { Banner } from "@/components/banner/banner";
import Image from "next/image";
import Button from "@/components/button/button";
import wedding from "@/assets/svgs/portfolio_svgs/wedding.svg";
import birthdays from "@/assets/svgs/portfolio_svgs/birthdays.svg";
import lifestyle from "@/assets/svgs/portfolio_svgs/lifestyle.svg";
import family from "@/assets/svgs/portfolio_svgs/family.svg";
import videography from "@/assets/svgs/portfolio_svgs/videography.svg";
import kids from "@/assets/svgs/portfolio_svgs/kids.svg";
import pregnancy from "@/assets/svgs/portfolio_svgs/pregnancy.svg";
import portrait from "@/assets/svgs/portfolio_svgs/portrait.svg";
import short_img from "@/assets/images/portfolio_images/short_img.jpg";
import rollingImage from "@/assets/svgs/rollingImage.svg";

const Portfolio = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Weddings",
      image: wedding,
      bg: "#EFFBF9",
      description:
        "From polished headshots to soulful lifestyle captures, I craft images that do more than just “look good” . They speak volumes. Whether for personal branding, professional needs, or intimate memories, every photo session is a curated experience.",
      cta_href: `/packages/wedding`,
      cta: "View weddings",
    },
    {
      title: "Birthdays",
      image: birthdays,
      bg: "#F9EFFB",
      description:
        "From polished headshots to soulful lifestyle captures, I craft images that do more than just “look good” . They speak volumes. Whether for personal branding, professional needs, or intimate memories, every photo session is a curated experience.",
      cta_href: `/packages/birthday`,
      cta: "View birthdays",
    },
    {
      title: "Lifestyle and events",
      image: lifestyle,
      bg: "#FBEFF2",
      description:
        "From polished headshots to soulful lifestyle captures, I craft images that do more than just “look good”.",
      cta_href: `/packages/lifestyle`,
      cta: "View lifestyle and events",
    },
    {
      title: "Kids and New born",
      image: kids,
      bg: "#FBFBEF",
      description:
        "From polished headshots to soulful lifestyle captures, I craft images that do more than just “look good” . They speak volumes. Whether for personal branding, professional needs, or intimate memories, every photo session is a curated experience.",
      cta_href: `/packages/kids`,
      cta: "View kids",
    },
    {
      title: "Family",
      image: family,
      bg: "#D7D8FF",
      description:
        "From polished headshots to soulful lifestyle captures, I craft images that do more than just “look good” . They speak volumes. Whether for personal branding, professional needs, or intimate memories, every photo session is a curated experience.",
      cta_href: `/packages/family`,
      cta: "View family",
    },
    {
      title: "Pregnancy",
      image: pregnancy,
      bg: "#D7FBFF",
      description:
        "From polished headshots to soulful lifestyle captures, I craft images that do more than just “look good” . They speak volumes. Whether for personal branding, professional needs, or intimate memories, every photo session is a curated experience.",
      cta_href: `/packages/pregnancy`,
      cta: "View pregnancy",
    },
    {
      title: "Videography",
      image: videography,
      bg: "#DDFFD7",
      description:
        "From polished headshots to soulful lifestyle captures, I craft images that do more than just “look good”.",
      cta_href: `/packages/videography`,
      cta: "View videography",
    },
    {
      title: "Portraits",
      image: portrait,
      bg: "#FFF9D7",
      description:
        "From polished headshots to soulful lifestyle captures, I craft images that do more than just “look good” . They speak volumes. Whether for personal branding, professional needs, or intimate memories, every photo session is a curated experience.",
      cta_href: `/packages/portrait`,
      cta: "View portrait",
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="px-5 lg:px-14 3xl:!px-28">
          <div className="flex flex-col mt-28 lg:mt-48 lg:flex-row lg:justify-between items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-7xl">Explore my</h2>
              <div className="flex gap-5 items-center">
                <span>
                  <Image
                    src={short_img}
                    className="rounded-full object-cover w-[200px] h-[100px]"
                    alt="img"
                  />
                </span>
                <h2 className=" italic text-7xl ">Portfolio</h2>
              </div>
            </div>
            <span className="hidden lg:flex">
              <Image
                src={rollingImage}
                className="imageRotate"
                alt="rollingImage"
              />
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
                      className="flex flex-col justify-between rounded-xl shadow-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-[1.01] min-h-[400px] max-h-[600px] w-full"
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
                          <h3 className="text-5xl font-playfair text-darker-grey ">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-800 mt-2 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <Button
                            variant="black"
                            link={service.cta_href}
                            text={service.cta}
                          />
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
                      className="flex flex-col justify-between rounded-xl shadow-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-[1.01] min-h-[400px] max-h-[600px] w-full"
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
                          <h3 className="text-5xl font-playfair text-darker-grey ">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-800 mt-2 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <Button
                            variant="black"
                            link={service.cta_href}
                            text={service.cta}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/*  */}
          </div>

          {/* text */}
      
          <div className="scroller !py-28" ref={scrollerRef}>
            <ul className={`scroller__inner`}>
              <li className="rounded-3xl cursor-pointer py-3 px-6 flex gap-3 items-center ">
                <h3 className="text-5xl 3xl:text-8xl text-white lg:w-1/2">
                  100% Satisfaction
                </h3>
              </li>
              <li className="rounded-3xl cursor-pointer py-3 px-6 flex gap-3 items-center ">
                <h3 className="text-5xl 3xl:text-8xl text-white lg:w-1/2">
                  Seamless Booking
                </h3>
              </li>
              <li className="rounded-3xl cursor-pointer py-3 px-6 flex gap-3 items-center ">
                <h3 className="text-5xl 3xl:text-8xl text-white lg:w-1/2">
                  100% Satisfaction
                </h3>
              </li>
              <li className="rounded-3xl cursor-pointer py-3 px-6 flex gap-3 items-center ">
                <h3 className="text-5xl 3xl:text-8xl text-white lg:w-1/2">
                  Seamless Booking
                </h3>
              </li>
              <li className="rounded-3xl cursor-pointer py-3 px-6 flex gap-3 items-center ">
                <h3 className="text-5xl 3xl:text-8xl text-white lg:w-1/2">
                  100% Satisfaction
                </h3>
              </li>
              <li className="rounded-3xl cursor-pointer py-3 px-6 flex gap-3 items-center ">
                <h3 className="text-5xl 3xl:text-8xl text-white lg:w-1/2">
                  Seamless Booking
                </h3>
              </li>
            </ul>
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
