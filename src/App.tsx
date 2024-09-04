import React, { useEffect, useState } from "react";
import "./index.scss";
import { FloatButton } from "antd";
import Home from "./pages/Home/index";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <div className="App">
        <FloatButton.BackTop
          visibilityHeight={800}
          className="custom-back-top  "
          shape="square"
        />
      </div>
    </div>
  );
};

export default App;
