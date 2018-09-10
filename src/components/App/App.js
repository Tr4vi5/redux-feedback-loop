import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback.js';
import UnderstandingFeedback from '../UnderstandingFeedback/UnderstandingFeedback.js';
import SupportFeedback from '../SupportFeedback/SupportFeedback.js';
import CommentsFeedback from '../CommentsFeedback/CommentsFeedback.js';
import ThankFeedback from '../ThankFeedback/ThankFeedback.js';
import ResultsFeedback from '../ResultsFeedback/ResultsFeedback.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback Loop</h1>
            <h4><i>How do I get out of this thing!?</i></h4>
          </header>
          <br />
          <div>
            <Route exact path="/" component={FeelingFeedback} />
            <Route path="/understanding" component={UnderstandingFeedback} />
            <Route path="/support" component={SupportFeedback} />
            <Route path="/comments" component={CommentsFeedback} />
            <Route path="/thank" component={ThankFeedback} />
            <Route path="/admin" component={ResultsFeedback} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;