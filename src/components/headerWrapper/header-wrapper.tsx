import { Col, Row } from "antd";

export const HeaderWrapper = ({headerTitle}: {headerTitle: string}) => {
  return (
    <div className="h-[500px] min-h-[500px]  p-7">
      <div className=" h-full min-h-full landingBg rounded-4xl flex justify-center items-center ">
        <Row className="w-full">
          <Col xs={24}>
            <div className="text-white text-center text-8xl font-grotesk-regular w-full">
              <p> {headerTitle} </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
