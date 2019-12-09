import React from "react";
import "../Stylesheets/header.css";

class Header extends React.Component {

    render() {

        return(
            <div className="header">
                <h1>Welcome to the Ivan Feedback-er</h1>
                <h2>You are under oath. Tell the truth!</h2>
            </div>
        )
    }
}

export default Header;