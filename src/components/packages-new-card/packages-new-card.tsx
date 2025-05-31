import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import dummyIcon from "@/assets/svgs/dummy-packages-icon.svg"

export const PackagesNewCard = () => {
  return (
    <div className="linear_bg relative rounded-4xl p-6">
      <div className="rounded-4xl p-6">
        <Row>
            <Col xs={24} lg={12}>
            <div>
                <span>
                    <Image src={dummyIcon} alt="dummy_icon" />
                </span>
                <p>Portraits</p>
                <p>Whether you&apos;re booking for a birthday, a family session, or something more personal, each package is built to give you images that feel like you.</p>
                <p>$350</p>
                <div className="bg-[#F8F8F805]/2 p-4 rounded-xl">

                </div>
            </div>
            </Col>
        </Row>

      </div>
    </div>
  );
};
