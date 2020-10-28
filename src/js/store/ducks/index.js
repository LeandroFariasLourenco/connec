import { combineReducers } from 'redux';

import navbar from './navbar';
import register from './register';
import dashboard from './dashboard';
import receiver from './receiver';
import donors from './donors';
import general from './general';

export default combineReducers({
  navbar,
  register,
  dashboard,
  receiver,
  general,
  donors
});
