import React, { useEffect, useState } from "react";
import "./index.css";
import { Anchor, Col, Row } from "antd";
import Navbar from "./component/Navbar";
import Offer from "./component/Offer";
import Home from "./pages/Home/index";
import CardModal from "./component/Card";
const App: React.FC = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <div>
      <Home/>
      
    </div>
  );
};

export default App;
