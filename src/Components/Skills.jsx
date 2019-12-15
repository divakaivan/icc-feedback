import React from "react";
import {Form} from "react-bootstrap";
import H3Header from "./H3Header";
import PropTypes from "prop-types";

/**
 * Individual skill component which adds a textarea for input and a header for the skill.
 */
const Skills = props => {
    return (
        <Form.Group controlId={props.id}>
            <Form.Label><H3Header text={props.h3Header}/></Form.Label>
            <Form.Control onChange={props.handleChange} value={props.value} as="textarea" rows="3"/>
        </Form.Group>
    )
};

export default Skills;

Skills.propTypes = {
    /**
     * Unique id of the skill. Used for the handleChange function of the parent.
     */
    id: PropTypes.string.isRequired,
    /**
     * H3 header to be shown above the input textarea field, which describes the skill.
     */
    h3Header: PropTypes.string.isRequired,
    /**
     * Function to handle the input from the user.
     */
    handleChange: PropTypes.func.isRequired,
    /**
     * The value of the field. It is set to the state of the parent component of the respective skill.
     */
    value: PropTypes.string.isRequired
};