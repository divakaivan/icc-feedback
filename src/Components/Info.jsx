import React from "react";
import "../Stylesheets/info.css";

const Info = (props) => {
    return (
        <div>
            <span className="tooltip">
                {props.children}
                <span className="tooltip-text">{props.tooltipText}</span>
            </span>
        </div>
    )
};

export default Info;