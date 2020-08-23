import * as t from './types';

export const setSearchBar = (searchVal) => ({
  type: t.setSearchBar,
  payload: searchVal
});

export const setTransactionCount = (transactionCount) => ({
  type: t.setTransactionsCount,
  payload: transactionCount
});

export const setFilter = (search) => ({
  type: t.setFilter,
  payload: search
});
