import { Col, Row } from "antd";
import Image from "next/image";
import addLine from "@/assets/svgs/add_line.svg";
import notificationIcon from "@/assets/svgs/notification.svg";
import { Nav } from "@/components/admin-components/sideNav/nav";

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
          <Nav />
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
      <div className="flex gap-6 items-stretch ">
        <span className="p-4 border cursor-pointer rounded-lg border-[#EFEEEE] flex justify-center items-center">
          <Image src={notificationIcon}  alt="notification" />
        </span>
        <button className="flex items-center gap-2 bg-[#101010] py-3 px-4 rounded-lg">
          <Image src={addLine} alt="" />
          <p className="text-sm font-mono-regular">Create a booking link</p>
        </button>
      </div>
    </div>
  );
};
