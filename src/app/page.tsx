import { Row, Col } from "antd";
import Image from "next/image";
import image1 from "@/assets/svgs/home-image-1.svg";
import image2 from "@/assets/svgs/home-image-2.svg";
import image3 from "@/assets/svgs/home-image-3.svg";
import image4 from "@/assets/svgs/home-image-4.svg";
import image5 from "@/assets/svgs/home-image-5.svg";
import sImage1 from "@/assets/svgs/second-section-img-1.svg";
import sImage2 from "@/assets/svgs/second-section-img-2.svg";
import sImage3 from "@/assets/svgs/second-section-img-3.svg";
import sImage4 from "@/assets/svgs/second-section-img-4.svg";

export default function Home() {
  return (
    <div>
      <div className="h-screen min-h-screen  p-4">
        <div className=" h-full min-h-full landingBg rounded-4xl flex justify-center items-center ">
          <Row className="w-full px-20">
            <Col xs={12}>
              <div>
                <div className="flex items-center gap-2">
                  <Image src={image1} alt="" />
                  <Image src={image2} alt="" />
                  <Image src={image3} alt="" />
                  <Image src={image4} alt="" />
                  <Image src={image5} alt="" />
                </div>
                <div className="my-6 text-white text-8xl font-grotesk-regular">
                  <p>Picture Perfect</p>
                  <p>Shotbyportable</p>
                </div>
                <div className="mt-12 ">
                  <p className="text-[#E6EAEE] text-xl font-grotesk-regular w-4/5">
                    Hey, I’m Victoria Ajala—a passionate photographer based in
                    Barrie, Ontario. 📸{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Second section  */}
      <div className="p-4 my-20 h-screen min-h-screen">
        <Row justify={"center"} align={"middle"}>
          <Col xs={6}>
            <div>
              <Image src={sImage1} alt="" />
              <Image src={sImage2} alt="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className="flex justify-center">
              <div>
                <div className="text-4xl text-center text-[#635E5E] ">
                  <p>BRANDING PHOTOS</p> <p className='my-3'> AND HEADSHOTS TO HELP STAND OUT</p>{" "}
                  <p>FROM THE CROWD</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div>
              <Image src={sImage3} alt="" />
              <Image src={sImage4} alt="" />
            </div>
          </Col>
        </Row>
      </div>

      {/* third section  */}
      <div className="bg-[#FAF3E9] py-12">
          <Row justify="center">
            <Col xs={18}>
            <Row>
              <Col xs={12}></Col>
              <Col xs={12}></Col>
            </Row>
            </Col>
          </Row>
      </div>
    </div>
  );
}
