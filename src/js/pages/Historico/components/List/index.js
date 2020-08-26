import React from 'react';
import { useSelector } from 'react-redux';

import Filters from '../Filters';
import SearchTerm from '../SearchTerm';

import ListOptions from '@Resources/HistoryList';
import History from '@Requests/History';

import * as S from './styled';

const List = () => {
  const { searchBar } = useSelector(state => state.history);

  return (
    <S.ListWrapper>
      <Filters />
      {!!searchBar && <SearchTerm />}

      <S.Table>
        <S.THead>
          <S.Row>
            {ListOptions.map(({ title, id }) => (
              <S.Head
                key={id}
              >
                {title}
              </S.Head>
            ))}
          </S.Row>
        </S.THead>

        <S.Body>
          {History.map(({
            id,
            method,
            date,
            origin,
            destiny,
            aproved
          }) => (
            <S.Row
              className='has--data'
              key={id}
            >
              <S.Data>{date}</S.Data>
              <S.Data>{method}</S.Data>
              <S.Data>{origin}</S.Data>
              <S.Data>{destiny}</S.Data>
              <S.Data>{aproved ? 'Aceito' : 'Negado'}</S.Data>
            </S.Row>
          ))}
        </S.Body>
      </S.Table>
    </S.ListWrapper>
  );
};

export default List;
