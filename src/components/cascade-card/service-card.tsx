"use client";
import { Col, Row } from "antd";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/button/button";
import { CreateSlug } from "@/lib/create-slug";
import { apiCall } from "@/axios/axios";
import Link from "next/link";

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
    <div
      ref={container}
      className="h-screen p-6 cursor-pointer"
      style={{
        position: "sticky",
        top: "0px",
      }}
    >
      <Row justify={"center"}>
        <Col xs={24}>
          <motion.div
            className="w-full  min-w-full min-h-[500px]"
            style={{
              scale: newScale,
              position: "relative",
              top: `calc(-5vh + ${currentIndex * 25}px)`,
            }}
          >
            <div className="w-full relative h-[600px] md:min-w-[280px] lg:min-w-[280px] max-w-[500px] 3xl:w-full flex-shrink-0  shadow-md">
              <img
                src={`https://olaitanakinlade.com/${service.image}`}
                alt={service.title}
                className="object-cover absolute rounded-2xl inset-0 w-full h-full"
              />

              <div className="absolute left-0 bottom-0 w-full p-4 backdrop-blur-md bg-black/10 rounded-b-2xl">
                <div className="mix-blend-exclusion">
                  {/* Text container with blend mode */}
                  <div className="mix-blend-exclusion">
                    <div className="w-full flex justify-between items-center">
                      <h3 className="text-4xl font-playfair font-light text-darker-grey">
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
