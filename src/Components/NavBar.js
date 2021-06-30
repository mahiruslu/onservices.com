import logo from '../Images/logo.jpg';
import React from 'react'
import {Link} from 'react-scroll'
import {Button} from '@material-ui/core';

function NavBar() {
    return (
        
        <div className="_navbar">
         <div className ="_navbarLeft">
            <Button className="_navbarButton">
                <Link to="mainHome" smooth={true} duration={1000}>Onservices</Link>
            </Button>
         </div>
         <div className ="_navbarRight">
            <Button className="_navbarButton">
                <Link  to="mainHome" smooth={true} duration={1000}>ANASAYFA</Link>
            </Button>
            <Button className="_navbarButton">
                <Link  to="mainAbout" smooth={true} duration={1000}>HAKKIMIZDA</Link>
            </Button>
            <Button className="_navbarButton">
                <Link  to="mainServices" smooth={true} duration={1000}>HİZMETLERİMİZ</Link>
            </Button>
            <Button className="_navbarButton">
                <Link  to="mainReferences" smooth={true} duration={1000}>REFARANSLAR</Link>
            </Button>
            <Button className="_navbarButton">
                <Link  to="mainContact" smooth={true} duration={1000}>İLETİŞİM</Link>
            </Button>
            <Button className="_navbarButton">
                <Link  to="mainHelp" smooth={true} duration={1000}><span className="helpTxt">DESTEK</span></Link>
            </Button>
         </div>

        </div>
            
    )
}


export default NavBar
