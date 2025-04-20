import { Col, Row } from "antd";
import logo from "@/assets/svgs/brand-logo.svg";
import Image from "next/image";
import layoutLine from "@/assets/svgs/layout_left_line.svg";
import homeOutline from "@/assets/svgs/home_1_line.svg";
import biDirection from "@/assets/svgs/selector_vertical_line.svg";
import addLine from "@/assets/svgs/add_line.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white h-screen min-h-screen">
      <Row className="h-full">
        <Col
          xs={4}
          className="bg-[#F6F4F0] border border-[#EFEEEE] h-full min-h-full"
        >
          <div className="min-h-full flex flex-col justify-between p-4">
            <div>
              <div className="bg-[#1D1C1C] rounded-lg p-4 flex items-center justify-between">
                <Image src={logo} alt="" />
                <Image src={layoutLine} alt="" />
              </div>
              <div className="mt-8">
                <NavWrapper
                  icon={homeOutline}
                  active={false}
                  text="Dashboard"
                />
                <NavWrapper
                  icon={homeOutline}
                  active={false}
                  text="Transaction"
                />
                <NavWrapper icon={homeOutline} active={false} text="Links" />
                <NavWrapper icon={homeOutline} active={false} text="Calendar" />
                <NavWrapper icon={homeOutline} active={false} text="Packages" />
                <NavWrapper icon={homeOutline} active={false} text="Settings" />
              </div>
            </div>

            <div
              style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
              className="flex items-center justify-between p-4 rounded-lg"
            >
              <div className="flex items-center gap-2 font-mono-medium">
                <div className="w-[40px] h-[40px] rounded-full bg-[#D9D9D9]"></div>
                <div>
                  <p className="text-[#101010]">John Doe</p>
                  <p className="text-[#615F5F] text-xs">johndoe@gmail.com</p>
                </div>
              </div>

              <Image src={biDirection} alt="" />
            </div>
          </div>
        </Col>
        <Col xs={20}>
          <div className="p-4">
            <AdminHeader />

            {children}
          </div>
        </Col>
      </Row>
    </div>
  );
}

const NavWrapper = ({
  icon,
  text,
  active,
}: {
  icon: string;
  text: string;
  active: boolean;
}) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 mb-4">
      <div>
        <Image src={icon} alt="" />
      </div>
      <p className="text-[#5F6368] font-mono">{text}</p>
    </div>
  );
};

const AdminHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <p className="text-[#101010] text-2xl font-mono-medium">My Bookings</p>
        <p className="text-[#615F5F] font-mono-regular w-1/2 mt-1 ">
          Supercharge your workflow and handle repetitive tasks the apps you use
          every day.
        </p>
      </div>
      <div>
        <button className="flex items-center gap-2 bg-[#101010] py-3 px-4 rounded-lg">
          <Image src={addLine} alt="" />
          <p className="text-sm font-mono-regular">Create a booking link</p>
        </button>
      </div>
    </div>
  );
};
