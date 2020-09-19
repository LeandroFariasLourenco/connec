import * as t from './types';

export const setReceiverInfo = ({ receiverCount, lastMonthsCount }) => ({
  type: t.SETRECEIVERS,
  payload: {
    count: receiverCount,
    monthsCount: lastMonthsCount
  }
});
