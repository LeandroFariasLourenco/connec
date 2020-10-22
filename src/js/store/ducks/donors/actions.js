import * as t from './types';

export const setDonors = ({ donorsCount, lastThreeMonthsCount }) => ({
  type: t.SET_DONORS,
  payload: {
    count: donorsCount,
    monthsCount: lastThreeMonthsCount
  }
});
