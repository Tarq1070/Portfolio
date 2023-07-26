import logo from "./logo.svg";
import "./App.css";
import Desktop from "./Pages/Desktop/Desktop";
import Taskbar from "./components/Taskbar";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import { Col, Row } from "antd";
import { LeftSide } from "./components/LeftSide/LeftSide";
import { RightSide } from "./components/RightSide/RightSide";
import { useEffect, useState } from "react";

function App() {
  const[x,setX]=useState(0);
  const[y,setY]=useState(0);
  useEffect(() => {
    const handleWindowMouseMove = event => {
      setTimeout(() => {
        setX(event.clientX);
        setY(event.clientY);
      }, 200);
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
     
    };
  }, []);

  return (
    <>
      <Col className="bg">
        <div className="mouseCursor" style={{ top:`${y-40}px`, left:`${x-170}px`}} >
       
        </div>
        <Taskbar />
        <Col className="leftSide"><LeftSide/> </Col>
        <Col className="rightSide"><RightSide/></Col>
      </Col>
    </>
  );
}

export default App;
