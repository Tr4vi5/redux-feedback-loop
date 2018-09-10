import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

class CommentsFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.reduxState.feedbackReducer, comments: 'None' // spread feedback properties from 
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let action = { type: 'ADD_COMMENTS', payload: this.state.comments }
        this.props.dispatch(action);// update the feedbackReducer in the store with the new comments
        //axios call to send feedback object to the database
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.state
        }).then((response) => {
            console.log('Success in POST', response.data);
        }).catch((error) => {
            console.log('Error in POST', error);
            alert('Sorry, could not send feedback');
        });// end axios POST

        this.props.history.push('thank'); // navigate to the thank you page
    }// end handleFormSubmit function

    handleTextChange = (e) => {
        if (e.target.value !== '') {
            this.setState({
                [e.target.name]: e.target.value // set the targeted property in this.state to the value of the input
            })
        }
    }// end handleTextChange function

    render() {
        return (
            <div>
                {/* start "progress bar" */}
                <table style={{ width: '400px', margin: 'auto' }}>
                    <thead style={{ backgroundColor: '#ccc' }}>
                        <tr style={{ height: '20px' }}>
                            <th style={{ backgroundColor: 'green' }}></th>
                            <th style={{ backgroundColor: 'green' }}></th>
                            <th style={{ backgroundColor: 'green' }}></th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                {/* end "progress bar" */}
                <h1>Any comments?</h1>
                <form onSubmit={this.handleFormSubmit} value={this.state}>
                    <input type="text" name="comments" onChange={this.handleTextChange} />
                    <input type="submit" value="Submit Feedback" />
                </form>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({ // map feedbackReducer state to this.state
    reduxState
});
export default connect(mapReduxStateToProps)(CommentsFeedback); // connect to reduxStore and export component