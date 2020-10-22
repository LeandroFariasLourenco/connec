import * as t from './types';

export const setReceiverInfo = ({ receiverCount, lastMonthsCount }) => ({
  type: t.SET_RECEIVERS,
  payload: {
    count: receiverCount,
    monthsCount: lastMonthsCount
  }
});
