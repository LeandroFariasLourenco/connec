import * as t from './types';

const INITIAL_STATE = {
  donorsCount: 0,
  lastThreeMonthsCount: 0
};

export default function reducer (state = INITIAL_STATE, { action, payload: { count, monthsCount } = {} }) {
  switch (action) {
  case t.SET_DONORS:
    alert('a', count);
    alert('a', monthsCount);
    return {
      ...state,
      donorsCount: count,
      lastThreeMonthsCount: monthsCount
    };
  default:
    return state;
  }
};
