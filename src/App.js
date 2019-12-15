import React from 'react';
import Header from "./Components/Header";
import FeedbackFields from "./Components/FeedbackFields";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <FeedbackFields/>
            </div>
        )
    }
}

export default App;
