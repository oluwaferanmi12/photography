import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import dummyIcon from "@/assets/svgs/dummy-packages-icon.svg";
import stoneDot from "@/assets/svgs/stone-dots.svg";

interface ImageType {
  serviceId: string;
  imageUrl: string;
  id: string;
}

interface TrailProps {
  title: string;
  description: string;
  images: ImageType[];
  packages: { name: string; price: string; description: string }[];
}

export const PackagesNewCard: React.FC<TrailProps> = ({
  title,
  description,
  images,
  packages,
}) => {
  return (
    <div className="relative w-full border-[1.5px] border-white/10 rounded-[48px] p-4 overflow-hidden">
      {/* Top-left partial gradient overlay */}
      <div className="absolute top-0 left-0 w-[90%] h-[45%] pointer-events-none z-0  overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-[#9E2FFF80] via-[#2B6AFF50] to-transparent blur-xl" />
      </div>

      {/* Base dark semi-transparent background */}
      <div className="absolute inset-0 bg-[#181818]/20 z-0" />

      {/* Inner content */}
      <div className="relative z-10">
        <div className="rounded-4xl w-full p-[1.5px] relative inline-block bg-gradient-to-br from-white/40 via-white/5 to-white/10 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.08)]">
          <div className="rounded-4xl bg-[#282828CC] p-3 backdrop-blur-md text-white font-semibold w-full h-full">
            <Row gutter={[32, 32]}>
              <Col xs={24} lg={12}>
                <div>
                  <div className="p-6">
                    <span>
                      <Image src={dummyIcon} alt="dummy_icon" />
                    </span>
                    <p className="text-5xl font-bold mt-4 text-[#F8F8F8F2]/95">
                      {title}
                    </p>
                    <p className="text-sm text-[#F8F8F8B2]/70 my-2">
                      {description}
                    </p>
                  </div>

                  <div>
                    <Row gutter={[32, 32]}>
                      {packages.map((pkg, idx) => (
                        <Col xs={24} lg={8} key={idx}>
                          <div className="bg-[#F8F8F805] p-6 rounded-xl flex flex-col gap-5">
                            <p>{pkg.name}</p>
                            <p className="text-5xl text-[#D9C9AE] font-light mb-4">
                              ${pkg.price}
                            </p>
                            <div className="flex gap-2">
                              <span>
                                <Image src={stoneDot} alt="stoneDot" />
                              </span>
                              <p>{pkg.name}</p>
                            </div>
                            <div className="w-40">
                              <div className="relative inline-block p-[1.5px] rounded-full bg-gradient-to-br from-white/40 via-white/5 to-white/10 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.06)]">
                                <button className="px-6 py-2 rounded-full bg-black/30 backdrop-blur-md text-white font-semibold h-full">
                                  Get started
                                </button>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                {images.map((img, idx) => (
                  <div className="overflow-hidden" key={idx}>
                    <Image
                      src={`https://olaitanakinlade.com/${img.imageUrl}`}
                      alt={`${title}_image_${idx}`}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
                {/* <div className="overflow-hidden">
                  <Image
                    src={image1}
                    className="w-full h-auto object-cover"
                    alt="image"
                  />
                </div> */}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
