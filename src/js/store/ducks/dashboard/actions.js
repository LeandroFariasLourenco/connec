import * as t from './types';

export const setMonth = (number, month) => ({
  type: t.SETCURRENTMONTH,
  payload: {
    number,
    month
  }
});

export const setLoading = (state) => ({
  type: t.SETLOADING,
  payload: state
});
