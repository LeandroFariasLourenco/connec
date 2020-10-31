import * as t from './types';

const INITIAL_STATE = {
  notificationOpen: false,
  hasNotification: false,
  informationPopupOpen: false
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
  case t.setInformationPopup:
    return {
      informationPopupOpen: payload
    };
  default:
    return state;
  }
}
