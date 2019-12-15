import React from "react";
import {Form} from "react-bootstrap";
import Skills from "./Skills";
import PropTypes from "prop-types";

/**
 * Component which maps a list of skills into a form with a header and a textarea for input.
 */
const SkillFields = props => {
    return (
        <React.Fragment>
            <Form>
                {props.skills.map(skill => {
                    return (
                        <Skills
                            id={skill.id}
                            h3Header={skill.h3Header}
                            value={skill.value}
                            handleChange={props.handleChange}
                        />
                    )
                })}
            </Form>
        </React.Fragment>
    )
};

export default SkillFields;

SkillFields.propTypes = {
    /**
     * Array of objects. Each object should contain an id, h3Header, value and handleChange key.
     * This list is mapped to a form.
     */
    skills: PropTypes.array.isRequired
};