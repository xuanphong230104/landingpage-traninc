import React, { useEffect, useState } from "react";
import "./index.scss";
import { BackTop } from "antd";
import Home from "./pages/Home/index";

const App= () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Home />
      <div className="App">
        {visible && (
          <BackTop visibilityHeight={700} className="custom-back-top">
            <div className="ant-back-top-inner">^</div>
          </BackTop>
        )}
      </div>
    </div>
  );
};

export default App;
