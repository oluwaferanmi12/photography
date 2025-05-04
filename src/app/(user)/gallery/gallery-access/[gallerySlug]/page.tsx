"use client";

import Image from "next/image";
import React from "react";
import { Footer } from "@/components/footer/footer";
import { Row, Col } from "antd";
import { useParams, useRouter } from "next/navigation";
import famImg from "@/assets/images/gallery_famImg.jpg";
import loginFormIcon from "@/assets/svgs/login-form-icon.svg";
import { Input } from "@/components/inputs/input";
import Button from "@/components/button/button";

const GalleryAccessPage = () => {
  const params = useParams();
  const gallerySlug = params?.gallerySlug as string;
  const pageName = gallerySlug.replace(/-/g, ' ');
  const router = useRouter();

  const handleAccessLogin = () => {
    const singlePageSlug = encodeURIComponent(pageName.toLowerCase().replace(/ /g, "-"));
    router.push(`/gallery/${singlePageSlug}`)
  }

  return (
    <div>
      <div className="flex flex-col gap-14 justify-center items-center ">
        <div className=" flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28 !py-28">
          <div className="my-14 relative w-full">
            <Row align={"middle"} gutter={[32, 32]}>
              <Col xs={24} lg={10}>
                <div>
                  <Image
                    src={famImg}
                    className="h-[700px] rounded-3xl object-cover"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={24} lg={14}>
                <div>
                  <h3 className="font-playfair text-4xl mb-8 capitalize"> {pageName} </h3> 
                  <div className="py-8 px-10 w-full rounded-[20px] bg-[#282824]">
                    <div className="flex gap-3 place-items-center">
                      <span>
                        <Image src={loginFormIcon} alt="bas" />
                      </span>
                      <h3 className="font-playfair text-yellow-50 text-[40px] text-center">
                        Login
                      </h3>
                    </div>
                    <div className="flex flex-col gap-8 w-full mt-8">
                      <div className="flex flex-col gap-3">
                        <label htmlFor="email">Email address</label>
                        <Input placeholder="Example@email.com" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label htmlFor="password">Password</label>
                        <Input placeholder="Enter password" />
                      </div>
                    </div>
                    <div className="mt-8 lg:w-1/2">
                      <Button
                        variant="filled"
                        widthFull
                        size="large"
                        text="Login to view"
                        onClick={handleAccessLogin}
                      />
                    </div>
                  </div>
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

export default GalleryAccessPage;
