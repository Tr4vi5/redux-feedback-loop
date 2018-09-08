import React, { Component } from 'react'
import { connect } from 'react-redux';

class CommentsFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: null
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let action = { type: 'ADD_COMMENTS', payload: this.state.comments }
        this.props.dispatch(action);
        this.props.history.push('thank');
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Did you feel supported today?</h1>
                <form onSubmit={this.handleFormSubmit} value={this.state}>
                    <input type="text" name="comments" onChange={this.handleTextChange}/>
                    <input type="submit" value="Submit Feedback" />
                </form>
            </div>
        )
    }
}

export default connect()(CommentsFeedback);