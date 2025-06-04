"use client";

import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
// import Image from "next/image";
import Button from "../button/button";
import { ServiceCard } from "@/components/cascade-card/service-card";
import Link from "next/link";
import { apiCall } from "@/axios/axios";
import { CreateSlug } from "@/lib/create-slug";

interface PortfolioProps {
  id: string;
  title: string;
  description: string;
  service: string;
  image: string;
}

export const FourthSectionScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const [portfolioData, setPortfolioData] = useState<PortfolioProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  // DYNAMIC DATA
  // Fetch services and their packages
  const fetchPortfolio = async () => {
    try {
      const portfolioRes = await apiCall("get", "/Portfolio");
      const formattedData: PortfolioProps[] = portfolioRes.data.map(
        (item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.thumbnail,
          service: item.service,
        })
      );
      setPortfolioData(formattedData);
      console.log("Image", portfolioRes);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <>
      {/* Mobile */}
      <h2 className="text-6xl lg:hidden px-5 my-28 lg:mb-0 lg:mt-10 font-grotesk-bold font-semibold text-white whitespace-nowrap lg:pr-6">
        My Services
      </h2>
      <div ref={container} className="lg:hidden">
        {portfolioData.slice(0, 4).map((service, index) => {
          const targetScale = 1 - (portfolioData.length - index) * 0.05;
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
          <motion.div
            style={{ x }}
            className="flex items-center ml-5 lg:ml-14 3xl:!ml-28 gap-8 "
          >
            <div className="flex flex-col gap-5">
              <h2 className="text-6xl font-grotesk-bold font-semibold text-white whitespace-nowrap ">
                My Services
              </h2>
              <p className="text-grayish-700 text-lg">
                Thoughtfully curated sessions for every chapter worth
                remembering.
              </p>
            </div>

            {/* <div className="flex gap-4 min-w-max pl-6 pr-0"> */}

            {portfolioData.map((service, i) => (
              <div
                key={i}
                className="w-full relative h-[600px] md:min-w-[280px] lg:min-w-[280px] max-w-[500px] 3xl:w-full flex-shrink-0 p-6 shadow-md"
              >
                <img
                  src={`https://olaitanakinlade.com/${service.image}`}
                  alt={CreateSlug(service.title)}
                  className="object-cover absolute inset-0 w-full h-full"
                />

                <div className="absolute left-0 bottom-0 w-full p-4 backdrop-blur-md bg-black/10">
                  <div className="mix-blend-exclusion">
                    {/* Text container with blend mode */}
                    <div className="mix-blend-exclusion">
                      <div className="w-full flex justify-between items-center">
                        <p className="text-white mix-blend-difference font-playfair text-4xl">
                          {service.title}
                        </p>
                        <Link href={`/portfolio/${service.id}`}>
                          <button className="bg-white/20 flex justify-center items-center text-white text-base py-2 px-8 border cursor-pointer border-white/10 rounded-xl mix-blend-difference hover:border-light-brown">
                            View
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
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
