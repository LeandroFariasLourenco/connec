import * as t from './types';

const INITIAL_STATE = {
  donorsCount: 0,
  lastThreeMonthsCount: 1
};

export default function reducer (state = INITIAL_STATE, { action, payload }) {
  switch (action) {
  case t.SET_DONOR:
    return {
      ...state,
      payload: payload
    };
  default:
    return state;
  }
};
