import React, { Component } from 'react'

class ResultsFeedbackItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.feedbackItem.date}</td>
                <td>{this.props.feedbackItem.feeling}</td>
                <td>{this.props.feedbackItem.understanding}</td>
                <td>{this.props.feedbackItem.support}</td>
                <td>{this.props.feedbackItem.comments}</td>
                <td><button>Flag for Review</button><button>Delete</button></td>
            </tr>
        )
    }
}

export default ResultsFeedbackItem;