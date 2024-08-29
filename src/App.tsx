import React, { useEffect, useState } from "react";
import "./index.scss";
import {FloatButton } from "antd";
import Home from "./pages/Home/index";

const App: React.FC = () => {
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
          <FloatButton.BackTop className="custom-back-top  " shape="square" >
           
          </FloatButton.BackTop>
        )}
      </div>
    </div>
  );
};

export default App;
