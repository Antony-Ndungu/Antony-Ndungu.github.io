import React from "react"
import Layout from "../components/layout";
import SocialMediaButtons from "../components/socialMediaButtons";
import me from "../images/me.png";

export default () => (
    <Layout>
        <div className="w3-padding-32 w3-container w3-center w3-animate-zoom" style={{ textShadow: "1px 1px 0 #444", }}>
            <h1 className="w3-jumbo"><span className="w3-hide-small">I'm </span>Antony Ndungu</h1>
            <SocialMediaButtons />
            <p className="w3-wide"><b>Software Developer</b></p>
            <img src={me} alt="me" className="w3-image w3-round" width="500" heigh="500" />
        </div>
        <div style={{clear: "both"}}></div>
    </Layout>
);
