"use client";
import { Col, Row } from "antd";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/button/button";
import { CreateSlug } from "@/lib/create-slug";
import { apiCall } from "@/axios/axios";
import Link from "next/link";
import { baseUrl } from "@/lib/base-url";

interface PortfolioProps {
  id: string;
  title: string;
  description: string;
  service: string;
  image: string;
}

export const ServiceCard = ({
  currentIndex,
  range,
  targetScale,
  progress,
  service,
}: {
  currentIndex: number;
  range: number[];
  targetScale: number;
  progress: any;
  service: {
    id: string;
    title: string;
    image: string;
    description: string;
  };
}) => {
  const container = useRef(null);
  const [portfolioData, setPortfolioData] = useState<PortfolioProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const newScale = useTransform(progress, range, [1, targetScale]);

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
        }),
      );
      setPortfolioData(formattedData);
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
    <div
      ref={container}
      className=" p-6 cursor-pointer"
      style={{
        position: "sticky",
        top: "0px",
      }}
    >
      <Row justify={"center"}>
        <Col xs={24}>
          <motion.div
            className="w-full min-w-full"
            style={{
              scale: newScale,
              position: "relative",
              top: `calc(-5vh + ${currentIndex * 25}px)`,
            }}
          >
            <div className="relative w-full max-w-[500px] flex-shrink-0 overflow-hidden rounded-2xl bg-[#181818] shadow-md aspect-[4/5]">
              <img
                src={`${baseUrl + service.image}`}
                alt={service.title}
                className="absolute inset-0 h-full w-full rounded-2xl object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 w-full rounded-b-2xl bg-gradient-to-t from-black/55 via-black/10 to-transparent p-4 backdrop-blur-[2px]">
                <div className="mix-blend-exclusion">
                  {/* Text container with blend mode */}
                  <div className="mix-blend-exclusion">
                    <div className="w-full flex justify-between items-center">
                      <h3 className="text-4xl text-white mix-blend-difference font-playfair font-light">
                        {service.title}
                      </h3>
                      <Link href={`/portfolio/${service.id}`}>
                        <button className="bg-white/20 flex justify-center items-center text-white text-base py-2 px-8 border cursor-pointer border-white/10 rounded-xl mix-blend-difference hover:border-light-brown">
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
                <h3 className="text-4xl font-playfair font-light text-darker-grey">
                  {service.title}
                </h3>
                <p className="font-grotesk-medium text-lg mt-2 text-dark-grey leading-relaxed">
                  {service.description}
                </p>
              </div>
              <Button
                variant="filled"
                text={service.title}
                link={`portfolio/${service.id}`}
              /> */}
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};
