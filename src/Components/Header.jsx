import React from "react";
import {Row, Col} from "react-bootstrap";

/**
 * Header for the feedback website.
 */
const Header = () => {
    return(
        <Row>
            <Col className="py-5 bg-success text-white text-center font-italic">
                <h1>Welcome to the Ivan Feedback-er</h1>

                <h2>You are under oath. Tell the truth!</h2>
            </Col>
        </Row>
    )
};
export default Header;