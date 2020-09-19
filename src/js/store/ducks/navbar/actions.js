import * as t from './types';

export const setNavigation = (option) => ({
  type: t.NAVIGATE,
  payload: option
});
