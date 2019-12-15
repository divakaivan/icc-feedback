import React from "react";
import "../Stylesheets/empty-error.css";

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