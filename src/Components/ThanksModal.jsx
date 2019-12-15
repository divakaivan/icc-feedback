import React from "react";
import {Modal} from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Component which shows a modal with a thank you message.
 */
const ThanksModal = props => {
    return (
        <React.Fragment>
            <Modal show={props.show}>
                <Modal.Header>
                    <Modal.Title>Thanks</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thanks for giving me feedback :) <br/> You may close this page now</Modal.Body>
            </Modal>
        </React.Fragment>
    )
};

export default ThanksModal;

ThanksModal.propTypes = {
    /**
     * A boolean whether to show the Thank you modal.
     */
    show: PropTypes.bool.isRequired
};