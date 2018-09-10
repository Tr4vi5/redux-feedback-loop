import React, { Component } from 'react';
import moment from 'moment'; //import moment.js for date formatting

class ResultsFeedbackItem extends Component {

    handleDeleteClick = () => {
        if (window.confirm('Are you sure?')) { //confirm with user that they would like to delete the entry
            this.props.deleteFeedback(this.props.feedbackItem);
        }
    } // end handleDeleteClick function

    handleFlagClick = () => {
        this.props.flagFeedback(this.props.feedbackItem);
    } // end handleFlagClick function

    render() {
        return (
            <tr>
                <td>{moment(this.props.feedbackItem.date).format('MM/DD/YYYY')}</td>
                <td>{this.props.feedbackItem.feeling}</td>
                <td>{this.props.feedbackItem.understanding}</td>
                <td>{this.props.feedbackItem.support}</td>
                <td>{this.props.feedbackItem.comments}</td>
                <td><button onClick={this.handleFlagClick}>Flag for Review</button><button onClick={this.handleDeleteClick}>Delete</button></td>
            </tr>
        )
    }
}

export default ResultsFeedbackItem; // export component