import React from "react";
import "../Stylesheets/feedback-skill.css";
import H3Header from "./H3Header";
import Info from "./Info";

class FeedbackSkill extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='skill'>
                    <form>
                        <Info tooltipText="E.g. Talking to colleagues. Approachability. Giving feedback.">
                            <H3Header text={"Communication"}/>
                            <input className="skill-input"
                                   type="text"
                                   onChange={this.handleChange}/>


                        </Info>
                        <Info tooltipText="E.g. Team adaptability. Feedback if I had collaborative worked with you.">
                            <H3Header text={"Teamwork"}/>
                            <input className="skill-input"
                                   type="text"
                                   onChange={this.handleChange}/>


                        </Info>
                        <Info tooltipText="Noticeable improvements made from July/August to now (December)">
                            <H3Header text={"Areas which were lacking at the beginning, but have improved"}/>
                            <input className="skill-input"
                                   type="text"
                                   onChange={this.handleChange}/>


                        </Info>
                        <Info tooltipText="Areas in which I have not showed up or would be good to see me show up">
                            <H3Header text={"Areas which need improvement"}/>
                            <input className="skill-input"
                                   type="text"
                                   onChange={this.handleChange}/>


                        </Info>
                        <Info
                            tooltipText="Opinion on how well I am doing so far. Any improvements you would like to see?">
                            <H3Header text={"Work on documentations"}/>
                            <input className="skill-input"
                                   type="text"
                                   onChange={this.handleChange}/>


                        </Info>
                        <Info
                            tooltipText="How is it going from your perspective? Any suggestions as the work progresses to Jan? ">
                            <H3Header text={"Work on Reporting"}/>
                            <input className="skill-input"
                                   type="text"
                                   onChange={this.handleChange}/>


                        </Info>
                        <Info tooltipText="Areas in which I have not showed up or would be good to see me show up">
                            <H3Header text={"Areas which need improvement"}/>
                            <input className="skill-input"
                                   type="text"
                                   onChange={this.handleChange}/>


                        </Info>
                        <H3Header text={"Any other feedback?"}/>
                        <input className="skill-input"
                               type="text"
                               onChange={this.handleChange}/>

                        <input type="submit" value="Submit feedback survey" className="submit-feedback"/>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default FeedbackSkill;