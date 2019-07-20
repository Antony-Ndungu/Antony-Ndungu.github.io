import React, { Fragment } from "react";
import me from "../images/me.png";

export default () => (
    <Fragment>
        <h1 className="w3-jumbo"><span className="w3-hide-small">I'm </span>Antony Ndungu</h1>
        <img src={me} alt="me" className="w3-image w3-circle" width="500" heigh="500" />
        <p className="w3-wide"><b>Software Developer</b></p>
    </Fragment>
) 