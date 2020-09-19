import * as t from './types';

const INITIAL_STATE = {
  donorsCount: 0,
  lastThreeMonthsCount: 14
};

export default function reducer (state = INITIAL_STATE, { action, payload: { count, monthsCount } = {} }) {
  switch (action) {
  case t.SET_DONOR:
    return {
      ...state,
      donorsCount: count,
      lastThreeMonthsCount: monthsCount
    };
  default:
    return state;
  }
};
