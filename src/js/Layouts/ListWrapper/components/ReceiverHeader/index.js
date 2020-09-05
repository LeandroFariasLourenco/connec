import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import BellIcon from '@Icons/receptores/bell.svg';

import { setNavigation } from '@Store/ducks/navbar';
import * as S from './styled';

const ReceiverList = ({
  title,
  redirect
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { lastThreeMonthsCount } = useSelector(state => state.receiver);
  const receiverText = lastThreeMonthsCount >= 2
    ? `+ ${lastThreeMonthsCount} ${title}s`
    : `Nenhum ${title} nos últimos 3 meses`;

  const handleClick = () => {
    dispatch(setNavigation(`/${redirect}/cadastro`));
    history.push(`/${redirect}/cadastro`);
  };

  return (
    <S.HeaderWrapper
      reset
      title='Cadastrar'
      text={`+ ${title}`}
      onClick={handleClick}
    >
      <S.HeaderNotify>
        <S.HeaderText>
          <img src={BellIcon} />
          <span data-receiver={lastThreeMonthsCount}>
            {lastThreeMonthsCount}
          </span>
          {receiverText}
        </S.HeaderText>
      </S.HeaderNotify>
    </S.HeaderWrapper>
  );
};

ReceiverList.propTypes = {
  title: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired
};

export default ReceiverList;
