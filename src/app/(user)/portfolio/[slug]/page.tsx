"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import InfiniteCarousel from "@/components/unending-carousel/unending-carousel";
import { Banner } from "@/components/banner/banner";
import Button from "@/components/button/button";
import Image from "next/image";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import { apiCall } from "@/axios/axios";
import { Col, Row } from "antd";
import { PlanCardProps } from "@/components/plans-card/PlanCardProps";
import { ParallaxScrollax } from "@/components/parallax-scrollax-banner/parallax-scrollax";
import { FooterImages } from "@/components/footer-images/footer-images";
import { Footer } from "@/components/footer/footer";
interface PortfolioProps {
  id: string;
  portfolioName: string;
  description: string;
  service: string;
  // noOfPictures: string;
  // status: boolean;
  thumbnail: string;
}

interface PortfolioImage {
  portfolioId: string;
  imageUrl: string;
  id: string;
}

const SinglePackages = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [singlePortfolioData, setSinglePortfolioData] = useState<
    PortfolioImage[]
  >([]);
  const [portfolioData, setPortfolioData] = useState<PortfolioProps[]>([]);
  const [packageData, setPackageData] = useState([]);
  const [attachedServices, setAttachedServices] = useState<
    { label: string; value: string }[]
  >([]);

  const { slug } = useParams();

  // Fetch all portfolios
  const fetchPortfolio = async () => {
    try {
      const portfolioRes = await apiCall("get", "/Portfolio");
      const formattedData: PortfolioProps[] = portfolioRes.data.map(
        (item: any) => ({
          id: item.id,
          portfolioName: item.title,
          description: item.description,
          thumbnail: item.thumbnail,
          service: item.service,
        })
      );
      setPortfolioData(formattedData);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch images for a single portfolio
  const GetSinglePortfolioImages = async () => {
    setLoading(true);
    try {
      const response = await apiCall("get", `Portfolio/Images/${slug}`);
      setSinglePortfolioData(response.data);
    } catch (error) {
      console.log("Error fetching portfolio images:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all services
  const fetchServices = async () => {
    try {
      const res = await apiCall("get", "/Admin/Services");
      const services = res.data.map((service: any) => ({
        label: service.title,
        value: service.id,
      }));
      setAttachedServices(services);
    } catch (error) {
      console.log("Error fetching services:", error);
    }
  };

  // Fetch service packages once everything is available
  useEffect(() => {
    if (attachedServices.length > 0 && portfolioData.length > 0 && slug) {
      const matchedPortfolio = portfolioData.find((info) => info.id === slug);
      console.log("i am matched port ", matchedPortfolio);

      if (matchedPortfolio) {
        const matchedService = attachedServices.find(
          (s) => s.label === matchedPortfolio.service
        );

        if (matchedService?.value) {
          const fetchPackages = async () => {
            setLoading(true);
            try {
              const response = await apiCall(
                "get",
                `Admin/Services/packages/${matchedService.value}`
              );
              setPackageData(response.data.data.packages);
            } catch (error) {
              console.log("Error fetching packages:", error);
            } finally {
              setLoading(false);
            }
          };

          fetchPackages();
        }
      }
    }
  }, [attachedServices, portfolioData, slug]);

  // Initial data fetch
  useEffect(() => {
    fetchPortfolio();
    fetchServices();
    GetSinglePortfolioImages();
  }, []);

  // Safely access the current portfolio info
  const [singlePortfolioInfo] = portfolioData.filter(
    (info) => info.id === slug
  );

  return (
    <div>
      <div className="px-5 pt-36  lg:px-14 3xl:!px-28">
        <div>
          <p className="text-[#FBFAF7] capitalize font-playfair text-5xl lg:text-6xl">
            {" "}
            {singlePortfolioInfo?.portfolioName}{" "}
          </p>
          <p className="text-[#C3C3C2] text-base lg:text-lg w-full md:!w-[90%] 3xl:!w-1/2">
            {singlePortfolioInfo?.description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div className="flex flex-wrap gap-y-5 gap-3">
            <Button
              variant="filled"
              text={`Book ${
                /^[aeiou]/i.test(singlePortfolioInfo?.service || "")
                  ? "an"
                  : "a"
              } ${singlePortfolioInfo?.service || ""} session`}
            />
            <Button
              variant="bordered"
              size={"medium"}
              textColor="text-white"
              borderVariant="light"
              text={`See pricing`}
            />
          </div>
          <span className="hidden lg:flex">
            <Image
              src={rollingImage}
              className="imageRotate"
              alt="rollingImage"
            />
          </span>
        </div>
      </div>
      <div className=" pb-10 lg:pb-28">
        <InfiniteCarousel
          images={singlePortfolioData.map(
            (img) => `https://olaitanakinlade.com/${img.imageUrl}`
          )}
        />
      </div>
      <div className="p-5 lg:p-14 3xl:!px-28">
        <Banner />
      </div>

      <div className="flex flex-col mb-14 gap-14 justify-center items-center">
        <div className="flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28">
          {/* Package Section */}
          <div>
            <h3 className=" text-5xl lg:text-7xl capitalize ">
              {singlePortfolioInfo?.portfolioName} Packages
            </h3>
            <div className="mt-10">
              {!loading ? (
                packageData.length ? (
                  <Row gutter={[32, 32]}>
                    {packageData.map((pkg: any, idx: number) => (
                      <Col key={idx} xs={24} md={12} lg={8}>
                        <PlanCardProps
                          variant="user"
                          planType={pkg.title}
                          planAmount={pkg.price}
                          planDescription={pkg.description}
                        />
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <p className="text-lg text-red-500">
                    No Package is available for this service yet
                  </p>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <ParallaxScrollax />
      <FooterImages />
      <Footer />
    </div>
  );
};

export default SinglePackages;
