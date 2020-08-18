import * as t from './types';

const INITIAL_STATE = {
  receptorCount: 0,
  lastThreeMonthsCount: 0
};

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.SETRECEIVERCOUNT:
    return {
      ...state,
      payload: payload
    };
  default:
    return state;
  }
};
