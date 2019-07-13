import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <footer className="w3-container w3-center" style={{ padding: ".2rem", opacity: 0 }}>
                <p className="w3-small">Created by Antony Ndungu, &copy; 2019</p>
            </footer>
            <Footer />
        </div>
    );
}

export default Layout;