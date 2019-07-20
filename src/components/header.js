import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import logo from "../images/logo.png";

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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Helmet>
        <div className="">
            <div className="w3-bar w3-medium w3-padding w3-card" style={{ letterSpacing: "4px"}}>
                <div className="w3-content">
                <Link to="/" className="w3-bar-item w3-button w3-hover-light-gray">
                    <img src={logo} alt="logo" height="38px"/>
                </Link>
                <div className="w3-right w3-padding-top">
                    <Link to="/" className="w3-bar-item w3-button w3-hover-none w3-hover-text-theme w3-hover-light-gray w3-hide-small" activeClassName="w3-bottombar w3-light-gray w3-border-theme w3-text-theme">Home</Link>
                    <Link to="/blog" className="w3-bar-item w3-button w3-hover-none w3-mobile w3-hover-text-theme w3-hover-light-gray w3-hide-small" activeClassName="w3-bottombar w3-light-gray w3-border-theme w3-text-theme">Blog</Link>
                    <Link to="/about" className="w3-bar-item w3-button w3-hover-none w3-mobile w3-hover-text-theme w3-hide-small w3-hover-light-gray" activeClassName="w3-bottombar w3-light-gray w3-border-theme w3-text-theme">About</Link>
                </div>
                <button className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={handleClick}>&#9776;</button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" className="w3-bar-block w3-large w3-hide w3-hide-large w3-hide-medium">
            <Link to="/" className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar  w3-hover-text-theme w3-center" activeClassName="w3-theme">Home</Link>
            <Link to="/blog" className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar  w3-hover-text-theme w3-center" activeClassName="w3-theme">Blog</Link>
            <Link to="/about" className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar  w3-hover-text-theme w3-center" activeClassName="w3-theme">About</Link>
        </div>
    </header> 
);