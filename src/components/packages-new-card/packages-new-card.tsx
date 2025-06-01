import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import dummyIcon from "@/assets/svgs/dummy-packages-icon.svg";
import stoneDot from "@/assets/svgs/stone-dots.svg";
import { PlanCardProps } from "../plans-card/PlanCardProps";

interface ImageType {
  serviceId: string;
  imageUrl: string;
  id: string;
}

interface PackagesProps {
  title: string;
  description: string;
  images: ImageType[];
  packages: { name: string; price: number; description: string }[];
}

export const PackageCardWithOneImage: React.FC<PackagesProps> = ({
  title,
  description,
  images,
  packages,
}) => {
  return (
    <UserPackagesLayout>
      <Row gutter={[40, 40]}>
        <Col xs={24} lg={12}>
          <div>
            <div className="p-6">
              <span>
                <Image src={dummyIcon} alt="dummy_icon" />
              </span>
              <p className="text-5xl font-bold text-[#F8F8F8F2]/95">{title}</p>
              <p className="text-sm font-normal mt-4 text-[#F8F8F8B2]/70 my-2">
                {description}
              </p>
            </div>

            <div>
              <Row gutter={[32, 32]}>
                {packages.map((pkg, idx) => (
                  <Col xs={24} key={idx}>
                    <PlanCardProps
                      variant="user"
                      planType={pkg.name}
                      planAmount={pkg.price}
                      planDescription={pkg.description}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          {images.length > 1 ? (
            <div className="overflow-x-scroll scrollbar flex gap-2 shrink-0">
              {images.map((img, idx) => (
                <div className="overflow-hidden h-[300px]" key={idx}>
                  <Image
                    src={`https://olaitanakinlade.com/${img.imageUrl}`}
                    alt={`${title}_image_${idx}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          ) : (
            <>
              {images.map((img, idx) => (
                <div className="overflow-hidden h-[700px]" key={idx}>
                  <Image
                    src={`https://olaitanakinlade.com/${img.imageUrl}`}
                    alt={`${title}_image_${idx}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-4xl"
                  />
                </div>
              ))}
            </>
          )}
        </Col>
      </Row>
    </UserPackagesLayout>
  );
};

export const PackageCardWithMultipleImages: React.FC<PackagesProps> = ({
  title,
  description,
  images,
  packages,
}) => {
  return (
    <UserPackagesLayout>
      <Row align={"stretch"} gutter={[32, 32]}>
        <Col xs={24} lg={8}>
          <div className="p-6 h-full">
            <span>
              <Image src={dummyIcon} alt="dummy_icon" />
            </span>
            <p className="text-5xl font-bold mt-4 text-[#F8F8F8F2]/95">
              {title}
            </p>
            <p className="text-sm text-[#F8F8F8B2]/70 my-2">{description}</p>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="overflow-x-auto scrollbar flex gap-4 shrink-0">
            {images.map((img, idx) => (
              <div key={idx} className="overflow-hidden h-[300px]">
                <Image
                  src={`https://olaitanakinlade.com/${img.imageUrl}`}
                  alt={`${title}_image_${idx}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <div className="mt-14">
        <Row gutter={[32, 32]}>
          {packages.map((pkg, idx) => (
            <Col xs={24} lg={8} key={idx}>
              <PlanCardProps
                variant="user"
                planType={pkg.name}
                planAmount={pkg.price}
                planDescription={pkg.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </UserPackagesLayout>
  );
};

const UserPackagesLayout = ({ children }) => {
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
        <div className="rounded-4xl w-full p-[1.5px] relative inline-block bg-gradient-to-br from-white/30 via-white/15 to-white/30 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.08)]">
          <div className="rounded-4xl bg-[#282828CC] p-3 backdrop-blur-md text-white font-semibold w-full h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
