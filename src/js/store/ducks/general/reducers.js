import * as t from './types';

const INITIAL_STATE = {
  notificationOpen: false,
  hasNotification: false
};

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.openNotifications:
    return {
      ...state,
      notificationOpen: payload
    };
  case t.setHasNotification:
    return {
      ...state,
      hasNotification: payload
    };
  default:
    return state;
  }
}
