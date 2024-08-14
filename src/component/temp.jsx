import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Navbar from "./Navbar.tsx";
import Offer from "./Offer";
import TestingServices from "./Testing";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import "./Home.css"; // Import your custom CSS for home styles

const Home: React.FC = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight || 0);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Page Sections */}
      <Row className="absolute">
        <Col xs={24}>
          <div
            id="part-1"
            className="part-1-section"
          >
            <img
              src="https://traninc.vn/wp-content/uploads/2019/08/IMG_4643-2-2-e1565661137708.jpg"
              alt="background"
              className="part-1-bg"
            />
            <div className="overlay">
              <h2 className="section-title">
                Full circle testing services
              </h2>
              <p className="section-description">
                We're here to make sure your solution is tested thoroughly, on time, and within budget.
              </p>
              <button className="btn">
                See our offer
              </button>
            </div>
          </div>
        </Col>
        <Col xs={24}>
          <div id="part-2" className="section" style={{ height: "15%", background: "rgba(0,0,0,0)" }}>
            <Offer />
          </div>
          <div id="part-3" className="section" style={{ height: "36%", background: "rgba(0,0,0,0.02)" }}>
            <TestingServices />
          </div>
          <div id="part-4" className="section" style={{ height: "30vh", background: "rgba(0,0,0,0.02)" }}>
            <AboutUs />
          </div>
          <div id="part-5" className="section" style={{ height: "30vh", background: "rgba(0,0,0,0.50)" }}>
            <Contact />
          </div>
        </Col>
      </Row>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
