import * as t from './types';

export const setMonth = (number, month) => ({
  type: t.SETCURRENTMONTH,
  payload: {
    number,
    month
  }
});
