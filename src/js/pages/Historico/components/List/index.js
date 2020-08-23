import React from 'react';
import { useSelector } from 'react-redux';

import Filters from '../Filters';
import SearchTerm from '../SearchTerm';

import ListOptions from '@Resources/HistoryList';

import * as S from './styled';

const List = () => {
  const { searchBar } = useSelector(state => state.history);

  return (
    <S.ListWrapper>
      <Filters />
      {!!searchBar && <SearchTerm />}

      <S.Table>
        <S.Row>
          {ListOptions.map(({ title, id }) => (
            <S.Head
              key={id}
            >
              {title}
            </S.Head>
          ))}
        </S.Row>
      </S.Table>
    </S.ListWrapper>
  );
};

export default List;
