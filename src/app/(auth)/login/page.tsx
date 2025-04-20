import { Col, Row } from "antd";
import Image from "next/image";
import sideBarImage from "@/assets/images/ladyAuthImage.png";

export const Login = () => {
  return (
    <>
      <div
        style={{ height: "100dvh", maxHeight: "100dvh", minHeight: "100dvh" }}
      >
        <Row className="h-full">
          <Col xs={12}>
            <div className="bg-[#F6F4F0] h-full"></div>
          </Col>
          <Col xs={12}>
            <div className="loginBackgroundImage">
              {/* <Image
                className="h-full object-contain"
                src={sideBarImage}
                alt=""
              /> */}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
