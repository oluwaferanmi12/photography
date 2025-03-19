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
import framedImage from "@/assets/images/home-framed-image.png";
import underlayImg from "@/assets/svgs/third-section-icon1.svg";
import { ServicesAccordian } from "@/components/services/services-accordian";
import fifthSectionImg from "@/assets/images/fifthSectionImg.png";
import placeholderImg from "@/assets/images/placeholderImg.png";
import { Footer } from "@/components/footer/footer";
import photography from "@/assets/svgs/base-photography.svg";
import photography2 from "@/assets/svgs/base-photography-2.svg";
import Button from "@/components/button/button";
import { GalleryBox } from "@/components/galleryBox/gallery-box";

const servicesData = [
  {
    num: "01",
    title: "Wedding Photography",
  },
  {
    num: "02",
    title: "Lifestyle Photography",
  },
  {
    num: "03",
    title: "Videography",
  },
  {
    num: "04",
    title: "Birthdays",
  },
  {
    num: "05",
    title: "Professional Shoots",
  },
];

export default function Home() {
  return (
    <div>
      <div className="h-screen min-h-screen  p-7">
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
      <div className="mt-20 pt-7 px-7 h-[125vh] min-h-screen relative">
        <Row justify={"center"} align={"middle"} className="">
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
                  <p>BRANDING PHOTOS</p>{" "}
                  <p className="my-3"> AND HEADSHOTS TO HELP STAND OUT</p>{" "}
                  <p>FROM THE CROWD</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="z-50">
              <Image src={sImage3} alt="" />
              <Image src={sImage4} alt="" />
            </div>
          </Col>
        </Row>
        <span className="absolute bottom-0 left-7 z-10">
          <Image src={photography} className="w-40" alt="icon" />
        </span>
        <span className="absolute bottom-0 right-7 z-10">
          <Image src={photography2} className="w-40" alt="icon" />
        </span>
      </div>

      {/* third section  */}
      <div className="bg-[#FAF3E9] py-12 px-7 relative">
        <Row>
          <Col xs={24}>
            <Row gutter={[42, 42]}>
              <Col xs={22} md={12}>
                <span>
                  <Image src={framedImage} alt="" />
                </span>
              </Col>

              <Col xs={22} md={12}>
                <div className="text-center z-50 md:text-left">
                  <h3 className="font-grotesk-medium text-4xl mb-10">
                    BASED IN BARRIE, ONTARIO
                  </h3>
                  <p className="text-lg leading-relaxed text-[#3C3C3B] ">
                    Hey, I’m{" "}
                    <span className="font-semibold">[Photographer’s Name]</span>
                    —a passionate photographer based in Barrie, Ontario. 📸 From
                    capturing raw emotions to creating stunning brand visuals, I
                    believe every shot should tell a story. Whether it’s a
                    dreamy portrait, a bold commercial shoot, or a candid
                    moment, I make sure each frame reflects your unique vibe.
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-[#3C3C3B]">
                    With years of experience behind the lens, I bring
                    creativity, precision, and a touch of fun to every session.
                    Let’s turn moments into timeless memories. 💡 Ready to
                    create magic? Let’s shoot!
                  </p>
                  <div className="mt-6">
                    <Button variant="filled" size="small">
                      Book a session
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <span className="absolute bottom-0 z-1 right-0">
          <Image src={underlayImg} alt="img" />
        </span>
      </div>

      {/* fourth section */}
      <div className="p-7 my-20">
        <div>
          <h2 className="text-center text-5xl text-[#3C3C3B]  ">My SERVICES</h2>
        </div>
        <div className="py-10">
          {servicesData.map((service) => (
            <ServicesAccordian
              key={service.num}
              num={service.num}
              serviceTitle={service.title}
            />
          ))}
        </div>
        <div className="flex justify-center mb-5">
          <Button variant="bordered" size="large" borderVariant="light">
            View all work
          </Button>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="p-7 my-20">
        <Row>
          <Col xs={24}>
            <Row align={"middle"} justify={"center"} gutter={[42, 42]}>
              <Col xs={12}>
                <div className="flex flex-col gap-10 ">
                  <h2 className="text-7xl tracking-[-3%]">
                    Wherever You Go, I’ll Be There to{" "}
                    <span className="text-[#734004]">Shoot!</span>{" "}
                  </h2>
                  <p className="text-xl text-[#3C3C3B]">
                    From the bustling streets of Canada to breathtaking
                    destinations across the globe, I go where your story takes
                    me. I’m ready always to capture every moment with artistry
                    and passion.
                  </p>
                  <div className="flex justify-normal my-5">
                    <Button
                      variant="bordered"
                      size="medium"
                      borderVariant="dark"
                    >
                      {" "}
                      Book your session
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <Image src={fifthSectionImg} className="" alt="img" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Sixth Section */}
      <GalleryBox />

      {/* Seventh Section */}
      <div className="p-7 my-20">
        <Row>
          <Col xs={24}>
            <Row align={"middle"} justify={"center"} gutter={[42, 42]}>
              <Col xs={12}>
                <Image src={placeholderImg} className="" alt="img" />
              </Col>
              <Col xs={12}>
                <div className="flex flex-col gap-10 ">
                  <h2 className="text-6xl tracking-[-3%]">Event videos</h2>
                  <p className="text-xl text-[#583101]">
                    We capture the best moments of your events with stunning
                    visuals and storytelling. Whether it’s a corporate
                    gathering, wedding, concert, or cultural event, we create
                    videos that bring your memories to life.
                  </p>
                  <div className="flex justify-normal my-5 ">
                    <Button
                      variant="bordered"
                      size="medium"
                      borderVariant="dark"
                    >
                      {" "}
                      Book a video session
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
