import * as t from './types';

const INITIAL_STATE = {
  transactionCount: 0,
  searchBar: '',
  selectedFilter: 'all'
};

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.setTransactionsCount:
    return {
      ...state,
      transactionCount: payload
    };
  case t.setSearchBar:
    return {
      ...state,
      searchBar: payload
    };
  case t.setFilter:
    return {
      ...state,
      selectedFilter: payload
    };
  default:
    return state;
  }
};
