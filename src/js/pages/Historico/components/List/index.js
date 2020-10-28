import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import ListOptions from '@Resources/HistoryList';

import Loader from '@Components/Loader';

import * as S from './styled';

const List = ({
  loading,
  historyList
}) => {
  return (
    <S.ListWrapper>
      {loading && <Loader />}

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

List.propTypes = {
  loading: PropTypes.bool.isRequired,
  historyList: PropTypes.array.isRequired
};

export default List;
