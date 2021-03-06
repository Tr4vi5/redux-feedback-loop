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
    let action = { type: 'ADD_SUPPORT', payload: this.state.support }
    // only send to feedbackReducer if user entered an input
    if (action.payload !== null) {
      this.props.dispatch(action);
      this.props.history.push('comments'); // navigate to the comments page
    } else {
      alert('Please tell us if you are feeling supported');
    }
  }// end handleFormSubmit function

  handleRadioChange = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) // set the targeted state property to the selected radio button, change the value to an integer
    })
  }// end handleRadioChange function

  render() {
    return (
      <div>
        {/* start "progress bar" */}
        <table style={{ width: '400px', margin: 'auto' }}>
          <thead style={{ backgroundColor: '#ccc' }}>
            <tr style={{ height: '20px' }}>
              <th style={{ backgroundColor: 'forestgreen' }}></th>
              <th style={{ backgroundColor: 'forestgreen' }}></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        </table>
        {/* end progress bar */}
        <h1>Did you feel supported today?</h1>
        <form onSubmit={this.handleFormSubmit} value={this.state}>
          <label htmlFor="one">1</label>
          <input type="radio" name="support" id="one" value="1" onChange={this.handleRadioChange} />
          <label htmlFor="two">2</label>
          <input type="radio" name="support" id="two" value="2" onChange={this.handleRadioChange} />
          <label htmlFor="three">3</label>
          <input type="radio" name="support" id="three" value="3" onChange={this.handleRadioChange} />
          <label htmlFor="four">4</label>
          <input type="radio" name="support" id="four" value="4" onChange={this.handleRadioChange} />
          <label htmlFor="five">5</label>
          <input type="radio" name="support" id="five" value="5" onChange={this.handleRadioChange} />
          <input type="submit" value="Next Page" />
        </form>
      </div>
    )
  }
}

export default connect()(SupportFeedback); // connect component to redux store and export