import { Row, Col } from "antd";
import { useState } from "react";
import bottomActive from "@/assets/svgs/nav-rectangle.svg";
import Image from "next/image";

export const HomeNav = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const navItems = ["Home", "About", "Catalogue", "Pricing", "Contact"];
  return (
    <div className="w-full z-10 fixed top-0 py-12">
      <Row justify={"center"}>
        <Col xs={12}>
          <div className="rounded-full navBg  py-2 px-2 flex justify-between items-center">
            <div className="w-full justify-around items-center flex">
              {navItems.map((item, index) => {
                return (
                  <div className="relative" key={item}>
                    <p
                      onClick={() => setActiveItem(item)}
                      className={`cursor-pointer font-grotesk-medium text-base ${
                        activeItem === item
                          ? "text-[#FB5711]"
                          : "text-[#FAFAFA]"
                      }`}
                    >
                      {item}
                    </p>
                    {item === activeItem && (
                      <div className="absolute flex justify-center w-full">
                        <Image src={bottomActive} alt="" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="min-w-[200px] flex justify-end">
              <button className="bg-white px-6 py-2 rounded-full cursor-pointer text-[#FB5711] font-grotesk-medium text-base">
                Book a session
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
