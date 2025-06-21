"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { GalleryCard } from "@/components/gallery-card/gallery-card";
import Pagination from "@/components/pagination/pagination";
import { ParallaxScrollax } from "@/components/parallax-scrollax-banner/parallax-scrollax";
import { FooterImages } from "@/components/footer-images/footer-images";
import { Footer } from "@/components/footer/footer";
import { apiCall } from "@/axios/axios";
import { toast } from "sonner";

interface ClientProps {
  id: string;
  clientName: string;
  clientEmail: string;
  password: string;
  links: string;
  description: string;
  noOfPictures: string;
  status: boolean;
  thumbnail: string;
  date: string;
}

const Gallery = () => {
  const [clientData, setClientData] = useState<ClientProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch services and their packages
  const fetchClient = async () => {
    try {
      const clientRes = await apiCall("get", "/Gallery");
      
      const formattedData: ClientProps[] = clientRes.data.data.gallery.map(
        (item: any) => {
          const date = new Date(item.dateModified);
          const formattedDate = date
            .toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            .replace(",", "");

          return {
            id: item.id,
            clientName: item.name,
            // clientEmail: item.email,
            // description: item.description,
            noOfPictures: item.imageCount.toString(),
            thumbnail: item.thumbnail,
            date: formattedDate, // formatted here
            // status: item.isActive,
          };
        }
      );
      setClientData(formattedData);
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClient();
  }, []);

  //   {
  //     imgSrc: card1,
  //     galleryTitle: "Desire's deciation",
  //     date: "April 15 2025",
  //     noOfPhoto: 150,
  //   },
  //   {
  //     imgSrc: card2,
  //     galleryTitle: "Desire's deciation",
  //     date: "April 15 2025",
  //     noOfPhoto: 150,
  //   },
  //   {
  //     imgSrc: card3,
  //     galleryTitle: "Desire's deciation",
  //     date: "April 15 2025",
  //     noOfPhoto: 150,
  //   },
  //   {
  //     imgSrc: card4,
  //     galleryTitle: "Desire's deciation",
  //     date: "April 15 2025",
  //     noOfPhoto: 150,
  //   },
  //   {
  //     imgSrc: card5,
  //     galleryTitle: "Desire's deciation",
  //     date: "April 15 2025",
  //     noOfPhoto: 150,
  //   },
  //   {
  //     imgSrc: card6,
  //     galleryTitle: "Desire's deciation",
  //     date: "April 15 2025",
  //     noOfPhoto: 150,
  //   },
  //   {
  //     imgSrc: card7,
  //     galleryTitle: "Desire's deciation",
  //     date: "April 15 2025",
  //     noOfPhoto: 150,
  //   },
  //   {
  //     imgSrc: card8,
  //     galleryTitle: "Desire's deciation",
  //     date: "April 15 2025",
  //     noOfPhoto: 150,
  //   },
  //   {
  //     imgSrc: card9,
  //     galleryTitle: "Desire's deciation",
  //     date: "April 15 2025",
  //     noOfPhoto: 150,
  //   },
  // ];
  return (
    <div>
      <div className="flex flex-col gap-14 justify-center items-center ">
        <div className=" flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28">
          <div className="galleryBg mt-28 lg:mt-48 relative border-[5px]  border-light-brown w-full flex items-center">
            <div className="mx-14 text-white flex flex-col gap-5 font-grotesk-regular">
              <p className="text-6xl lg:text-8xl font-playfair ">
                Client’s Gallery
              </p>
              <p className="text-white text-xl lg:max-w-1/2">
                From polished headshots to soulful lifestyle captures, I craft
                images that do more than just “look good” . They speak volumes.
                Whether for personal branding, professional needs, or intimate
                memories, every photo session is a curated experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SECONF SECTION */}
      <section className="bg-[#F4F3EA] mt-28 flex flex-col gap-14 justify-center items-center px-5 lg:px-14 3xl:!px-28  pt-20 pb-32">
        <div>
          <Row gutter={[32, 32]}>
            {clientData.map((item, index) => (
              <Col key={index} xs={24} md={8}>
                <GalleryCard
                  cardId={item.id}
                  imgSrc={item.thumbnail}
                  no_of_photos={item.noOfPictures}
                  cardTitle={item.clientName}
                  photoDate={item.date}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <Pagination
            currentPage={1}
            totalPages={7}
            onPageChange={(page) => console.log("Go to page:", page)}
          />
        </div>
      </section>
      <ParallaxScrollax />
      <FooterImages />
      <Footer />
    </div>
  );
};

export default Gallery;
