import React from "react";
//import axios from "../axios-suerverSubmits";
import ThanksModal from "./ThanksModal";
import EmptyError from "./EmptyError";
import SkillFields from "./SkillFields";
import "../Stylesheets/feedback-skill.css";
import {Row, Col, Container} from "react-bootstrap";

/**
 * This component renders a Form with all skill input fields and their headers.
 * Also handle the user input and onSubmit, submits it to the Firebase database.
 * On successful submit, shows the ThanksModal, on an main empty field, shows an error message.
 */
class FeedbackFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            continues: "",
            stops: "",
            starts: "",
            otherFeedback: "",
            isSubmitted: false,
            isEmpty: false,
            isEmptyCount: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleClick(event) {
        event.preventDefault();
        const {stops, continues, starts, otherFeedback, isEmptyCount} = this.state;

        if (stops === "" || starts === "" || continues === "") {
            this.setState({
                isEmpty: true,
                isEmptyCount: isEmptyCount + 1
            })

        } else {
            this.setState({
                isSubmitted: true
            });

            const feedback = {
                continues: continues,
                starts: starts,
                stops: stops,
                other: otherFeedback
            };
            console.log(feedback);
            // axios.post('/feedback.json', feedback)
            //     .then(response => console.log(response))
            //     .catch(error => console.log(error))
            // ;
        }
    };


    render() {
        const {stops, continues, starts, otherFeedback, isEmpty, isSubmitted, isEmptyCount} = this.state;
        const skills = [
            {
                h3Header: "3 things to continue doing",
                id: "continues",
                value: continues
            },
            {
                h3Header: "3 things to start doing",
                id: "starts",
                value: starts
            },
            {
                h3Header: "3 things to stop doing",
                id: "stops",
                value: stops
            },
            {
                h3Header: "Any other feedback ?",
                id: "otherFeedback",
                value: otherFeedback
            }
        ];

        return (
            <Container>
                <Row>
                    <Col className="my-4" md={{span: 6, offset: 3}}>
                        <SkillFields skills={skills} handleChange={this.handleChange}/>
                        <input className="submit-feedback" type="submit" value="Submit feedback"
                               onClick={this.handleClick}/>
                        <ThanksModal show={isSubmitted}/>
                        <EmptyError show={isEmpty} isEmptyCount={isEmptyCount}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FeedbackFields;