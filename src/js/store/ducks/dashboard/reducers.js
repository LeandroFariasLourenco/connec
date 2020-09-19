import * as t from './types';

const INITIAL_STATE = {
  monthNumber: 0,
  currentMonth: '',
  isLoading: false
};

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.SETCURRENTMONTH :
    return {
      ...state,
      monthNumber: payload.number,
      currentMonth: payload.month
    };
  case t.SETLOADING :
    return {
      ...state,
      isLoading: payload
    };
  default:
    return state;
  }
};
