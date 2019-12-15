import React from "react";
import H3Header from "../Components/H3Header";
import axios from "../axios-suerverSubmits";
import "../Stylesheets/feedback-skill.css";
import {Row, Col, Container, Form, Modal} from "react-bootstrap";


class FeedbackSkill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            continues: "",
            stops: "",
            starts: "",
            otherFeedback: "",
            submitted: false,
            isEmpty: false
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
        const {stops, continues, starts, otherFeedback} = this.state;

        if (stops === "" || starts === "" || continues === "") {
            this.setState({
                isEmpty: true
            })
        } else {
            this.setState({
                submitted: true
            });

            const feedback = {
                stops: stops,
                continues: continues,
                starts: starts,
                other: otherFeedback
            };
            axios.post('/feedback.json', feedback)
                .then(response => console.log(response))
                .catch(error => console.log(error))
            ;
        }
    };

    render() {
        const {stops, continues, starts, otherFeedback, submitted, isEmpty} = this.state;

        return (
            <Container>
                    <Row>
                        <Col className="my-4" md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Form.Group controlId="continues">
                                    <Form.Label><H3Header text={"3 things to continue doing"}/></Form.Label>
                                    <Form.Control onChange={this.handleChange} value={continues} as="textarea" rows="3"/>
                                </Form.Group>
                                <Form.Group controlId="starts">
                                    <Form.Label><H3Header text={"3 things to start doing"}/></Form.Label>
                                    <Form.Control onChange={this.handleChange} value={starts} as="textarea" rows="3"/>
                                </Form.Group>
                                <Form.Group controlId="stops">
                                    <Form.Label><H3Header text={"3 things to stop doing"}/></Form.Label>
                                    <Form.Control onChange={this.handleChange} value={stops} as="textarea" rows="3"/>
                                </Form.Group>
                                <Form.Group controlId="otherFeedback">
                                    <Form.Label><H3Header text={"Any other feedback ?"}/></Form.Label>
                                    <Form.Control onChange={this.handleChange} value={otherFeedback} as="textarea" rows="3"/>
                                </Form.Group>
                            </Form>
                            <input className="submit-feedback" type="submit" value="Submit feedback" onClick={this.handleClick}/>
                            <Modal show={submitted}>
                                <Modal.Header>
                                    <Modal.Title>Thanks</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Thanks for giving me feedback :) <br/> You may close this page now</Modal.Body>
                            </Modal>
                            {isEmpty ? <h4 style={{color: "red", fontSize: "14px", marginTop: "-6%"}}>
                                    One of the first three fields is empty. Please enter at least one out of the three stops/starts/continues
                                </h4> : null}
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default FeedbackSkill;