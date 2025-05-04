"use client";

import Image from "next/image";
import React from "react";
import { Footer } from "@/components/footer/footer";
import { Row, Col } from "antd";
import { useParams } from "next/navigation";
import famImg from "@/assets/images/gallery_famImg.jpg";

const GallerySinglePage = () => {
  const params = useParams();
  const singlePageSlug = params?.singlePageSlug as string;
  const pageName = singlePageSlug.replace(/-/g, " ");

  return (
    <div>
      <div className="flex flex-col gap-14 justify-center items-center ">
        <div className="flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28 !py-28">
          <div>
            <Row gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <div className="mt-48">
                  <h3 className="font-playfair text-5xl mb-8 capitalize">
                    {" "}
                    {pageName}{" "}
                  </h3>
                  <span className="text-light-brown w-auto rounded-md font-medium text-[12px] border border-light-brown bg-[#252426ED]/93 py-1 px-2">
                    15 January 2025
                  </span>
                  <div className="mt-5">
                    <p className="text-lg text-[#E2E2E2]">
                      From polished headshots to soulful lifestyle captures, I
                      craft images that do more than just “look good” . They
                      speak volumes. Whether for personal branding, professional
                      needs, or intimate memories, every photo session is a
                      curated experience.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={16}>
                <div>
                  <Row gutter={[32, 32]}>
                    <Col xs={24} lg={12}>
                      <div>
                        <Image src={famImg} className="max-h-[500px] object-cover" alt="img" />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div>
                        <Image src={famImg} className="max-h-[500px] object-cover" alt="img" />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div>
                        <Image src={famImg} className="max-h-[500px] object-cover" alt="img" />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div>
                        <Image src={famImg} className="max-h-[500px] object-cover" alt="img" />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div>
                        <Image src={famImg} className="max-h-[500px] object-cover" alt="img" />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div>
                        <Image src={famImg} className="max-h-[500px] object-cover" alt="img" />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div>
                        <Image src={famImg} className="max-h-[500px] object-cover" alt="img" />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div>
                        <Image src={famImg} className="max-h-[500px] object-cover" alt="img" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GallerySinglePage;
