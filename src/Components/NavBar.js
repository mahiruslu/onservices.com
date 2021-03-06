import logo from "../Images/logo.jpg";
import React from "react";
import { Link } from "react-scroll";
import { Button } from "@material-ui/core";
import { Navbar, Nav } from "react-bootstrap";
function NavBar() {
  return (
    <Navbar bg='light' variant="light" className="fixed-top" expand="lg">
      <Navbar.Brand className="navBarLogo">
        <Link to="mainHome" smooth={true} duration={900}>
          <Button className="_navbarButton">
            <img
              src={logo}
              width="45"
              height="35"
              className="d-inline-block align-top"
              alt=""
            />
          </Button>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="mainHome" smooth={true} duration={900}>
            <Button className="_navbarButton">ANASAYFA</Button>
          </Link>
          <Link to="mainAbout" smooth={true} duration={900}>
            <Button className="_navbarButton">HAKKIMIZDA</Button>
          </Link>
          <Link to="mainServices" smooth={true} duration={900}>
            <Button className="_navbarButton">HİZMETLERİMİZ</Button>
          </Link>
          <Link to="mainReferences" smooth={true} duration={900}>
            <Button className="_navbarButton">REFARANSLAR</Button>
          </Link>
          <Link to="mainContact" smooth={true} duration={900}>
            <Button className="_navbarButton">İLETİŞİM</Button>
          </Link>
          <Link to="mainHelp" smooth={true} duration={900}>
            <Button className="_navbarButton">
              <span className="helpTxt">DESTEK</span>
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
// import React from 'react'

// function NavBar() {
//     return (

//         <div className="_navbar">
//          <div className ="_navbarLeft">
//             <Button className="_navbarButton">
//                 <Link to="mainHome" smooth={true} duration={1000}>Onservices</Link>
//             </Button>
//          </div>
//          <div className ="_navbarRight">
// <Button className="_navbarButton">
//     <Link  to="mainHome" smooth={true} duration={1000}>ANASAYFA</Link>
// </Button>
// <Button className="_navbarButton">
//     <Link  to="mainAbout" smooth={true} duration={1000}>HAKKIMIZDA</Link>
// </Button>
// <Button className="_navbarButton">
//     <Link  to="mainServices" smooth={true} duration={1000}>HİZMETLERİMİZ</Link>
// </Button>
// <Button className="_navbarButton">
//     <Link  to="mainReferences" smooth={true} duration={1000}>REFARANSLAR</Link>
// </Button>
// <Button className="_navbarButton">
//     <Link  to="mainContact" smooth={true} duration={1000}>İLETİŞİM</Link>
// </Button>
// <Button className="_navbarButton">
//     <Link  to="mainHelp" smooth={true} duration={1000}><span className="helpTxt">DESTEK</span></Link>
// </Button>
//          </div>

//         </div>

//     )
// }

// export default NavBar
