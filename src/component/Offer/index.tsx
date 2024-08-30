import React from "react";
import Card from "../Card/index";
import {
  faCog,
  faBug,
  faCloudSun,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "antd";

const Offer: React.FC = () => {
  return (
    <>
      <Row justify={"center"}>
        <Col xs={24} sm={22} xxl={18} md={22} xl={20} >
          <div className="">
            {/* Title Section */}
            <h2 className="text-4xl pt-4 font-bold mb-6  md:text-4xl lg:text-5xl">
              Our Offer
            </h2>

            {/* Card Grid Section */}
            <div className="grid grid-cols-1 pt-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-screen-xl mx-auto ">
              <div className="flex justify-center ">
                <Card
                  title="Independent testing services"
                  description="Depending on the specifics of your project, we can run particular types of testing, be it functional, performance, security, regression or any other software testing type.​"
                  icon={faBug}
                />
              </div>
              <div className="flex justify-center ">
                <Card
                  title="QA outsourcing"
                  description="We provide end-to-end testing services to ensure all the pieces integrated into your solution are performing as designed.​​​"
                  icon={faCog}
                />
              </div>
              <div className="flex justify-center ">
                <Card
                  title="QA consulting"
                  description="An increased workload, inconsistent QA process or methodologies, business expansion may lead to inefficient quality management. We help you detect and address the exiting problems through QA strategy development, QA process/project audit, QA aid.​"
                  icon={faCloudSun}
                />
              </div>
              <div className="flex justify-center ">
                <Card
                  title="Quality assessment"
                  description="We offer a comprehensive product audit from different angles, including code quality, solution functionality, usability, performance, and security. As a result, you get a detailed report with the list of the detected issues and recommendations on how to fix them.​"
                  icon={faClipboardCheck}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Offer;
