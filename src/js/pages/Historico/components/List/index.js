import React from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

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

      <S.Table
        cellSpacing={0}
        cellPadding={0}
      >
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
          {History.map((patient) => (
            <S.Row
              className='has--data'
              key={patient.id}
            >
              <S.Data>{patient.date}</S.Data>
              <S.Data>{patient.method}</S.Data>
              <S.Data>{patient.origin}</S.Data>
              <S.Data>{patient.destiny}</S.Data>
              <S.Data>
                <span
                  className={cx(
                    `aproved-${patient.aproved}`
                  )}
                >
                  {patient.aproved ? 'Aceito' : 'Negado'}
                </span>
              </S.Data>
            </S.Row>
          ))}
        </S.Body>
      </S.Table>
    </S.ListWrapper>
  );
};

export default List;
