import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Header = ({
  transactionCount
}) => {
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

Header.propTypes = {
  transactionCount: PropTypes.number.isRequired
};

export default Header;
