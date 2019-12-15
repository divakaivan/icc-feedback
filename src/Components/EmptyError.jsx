import React from "react";
import "../Stylesheets/empty-error.css";
import PropTypes from "prop-types";

/**
 * Red error message which is shown when one or more of the stars/stops/continues fields are empty.
 */
const EmptyError = props => {
    return (
        <React.Fragment>
            {props.show ? <h4 className="error-empty">
                One of the first three fields is empty. Please enter at least one out of the three
                stops/starts/continues {props.isEmptyCount !== 1 ? <span>x{props.isEmptyCount}</span> : null}
            </h4> : null}
        </React.Fragment>
    )
};

export default EmptyError;

EmptyError.propTypes = {
    /**
     * Whether to show the error message or not.
     */
    show: PropTypes.bool.isRequired,
    /**
     * The amount of times the user has tried to submit, but one or more of the main fields is empty.
     */
    isEmptyCount: PropTypes.number.isRequired
};