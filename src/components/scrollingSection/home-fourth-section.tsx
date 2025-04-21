import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HS4 from "@/assets/images/HS4.png";
import HS1 from "@/assets/images/HS1.png";
import HS6 from "@/assets/images/HS6.png";
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
      scrollPercentage = "-25%";
    } else if (window.innerWidth > 1400) {
      scrollPercentage = "-80%";
    } else {
      scrollPercentage = "-200%";
    }
  }
  const x = useTransform(desktopScroll.scrollYProgress, [0, 1], ["1%", scrollPercentage]);
  //   -25%
  // -200%

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
      image: HS1,
      bg: "#FFF5E5",
      description:
        "Celebrate another trip around the sun with vibrant, fun, and candid shots that showcase the energy and excitement of the moment.",
      cta: "View Birthdays",
    },
    {
      title: "Kids",
      image: HS6,
      bg: "#F5F0FF",
      description:
        "Playful and tender portraits of your little ones — capturing their personalities and milestones as they grow.",
      cta: "View Kids",
    },
    {
      title: "Lifestyle and Others",
      image: HS6,
      bg: "#F0F9FF",
      description:
        "From stylish lifestyle shoots to creative concepts, I bring ideas to life with depth, color, and meaning.",
      cta: "View Lifestyle",
    },
  ];




  return (
    <>
      <h2 className="text-6xl lg:hidden px-5 font-grotesk-bold font-semibold text-white whitespace-nowrap pr-6">
        My Services
      </h2>
      <div ref={container} className="lg:hidden">
        {services.map((service, index) => {
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
      <section
        ref={targetRef}
        className="relative hidden lg:block h-[300vh] py-10 "
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex items-center gap-4">
            <h2 className="text-6xl font-grotesk-bold font-semibold text-white whitespace-nowrap pr-6">
              My Services
            </h2>
            {/* <div className="flex gap-4 min-w-max pl-6 pr-0"> */}
            {services.map((service, i) => (
              <div
                key={i}
                className="w-full h-[600px] md:min-w-[280px] lg:min-w-[280px] max-w-[500px] 3xl:w-full  flex-shrink-0 p-4 flex flex-col gap-28 rounded-3xl shadow-md"
                style={{ backgroundColor: service.bg }}
              >
                <span className="">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="rounded-full h-[150px] w-full object-cover"
                  />
                </span>
                <div>
                  <h3 className="text-4xl font-playfair font-light text-darker-grey">
                    {service.title}
                  </h3>
                  <p className="font-grotesk-medium text-lg mt-2 text-dark-grey leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div>
                  <Button variant="filled" text={service.cta} />
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
