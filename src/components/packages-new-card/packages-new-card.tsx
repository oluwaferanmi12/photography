import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import dummyIcon from "@/assets/svgs/dummy-packages-icon.svg";
import stoneDot from "@/assets/svgs/stone-dots.svg";
import { PlanCardProps } from "../plans-card/PlanCardProps";
import { baseUrl } from "@/lib/base-url";
import { useRouter } from "next/navigation";

interface ImageType {
  serviceId: string;
  imageUrl: string;
  id: string;
}

interface PackagesProps {
  title?: string;
  description?: string;
  images: ImageType[];
  packages: { name: string; price: number; description: string }[];
  service?: any;
}

export const PackageCardWithOneImage: React.FC<PackagesProps> = ({
  title,
  description,
  images,
  packages,
  service,
}) => {
  const router = useRouter();
  return (
    <UserPackagesLayout>
      <div>
        <Row align={"stretch"} gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <div className="h-full">
              <div className="p-6">
                <p className="text-3xl lg:text-5xl font-bold text-[#F8F8F8F2]/95">
                  {title}
                </p>
                <p className="text-sm font-normal text-[#F8F8F8B2]/70 my-2">
                  {description}
                </p>
                {/*  */}
                {service.id !== "82861419-2349-4274-b64e-6f2c782c62de" && (
                  <div>
                    {packages.map((pkg, idx) => (
                      <p
                        className="text-[#D9C9AE] font-light  text-5xl"
                        key={idx}
                      >
                        {" "}
                        ${pkg.price}{" "}
                      </p>
                    ))}
                  </div>
                )}
                {service.id === "82861419-2349-4274-b64e-6f2c782c62de" && (
                  <div className="relative mt-5 inline-block p-[1.5px] rounded-full bg-gradient-to-br from-white/40 via-white/5 to-white/10 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.06)]">
                    <a href={"mailto:bookings@shotbyportable.com"}>
                      <button className="px-6 py-2 rounded-full bg-black/30 backdrop-blur-md text-white font-semibold h-full">
                        Contact us
                      </button>
                    </a>
                  </div>
                )}
              </div>
              {service.id !== "82861419-2349-4274-b64e-6f2c782c62de" && (
                <div>
                  <Row gutter={[32, 32]}>
                    {packages.map((pkg, idx) => (
                      <Col xs={24} key={idx}>
                        <PlanCardProps
                          variant="user"
                          planDescription={pkg.description}
                          packages={pkg}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </div>
          </Col>
          {/* <Col xs={24} lg={12}>
            <div className="h-full rounded-xl">
              {images.length > 1 ? (
                <div className="flex scrollbar gap-5 relative w-full h-full overflow-x-scroll">
                  {images.map((img, idx) => (
                    <div
                      className="w-[90%] lg:w-[70%] rounded-[48px] lg:rounded-4xl  cursor-pointer overflow-hidden h-full lg:h-[700px] shrink-0 "
                      key={idx}
                    >
                      <img
                        src={`${baseUrl + img.imageUrl}`}
                        alt={`${title}_image_${idx}`}
                        className="w-full rounded-[48px] lg:rounded-4xl object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {images.map((img, idx) => (
                    <div
                      className="overflow-hidden h-full max-h-[700px]"
                      key={idx}
                    >
                      <img
                        src={`${baseUrl + img.imageUrl}`}
                        alt={`${title}_image_${idx}`}
                        className="w-full h-full object-cover object-top rounded-4xl"
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </Col> */}
        </Row>
      </div>
    </UserPackagesLayout>
  );
};

export const PackageCardWithMultipleImages: React.FC<PackagesProps> = ({
  title,
  description,
  images,
  packages,
  service,
}) => {
  return (
    <UserPackagesLayout>
      <Row align={"stretch"} gutter={[32, 32]}>
        <Col xs={24} lg={8}>
          <div className="p-6 h-full">
            <p className="text-3xl lg:text-5xl font-bold mt-4  text-[#F8F8F8F2]/95">
              {title}
            </p>
            <p className="text-sm text-[#F8F8F8B2]/70 my-2">{description}</p>
            {service.id === "82861419-2349-4274-b64e-6f2c782c62de" && (
              <div className="relative mt-5 inline-block p-[1.5px] rounded-full bg-gradient-to-br from-white/40 via-white/5 to-white/10 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.06)]">
                <a href={"mailto:bookings@shotbyportable.com"}>
                  <button className="px-6 py-2 rounded-full bg-black/30 backdrop-blur-md text-white font-semibold h-full">
                    Contact us
                  </button>
                </a>
              </div>
            )}
          </div>
        </Col>
        <Col xs={0} md={24} lg={16} className="">
          <div className="flex scrollbar gap-5 relative w-full h-full overflow-x-scroll">
            {images.map((img, idx) => (
              <div
                className=":w-[70%] rounded-xl cursor-pointer overflow-hidden h-[400px] shrink-0 "
                key={idx}
              >
                <Image
                  src={`${baseUrl + img.imageUrl}`}
                  alt={`${title}_image_${idx}`}
                  width={500}
                  height={500}
                  className="w-full rounded-xl object-cover object-top"
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
      {service.id !== "82861419-2349-4274-b64e-6f2c782c62de" && (
        <div className="lg:mt-14">
          <Row gutter={[32, 32]}>
            {packages.map((pkg, idx) => (
              <Col xs={24} lg={8} key={idx}>
                <PlanCardProps
                  variant="user"
                  planType={pkg.name}
                  planAmount={pkg.price}
                  planDescription={pkg.description}
                  packages={pkg}
                  title={title}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}

      <div className="mt-10 lg:hidden">
        <Col xs={24} lg={0}>
          <div className="flex scrollbar gap-5 relative w-full h-full overflow-x-scroll">
            {images.map((img, idx) => (
              <div
                className="w-[90%] lg:w-[70%] rounded-xl cursor-pointer overflow-hidden h-full lg:h-[700px] shrink-0 "
                key={idx}
              >
                <Image
                  src={`${baseUrl + img.imageUrl}`}
                  alt={`${title}_image_${idx}`}
                  width={500}
                  height={500}
                  className="w-full h-full rounded-xl object-cover object-top"
                />
              </div>
            ))}
          </div>
        </Col>
      </div>
    </UserPackagesLayout>
  );
};

export const UserPackagesLayout = ({ children }) => {
  return (
    <div className="relative w-full border-[1.5px] border-white/10 rounded-[48px] lg:p-4 p-2 overflow-hidden">
      {/* Top-left partial gradient overlay */}
      <div className="absolute top-0 left-0 w-[90%] h-[45%] pointer-events-none z-0  overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-[#9E2FFF80] via-[#2B6AFF50] to-transparent blur-xl" />
      </div>

      {/* Base dark semi-transparent background */}
      <div className="absolute inset-0 bg-[#181818]/20 z-0" />

      {/* Inner content */}
      <div className="relative z-10">
        <div className="rounded-[48px] lg:rounded-4xl w-full lg:p-[1.5px] relative inline-block bg-gradient-to-br from-white/30 via-white/15 to-white/30 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.08)]">
          <div className="rounded-[48px] lg:rounded-4xl bg-[#282828CC] pt-0 px-3 pb-3  lg:pt-14 lg:pb-5 lg:px-4 backdrop-blur-md text-white font-semibold w-full h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
