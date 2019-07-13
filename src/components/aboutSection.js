import React, { Fragment } from "react";

export default ({name, items}) => (
    <Fragment>
        <button className="w3-btn w3-left-align w3-block w3-card-2 accordion" onClick={handleClick}>{name}</button>
        <div className="w3-container w3-border panel">
            <ul className="w3-ul">
                {items.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    </Fragment>
);