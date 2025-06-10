"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Footer } from "@/components/footer/footer";
import { Row, Col } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import { apiCall } from "@/axios/axios";

interface ImagesProps {
  id: string;
  galleryId: string;
  selected: string;
  imageUrl: string;
}



const GallerySinglePage = () => {
  const [galleryData, setGalleryData] = useState<ImagesProps[]>([]);
  const params = useParams();
  const searchParams = useSearchParams();
  const singlePageSlug = params?.singlePageSlug as string;
  const pageName = singlePageSlug.replace(/-/g, " ");
  const id = searchParams.get("id");

  const fetchClient = async () => {
    try {
      const clientRes = await apiCall("get", `/Gallery/${id}`);
      console.log(clientRes.data);
      setGalleryData(clientRes.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchClient();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-14 justify-center items-center">
        <div className="flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28 py-28">
          <Row gutter={[16, 16]}>
            {/* Fixed/Sticky Left Column */}
            <Col xs={24} lg={8}>
              <div className="sticky top-28  self-start">
                <h3 className="font-playfair text-5xl mb-8 capitalize">
                  {pageName}
                </h3>
                <span className="text-light-brown rounded-md font-medium text-[12px] border border-light-brown bg-[#252426ED]/93 py-1 px-2">
                  15 January 2025
                </span>
                <div className="mt-5">
                  <p className="text-lg text-[#E2E2E2]">
                    From polished headshots to soulful lifestyle captures, I
                    craft images that do more than just “look good”. They speak
                    volumes. Whether for personal branding, professional needs,
                    or intimate memories, every photo session is a curated
                    experience.
                  </p>
                </div>
              </div>
            </Col>

            {/* Scrollable Right Column (naturally scrolls with page) */}
            <Col xs={24} lg={16}>
              <Row gutter={[32, 32]}>
                {galleryData.map((item, idx) => (
                  <Col key={idx} xs={24} lg={12}>
                    <div>
                      <Image
                        src={`https://olaitanakinlade.com/${item.imageUrl}`}
                        className="w-full h-[500px] min-h-[500px] object-cover"
                        alt="img"
                        width={500}
                        height={500}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GallerySinglePage;
