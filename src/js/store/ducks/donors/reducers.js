import * as t from './types';

const INITIAL_STATE = {
  donorsCount: 0,
  lastThreeMonthsCount: 0
};

export default function reducer (state = INITIAL_STATE, { type, payload: { count, monthsCount } = {} }) {
  switch (type) {
  case t.SET_DONORS:
    return {
      ...state,
      donorsCount: count,
      lastThreeMonthsCount: monthsCount
    };
  default:
    return state;
  }
};
