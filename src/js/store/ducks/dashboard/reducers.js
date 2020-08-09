import * as t from './types';

const INITIAL_STATE = {
  monthNumber: 0,
  currentMonth: ''
};

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case t.SETCURRENTMONTH :
      return {
        ...state,
        monthNumber: payload.number,
        currentMonth: payload.month
      };
    default:
      return state;
  }
};
