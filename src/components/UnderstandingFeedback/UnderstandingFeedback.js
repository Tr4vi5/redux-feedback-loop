import React, { Component } from 'react'
import { connect } from 'react-redux';

class UnderstandingFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      understanding: null
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let action = { type: 'ADD_UNDERSTANDING', payload: this.state.understanding }
    this.props.dispatch(action);
    this.props.history.push('support');
  }

  handleRadioChange = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <h1>How well are you understanding today's material?</h1>
        <form onSubmit={this.handleFormSubmit} value={this.state}>
          <label htmlFor="one">1</label>
          <input type="radio" name="understanding" id="one" value="1" onChange={this.handleRadioChange} />
          <label htmlFor="two">2</label>
          <input type="radio" name="understanding" id="two" value="2" onChange={this.handleRadioChange} />
          <label htmlFor="three">3</label>
          <input type="radio" name="understanding" id="three" value="3" onChange={this.handleRadioChange} />
          <label htmlFor="four">4</label>
          <input type="radio" name="understanding" id="four" value="4" onChange={this.handleRadioChange} />
          <label htmlFor="five">5</label>
          <input type="radio" name="understanding" id="five" value="5" onChange={this.handleRadioChange} />
          <input type="submit" value="Next Page" />
        </form>
      </div>
    )
  }
}

export default connect()(UnderstandingFeedback);