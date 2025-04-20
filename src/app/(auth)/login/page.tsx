import { Col, Row } from "antd";
import Image from "next/image";
import loginLogo from "@/assets/svgs/loginLogo.svg";
import loginUsericon from "@/assets/svgs/loginUserIcon.svg";

export default function Login() {
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
                          placeholder="Enter your first name"
                          className="w-full py-4 px-3 rounded-lg border border-[#DCDCDC] bg-[#F5F5F5] text-xs placeholder:text-[#868D96]"
                        />
                      </div>
                      <div className="mb-4">
                        <p className="text-[#292929] mb-1 text-base font-grotesk-semi-bold">
                          Password
                        </p>
                        <input
                          placeholder="Enter your first name"
                          className="w-full py-4 px-3 rounded-lg border border-[#DCDCDC] bg-[#F5F5F5] text-xs placeholder:text-[#868D96]"
                        />
                      </div>
                      <div className="my-3">
                        <button className="bg-black w-full py-3 text-center rounded-lg">
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


