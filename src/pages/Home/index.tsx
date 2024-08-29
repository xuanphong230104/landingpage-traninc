import React, { useEffect, useRef, useState } from "react";
import { Carousel, Col, Row } from "antd";
import Navbar from "../../component/Navbar/index.tsx";
import Offer from "../../component/Offer/index.tsx";
import TestingServices from "../../component/TestingService/index.tsx";
import Footer from "../../component/Footer/index.tsx";
import AboutUs from "../../component/AboutUs/index.tsx";
import Contact from "../../component/Contact/index.tsx";
import "./index.scss"; // Import your custom CSS for home styles

const Home: React.FC = () => {
  const offerSectionRef = useRef<HTMLDivElement>(null);
  const scrollToOffer = () => {
    if (offerSectionRef.current) {
      offerSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Page Sections */}
      <Row className="absolute">
        <Col span={24}>
          <div id="part-1" className="part-1-section">
            <img src="./logo.png" alt="background" className="part-1-bg  " />
            <div className="content">
              <div className="title">Full circle testing services</div>
              <div className=" description">
                We're here to make sure your solution is tested thoroughly, on
                time, and within budget.
              </div>
              <a
                href="#part-2"
                className="offer-button"
                style={{ transform: "scale(1.4)" }}
                onClick={scrollToOffer}
              >
                See our offer
              </a>
            </div>
          </div>
        </Col>
        <Col xs={24}>
          <div ref={offerSectionRef} id="part-2" className="max-sm:pt-10 pt-6">
            <Offer />
          </div>
          <div
            id="part-3"
            style={{ background: "rgba(0,0,0,0.02)" }}
            className="max-sm:pt-10 pt-6"
          >
            <TestingServices />
          </div>
          <div
            id="part-4"
            className="part-4-section"
            style={{ background: "rgba(0,0,0,0.02)" }}
          >
            <AboutUs />
          </div>
          <div
            id="part-5"
            className="part-5-section"
            style={{ background: "rgba(0,0,0,0.50)" }}
          >
            <Contact />
          </div>
          <div
            id="part-6"
            className="part-6-section"
            style={{ background: "rgba(0,0,0,0.50)" }}
          >
            <Footer />
          </div>
        </Col>
      </Row>
      {/* <Slide/> */}
      {/* Footer */}
    </div>
  );
};

export default Home;
