import React from "react";
//import "../Stylesheets/h3header.css";
import PropTypes from "prop-types";

/**
 * Simple component to get an h3 header.
 */
const H3Header = (props) => {
    return (
        <h3>{props.text}</h3>
    )
};

export default H3Header;

H3Header.propTypes = {
    /**
     * The text which is used for the h3 header.
     */
    text: PropTypes.string.isRequired
};