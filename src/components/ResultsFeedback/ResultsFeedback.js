import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import ResultsFeedbackItem from './ResultsFeedbackItem/ResultsFeedbackItem';

class ResultsFeedback extends Component {
  constructor(props){
    super(props);
    this.state = {
      feedback: []
    }
  }

  componentDidMount(){
    this.getFeedback();
  }

  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response)=>{
      console.log('Success GETting feedback', response.data);
      this.setState({
        feedback: response.data
      })
    }).catch((error)=>{
      console.log('Error GETting feedback', error);
      alert('Sorry, could not find feedback, try again later');
    });
  }

  deleteFeedback = (feedbackToDelete) =>{
    console.log(feedbackToDelete);
    axios({
      method: 'DELETE',
      url: `/feedback/delete/${feedbackToDelete.id}`
    }).then((response)=>{
      console.log('Success!');
      this.getFeedback();
    }).catch((error)=>{
      console.log('Error deleting', error);
    });
  }

  render() {
    return (
      <div>
        <h1>Feedback Results</h1>
        <br />
        <table style={{width: '100%', border: '1px, solid, black'}}>
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
            {this.state.feedback.map((feedbackItem, index)=>{ // maps over feedback from database to create table rows
              return(
                <ResultsFeedbackItem key={index} feedbackItem={feedbackItem} deleteFeedback={this.deleteFeedback}/>
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