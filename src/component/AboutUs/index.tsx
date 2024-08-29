import { Row,Col } from "antd";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <>
      <Row justify={'center'}>
        <Col xs={22} lg={22} xxl={24} >
          <div className=" pt-16">
            <div className="  w-fit mx-auto  ">
              <h2 className="  ml-2  text-3xl font-bold md:text-5xl">
                About us
              </h2>
              <p className=" mt-6 max-sm:text-base  pb-2  lg:mt-10  text-xl md:text-md font-normal  text-gray-700 dark:text-gray-400">
                Founded in 2012, TRAN Inc. is a VietNam company provider of QA
                and software testing services.
              </p>
              <p className=" mt-2 pb-20 max-sm:text-base  md:text-md font-normal text-xl   text-gray-700 dark:text-gray-400">
                For over 12 years we’ve been bringing custom and platform-based
                solutions to small and midsized companies in Social Network, Car{" "}
                <br /> Services, Email Marketing, Airport Visitor Management and
                other industries.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AboutUs;
