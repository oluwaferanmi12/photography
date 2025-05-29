"use client";

import { Col, Row } from "antd";
import Image from "next/image";
import loginLogo from "@/assets/svgs/loginLogo.svg";
import loginUsericon from "@/assets/svgs/loginUserIcon.svg";
import { useState } from "react";
import { apiCall } from "@/axios/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await apiCall("post", "Account/login", {
        username,
        password,
      });

      localStorage.setItem("userDetails", JSON.stringify(response.data));
      toast.success("Authorized Successfully");
      router.push("/booking");
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F6F4F0]">
      <div
        style={{ height: "100dvh", maxHeight: "100dvh", minHeight: "100dvh" }}
      >
        <Row className="h-full">
          <Col className="h-full" xs={12}>
            <Row className="h-full" justify={"center"} align={"middle"}>
              <Col
                xs={16}
                className="flex  items-center justify-center flex-col h-full"
              >
                <div className="h-full flex flex-col justify-center">
                  <div className="  ">
                    <Image src={loginLogo} alt="" />
                  </div>
                  <div className="bg-white p-8 rounded-lg mt-4">
                    <Image alt="" src={loginUsericon} />
                    <div className="mt-3 ">
                      <p className="text-[#3D3D3D] font-grotesk-semi-bold text-2xl">
                        Sign in
                      </p>
                    </div>
                    <form className="mt-4">
                      <div className="mb-4">
                        <p className="text-[#292929] mb-1 text-base font-grotesk-semi-bold">
                          Username
                        </p>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter Email"
                          className="w-full text-[#292929] py-4 px-3 rounded-lg border border-[#DCDCDC] bg-[#F5F5F5] text-xs placeholder:text-[#868D96]"
                        />
                      </div>
                      <div className="mb-4">
                        <p className="text-[#292929] mb-1 text-base font-grotesk-semi-bold">
                          Password
                        </p>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter password"
                          className="w-full text-[#292929] py-4 px-3 rounded-lg border border-[#DCDCDC] bg-[#F5F5F5] text-xs placeholder:text-[#868D96]"
                        />
                      </div>
                      <div className="my-3">
                        <button
                          onClick={handleLogin}
                          type="submit"
                          disabled={loading}
                          className="bg-black  disabled:bg-admin-grey-300 disabled:cursor-not-allowed  cursor-pointer w-full py-3 text-center rounded-lg"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <div className="loginBackgroundImage p-12">
              <p className="text-[#A4A4A4]">
                You don’t take a photograph, you make it.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
