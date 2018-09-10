import React, { Component } from 'react'
import { connect } from 'react-redux';

class FeelingFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeling: null
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let action = { type: 'ADD_FEELING', payload: this.state.feeling }
        // if input is entered, dispatch to the feedbackReducer in the redux store and navigate to the understanding page
        if (action.payload !== null) {
            this.props.dispatch(action);
            this.props.history.push('understanding');
        } else {
            alert('Please tell us how you are feeling');
        }
    }// end handleFormSubmit function

    handleRadioChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) // take input from radio form and set to an integer in this.state
        })
    }// end handleRadioChange function

    render() {
        return (
            <div>
                {/* start "progress bar" */}
                <table style={{ width: '400px', margin: 'auto' }}>
                    <thead style={{ backgroundColor: '#ccc' }}>
                        <tr style={{ height: '20px' }}>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                {/* end "progress bar" */}
                <h1>How are you feeling today?</h1>
                <form onSubmit={this.handleFormSubmit} value={this.state}>
                    <label htmlFor="one">1</label>
                    <input type="radio" name="feeling" id="one" value="1" onChange={this.handleRadioChange} />
                    <label htmlFor="two">2</label>
                    <input type="radio" name="feeling" id="two" value="2" onChange={this.handleRadioChange} />
                    <label htmlFor="three">3</label>
                    <input type="radio" name="feeling" id="three" value="3" onChange={this.handleRadioChange} />
                    <label htmlFor="four">4</label>
                    <input type="radio" name="feeling" id="four" value="4" onChange={this.handleRadioChange} />
                    <label htmlFor="five">5</label>
                    <input type="radio" name="feeling" id="five" value="5" onChange={this.handleRadioChange} />
                    <input type="submit" value="Next Page" />
                </form>
            </div>
        )
    }
}

export default connect()(FeelingFeedback); // connect to redux store and export component