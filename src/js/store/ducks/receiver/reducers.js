import * as t from './types';

const INITIAL_STATE = {
  receiverCount: 6,
  lastThreeMonthsCount: 2
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
