import React, { Component } from 'react';
import moment from 'moment';

class ResultsFeedbackItem extends Component {

    handleDeleteClick = () => {
        if ( window.confirm('Are you sure?') ) {
            this.props.deleteFeedback(this.props.feedbackItem);
        }
    }

    handleFlagClick = () => {
        this.props.flagFeedback(this.props.feedbackItem);
    }

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

export default ResultsFeedbackItem;