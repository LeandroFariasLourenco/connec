import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';

const Header = () => {
  const { transactionCount } = useSelector(state => state.history);

  return (
    <S.Header>
      <S.Title>
        Histórico
      </S.Title>
      <S.HistoryCount>
        <span>
          {transactionCount}
        </span>
        Transferências
      </S.HistoryCount>
    </S.Header>
  );
};

export default Header;
