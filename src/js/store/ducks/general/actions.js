import * as t from './types';

export const openNotification = (state) => ({
  type: t.openNotifications,
  payload: state
});

export const setHasNotification = (state) => ({
  type: t.setHasNotification,
  payload: state
});
