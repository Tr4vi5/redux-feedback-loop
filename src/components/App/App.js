import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback.js';
import ComprehensionFeedback from '../ComprehensionFeedback/ComprehensionFeedback.js';
import SupportFeedback from '../SupportFeedback/SupportFeedback.js';
import CommentFeedback from '../CommentFeedback/CommentFeedback.js';
import ThankFeedback from '../ThankFeedback/ThankFeedback.js';
import ResultsFeedback from '../ResultsFeedback/ResultsFeedback.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <div>
            <Route exact path="/" component={FeelingFeedback}/>
            <Route path="/comprehension" component={ComprehensionFeedback}/>
            <Route path="/support" component={SupportFeedback}/>
            <Route path="/comment" component={CommentFeedback}/>
            <Route path="/thank" component={ThankFeedback}/>
            <Route path="/admin" component={ResultsFeedback}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;