import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import logo from "../images/logo.png";

import "../styles/index.scss";

const handleClick = (e) => {
    let mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.className.indexOf("w3-show") === -1) {
        mobileMenu.className += " w3-show";
    } else {
        mobileMenu.className = mobileMenu.className.replace(" w3-show", "");
    }
}

export default () => (
    <header>
        <Helmet>
            <title>Antony Ndungu</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
        </Helmet>
        <div className="">
            <div className="w3-bar w3-large w3-light-grey w3-padding w3-card" style={{ letterSpacing: "4px"}}>
                <div className="w3-content">
                <Link to="/" className="w3-bar-item w3-button">
                    <img src={logo} alt="logo" height="45px"/>
                </Link>
                <div className="w3-right w3-padding-top">
                    <Link to="/" className="w3-bar-item w3-button w3-hover-none w3-hover-text-theme w3-hover-white w3-hide-small" activeClassName="w3-bottombar w3-white w3-border-theme w3-text-theme">Home</Link>
                    <Link to="/blog" className="w3-bar-item w3-button w3-hover-none w3-mobile w3-hover-text-theme w3-hover-white w3-hide-small" activeClassName="w3-bottombar w3-white w3-border-theme w3-text-theme">Blog</Link>
                    <Link to="/about" className="w3-bar-item w3-button w3-hover-none w3-mobile w3-hover-text-theme w3-hide-small w3-hover-white" activeClassName="w3-bottombar w3-white w3-border-theme w3-text-theme">About</Link>
                    <Link to="/contact" className="w3-bar-item w3-button w3-hover-none w3-mobile w3-hover-text-theme w3-hide-small w3-hover-white" activeClassName="w3-bottombar w3-white w3-border-theme w3-text-theme">Contact</Link>
                </div>
                <button className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={handleClick}>&#9776;</button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" className="w3-bar-block w3-xlarge w3-light-grey w3-hide w3-hide-large w3-hide-medium">
            <Link to="/" className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-theme w3-hover-text-theme w3-center" activeClassName="w3-theme">Home</Link>
            <Link to="/blog" className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-theme w3-hover-text-theme w3-center" activeClassName="w3-theme">Blog</Link>
            <Link to="/about" className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-theme w3-hover-text-theme w3-center" activeClassName="w3-theme">About</Link>
            <Link to="/contact" className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-theme w3-hover-text-theme w3-center" activeClassName="w3-theme">Contact</Link>
        </div>
    </header> 
);