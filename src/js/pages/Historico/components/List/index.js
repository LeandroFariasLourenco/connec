import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import Filters from '../Filters';
import SearchTerm from '../SearchTerm';

import ListOptions from '@Resources/HistoryList';
import { getMatches } from '@Requests/History';

import Loader from '@Components/Loader';

import * as S from './styled';

const List = () => {
  const { searchBar } = useSelector(state => state.history);
  const [loading, setLoading] = useState(true);
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    getMatches()
      .then((response) => {
        console.log(response.data);
        setHistoryList(response.data);
        setLoading(false);
        return response;
      })
      .catch((err) => {
        console.warn(err);
        setLoading(false);
        return err;
      });
  }, []);

  return (
    <S.ListWrapper>
      {loading && <Loader />}
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
          {historyList.map((patient, i) => (
            <S.Row
              className='has--data'
              key={i}
            >
              <S.Data>{patient.date}</S.Data>
              <S.Data>{patient.method}</S.Data>
              <S.Data>{patient.origin}</S.Data>
              <S.Data>{patient.destiny}</S.Data>
              <S.Data>
                <span
                  className={cx(
                    `aproved-${patient.status}`
                  )}
                >
                  {patient.status ? 'Aceito' : 'Negado'}
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
