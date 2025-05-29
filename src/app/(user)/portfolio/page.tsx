"use client";

import React, { useEffect, useRef, useState } from "react";
import { GalleryBox } from "@/components/galleryBox/gallery-box";
import { Footer } from "@/components/footer/footer";
import { Banner } from "@/components/banner/banner";
import Image from "next/image";
import Button from "@/components/button/button";
import wedding from "@/assets/images/wedding-1.jpg";
import birthdays from "@/assets/svgs/portfolio_svgs/birthdays.svg";
import lifestyle from "@/assets/svgs/portfolio_svgs/lifestyle.svg";
import family from "@/assets/svgs/portfolio_svgs/family.svg";
import videography from "@/assets/svgs/portfolio_svgs/videography.svg";
import kids from "@/assets/images/kid-1.jpg";
import pregnancy from "@/assets/svgs/portfolio_svgs/pregnancy.svg";
import portrait from "@/assets/svgs/portfolio_svgs/portrait.svg";
import short_img from "@/assets/images/short_img.jpg";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import { apiCall } from "@/axios/axios";

interface PortfolioProps {
  id: string;
  portfolioName: string;
  description: string;
  service: string;
  // noOfPictures: string;
  // status: boolean;
  thumbnail: string;
}

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Weddings",
      image: wedding,
      bg: "#EFFBF9",
      description:
        "Preserving your day with timeless elegance emotion and storytelling that reflects your unique love story",
      cta_href: `/portfolio/wedding`,
      cta: "View weddings",
    },
    {
      title: "Birthdays",
      image: birthdays,
      bg: "#F9EFFB",
      description:
        "From first candles to milestone moments every celebration deserves to be remembered with style",
      cta_href: `/portfolio/birthday`,
      cta: "View birthdays",
    },
    {
      title: "Lifestyle and events",
      image: lifestyle,
      bg: "#FBEFF2",
      description:
        "Capturing the energy vibe and essence of your everyday and once in a lifetime experiences",
      cta_href: `/portfolio/lifestyle`,
      cta: "View lifestyle and events",
    },
    {
      title: "Kids and New born",
      image: kids,
      bg: "#FBFBEF",
      description:
        "Tiny toes curious eyes and pure joy we frame every precious moment of your little one’s journey",
      cta_href: `/portfolio/kids`,
      cta: "View kids",
    },
    {
      title: "Family",
      image: family,
      bg: "#D7D8FF",
      description:
        "Love connection and generations in one frame natural relaxed portraits for your family legacy",
      cta_href: `/portfolio/family`,
      cta: "View family",
    },
    {
      title: "Pregnancy",
      image: pregnancy,
      bg: "#D7FBFF",
      description:
        "Honoring the beauty of motherhood with graceful and empowering portraits of your journey",
      cta_href: `/portfolio/pregnancy`,
      cta: "View pregnancy",
    },
    {
      title: "Videography",
      image: videography,
      bg: "#DDFFD7",
      description:
        "More than a clip cinematic stories that bring your moments to life again and again",
      cta_href: `/portfolio/videography`,
      cta: "View videography",
    },
    {
      title: "Portraits",
      image: portrait,
      bg: "#FFF9D7",
      description:
        "Bold beautiful and uniquely you capturing the essence of personality and confidence",
      cta_href: `/portfolio/portrait`,
      cta: "View portrait",
    },
  ];

  // Fetch services and their packages
  const fetchPortfolio = async () => {
    try {
      const portfolioRes = await apiCall("get", "/Portfolio");
      console.log("I am portfolio data", portfolioRes);
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
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

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
                {portfolioData
                  .filter((_, i) => i % 2 === 0)
                  .map((portfolio, i) => (
                    <div
                      key={`left-${i}`}
                      className="flex flex-col justify-between rounded-xl shadow-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-[1.01] min-h-[400px] max-h-[600px] w-full"
                      style={{ backgroundColor: "#EFFBF9" }}
                    >
                      <span className="w-full overflow-hidden rounded-xl mb-4">
                        <img
                          src={`http://olaitanakinlade.com/${portfolio.thumbnail}`}
                          alt={portfolio.portfolioName}
                          className="w-full object-cover"
                        />
                      </span>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-5xl font-playfair text-darker-grey ">
                            {portfolio.portfolioName}
                          </h3>
                          <p className="text-base text-gray-800 mt-2 leading-relaxed">
                            {portfolio.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <Button
                            variant="black"
                            link={`/portfolio/${portfolio.service}`}
                            text={portfolio.service}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Column 2 with mt-20 */}
              <div className="flex flex-col gap-6 lg:mt-20">
                {portfolioData
                  .filter((_, i) => i % 2 !== 0)
                  .map((portfolio, i) => (
                    <div
                      key={`left-${i}`}
                      className="flex flex-col justify-between rounded-xl shadow-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-[1.01] min-h-[400px] max-h-[600px] w-full"
                      style={{ backgroundColor: "#EFFBF9" }}
                    >
                      <span className="w-full overflow-hidden rounded-xl mb-4">
                        <img
                          src={`http://olaitanakinlade.com/${portfolio.thumbnail}`}
                          alt={portfolio.portfolioName}
                          className="w-full object-cover"
                        />
                      </span>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-5xl font-playfair text-darker-grey ">
                            {portfolio.portfolioName}
                          </h3>
                          <p className="text-base text-gray-800 mt-2 leading-relaxed">
                            {portfolio.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <Button
                            variant="black"
                            link={`/portfolio/${portfolio.service}`}
                            text={portfolio.service}
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
