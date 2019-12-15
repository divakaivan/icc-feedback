import React from "react";
import "./thank-you.css";
import PropTypes from "prop-types";

/**
 * A simple thank you message after submission.
 * Used before bootstrap.
 */
const ThankYou = (props) => {
    return (
        <React.Fragment>
            {props.show ? <div>
                <h1 className="thanks">Thanks for giving me feedback :)</h1>
            </div> : null}
        </React.Fragment>
    )
};

export default ThankYou;

ThankYou.propTypes = {
    /**
     * Whether to show or not the thank you message.
     */
    show: PropTypes.bool.isRequired
};