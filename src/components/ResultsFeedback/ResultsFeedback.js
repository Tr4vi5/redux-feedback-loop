import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import ResultsFeedbackItem from './ResultsFeedbackItem/ResultsFeedbackItem';

class ResultsFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: [] // feedback results from DB
    }
  }

  componentDidMount() {
    this.getFeedback(); // call getFeedback once component mounts
  }

  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      console.log('Success GETting feedback', response.data);
      this.setState({
        feedback: response.data // set array from DB to local state
      })
    }).catch((error) => {
      console.log('Error GETting feedback', error);
      alert('Sorry, could not find feedback, try again later');
    });
  } // end getFeedback function

  deleteFeedback = (feedbackToDelete) => {
    axios({
      method: 'DELETE',
      url: `/feedback/delete/${feedbackToDelete.id}`
    }).then((response) => {
      console.log('Success in delete!');
      this.getFeedback(); // refresh DOM after delete
    }).catch((error) => {
      console.log('Error deleting', error);
      alert('Sorry, could not delete feedback');
    });
  } // end deleteFeedback function

  flagFeedback = (feedbackToFlag) => {
    axios({
      method: 'PUT',
      url: `/feedback/flag/${feedbackToFlag.id}`
    }).then((response) => {
      console.log('Success in put!');
      this.getFeedback(); // refresh DOM after update
    }).catch((error)=>{
      console.log('Error updating', error);
      alert('Sorry, could not flag for review');
    })
  }

  render() {
    return (
      <div>
        <h1>Feedback Results</h1>
        <br />
        <table style={{ width: '100%', border: '1px, solid, black' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Inputs</th>
            </tr>
          </thead>
          <tbody>
            {this.state.feedback.map((feedbackItem, index) => { // maps over feedback from database to create table rows
              return (
                <ResultsFeedbackItem key={index} feedbackItem={feedbackItem} deleteFeedback={this.deleteFeedback} flagFeedback={this.flagFeedback}/>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});
export default connect(mapReduxStateToProps)(ResultsFeedback);