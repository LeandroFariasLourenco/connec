import * as t from './types';

export const setDonors = (count, monthsCount) => ({
  type: t.SET_DONOR,
  payload: {
    count: count,
    monthsCount: monthsCount
  }
});
