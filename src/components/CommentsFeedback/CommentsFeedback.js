import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

class CommentsFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ...this.props.reduxState.feedbackReducer, comments: 'None'
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let action = { type: 'ADD_COMMENTS', payload: this.state.comments }
        this.props.dispatch(action);
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.state
        }).then((response)=>{
            console.log('Success in POST', response.data);
        }).catch((error)=>{
            console.log('Error in POST', error);
            alert('Sorry, could not send feedback');
        });
        
        this.props.history.push('thank');
    }

    handleTextChange = (e) => {
        if (e.target.value !== ''){
            this.setState({
                [e.target.name]: e.target.value
            })
        }
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
                            <th></th>
                        </tr>
                    </thead>
                </table>
                <h1>Any comments?</h1>
                <form onSubmit={this.handleFormSubmit} value={this.state}>
                    <input type="text" name="comments" onChange={this.handleTextChange}/>
                    <input type="submit" value="Submit Feedback" />
                </form>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(CommentsFeedback);