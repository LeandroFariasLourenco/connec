import * as t from './types';

const INITIAL_STATE = {
  notificationOpen: false
};

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.openNotifications:
    return {
      ...state,
      notificationOpen: payload
    };
  default:
    return state;
  }
}
