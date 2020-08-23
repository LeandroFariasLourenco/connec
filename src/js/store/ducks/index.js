import { combineReducers } from 'redux';

import navbar from './navbar';
import register from './register';
import dashboard from './dashboard';
import receiver from './receiver';
import history from './history';

export default combineReducers({
  navbar,
  register,
  dashboard,
  receiver,
  history
});
