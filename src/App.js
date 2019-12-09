import React from 'react';
import Header from "./Components/Header";
import FeedbackSkill from "./Components/FeedbackSkill";

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
