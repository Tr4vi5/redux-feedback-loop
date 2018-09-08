import React, { Component } from 'react'
import {connect} from 'react-redux';

class FeelingFeedback extends Component {
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <form>
                    <label for="one">1</label>
                    <input type="radio" name="feeling" id="one" value="1" />
                    <label for="two">2</label>
                    <input type="radio" name="feeling" id="two" value="2" />
                    <label for="three">3</label>
                    <input type="radio" name="feeling" id="three" value="3" />
                    <label for="four">4</label>
                    <input type="radio" name="feeling" id="four" value="4" />
                    <label for="five">5</label>
                    <input type="radio" name="feeling" id="five" value="5" />
                    <input type="submit" value="Next Page" />
                </form>
            </div>
        )
    }
}

export default connect()(FeelingFeedback);