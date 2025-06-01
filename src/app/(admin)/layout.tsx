import { Col, Row } from "antd";
import { Nav } from "@/components/admin-components/sideNav/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white flex w-full">
      <div className="flex w-full">
        <div className="bg-[#F6F4F0] border border-[#EFEEEE] h-full">
          <Nav />
        </div>
        <div className="w-full">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
