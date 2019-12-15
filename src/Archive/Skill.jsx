import React from "react";
import Info from "./Info";
import H3Header from "../Components/H3Header";
import {Row, Col} from "react-bootstrap";
import PropTypes, {string} from "prop-types";

/**
 * Used for individual skill input fields.
 * This was used before I used Bootstrap.
 */
const Skill = props => {
    return (
        <Row>
            <H3Header h3Header={props.h3Header}/>
            <input style={{marginTop: "2%"}}
                   type="text"
                   name={props.name}
                   value={props.value}
                   onChange={props.handleChange}/>
        </Row>
    )
};

export default Skill;

Skill.propTypes = {
    /**
     * The header that is shown above the input field. Used as description.
     */
    h3Header: PropTypes.string.isRequired,
    /**
     * Short name for the skill you want. Used to set the state in the parents, handleChange function.
     */
    name: PropTypes.string.isRequired,
    /**
     * Should be set to the respective state which is initialised in the constructor of the parent. (or useState)
     */
    value: PropTypes.string.isRequired,
    /**
     * Function that handles the input from the input field. It should set the state of the respective `name` to the respective name's state.
     */
    handleChange: PropTypes.func.isRequired
};