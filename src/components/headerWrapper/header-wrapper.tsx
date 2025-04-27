import { Col, Row } from "antd";

export const HeaderWrapper = ({headerTitle, landingBg}: {headerTitle: string, landingBg: string}) => {
  return (
    <div className="h-[500px] min-h-[500px] !w-full">
      <div className={`h-full min-h-full ${landingBg} rounded-4xl flex justify-center items-center`}>
        <Row className="w-full">
          <Col xs={24}>
            <div className="text-white text-center text-5xl lg:text-8xl font-semibold font-grotesk-regular w-full">
              <p> {headerTitle} </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
