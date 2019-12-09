import React from "react";
import "../Stylesheets/h3header.css";

class H3Header extends React.Component {
    render() {
        return (
            <h3 className="h3-header">{this.props.text}</h3>
        );
    }
}

export default H3Header;