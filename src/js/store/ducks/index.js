import { combineReducers } from 'redux';

import navbar from './navbar';
import register from './register';
import dashboard from './dashboard';

export default combineReducers({
  navbar,
  register,
  dashboard
});
