import React from "react";
//import "../Stylesheets/info.css";
import PropTypes from "prop-types";

/**
 * Simple tooltip component. Insert children in it, when you hover over them, you will see the tooltip message.
 */
const Info = (props) => {
    return (
        <React.Fragment>
            <span className="tooltip">
                {props.children}
                <span className="tooltip-text">{props.tooltipText}</span>
            </span>
        </React.Fragment>
    )
};

export default Info;

Info.propTypes = {
    /**
     * What to show as a tooltip if you hover over the children of this component.
     */
    tooltipText: PropTypes.string.isRequired
};