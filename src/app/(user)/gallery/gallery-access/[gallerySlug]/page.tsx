"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Footer } from "@/components/footer/footer";
import { Row, Col, Grid } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import famImg from "@/assets/images/gallery_famImg.jpg";
import loginFormIcon from "@/assets/svgs/login-form-icon.svg";
import { Input } from "@/components/inputs/input";
import Button from "@/components/button/button";
import { toast } from "sonner";
import { apiCall } from "@/axios/axios";
import { baseUrl } from "@/lib/base-url";

const GalleryAccessPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const gallerySlug = params?.gallerySlug as string;
  const imgSrc = searchParams.get("imgSrc");
  const id = searchParams.get("id");
  const pageName = gallerySlug.replace(/-/g, " ");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();



  const handleAccessLogin = async () => {
    // do validation
    if (!email || !password) {
      toast.error("All Fields are required");
      return;
    }
    try {
      const result = await apiCall("post", "Account/login", {
        password,
        userName: email,
      });
      localStorage.setItem("user-gallery-detail", JSON.stringify(result.data));
      const singlePageSlug = encodeURIComponent(
        pageName.toLowerCase().replace(/ /g, "-")
      );
      const encodedId = encodeURIComponent(id || "");

      router.push(`/gallery/${singlePageSlug}?id=${encodedId}`);
    } catch (e) { }
  };

  return (
    <div>
      <div className="flex flex-col gap-14 justify-center items-center ">
        <div className="flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28 !py-28">
          <div className="my-14 relative w-full">
            <Row align={screens.lg ? 'middle' : 'top'} gutter={[32, 32]}>
              <Col xs={{ span: 24, order: 2 }} lg={{ span: 10, order: 1 }}>
                <div>
                  <Image
                    src={
                      imgSrc
                        ? `${baseUrl + decodeURIComponent(imgSrc)}`
                        : famImg
                    }
                    className="h-[700px] rounded-3xl object-cover"
                    alt=""
                    width={700}
                    height={700}
                  />
                </div>
              </Col>
              <Col xs={{ span: 24, order: 1 }} lg={{ span: 14, order: 2 }}>
                <div>
                  <h3 className="font-playfair text-4xl mb-8 capitalize">
                    {" "}
                    {pageName}{" "}
                  </h3>
                  <div className="py-8 px-10 w-full lg:w-[80%] rounded-[20px] bg-[#282824]">
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
                        <Input
                          onChangeInput={(e) => setEmail(e.target.value)}
                          variant="user"
                          placeholder="Example@email.com"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label htmlFor="password">Password</label>
                        <Input
                          onChangeInput={(e) => setPassword(e.target.value)}
                          variant="user"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>
                    <div className="mt-8 lg:w-1/2">
                      <Button
                        loading={buttonLoading}
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
