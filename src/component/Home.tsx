import React, { useEffect, useRef, useState } from "react";
import { Carousel, Col, Row } from "antd";
import Navbar from "./Navbar.tsx";
import Offer from "./Offer";
import TestingServices from "./Testing";
import Footer from "./Footer";
import AboutUs from "./AboutUs.tsx";
import Contact from "./Contact";
import "./Home.css"; // Import your custom CSS for home styles
import { animated, useSpring } from '@react-spring/web';

const Home: React.FC = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight || 0);
  }, []);

  const offerSectionRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = () => {
    if (offerSectionRef.current) {
      offerSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const springs = useSpring({
    from: { x: 250 },
    to: { x: 0 },
  });

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Page Sections */}
      <Row className="absolute">
        <Col xs={24}>
          <div id="part-1" className="part-1-section relative ">
            <img
              src="https://traninc.vn/wp-content/uploads/2019/08/IMG_4643-2-2-e1565661137708.jpg"
              alt="background"
              className="part-1-bg  "
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black p-4">
              <animated.div style={{ ...springs }} className="md:mb-6 text-2xl pt-20 font-bold sm:text-3xl md:text-6xl sm:pt-20 text-xs:pt-20 text-center animate-slide-right">
                Full circle testing services
              </animated.div>
              <animated.div style={{ ...springs }} className=" py-4 md:py-16 text-base sm:text-3xl text-center animate-slide-right">
                We're here to make sure your solution is tested thoroughly, on
                time, and within budget.
              </animated.div>
              <a
                href="#part-2"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                style={{ transform: "scale(1.6)" }}
                onClick={scrollToOffer}
              >
                See our offer
              </a>
            </div>
          </div>
        </Col>
        <Col xs={24}>
          <div ref={offerSectionRef} id="part-2" className="sm:pt-20">
            <Offer />
          </div>
          <div id="part-3" style={{ background: "rgba(0,0,0,0.02)" }}>
            <TestingServices />
          </div>
          <div
            id="part-4"
            className="sm:h-1"
            style={{ height: "34vh", background: "rgba(0,0,0,0.02)" }}
          >
            <AboutUs />
          </div>
          <div
            id="part-5"
            className="part-1-section"
            style={{ height: "25vh", background: "rgba(0,0,0,0.50)" }}
          >
            <Contact />
          </div>
          <div
            id="part-6"
            className="part-1-section"
            style={{ height: "2vh", background: "rgba(0,0,0,0.50)" }}
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
