import React, { Component } from 'react'
import { connect } from 'react-redux';

class SupportFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      support: null
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let action = { type: 'ADD_SUPPORT', payload: this.state.support }
    this.props.dispatch(action);
    this.props.history.push('comments');
  }

  handleRadioChange = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <h1>Thank you for submitting feedback!</h1>
        <button>Leave new feedback</button>
      </div>
    )
  }
}

export default connect()(SupportFeedback);