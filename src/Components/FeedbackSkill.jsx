import React from "react";
import "../Stylesheets/feedback-skill.css";
import H3Header from "./H3Header";
import axios from "../axios-suerverSubmits";
import Skill from "./Skill";
import ThankYou from "./ThankYou";


class FeedbackSkill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comms: "",
            tw: "",
            lackImprove: "",
            docs: "",
            reporting: "",
            needImprove: "",
            otherFeedback: "",
            submitted: false,
            isEmpty: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleClick(event) {
        event.preventDefault();
        const {comms, tw, lackImprove, docs, reporting, needImprove, otherFeedback} = this.state;
        this.setState({
            submitted: true
        });
        const feedback = {
            communication: comms,
            teamwork: tw,
            lackToImprove: lackImprove,
            documentation: docs,
            reportingCode: reporting,
            needToImprove: needImprove,
            other: otherFeedback
        };
        axios.post('/feedback.json', feedback )
            .then(response => console.log(response))
            .catch(error => console.log(error))
        ;
    };


    render() {
        const {submitted, comms, tw, lackImprove, docs, reporting, needImprove, otherFeedback} = this.state;
        const Skills = [
            {
                tooltipText: "E.g. Talking to colleagues. Approachability. Giving feedback.",
                h3Header: "Communication",
                name: "comms",
                value: comms,
                handleChange: this.handleChange
            },
            {
                tooltipText: "E.g. Team adaptability. Feedback if I had collaborative worked with you.",
                h3Header: "Teamwork",
                name: "tw",
                value: tw,
                handleChange: this.handleChange
            },
            {
                tooltipText: "Noticeable improvements made from July/August to now (December)",
                h3Header: "Areas which were lacking at the beginning, but have improved",
                name: "lackImprove",
                value: lackImprove,
                handleChange: this.handleChange
            },
            {
                tooltipText: "Opinion on how well I am doing so far. Any improvements you would like to see?",
                h3Header: "Work on documentations",
                name: "docs",
                value: docs,
                handleChange: this.handleChange
            },
            {
                tooltipText: "How is it going from your perspective? Any suggestions as the work progresses to Jan? ",
                h3Header: "Work on Reporting",
                name: "reporting",
                value: reporting,
                handleChange: this.handleChange
            },
            {
                tooltipText: "Areas in which I have not showed up or would be good to see me show up",
                h3Header: "Areas which need improvement",
                name: "needImprove",
                value: needImprove,
                handleChange: this.handleChange
            }
        ];

        return (
            <React.Fragment>
                {submitted ? <ThankYou/> : <div className='skill'>
                    <form>
                        {Skills.map(skill => (
                            <Skill
                                key={skill.name}
                                tooltipText={skill.tooltipText}
                                h3Header={skill.h3Header}
                                name={skill.name}
                                value={skill.value}
                                handleChange={skill.handleChange}
                            />
                        ))}
                        <H3Header text={"Any other feedback?"}/>
                        <input className="skill-input"
                               type="text"
                               name={'otherFeedback'}
                               value={otherFeedback}
                               onChange={this.handleChange}/>

                        <input type="submit" value="Submit feedback survey" className="submit-feedback"/>
                    </form>
                </div>}
            </React.Fragment>
        )
    }
}

export default FeedbackSkill;