import React from "react";
import Info from "./Info";
import H3Header from "./H3Header";

class Skill extends React.Component {
    render() {
        return(
            <div>
                <Info tooltipText={this.props.tooltipText}>
                    <H3Header text={this.props.h3Header}/>
                    <input className="skill-input"
                           type="text"
                           name={this.props.name}
                           value={this.props.value}
                           onChange={this.props.handleChange}/>
                </Info>
            </div>
        )
    }
}

export default Skill;