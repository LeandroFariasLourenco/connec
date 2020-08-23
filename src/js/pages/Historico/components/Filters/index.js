import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { setFilter } from '@Store/ducks/history';

import FilterOptions from '@Resources/Filters';

import SearchBar from '../Searchbar';

import * as S from './styled';

const Filters = () => {
  const dispatch = useDispatch();
  const { selectedFilter, searchBar } = useSelector(state => state.history);

  return (
    <S.FilterOptionsWrapper>
      <S.Options>
        {FilterOptions.map(({
          title, id, searchTerm
        }) => (
          <S.Filter
            reset
            key={id}
            disabled={!!searchBar}
            className={cx({
              'is--active': selectedFilter === searchTerm &&
              !searchBar
            })}
            title={title}
            onClick={() => dispatch(setFilter(searchTerm))}
          >
            {title}
          </S.Filter>
        ))}
      </S.Options>
      <SearchBar />
    </S.FilterOptionsWrapper>
  );
};

export default Filters;
