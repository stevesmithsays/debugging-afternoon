import { createStore, applyMiddleware } from 'redux';
// import react from 'react-redux';
import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));