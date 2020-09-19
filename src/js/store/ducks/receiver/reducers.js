import * as t from './types';

const INITIAL_STATE = {
  receiverCount: 6,
  lastThreeMonthsCount: 2
};

export default function reducer (state = INITIAL_STATE, { type, payload: { count, monthsCount } = {} }) {
  switch (type) {
  case t.SETRECEIVERS:
    return {
      ...state,
      receiverCount: count,
      lastThreeMonthsCount: monthsCount
    };
  default:
    return state;
  }
};
