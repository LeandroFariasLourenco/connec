import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ducks from './ducks';

export default createStore(ducks, applyMiddleware(logger));
