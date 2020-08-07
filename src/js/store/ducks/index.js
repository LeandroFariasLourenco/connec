import { combineReducers } from 'redux';

import navbar from './navbar';
import register from './register';

export default combineReducers({
  navbar,
  register
});
