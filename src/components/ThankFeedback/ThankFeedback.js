import React, { Component } from 'react'
import { connect } from 'react-redux';

class SupportFeedback extends Component {

  handleClick = () => {
    this.props.dispatch({type: 'RESET_STATE'}); // resets the feedbackReducer state
    this.props.history.push('/') // redirects to the first feedback question
  }

  render() {
    return (
      <div>
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
        <h1>Thank you for submitting feedback!</h1>
        <button onClick={this.handleClick}>Leave new feedback</button>
      </div>
    )
  }
}

export default connect()(SupportFeedback);