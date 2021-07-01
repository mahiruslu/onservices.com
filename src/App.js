import "./App.css";
import "./App.scss";
import Home from "./Components/_home";
import About from "./Components/_about";
import Services from "./Components/_services";
import References from "./Components/_references";
import Contact from "./Components/_contact";
import Help from "./Components/help";
import NavBar from "./Components/NavBar";
import { animateScroll as scroller } from "react-scroll";
import { Button } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

class pagePosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = window.pageYOffset;
  }
}

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);
  return (
    <>
      <NavBar />
      <div id="mainHome">
        <Home />
      </div>
      <div id="mainAbout">
        <About />
      </div>
      <div id="mainServices">
        <Services />
      </div>
      <div id="mainReferences">
        <References />
      </div>
      <div id="mainContact">
        <Contact />
      </div>
      <div id="mainHelp">
        <Help />
      </div>

      <div style={{ display: showScroll ? "flex" : "none" }}>
        <Button id="backToTopBtn" onClick={() => scroller.scrollToTop()}>
          {" "}
          <ArrowUpward></ArrowUpward>{" "}
        </Button>
      </div>
    </>
  );
}

export default App;
