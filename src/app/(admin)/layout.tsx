
import { Col, Row } from "antd";
import { Nav } from "@/components/admin-components/sideNav/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white h-screen min-h-screen">
      <Row className="h-full">
        <Col xs={4} className="bg-[#F6F4F0] border border-[#EFEEEE] h-full">
          <Nav />
        </Col>
        <Col xs={20} className="py-4 overflow-y-auto">
          {children}
        </Col>
      </Row>
    </div>
  );
}
