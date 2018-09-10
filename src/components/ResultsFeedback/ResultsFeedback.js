import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

class ResultsFeedback extends Component {

  componentDidMount(){
    this.getFeedback();
  }

  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response)=>{
      console.log('Success GETting feedback', response.data);
    }).catch((error)=>{
      console.log('Error GETting feedback', error);
      alert('Sorry, could not find feedback, try again later');
    });
  }

  render() {
    return (
      <div>
        <h1>Feedback Results</h1>
        <table style={{ width: '400px', margin: 'auto' }}>
          <thead style={{ backgroundColor: '#ccc' }}>
            <tr style={{ height: '20px' }}>
              <th style={{ backgroundColor: 'green' }}></th>
              <th style={{ backgroundColor: 'green' }}></th>
              <th style={{ backgroundColor: 'green' }}></th>
              <th style={{ backgroundColor: 'green' }}></th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});
export default connect(mapReduxStateToProps)(ResultsFeedback);