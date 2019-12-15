import React from "react";

const EmptyError = props => {
    return (
        <React.Fragment>
            {props.show ? <h4 style={{color: "red", fontSize: "14px", marginTop: "-6%"}}>
                One of the first three fields is empty. Please enter at least one out of the three
                stops/starts/continues
            </h4> : null}
        </React.Fragment>
    )
};

export default EmptyError;