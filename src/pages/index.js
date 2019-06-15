import React from "react"
import Layout from "../components/layout";
import me from "../images/me.png";

export default () => (
    <Layout>
        <div className="w3-padding-large">
            <div className="w3-padding-32 w3-container w3-center">
                <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Antony Ndungu</h1>
                <p>Software Developer and aspiring Data Scientist</p>
                <img src={me} alt="me" className="w3-image" width="500" heigh="500"/>
            </div>
        </div>
    </Layout>
);
