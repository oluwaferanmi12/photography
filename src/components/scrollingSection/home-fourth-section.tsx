import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import wedding from "@/assets/svgs/portfolio_svgs/wedding.svg";
import birthdays from "@/assets/svgs/portfolio_svgs/birthdays.svg";
import lifestyle from "@/assets/svgs/portfolio_svgs/lifestyle.svg";
import family from "@/assets/svgs/portfolio_svgs/family.svg";
import videography from "@/assets/svgs/portfolio_svgs/videography.svg";
import kids from "@/assets/svgs/portfolio_svgs/kids.svg";
import pregnancy from "@/assets/svgs/portfolio_svgs/pregnancy.svg";
import portrait from "@/assets/svgs/portfolio_svgs/portrait.svg";

import Image from "next/image";
import Button from "../button/button";
import { ServiceCard } from "@/components/cascade-card/service-card";

export const FourthSectionScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  const mobileScroll = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const desktopScroll = useScroll({
    target: targetRef,
  });

  // Default scroll percentage (for desktop)
  let scrollPercentage = "-25%";

  // Check window size (only runs on client-side)
  if (typeof window !== "undefined") {
    if (window.innerWidth > 1500) {
      scrollPercentage = "-110%";
    } else if (window.innerWidth > 1400) {
      scrollPercentage = "-80%";
    } else {
      scrollPercentage = "-200%";
    }
  }
  const x = useTransform(
    desktopScroll.scrollYProgress,
    [0, 1],
    ["1%", scrollPercentage]
  );
  //   -25%
  // -200%

  const services = [
    {
      title: "Weddings",
      image: wedding,
      bg: "#EFFBF9",
      description:
        "Elegant and timeless wedding photography that captures the love, joy, and unforgettable moments of your special day.",
      cta_link: "/packages/wedding",
        cta: "View weddings",
    },
    {
      title: "Birthdays",
      image: birthdays,
      bg: "#FFF5E5",
      description:
        "Celebrate another trip around the sun with vibrant, fun, and candid shots that showcase the energy and excitement of the moment.",
      cta_link: "/packages/birthday",
        cta: "View birthdays",
    },
    {
      title: "Kids",
      image: kids,
      bg: "#F5F0FF",
      description:
        "Playful and tender portraits of your little ones — capturing their personalities and milestones as they grow.",
      cta_link: "/packages/kid",
        cta: "View kids",
    },
    {
      title: "Lifestyle and Others",
      image: lifestyle,
      bg: "#F0F9FF",
      description:
        "From stylish lifestyle shoots to creative concepts, I bring ideas to life with depth, color, and meaning.",
      cta_link: "/packages/lifestyle",
        cta: "View lifestyle",
    },
    {
      title: "Family",
      image: family,
      bg: "#F0F9FF",
      description:
        "From stylish lifestyle shoots to creative concepts, I bring ideas to life with depth, color, and meaning.",
      cta_link: "/packages/family",
        cta: "View family",
    },
    {
      title: "Videography",
      image: videography,
      bg: "#F0F9FF",
      description:
        "From stylish lifestyle shoots to creative concepts, I bring ideas to life with depth, color, and meaning.",
      cta_link: "/packages/family",
        cta: "View family",
    },
    // {
    //   title: "Pregnancy",
    //   image: pregnancy,
    //   bg: "#F0F9FF",
    //   description:
    //     "From stylish lifestyle shoots to creative concepts, I bring ideas to life with depth, color, and meaning.",
    //   cta_link: "/packages/pregnancy",
    //     cta: "View pregnancy",
    // },
    // {
    //   title: "Portrait",
    //   image: portrait,
    //   bg: "#F0F9FF",
    //   description:
    //     "From stylish lifestyle shoots to creative concepts, I bring ideas to life with depth, color, and meaning.",
    //   cta_link: "/packages/portrait",
    //     cta: "View portrait",
    // },
  ];

  return (
    <>
      {/* Mobile */}
      <h2 className="text-6xl lg:hidden px-5 mt-10 font-grotesk-bold font-semibold text-white whitespace-nowrap pr-6">
        My Services
      </h2>
      <div ref={container} className="lg:hidden">
        {services.slice(0, 4).map((service, index) => {
          const targetScale = 1 - (services.length - index) * 0.05;
          return (
            <ServiceCard
              currentIndex={index}
              range={[index * 0.333, 1]}
              targetScale={targetScale}
              progress={mobileScroll.scrollYProgress}
              key={index}
              service={service}
            />
          );
        })}
      </div>
      {/* Desktop */}
      <section
        ref={targetRef}
        className="relative hidden lg:block h-[300vh] py-10 "
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex items-center ml-5 lg:ml-14 3xl:!ml-28 gap-4 ">
            <h2 className="text-6xl font-grotesk-bold font-semibold text-white whitespace-nowrap ">
              My Services
            </h2>
            {/* <div className="flex gap-4 min-w-max pl-6 pr-0"> */}
            {services.map((service, i) => (
              <div
                key={i}
                className="w-full h-[600px] md:min-w-[280px] lg:min-w-[280px] max-w-[500px] 3xl:w-full  flex-shrink-0 p-6  rounded-3xl shadow-md"
                style={{ backgroundColor: service.bg }}
              >
                <div className="relative w-full h-48 overflow-hidden rounded-full">
                  {/* 2) Fill image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-full w-full h-48"
                    quality={90}
                    priority
                  />
                </div>
                <div className="mt-14">
                  <h3 className="text-4xl font-playfair font-light text-darker-grey">
                    {service.title}
                  </h3>
                  <p className="font-grotesk-medium text-lg mt-2 text-dark-grey leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-8 w-40">
                  <Button variant="filled" text={service.cta} widthFull link={service.cta_link}  />
                </div>
              </div>
            ))}
            {/* </div> */}
          </motion.div>
        </div>
      </section>
    </>
  );
};
