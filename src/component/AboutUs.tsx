import React from "react";

import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const AboutUs: React.FC = () => {
  return (
    <div className="">
      <h2 className="lg:ml-52 lg:pt-16 lg:px-40 md:ml-10 sm:ml-10 ml-10   text-3xl font-bold md:text-5xl">
        About us
      </h2>
      <p className="lg:ml-52 md:ml-10 sm:ml-10 sm:mb-10 ml-5  mt-10 text-base md:text-md font-normal lg:px-40 text-gray-700 dark:text-gray-400">
        Founded in 2012, TRAN Inc. is a VietNam company provider of QA and
        software testing services.
      </p>
      <p className="lg:ml-52 md:ml-10 sm:ml-10 sm:mb-10 mt-2 ml-5 text-base md:text-md font-normal lg:px-40 text-gray-700 dark:text-gray-400">
        For over 12 years we’ve been bringing custom and platform-based
        solutions to small and midsized companies in Social Network, Car <br />{" "}
        Services, Email Marketing, Airport Visitor Management and other
        industries.
      </p>
    </div>
  );
};

export default AboutUs;
