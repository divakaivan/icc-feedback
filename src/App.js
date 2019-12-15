import React from 'react';
import Header from "./Components/Header";
import FeedbackSkill from "./Archive/FeedbackSkill";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <FeedbackSkill/>
            </div>
        )
    }
}

export default App;
