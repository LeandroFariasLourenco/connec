import * as t from './types';

const INITIAL_STATE = {
  currentPage: window.location.pathname
};

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.NAVIGATE:
    return { ...state, currentPage: payload };
  default:
    return state;
  }
};
