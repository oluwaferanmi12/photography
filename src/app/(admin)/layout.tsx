
import { Col, Row } from "antd";
import { Nav } from "@/components/admin-components/sideNav/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white h-dvh min-h-dvh">
      <Row className="h-full">
        <Col xs={4} className="bg-[#F6F4F0] border border-[#EFEEEE] h-full">
          <Nav />
        </Col>
        <Col xs={20} className="py-4 pb-28 overflow-y-auto h-full">
          {children}
        </Col>
      </Row>
    </div>
  );
}
