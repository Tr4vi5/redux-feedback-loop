import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// initial feedback state object
let feedback = { feeling: null, understanding: null, support: null, comments: 'None' }

//reducer for feedback
const feedbackReducer = (state = feedback, action) => {
    if (action.type === 'ADD_FEELING') {
        return { ...state, feeling: action.payload };
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return { ...state, understanding: action.payload };
    } else if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: action.payload };
    } else if (action.type === 'ADD_COMMENTS') {
        return { ...state, comments: action.payload };
    } else if (action.type === 'RESET_STATE') {
        return feedback;
    }
    return state;
} // end feedbackReducer

//create redux store
const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger),
);// end redux store

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
