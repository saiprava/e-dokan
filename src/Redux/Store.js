import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import Rootreducer from './Rootreducer';

const middlewares = [logger];

const store = createStore ( Rootreducer , applyMiddleware(...middlewares));


export default store;