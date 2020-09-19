import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSearchBar } from '@Store/ducks/history';

import SearchIcon from '@Icons/history/search.svg';
import SubmitIcon from '@Icons/history/send.svg';

import * as S from './styled';

const Searchbar = () => {
  const { searchBar } = useSelector(state => state.history);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!search) return dispatch(setSearchBar(''));

    dispatch(setSearchBar(search));
  };

  useEffect(() => {
    if (!searchBar) setSearch('');
  }, [searchBar]);

  return (
    <S.SearchWrapper
      active
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <S.SearchInput
        reset
        type='text'
        name='search'
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        maxLength={30}
        placeholder='Digite o nome do hospital'
      >
      </S.SearchInput>

      <S.Submit
        reset
        title='Busca'
      >
        <img
          alt='Busca'
          title='Busca'
          src={
            !search
              ? SearchIcon
              : SubmitIcon}
        />
      </S.Submit>
    </S.SearchWrapper>
  );
};

export default Searchbar;
