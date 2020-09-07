import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { pluralize } from '@Utils/General';

import BellIcon from '@Icons/receptores/bell.svg';

import * as S from './styled';

const ReceiverHeader = ({
  title,
  redirect,
  storeValue
}) => {
  const history = useHistory();
  const { lastThreeMonthsCount } = useSelector(state => state[`${storeValue}`]);
  const countingText = lastThreeMonthsCount
    ? `${pluralize(title, lastThreeMonthsCount)}`
    : `Nenhum ${title.toLowerCase()} nos últimos 3 meses`;

  const handleClick = () => {
    history.push(`/${redirect}/cadastro`);
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderRegister
        reset
        title='Cadastrar'
        text={`+ ${title}`}
        onClick={handleClick}
      />
      <S.HeaderNotify>
        <S.HeaderText>
          <img src={BellIcon} />
          <span data-receiver={lastThreeMonthsCount}>
            + {lastThreeMonthsCount}
          </span>
          {countingText}
        </S.HeaderText>
      </S.HeaderNotify>
    </S.HeaderWrapper>
  );
};

ReceiverHeader.propTypes = {
  title: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
  storeValue: PropTypes.string.isRequired
};

export default ReceiverHeader;
