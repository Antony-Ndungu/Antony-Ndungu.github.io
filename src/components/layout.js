import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
    return (
        <div>
            <Header />
            <p class="w3-center">Under Construction</p>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Layout;